<?php

require_once 'Budget.php';

class Category {
    private static $db = null;
    private static $max_sugerences = 3;

    /**
     * Initialize DB, compulsory to construct the object
     */
    public static function initDB(&$db) {
        self::$db = $db;
    }

    /**
     * Get a full list of categories stored in DB
     * for suggestion purpouses
     */
    public static function getCategoryList(){
        if (self::$db == null) {
            throw new RuntimeException('Please init DB before using this class');
        }
        $SQL = 
            "SELECT * FROM category";
        return self::$db -> query($SQL);    
    }

    /**
     * Suggest a category depending on the
     * description of a budget whose id is
     * passed as a parameter
     */
    public static function suggestCategory($id_budget) {
        $budget = new Budget($id_budget);
        $descripcion = $budget -> descripcion;

        $categories = self::getCategoryList();

        $max_coincidence = 0;
        $min_coincidence = 0;

        $suggested_categories = array();

        foreach($categories as $category) {
            $name = $category['name'];
            $percentage1 = 0;
            $percentage2 = 0;
            $final_percentage = 0;
            similar_text($descripcion, $name, $percentage1);
            similar_text($name, $descripcion, $percentage2);
            if ($percentage1 > $percentage2){
                $final_percentage = $percentage1;
            }
            else {
                $final_percentage = $percentage2;
            }
            $is_greater = self::percentage_greater_than_array($final_percentage, $suggested_categories);
            if ($is_greater == true && count($suggested_categories) >= self::$max_sugerences){
                self::removeLesserPercentage($suggested_categories);
            }
            if ($is_greater) {
                $suggested_categories[] = array(
                                            category => $category,
                                            coincidence => $final_percentage
                );
            }
        }
    }

    /**
     * Remove the category which coincidence is the lesser of all
     */
    private static function removeLesserPercentage($category_arr) {
        $lesser_coincidence = 0;
        $lesser_category = null;

        foreach ($category_arr as $category){
            $current_coincidence = $category['coincidence'];
            if ($lesser_category == null){
                $lesser_category = $category;
                $lesser_coincidence = $current_coincidence;
                continue;
            }
            else {
                if ($lesser_coincidence > $current_coincidence) {
                    $lesser_coincidence = $current_coincidence;
                    $lesser_category = $category;
                }
            }
        }

        if ($lesser_category != null) {
            $key = array_search($lesser_category, $category_arr);
            unset($category_arr[$key]);
        }
    }

    /**
     * Check if a calculated percentage coincidence is greater
     * that all the coincidences stored in the array
     */
    private static function percentage_greater_than_array($comparable_percentage, $category_percentage_array) {
        if (empty($category_percentage_array)) {
            return true;
        }
        foreach ($category_percentage_array as $category) {
            $current_coincidence = $category['coincidence'];
            if ($current_coincidence < $comparable_percentage) {
                return true;
            }
        }
        return false;
    }
}