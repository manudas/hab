<?php

class Estado extends SplEnum {
    const __default = self::Pendiente;
    
    const Pendiente = 1;
    const Publicada = 2;
    const Descartada = 3;

    public static function getName()
    {
        $class = new ReflectionClass(__CLASS__);
        $constants = array_flip($class->getConstants());

        return isset($constants[$value]) ? $constants[$value] : null;
    }

    public function getValue() {
        return (int) $this;
    }

}