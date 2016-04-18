<?php

namespace Bukoli\Model;

use Bukoli\Bukoli;

class IntegrationOrderSummaryInfo extends Model
{
    /**
     * @var string
     */
    protected $FirstName;

    /**
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
     * Son Kullanıcı Adres
     *
     * @var string
     */
    protected $Address;

    /**
     * Haritadan seçilmiş olan Bukoli noktasının kodu
     *
     * @var string
     */
    protected $SelectedJetonPointCode;

    /**
     * Size özel verdiğimiz şifre
     *
     * @var string
     */
    protected $CustomerServicePassword;

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
     * Haritadan seçilmiş olan Bukoli noktasının kodu
     *
     * @return string
     */
    public function getSelectedJetonPointCode()
    {
        return $this->SelectedJetonPointCode;
    }

    /**
     * Haritadan seçilmiş olan Bukoli noktasının kodu
     *
     * @param string $SelectedJetonPointCode
     */
    public function setSelectedJetonPointCode($SelectedJetonPointCode)
    {
        $this->SelectedJetonPointCode = $SelectedJetonPointCode;
    }

    /**
     * @inheritdoc
     * @return array
     */
    protected function getRequiredFields()
    {
        return [
            'FirstName',
            'LastName',
            'Email',
            'SelectedJetonPointCode',
        ];
    }

    /**
     * Size özel verdiğimiz şifre
     *
     * @return string
     * @throws \Bukoli\Exception\ServicePasswordException
     */
    protected function getCustomerServicePassword()
    {
        return Bukoli::getServicePassword();
    }

}