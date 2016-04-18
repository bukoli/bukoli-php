<?php

namespace Bukoli\Model;

use DateTime;

class IntegrationEndUserInfo extends Model
{
    /**
     * Son Kullanıcı Kodu – Websitesi tarafında unique kullanıcı id
     *
     * @var string
     */
    protected $EndUserCode;

    /**
     * Son Kullanıcı Adı
     *
     * @var string
     */
    protected $FirstName;

    /**
     * Son Kullanıcı Soyadı
     *
     * @var string
     */
    protected $LastName;

    /**
     * Son Kullanıcı Cep Telefonu
     *
     * @var string
     */
    protected $Phone;

    /**
     * Son Kullanıcı Email
     *
     * @var string
     */
    protected $Email;

    /**
     * Son Kullanıcı Tc Kimlik No
     *
     * @var string
     */
    protected $TcIdentityNo;

    /**
     * Son Kullanıcı Adres
     *
     * @var string
     */
    protected $Address;

    /**
     * Son Kullanıcı Doğum Tarihi
     *
     * @var DateTime
     */
    protected $BirthDate;

    /**
     * Son Kullanıcı Mesleği
     *
     * @var string
     */
    protected $Job;

    /**
     * Son Kullanıcı Medeni Hali
     *
     * @var int
     */
    protected $MartialStatus = MartialStatus::SECILMEDI;
    /**
     * @var int
     */
    protected $Sex = Sex::SECILMEDI;

    /**
     *  Son Kullanıcı Kodu – Websitesi tarafında unique kullanıcı id
     *
     * @return string
     */
    public function getEndUserCode()
    {
        return $this->EndUserCode;
    }

    /**
     * Son Kullanıcı Kodu – Websitesi tarafında unique kullanıcı id
     *
     * @param string $EndUserCode
     */
    public function setEndUserCode($EndUserCode)
    {
        $this->EndUserCode = $EndUserCode;
    }

    /**
     * Son Kullanıcı Adı
     *
     * @return string
     */
    public function getFirstName()
    {
        return $this->FirstName;
    }

    /**
     * Son Kullanıcı Adı
     *
     * @param string $FirstName
     */
    public function setFirstName($FirstName)
    {
        $this->FirstName = $FirstName;
    }

    /**
     * Son Kullanıcı Soyadı
     *
     * @return string
     */
    public function getLastName()
    {
        return $this->LastName;
    }

    /**
     * Son Kullanıcı Soyadı
     *
     * @param string $LastName
     */
    public function setLastName($LastName)
    {
        $this->LastName = $LastName;
    }

    /**
     * Son Kullanıcı Cep Telefonu
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->Phone;
    }

    /**
     * Son Kullanıcı Cep Telefonu
     *
     * @param string $Phone
     */
    public function setPhone($Phone)
    {
        $this->Phone = $Phone;
    }

    /**
     * Son Kullanıcı Email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->Email;
    }

    /**
     * Son Kullanıcı Email
     *
     * @param string $Email
     */
    public function setEmail($Email)
    {
        $this->Email = $Email;
    }

    /**
     * Son Kullanıcı Tc Kimlik No
     *
     * @return string
     */
    public function getTcIdentityNo()
    {
        return $this->TcIdentityNo;
    }

    /**
     * Son Kullanıcı Tc Kimlik No
     *
     * @param string $TcIdentityNo
     */
    public function setTcIdentityNo($TcIdentityNo)
    {
        $this->TcIdentityNo = $TcIdentityNo;
    }

    /**
     * Son Kullanıcı Adres
     *
     * @return string
     */
    public function getAddress()
    {
        return $this->Address;
    }

    /**
     * Son Kullanıcı Adres
     *
     * @param string $Address
     */
    public function setAddress($Address)
    {
        $this->Address = $Address;
    }

    /**
     * Son Kullanıcı Doğum Tarihi
     *
     * @return DateTime
     */
    public function getBirthDate()
    {
        return $this->BirthDate;
    }

    /**
     * Son Kullanıcı Doğum Tarihi
     *
     * @param DateTime $BirthDate
     */
    public function setBirthDate(DateTime $BirthDate)
    {
        $this->BirthDate = $BirthDate;
    }

    /**
     * Son Kullanıcı Mesleği
     *
     * @return string
     */
    public function getJob()
    {
        return $this->Job;
    }

    /**
     * Son Kullanıcı Mesleği
     *
     * @param string $Job
     */
    public function setJob($Job)
    {
        $this->Job = $Job;
    }

    /**
     * Son Kullanıcı Medeni Hali
     *
     * @return int
     */
    public function getMartialStatus()
    {
        return $this->MartialStatus;
    }

    /**
     * Son Kullanıcı Medeni Hali
     *
     * @param int $MartialStatus
     */
    public function setMartialStatus($MartialStatus)
    {
        $this->MartialStatus = $MartialStatus;
    }

    /**
     * Son Kullanıcı Cinsiyeti
     *
     * @return int
     */
    public function getSex()
    {
        return $this->Sex;
    }

    /**
     * Son Kullanıcı Cinsiyeti
     *
     * @param int $Sex
     */
    public function setSex($Sex)
    {
        $this->Sex = $Sex;
    }

    /**
     * @inheritdoc
     * @return array
     */
    protected function getRequiredFields()
    {
        return [
            'EndUserCode',
            'FirstName',
            'LastName',
            'Email',
        ];
    }
}