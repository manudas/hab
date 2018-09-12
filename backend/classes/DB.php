<?php

class DB {

    private $password = '';
    private $user = '';
    private $host = '';
    private $database = '';
    public $insert_id = null;

    /**
     * Builds up the object
     */
    public function __construct($host = null, $user = null, $password = null, $database = null) {
        $this -> host = !empty($host) ? $host : 'localhost';
        $this -> user = !empty($user) ? $user : '';
        $this -> password = !empty($password) ? $password : '';
        $this -> database = !empty($database) ? $database : 'test';
        
        $this -> initConnection();
    }

    /**
     * Inits DB mysqli connection / driver
     */
    private function initConnection() {
        $this -> mysqli = new mysqli($this -> host, $this -> user, $this -> password, $this -> database);
        if ($this -> mysqli -> connect_errno) {
            echo "Failed to connect to MySQL: (" . $this -> mysqli -> connect_errno . ") " . $this -> mysqli -> connect_error;
        }
    }

    /**
     * Gets the associative array result from a DB query
     */
    public function queryArrayAssoc($SQL) {
        $result = array();
        $res = $this -> query($SQL);
        while($row = $res -> fetch_assoc()){
            $result[] = $row;
        }
        $res -> free();
        return $result;
    }

    /**
     * Returns only the first associative result
     */
    public function queryFirstAssocResult($SQL){
        $partial_result = $this -> queryArrayAssoc($SQL);
        if (count($partial_result) > 0) {
            return $partial_result[0];
        }
        else {
            return $partial_result;
        }

    }

    /**
     * Gets the resource of a query to DB
     */
    public function query($SQL) { 
        // necesario satinizar o asegurar los campos
        // por seguridad. La mejor opcion: parametized queries
        $res = $this -> mysqli -> query($SQL);
        // If it is an insert, it will save the last insert id
        $this -> insert_id = $this -> mysqli -> insert_id;
        return $res;
    }

}