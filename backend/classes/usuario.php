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
     * Construct the object and saves or update it in DB
     */
    public function __constructor($email, $direccion, $telefono, $nombre) {

        if (self::$db == null) {
            throw new RuntimeException('Please init DB before using this class');
        }

        $this -> email = $email;
        $this -> direccion = $direccion;
        $this -> telefono = $telefono;
        $this -> nombre = $nombre;

        $this -> guardar();
    }

    /**
     * Saves or updates the object in DB
     */
    private function guardar(){
        $SQL = 
            "INSERT INTO table (email, direccion, telefono, nombre) 
                VALUES('{$this -> email}', '{$this -> direccion}', {$this -> telefono}, '{$this -> nombre}') 
            ON DUPLICATE KEY 
                UPDATE    
                    direccion='{$this -> direccion}',
                    telefono={$this -> telefono}";

        self::$db -> query($SQL);
    }
    
}