<?php

$http_origin = $_SERVER['HTTP_ORIGIN'];
if (strpos($http_origin, 'localhost') !== false)
{  
    header("Access-Control-Allow-Origin: $http_origin");
    // error_log ("Access-Control-Allow-Origin: $http_origin");
}

header("Content-type: application/json; charset=utf-8");

require_once '../classes/API.php';

// API REST: POST (crear), GET (leer y consultar), PUT (editar)

$method = $_SERVER['REQUEST_METHOD'];
$path_info = isset($_SERVER['PATH_INFO']) ? substr($_SERVER['PATH_INFO'], 1) : '';
$url_params = explode("/", $path_info);

$_PUT = null;
if ('PUT' === $method) {
    parse_str(file_get_contents('php://input'), $_PUT);
}

API::initDB();

switch ($method) {
  case 'PUT':
    $result = API::put($url_params, $_PUT);  
    break;
  case 'POST':
    $result = API::post($url_params, $_POST);  
    break;
  case 'GET':
    $result = API::get($url_params, $_GET);  
    break;
  default:
    $result = API::handle_error($url_params);  
    break;
}

echo json_encode($result);