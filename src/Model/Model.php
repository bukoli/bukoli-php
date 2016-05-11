<?php

namespace Bukoli\Model;

use Bukoli\Exception\RequiredFieldException;
use DateTime;

class Model
{
    /**
     * Checks required fields
     *
     * @throws RequiredFieldException
     */
    final protected function checkRequiredFields()
    {
        foreach ($this->getRequiredFields() as $requiredField) {
            $value = $this->getAttribute($requiredField);
            if (empty($value)) {
                throw new RequiredFieldException($requiredField);
            }
        }
    }

    /**
     * Required fields
     *
     * @return array|string[]
     */
    protected function getRequiredFields()
    {
        return [];
    }

    /**
     * Converts Model to array for Soap Request
     *
     * @return array
     */
    final public function toArray()
    {
        $this->checkRequiredFields();

        $fields = get_object_vars($this);

        $array = [];
        foreach ($fields as $field => $value) {
            $array[$field] = $this->transformToArray($this->getAttribute($field));
        }

        return $array;
    }

    final private function transformToArray($value)
    {
        if (is_array($value)) {
            $array = [];
            foreach ($value as $element) {
                $array[] = $this->transformToArray($element);
            }

            return $array;
        } elseif ($value instanceof Model) {
            return $value->toArray();
        } elseif ($value instanceof DateTime) {
            return $value->format('Y-m-d\TH:i:s');
        } else {
            return $value;
        }
    }

    /**
     * Gets Parameter
     *
     * @param $attribute
     *
     * @return mixed
     */
    final protected function getAttribute($attribute)
    {
        return call_user_func([$this, 'get' . $attribute], []) ?: '';
    }
}