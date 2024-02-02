<?php
class Clients extends Database
{
    private $where = [];

    public function where($conditions)
    {
        $this->where = $conditions;
        return $this;
    }

    public function get()
    {
        $table = 'clients';
        $conditions = $this->conditions();
        $query = "SELECT * FROM $table $conditions";
        $result = $this->fetch_all($query);
        return $result;
    }


    private function conditions()
    {
        if (empty($this->where)) {
            return '';
        }

        $conditions = 'WHERE ';
        $conditionsArray = [];

        foreach ($this->where as $key => $value) {
            $conditionsArray[] = "$key = '$value'";
        }

        $conditions .= implode(' AND ', $conditionsArray);

        return $conditions;
    }
}
