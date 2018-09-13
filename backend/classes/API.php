<?php

require_once 'Category.php';
require_once 'Usuario.php';
require_once 'Budget.php';
require_once 'Estado.php';

require_once 'DB.php';

class API {

    private static $DB = null;

    /**
     * Inits DB and associate it to all
     * object which depends on it
     */
    public static function initDB() {
        self::$DB = new DB(null, 'root', '77346829z', 'habitissimo');

        Budget::initDB(self::$DB);
        Category::initDB(self::$DB);
        Usuario::initDB(self::$DB);
    }

    /**
     * Handles the invalid verb request
     */
    public static function handle_error(){
        return array(
            'error' => 'No valid HTTP verb used'
        );
    }

    /**
     * Microservice: Saves a new BUDGET
     */
    public static function post($url_params, $post_params){

        // published budget check
        if (!empty($post_params['estado'])) {
            $new_state = new Estado(intval($post_params['estado']));
            $published_state = new Estado(Estado::Publicada);
            if($new_state -> getValue() == $published_state -> getValue()) {
                /* If we have to insert a new published budget, it must
                 * contain a title and a category. Otherwise the budget
                 * will only be allowed to be inserted if it's not published
                 */
                if (empty($post_params['titulo']) || empty($post_params['categoria'])) {
                    $errores = array();
                    if (empty($post_params['titulo'])){
                        $errores[] = 'titulo';
                    }
                    else {
                        $errores[] = 'categoria';
                    }
                    return array(
                        'correcto' => false,
                        'error' => 'Budget must contain title and category. The following field(s) is(are) not present: ' . implode(', ', $errores)
                    );
                }

            }
        }
        // error_log(json_encode($post_params));
        $presupuesto = new Budget($post_params);

        $done = $presupuesto -> guardar();
        return array(
            'correcto' => $done != false
        );
    }

    /**
     * Microservice: Modifies a BUDGET
     */
    public static function put($url_params, $put_params){

        // id check
        if (empty($put_params['id'])){
            return array(
                'correcto' => false,
                'error' => 'No budged id provided, use post verb to insert a new budget instead'
            );
        }

        $old_budget = new Budget(array('id' => $put_params['id']));

        // discarded budget check
        if (!empty($put_params['estado'])) {
            $new_state = new Estado(intval($put_params['estado']));
            $discarded_state = new Estado(Estado::Descartada);
            if ($new_state -> getValue() == $discarded_state -> getValue()) {
                if ($old_budget -> estado ->getValue() == $discarded_state -> getValue()) {
                    /*
                     * The budget was already discarded
                     */
                    return array(
                        'correcto' => false,
                        'error' => 'Budget was already discarded. You can not discard a discarded budget'
                    );
                }
            }
        }

        // non pending budget check
        if ($old_budget -> estado -> getValue() != new Estado(Estado::Pendiente)) {
            return array(
                'correcto' => false,
                'error' => 'Budget is not pending, you are not allowed to modify a non pending budget'
            );
        }

        // published budget check
        if (!empty($put_params['estado'])) {
            $new_state = new Estado(intval($put_params['estado']));
            $published_state = new Estado(Estado::Publicada);
            if($new_state -> getValue() == $published_state -> getValue()) {
                /* We check if the old value for category / title was empty
                 * and in such case, that the new value passed is not empty.
                 * Only if we have a value for both, we allow to update to
                 * "Published"
                 */
                if (
                !((!empty($old_budget -> titulo) || !empty($put_params['titulo']))
                    && (!empty($old_budget -> categoria) || !empty($put_params['categoria'])))
                ) {
                    $errores = array();
                    if (empty($old_budget -> titulo) || empty($put_params['titulo'])){
                        $errores[] = 'titulo';
                    }
                    else {
                        $errores[] = 'categoria';
                    }
                    return array(
                        'correcto' => false,
                        'error' => 'Budget must contain title and category. The following field(s) is(are) not present: ' . implode(', ', $errores)
                    );
                }
            }
        }

        $presupuesto = new Budget($put_params);

        $done = $presupuesto -> guardar();
        return array(
            'correcto' => $done != false
        );
    }

    /**
     * Microservice: Gets or list info for a Budget
     */
    public static function get($url_params, $get_params){

        $result = null;
        $errores = array();
        if (count($url_params) > 0) { // min action must be sent
            $action = $url_params[0];
            switch ($action) {
                case 'budget':
                    $user = isset($url_params[1]) ? $url_params[1] : null;
                    $page = isset($get_params['page']) ? $get_params['page'] : 0;
                    $limit = isset($get_params['limit']) ? $get_params['limit'] : 10;
                    $result = Budget::getList($user, $page, $limit);
                    break;
                case 'suggestCategory':
                    $id_budget = isset($url_params[1]) ? $url_params[1] : null;
                    if (empty($id_budget)) {
                        $errores[] = 'id_budget';
                        break;
                    }
                    $result = Category::suggestCategory($id_budget);
                    break;
                case 'validateemail':
                    $email = isset($url_params[1]) ? $url_params[1] : null;
                    $result = Usuario ::validateEmail($email);
                    if (!$result) {
                        $errores[] = 'email';
                    }
                    break;
            }
        }
        if (!empty($errores)) {
            $error = "The request wasn't finished properly because of the invalidity or lack of the following parameters: " . implode(', ', $errores);
        }
        else {
            $error = null;
        }
        return array(
            'correcto' => !empty($result),
            'datos' => $result,
            'error' => $error
        );
    }
}