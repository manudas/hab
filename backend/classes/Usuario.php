<?php
class Usuario {
    private static $db = null;

    /**
     * Initialize DB, compulsory to construct the object
     */
    public static function initDB($db) {
        self::$db = $db;
    }

    /**
     * Construct the object and saves or update it in DB.
     * In case it receives only an argument, it treats it
     * as an id and tries to retrieve such object from DB
     */
    public function __constructor($params){
       // $email, $direccion, $telefono, $nombre) {
    
        if (self::$db == null) {
            throw new RuntimeException('Please init DB before using this class');
        }

        extract($params);
        if (count($params) == 1 && !empty($email)) {
            // constructor was provided with the id of the object to retrieve from DB
            $new_params = $this -> load_array_from_DB($id);
            extract($new_params);
        }
        else {
            $errores = array();                                            
            if (empty($email) || (strpos($email, 'hotmail') !== false) 
                    || empty($telefono) || NAN($telefono) 
                    || empty($nombre)) {

                if(empty($email) || (strpos($email, 'hotmail') !== false)){
                    $errores[] = 'email';
                }
                if(empty($telefono) || NAN($telefono)){
                    $errores[] = 'telefono';
                }
                if(empty($nombre)){
                    $errores[] = 'nombre';
                }
                if(empty($direccion)){
                    $errores[] = 'dirección';
                }
            }
            if (!empty($errores)) {
                $error_log = "Error, la validación de usuario ha fallado en los siguientes campos: ". implode(', ', $errores);
                throw new RuntimeException($error_log);
            }
        }

        $this -> email = $email;
        $this -> direccion = $direccion;
        $this -> telefono = $telefono;
        $this -> nombre = $nombre;

        if (count($params) != 1) {
            $this -> guardar();
        }
    }

    private function load_array_from_DB($email) {
        $SQL = "SELECT * FROM usuario WHERE email = $email";
        return self::$db -> query($SQL);
    } 

    /**
     * Saves or updates the object in DB
     */
    private function guardar(){
        $SQL = 
            "INSERT INTO usuario (email, direccion, telefono, nombre) 
                VALUES('{$this -> email}', '{$this -> direccion}', {$this -> telefono}, '{$this -> nombre}') 
            ON DUPLICATE KEY 
                UPDATE    
                    direccion='{$this -> direccion}',
                    telefono={$this -> telefono}";

        self::$db -> query($SQL);
    }

}