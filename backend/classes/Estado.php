<?php

class Estado {
    const __default = self::Pendiente;

    const Pendiente = 1;
    const Publicada = 2;
    const Descartada = 3;

    /**
     * Creates a new enum value
     *
     * @param mixed $value
     *
     * @throws UnexpectedValueException if incompatible type is given.
     */
    public function __construct($value){
        if (!$this->isValid($value)) {
            throw new UnexpectedValueException("Value '$value' is not part of the enum " . get_called_class());
        }
        $this->value = $value;
    }

    /**
     * Check if is valid enum value
     *
     * @param $value
     *
     * @return bool
     */
    public static function isValid($value)
    {
        return in_array($value, static::toArray(), true);
    }

    /**
     * Returns all possible values as an array
     *
     * @return array Constant name in key, constant value in value
     */
    public static function toArray()
    {
        $class = get_called_class();
        if (!isset(static::$cache[$class])) {
            $reflection            = new ReflectionClass($class);
            static::$cache[$class] = $reflection->getConstants();
        }
        return static::$cache[$class];
    }

    /**
     * Return key for value
     *
     * @param $value
     *
     * @return mixed
     */
    public static function search($value)
    {
        return array_search($value, static::toArray(), true);
    }

    /**
     * Returns the key for the current object
     */
    public function getName()
    {
        return sefl::search($this -> value);
    }

    /**
     * Returns the value for the current object
     */
    public function getValue() {
        return (int) $this -> value;
    }
}