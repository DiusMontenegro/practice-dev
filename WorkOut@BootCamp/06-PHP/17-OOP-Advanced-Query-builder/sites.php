<?php
class Sites extends Database
{
    public $count = "COUNT(*)";
    private $select = [];
    private $group_by = '';
    private $having = '';

    public function select($column_names)
    {
        $this->select = $column_names;
        return $this;
    }

    public function group_by($column)
    {
        $this->group_by = $column;
        return $this;
    }

    public function having($column, $operator, $value)
    {
        $this->having = "HAVING $column $operator $value";
        return $this;
    }

    public function get()
    {
        $table = 'sites';
        $select = implode(", ", $this->select);
        $query = "SELECT $select FROM $table";

        if (!empty($this->group_by)) {
            $query .= " GROUP BY $this->group_by";
        }

        if (!empty($this->having)) {
            $query .= " $this->having";
        }

        $result = $this->fetch_all($query);
        return $result;
    }
}


