<?php

require_once 'Estado.php';
require_once 'Usuario.php';

class Budget {

    public $id = null;
    private static $db = null;

    /**
     * Initialize DB, compulsory to construct the object
     */
    public static function initDB(&$db) {
        self::$db = $db;
    }

    public static function getList($user = null, $page = 0, $limit = 10){

        if (self::$db == null) {
            throw new RuntimeException('Please init DB before using this class');
        }

        $SQL =
            "SELECT * from budget as b
             JOIN usuario as u
                ON b.usuario = u.email";
        $SQL .= !empty($user) ? " WHERE u.email = $user" : "";
        $SQL .= ' LIMIT ' . ($page*$limit) . ', ' . $limit;

        return self::$db -> queryArrayAssoc($SQL);
    }

    /* we pass an array with parameters, as we need to construct
     * either a new object or to get a db stored object by its id
     */
    public function __construct($params){
        // error_log(json_encode($params));
        if (self::$db == null) {
            throw new RuntimeException('Please init DB before using this class');
        }

        extract($params); // extract all the vars in params array as independent vars
        if (count($params) == 1 && !empty($id)) {
            // constructor was provided with the id of the object to retrieve from DB
            $new_params = $this -> load_array_from_DB($id);
            extract($new_params);
        }
        else {
            $errores = array();
            if (empty($descripcion)
                || empty($email) || (strpos($email, 'hotmail') !== false)
                || empty($telefono) || is_nan(intval($telefono))
                || empty($nombre)) {

                if(empty($descripcion)){
                    $errores[] = 'descripcion';
                }
                if(empty($email) || (strpos($email, 'hotmail') !== false)){
                    $errores[] = 'email';
                }
                if(empty($telefono) || is_nan(intval($telefono))){
                    $errores[] = 'telefono';
                }
                if(empty($nombre)){
                    $errores[] = 'nombre';
                }
                if(empty($direccion)){
                    $errores[] = 'direccion';
                }
            }
        }
        if (!empty($errores)) {
            $error_log = "Error, la validación de presupuesto ha fallado en los siguientes campos: ". implode(', ', $errores);
            throw new RuntimeException($error_log);
        }

        $this -> titulo = isset($titulo) ? $titulo : null; // not compulsory
        $this -> descripcion = $descripcion;
        // $this -> estado = $estado;

        $estado = empty($estado) ? new Estado(Estado::Pendiente) : $estado;

        $this -> estado = $estado;
        if (count($params) == 1) {
            $this -> usuario = new Usuario(array('email' => $email));
        }
        else if (!empty($email)){ // if we don't want to edit the user we may leave $email empty
            $this -> usuario = new Usuario(
                array(
                    'email' => $email,
                    'direccion' => $direccion,
                    'telefono' => $telefono,
                    'nombre' => $nombre
                )
            );
        }
        $this -> categoria = isset($categoria) ? $categoria : null; // not compulsory
    }

    /**
     * Auxiliar function to get the properties from DB
     */
    private function load_array_from_DB($id_budget) {
        $SQL = "SELECT * FROM budget WHERE id = $id_budget";
        return self::$db -> queryFirstAssocResult($SQL);
    }

    /**
     * Saves or updates the object in DB
     */
    public function guardar(){
        if ($this -> id == null) {
            $SQL =
                "INSERT INTO budget (titulo, descripcion, estado, usuario, categoria) 
                    VALUES('{$this -> titulo}', '{$this -> descripcion}', {$this -> estado -> getValue()}, '{$this -> usuario -> email}', '{$this -> categoria}') ";
        }
        else {
            $SQL = "
                UPDATE budget";
            /* What to update? Although some fields are mandatory, they may not be sent
             * if they are not needed to be updated, so we will check field by field
             * before inserting them in the SQL statement
             */
            if (!empty($this -> titulo)) {
                $SQL .= "titulo='{$this -> titulo}',";
            }
            if (!empty($this -> descripcion)) {
                $SQL .= "descripcion='{$this -> descripcion}',";
            }
            if (!empty($this -> estado)) {
                $SQL .= "estado={$this -> estado},";
            }
            if (!empty($this -> categoria)) {
                $SQL .= "categoria={$this -> categoria},";
            }
            if (!empty($this -> usuario -> email)) { // no me convence permitir cambiar email
                $SQL .= "usuario='{$this -> usuario -> email}'";
            }
            $SQL = trim($SQL);
            if (substr($SQL, -1) == ',') { // if the last character of the string is a comma, we remove it
                $SQL = substr($SQL, 0, -1);
            }
            $SQL .=
                " WHERE id = '{$this -> id }'";
        }
        $resultado = self::$db -> query($SQL);
        if ($resultado != false && $this -> id == null){
            $this -> id = self::$db -> insert_id;
        }
        return $resultado;
    }
}