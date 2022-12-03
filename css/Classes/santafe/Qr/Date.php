<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: begdocs-master/codigo_ejemplo/qr/qr.proto

namespace Qr;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>qr.Date</code>
 */
class Date extends \Google\Protobuf\Internal\Message
{
    /**
     * Año
     *
     * Generated from protobuf field <code>int32 year = 1;</code>
     */
    protected $year = 0;
    /**
     * Mes del año de 1 a 12
     *
     * Generated from protobuf field <code>int32 month = 2;</code>
     */
    protected $month = 0;
    /**
     * Dia del mes de 1 a 31
     *
     * Generated from protobuf field <code>int32 day = 3;</code>
     */
    protected $day = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $year
     *           Año
     *     @type int $month
     *           Mes del año de 1 a 12
     *     @type int $day
     *           Dia del mes de 1 a 31
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\BegdocsMaster\CodigoEjemplo\Qr\Qr::initOnce();
        parent::__construct($data);
    }

    /**
     * Año
     *
     * Generated from protobuf field <code>int32 year = 1;</code>
     * @return int
     */
    public function getYear()
    {
        return $this->year;
    }

    /**
     * Año
     *
     * Generated from protobuf field <code>int32 year = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setYear($var)
    {
        GPBUtil::checkInt32($var);
        $this->year = $var;

        return $this;
    }

    /**
     * Mes del año de 1 a 12
     *
     * Generated from protobuf field <code>int32 month = 2;</code>
     * @return int
     */
    public function getMonth()
    {
        return $this->month;
    }

    /**
     * Mes del año de 1 a 12
     *
     * Generated from protobuf field <code>int32 month = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setMonth($var)
    {
        GPBUtil::checkInt32($var);
        $this->month = $var;

        return $this;
    }

    /**
     * Dia del mes de 1 a 31
     *
     * Generated from protobuf field <code>int32 day = 3;</code>
     * @return int
     */
    public function getDay()
    {
        return $this->day;
    }

    /**
     * Dia del mes de 1 a 31
     *
     * Generated from protobuf field <code>int32 day = 3;</code>
     * @param int $var
     * @return $this
     */
    public function setDay($var)
    {
        GPBUtil::checkInt32($var);
        $this->day = $var;

        return $this;
    }

}
