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


$_PUT = array();
parse_raw_http_request($_PUT);
if (empty($_PUT)) {
    parse_str(file_get_contents('php://input'), $_PUT);
}


API::initDB();
try {
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
}
catch (Exception $e) {
    $result = array(
        'correcto' => false,
        'error' => $e -> getMessage()
    );
}
echo json_encode($result);


function parse_raw_http_request(array &$a_data)
{
    // read incoming data
    $input = file_get_contents('php://input');

    // grab multipart boundary from content type header
    preg_match('/boundary=(.*)$/', $_SERVER['CONTENT_TYPE'], $matches);
    $boundary = $matches[1];

    // split content by boundary and get rid of last -- element
    $a_blocks = preg_split("/-+$boundary/", $input);
    array_pop($a_blocks);

    // loop data blocks
    foreach ($a_blocks as $id => $block)
    {
        if (empty($block))
            continue;

        // you'll have to var_dump $block to understand this and maybe replace \n or \r with a visibile char

        // parse uploaded files
        if (strpos($block, 'application/octet-stream') !== FALSE)
        {
            // match "name", then everything after "stream" (optional) except for prepending newlines
            preg_match("/name=\"([^\"]*)\".*stream[\n|\r]+([^\n\r].*)?$/s", $block, $matches);
        }
        // parse all other fields
        else
        {
            // match "name" and optional value in between newline sequences
            preg_match('/name=\"([^\"]*)\"[\n|\r]+([^\n\r].*)?\r$/s', $block, $matches);
        }
        $a_data[$matches[1]] = $matches[2];
    }
}