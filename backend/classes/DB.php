<?php

class DB {
    
    private $password = '';
    private $user = '';
    private $host = '';
    private $database = '';

    /**
     * Builds up the object
     */
    function __constructor($host = 'localhost', $user = '', $password = '', $database = 'test') {
        $this -> host = $host;
        $this -> user = $user;
        $this -> password = $password;
        $this -> database = $database;
        
        $this -> initConnection();
    }

    /**
     * Inits DB mysqli connection / driver
     */
    private function initConnection() {
        $mysqli = new mysqli($this -> host, $this -> user, $this -> password, $this -> database);
        if ($mysqli->connect_errno) {
            echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
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
        $res = $mysqli->query($SQL);
        return $res;
    }

}