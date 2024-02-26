<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');
/**
 * Programmer : Dius Montenegro
 * DATE: 02/24/2024
 *
 * DOCU: Product Model responsible for retrieving and filtering data from the database.
*/
class Product extends CI_Model {

    // function for getting products with the formatted date
    public function get_all_products ()
    {
        return $this->db->query(
            "SELECT id, name, inventory, price, DATE_FORMAT(created_at, '%Y-%m-%e') AS created_at
            FROM products"
        )->result_array();
    }

    // function for filtering products with the formatted date
       public function search_filter()
    {
        $data = $this->security->xss_clean($this->input->get());

        $base_query = "SELECT id, name, inventory, price, DATE_FORMAT(created_at, '%Y-%m-%e') AS created_at FROM products";
        $sql = $base_query;
        $order = "";

        if ($data['price_order'] === "low_to_high") {
            $order = $this->ASC();
        } elseif ($data['price_order'] === "high_to_low") {
            $order = $this->DESC();
        }

        if ($data['name']) {
            $sql .= " WHERE name LIKE '%{$data['name']}%'";
        }

        if ($data['min']) {
            if ($sql === $base_query) {
                $sql .= " WHERE price >= {$data['min']}";
            } else {
                $sql .= " AND price >= {$data['min']}";
            }
        }

        if ($data['max']) {
            if ($sql === $base_query) {
                $sql .= " WHERE price <= {$data['max']}";
            } else {
                $sql .= " AND price <= {$data['max']}";
            }
        }

        if ($data['min'] && $data['max']) {
            if ($sql === $base_query) {
                $sql .= " WHERE price BETWEEN {$data['min']} AND {$data['max']}";
            } else {
                $sql .= " AND price BETWEEN {$data['min']} AND {$data['max']}";
            }
        }

        $sql .= " " . $order;

        return $this->db->query($sql)->result_array();
    }

    // function for returning a piece of query "Order By" ASC
    public function ASC()
    {
        return "ORDER BY price";
    }

    // function for returning a piece of query "Order By" DESC
    public function DESC()
    {
        return "ORDER BY price DESC";
    }

    // function for returning a piece of query where it passes a condition for the name
    public function filter_name($name)
    {
        return "WHERE name LIKE '%{$name}%'";
    }
}
