<?php
class Database
{
    var $connection;

    public function __construct()
    {
        if (!defined('DB_HOST')) {
            define('DB_HOST', 'localhost');
        }

        if (!defined('DB_USER')) {
            define('DB_USER', 'root');
        }

        if (!defined('DB_PASS')) {
            define('DB_PASS', '[-otinnidius123-]');
        }
    }

    public function connect($db_name)
    {
        $this->connection = new mysqli(DB_HOST, DB_USER, DB_PASS, $db_name);
        if ($this->connection->connect_errno) {
            die("Failed to connect to MySQL: (" . $this->connection->connect_errno . ") " . $this->connection->connect_error);
        }
    }

    public function fetch_all($query)
    {
      $data = array();
      $result = $this->connection->query($query);
      while($row = mysqli_fetch_assoc($result))
      {
        $data[] = $row;
      }
      return $data;
    }

    public function fetch_record($query)
    {
      $result = $this->connection->query($query);
      return mysqli_fetch_assoc($result);
    }

    public function run_mysql_query($query)
    {
      $result = $this->connection->query($query);
      return $this->connection->insert_id;
    }

    function escape_this_string($string)
    {
        return $this->connection->real_escape_string($string);
    }
}
