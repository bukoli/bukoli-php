
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Bukoli" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bukoli.html">Bukoli</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Bukoli_Exception" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bukoli/Exception.html">Exception</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Bukoli_Exception_Exception" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Exception/Exception.html">Exception</a>                    </div>                </li>                            <li data-name="class:Bukoli_Exception_RequiredFieldException" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Exception/RequiredFieldException.html">RequiredFieldException</a>                    </div>                </li>                            <li data-name="class:Bukoli_Exception_ServicePasswordException" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Exception/ServicePasswordException.html">ServicePasswordException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Bukoli_Model" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bukoli/Model.html">Model</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Bukoli_Model_Response" class="opened">                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bukoli/Model/Response.html">Response</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Bukoli_Model_Response_IntegrationResultInfo" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Bukoli/Model/Response/IntegrationResultInfo.html">IntegrationResultInfo</a>                    </div>                </li>                            <li data-name="class:Bukoli_Model_Response_JetonOrderStatusDetailInfo" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Bukoli/Model/Response/JetonOrderStatusDetailInfo.html">JetonOrderStatusDetailInfo</a>                    </div>                </li>                            <li data-name="class:Bukoli_Model_Response_ResultInfo" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Bukoli/Model/Response/ResultInfo.html">ResultInfo</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Bukoli_Model_IntegrationEndUserInfo" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Model/IntegrationEndUserInfo.html">IntegrationEndUserInfo</a>                    </div>                </li>                            <li data-name="class:Bukoli_Model_IntegrationOrderDetailInfo" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Model/IntegrationOrderDetailInfo.html">IntegrationOrderDetailInfo</a>                    </div>                </li>                            <li data-name="class:Bukoli_Model_IntegrationOrderInfo" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Model/IntegrationOrderInfo.html">IntegrationOrderInfo</a>                    </div>                </li>                            <li data-name="class:Bukoli_Model_IntegrationOrderSummaryInfo" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Model/IntegrationOrderSummaryInfo.html">IntegrationOrderSummaryInfo</a>                    </div>                </li>                            <li data-name="class:Bukoli_Model_MartialStatus" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Model/MartialStatus.html">MartialStatus</a>                    </div>                </li>                            <li data-name="class:Bukoli_Model_Model" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Model/Model.html">Model</a>                    </div>                </li>                            <li data-name="class:Bukoli_Model_Sex" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Model/Sex.html">Sex</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Bukoli_Request" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bukoli/Request.html">Request</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Bukoli_Request_JetonPointStateGet" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Request/JetonPointStateGet.html">JetonPointStateGet</a>                    </div>                </li>                            <li data-name="class:Bukoli_Request_OrderInsert" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Request/OrderInsert.html">OrderInsert</a>                    </div>                </li>                            <li data-name="class:Bukoli_Request_OrderStatusDetailGet" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Request/OrderStatusDetailGet.html">OrderStatusDetailGet</a>                    </div>                </li>                            <li data-name="class:Bukoli_Request_OrderSummaryInsert" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Request/OrderSummaryInsert.html">OrderSummaryInsert</a>                    </div>                </li>                            <li data-name="class:Bukoli_Request_Request" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Request/Request.html">Request</a>                    </div>                </li>                            <li data-name="class:Bukoli_Request_RequestInterface" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Request/RequestInterface.html">RequestInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Bukoli_Response" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bukoli/Response.html">Response</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Bukoli_Response_JetonPointStateGetResponse" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Response/JetonPointStateGetResponse.html">JetonPointStateGetResponse</a>                    </div>                </li>                            <li data-name="class:Bukoli_Response_OrderInsertResponse" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Response/OrderInsertResponse.html">OrderInsertResponse</a>                    </div>                </li>                            <li data-name="class:Bukoli_Response_OrderStatusDetailGetResponse" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Response/OrderStatusDetailGetResponse.html">OrderStatusDetailGetResponse</a>                    </div>                </li>                            <li data-name="class:Bukoli_Response_OrderSummaryInsertResponse" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Response/OrderSummaryInsertResponse.html">OrderSummaryInsertResponse</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Bukoli_Soap" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Bukoli/Soap.html">Soap</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Bukoli_Soap_ClientInterface" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Soap/ClientInterface.html">ClientInterface</a>                    </div>                </li>                            <li data-name="class:Bukoli_Soap_SoapClient" class="opened">                    <div style="padding-left:44px" class="hd leaf">                        <a href="Bukoli/Soap/SoapClient.html">SoapClient</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Bukoli_Bukoli" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="Bukoli/Bukoli.html">Bukoli</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Bukoli.html", "name": "Bukoli", "doc": "Namespace Bukoli"},{"type": "Namespace", "link": "Bukoli/Exception.html", "name": "Bukoli\\Exception", "doc": "Namespace Bukoli\\Exception"},{"type": "Namespace", "link": "Bukoli/Model.html", "name": "Bukoli\\Model", "doc": "Namespace Bukoli\\Model"},{"type": "Namespace", "link": "Bukoli/Model/Response.html", "name": "Bukoli\\Model\\Response", "doc": "Namespace Bukoli\\Model\\Response"},{"type": "Namespace", "link": "Bukoli/Request.html", "name": "Bukoli\\Request", "doc": "Namespace Bukoli\\Request"},{"type": "Namespace", "link": "Bukoli/Response.html", "name": "Bukoli\\Response", "doc": "Namespace Bukoli\\Response"},{"type": "Namespace", "link": "Bukoli/Soap.html", "name": "Bukoli\\Soap", "doc": "Namespace Bukoli\\Soap"},
            {"type": "Interface", "fromName": "Bukoli\\Request", "fromLink": "Bukoli/Request.html", "link": "Bukoli/Request/RequestInterface.html", "name": "Bukoli\\Request\\RequestInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Request\\RequestInterface", "fromLink": "Bukoli/Request/RequestInterface.html", "link": "Bukoli/Request/RequestInterface.html#method_request", "name": "Bukoli\\Request\\RequestInterface::request", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\RequestInterface", "fromLink": "Bukoli/Request/RequestInterface.html", "link": "Bukoli/Request/RequestInterface.html#method_response", "name": "Bukoli\\Request\\RequestInterface::response", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\RequestInterface", "fromLink": "Bukoli/Request/RequestInterface.html", "link": "Bukoli/Request/RequestInterface.html#method_toArray", "name": "Bukoli\\Request\\RequestInterface::toArray", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Bukoli\\Soap", "fromLink": "Bukoli/Soap.html", "link": "Bukoli/Soap/ClientInterface.html", "name": "Bukoli\\Soap\\ClientInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Soap\\ClientInterface", "fromLink": "Bukoli/Soap/ClientInterface.html", "link": "Bukoli/Soap/ClientInterface.html#method_request", "name": "Bukoli\\Soap\\ClientInterface::request", "doc": "&quot;&quot;"},
            
            
            {"type": "Class", "fromName": "Bukoli", "fromLink": "Bukoli.html", "link": "Bukoli/Bukoli.html", "name": "Bukoli\\Bukoli", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Bukoli", "fromLink": "Bukoli/Bukoli.html", "link": "Bukoli/Bukoli.html#method_init", "name": "Bukoli\\Bukoli::init", "doc": "&quot;Bukoli Apisini ba\u015flatmak i\u00e7in gereklidir.&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Bukoli", "fromLink": "Bukoli/Bukoli.html", "link": "Bukoli/Bukoli.html#method_getUrl", "name": "Bukoli\\Bukoli::getUrl", "doc": "&quot;WSDL url&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Bukoli", "fromLink": "Bukoli/Bukoli.html", "link": "Bukoli/Bukoli.html#method_setUrl", "name": "Bukoli\\Bukoli::setUrl", "doc": "&quot;WSDL url&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Bukoli", "fromLink": "Bukoli/Bukoli.html", "link": "Bukoli/Bukoli.html#method_getServicePassword", "name": "Bukoli\\Bukoli::getServicePassword", "doc": "&quot;Size \u00f6zel verdi\u011fimiz \u015fifre&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Bukoli", "fromLink": "Bukoli/Bukoli.html", "link": "Bukoli/Bukoli.html#method_setServicePassword", "name": "Bukoli\\Bukoli::setServicePassword", "doc": "&quot;Size \u00f6zel verdi\u011fimiz \u015fifre&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Bukoli", "fromLink": "Bukoli/Bukoli.html", "link": "Bukoli/Bukoli.html#method_getDateTimeZone", "name": "Bukoli\\Bukoli::getDateTimeZone", "doc": "&quot;Timezone&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Bukoli", "fromLink": "Bukoli/Bukoli.html", "link": "Bukoli/Bukoli.html#method_setDateTimeZone", "name": "Bukoli\\Bukoli::setDateTimeZone", "doc": "&quot;Timezone&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Exception", "fromLink": "Bukoli/Exception.html", "link": "Bukoli/Exception/Exception.html", "name": "Bukoli\\Exception\\Exception", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Exception\\Exception", "fromLink": "Bukoli/Exception/Exception.html", "link": "Bukoli/Exception/Exception.html#method___construct", "name": "Bukoli\\Exception\\Exception::__construct", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Exception", "fromLink": "Bukoli/Exception.html", "link": "Bukoli/Exception/RequiredFieldException.html", "name": "Bukoli\\Exception\\RequiredFieldException", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Exception\\RequiredFieldException", "fromLink": "Bukoli/Exception/RequiredFieldException.html", "link": "Bukoli/Exception/RequiredFieldException.html#method___construct", "name": "Bukoli\\Exception\\RequiredFieldException::__construct", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Exception", "fromLink": "Bukoli/Exception.html", "link": "Bukoli/Exception/ServicePasswordException.html", "name": "Bukoli\\Exception\\ServicePasswordException", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Exception\\ServicePasswordException", "fromLink": "Bukoli/Exception/ServicePasswordException.html", "link": "Bukoli/Exception/ServicePasswordException.html#method___construct", "name": "Bukoli\\Exception\\ServicePasswordException::__construct", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Model", "fromLink": "Bukoli/Model.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html", "name": "Bukoli\\Model\\IntegrationEndUserInfo", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_getEndUserCode", "name": "Bukoli\\Model\\IntegrationEndUserInfo::getEndUserCode", "doc": "&quot;Son Kullan\u0131c\u0131 Kodu \u2013 Websitesi taraf\u0131nda unique kullan\u0131c\u0131 id&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_setEndUserCode", "name": "Bukoli\\Model\\IntegrationEndUserInfo::setEndUserCode", "doc": "&quot;Son Kullan\u0131c\u0131 Kodu \u2013 Websitesi taraf\u0131nda unique kullan\u0131c\u0131 id&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_getFirstName", "name": "Bukoli\\Model\\IntegrationEndUserInfo::getFirstName", "doc": "&quot;Son Kullan\u0131c\u0131 Ad\u0131&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_setFirstName", "name": "Bukoli\\Model\\IntegrationEndUserInfo::setFirstName", "doc": "&quot;Son Kullan\u0131c\u0131 Ad\u0131&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_getLastName", "name": "Bukoli\\Model\\IntegrationEndUserInfo::getLastName", "doc": "&quot;Son Kullan\u0131c\u0131 Soyad\u0131&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_setLastName", "name": "Bukoli\\Model\\IntegrationEndUserInfo::setLastName", "doc": "&quot;Son Kullan\u0131c\u0131 Soyad\u0131&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_getPhone", "name": "Bukoli\\Model\\IntegrationEndUserInfo::getPhone", "doc": "&quot;Son Kullan\u0131c\u0131 Cep Telefonu&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_setPhone", "name": "Bukoli\\Model\\IntegrationEndUserInfo::setPhone", "doc": "&quot;Son Kullan\u0131c\u0131 Cep Telefonu&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_getEmail", "name": "Bukoli\\Model\\IntegrationEndUserInfo::getEmail", "doc": "&quot;Son Kullan\u0131c\u0131 Email&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_setEmail", "name": "Bukoli\\Model\\IntegrationEndUserInfo::setEmail", "doc": "&quot;Son Kullan\u0131c\u0131 Email&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_getTcIdentityNo", "name": "Bukoli\\Model\\IntegrationEndUserInfo::getTcIdentityNo", "doc": "&quot;Son Kullan\u0131c\u0131 Tc Kimlik No&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_setTcIdentityNo", "name": "Bukoli\\Model\\IntegrationEndUserInfo::setTcIdentityNo", "doc": "&quot;Son Kullan\u0131c\u0131 Tc Kimlik No&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_getAddress", "name": "Bukoli\\Model\\IntegrationEndUserInfo::getAddress", "doc": "&quot;Son Kullan\u0131c\u0131 Adres&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_setAddress", "name": "Bukoli\\Model\\IntegrationEndUserInfo::setAddress", "doc": "&quot;Son Kullan\u0131c\u0131 Adres&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_getBirthDate", "name": "Bukoli\\Model\\IntegrationEndUserInfo::getBirthDate", "doc": "&quot;Son Kullan\u0131c\u0131 Do\u011fum Tarihi&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_setBirthDate", "name": "Bukoli\\Model\\IntegrationEndUserInfo::setBirthDate", "doc": "&quot;Son Kullan\u0131c\u0131 Do\u011fum Tarihi&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_getJob", "name": "Bukoli\\Model\\IntegrationEndUserInfo::getJob", "doc": "&quot;Son Kullan\u0131c\u0131 Mesle\u011fi&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_setJob", "name": "Bukoli\\Model\\IntegrationEndUserInfo::setJob", "doc": "&quot;Son Kullan\u0131c\u0131 Mesle\u011fi&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_getMartialStatus", "name": "Bukoli\\Model\\IntegrationEndUserInfo::getMartialStatus", "doc": "&quot;Son Kullan\u0131c\u0131 Medeni Hali&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_setMartialStatus", "name": "Bukoli\\Model\\IntegrationEndUserInfo::setMartialStatus", "doc": "&quot;Son Kullan\u0131c\u0131 Medeni Hali&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_getSex", "name": "Bukoli\\Model\\IntegrationEndUserInfo::getSex", "doc": "&quot;Son Kullan\u0131c\u0131 Cinsiyeti&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationEndUserInfo", "fromLink": "Bukoli/Model/IntegrationEndUserInfo.html", "link": "Bukoli/Model/IntegrationEndUserInfo.html#method_setSex", "name": "Bukoli\\Model\\IntegrationEndUserInfo::setSex", "doc": "&quot;Son Kullan\u0131c\u0131 Cinsiyeti&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Model", "fromLink": "Bukoli/Model.html", "link": "Bukoli/Model/IntegrationOrderDetailInfo.html", "name": "Bukoli\\Model\\IntegrationOrderDetailInfo", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderDetailInfo", "fromLink": "Bukoli/Model/IntegrationOrderDetailInfo.html", "link": "Bukoli/Model/IntegrationOrderDetailInfo.html#method_getDeci", "name": "Bukoli\\Model\\IntegrationOrderDetailInfo::getDeci", "doc": "&quot;Desi Bilgisi\n3.4 gibi&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderDetailInfo", "fromLink": "Bukoli/Model/IntegrationOrderDetailInfo.html", "link": "Bukoli/Model/IntegrationOrderDetailInfo.html#method_setDeci", "name": "Bukoli\\Model\\IntegrationOrderDetailInfo::setDeci", "doc": "&quot;Desi Bilgisi\n3.4 gibi&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderDetailInfo", "fromLink": "Bukoli/Model/IntegrationOrderDetailInfo.html", "link": "Bukoli/Model/IntegrationOrderDetailInfo.html#method_getInfo", "name": "Bukoli\\Model\\IntegrationOrderDetailInfo::getInfo", "doc": "&quot;\u0130\u00e7indekini tan\u0131mlayan bir bilgi\nKonfeksiyon, kitap, hediyelik gibi&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderDetailInfo", "fromLink": "Bukoli/Model/IntegrationOrderDetailInfo.html", "link": "Bukoli/Model/IntegrationOrderDetailInfo.html#method_setInfo", "name": "Bukoli\\Model\\IntegrationOrderDetailInfo::setInfo", "doc": "&quot;\u0130\u00e7indekini tan\u0131mlayan bir bilgi\nKonfeksiyon, kitap, hediyelik gibi&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderDetailInfo", "fromLink": "Bukoli/Model/IntegrationOrderDetailInfo.html", "link": "Bukoli/Model/IntegrationOrderDetailInfo.html#method_getBarcode", "name": "Bukoli\\Model\\IntegrationOrderDetailInfo::getBarcode", "doc": "&quot;Kutu \u00fczerine depoda yap\u0131\u015ft\u0131r\u0131lan etiketin barkod idsi&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderDetailInfo", "fromLink": "Bukoli/Model/IntegrationOrderDetailInfo.html", "link": "Bukoli/Model/IntegrationOrderDetailInfo.html#method_setBarcode", "name": "Bukoli\\Model\\IntegrationOrderDetailInfo::setBarcode", "doc": "&quot;Kutu \u00fczerine depoda yap\u0131\u015ft\u0131r\u0131lan etiketin barkod idsi&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderDetailInfo", "fromLink": "Bukoli/Model/IntegrationOrderDetailInfo.html", "link": "Bukoli/Model/IntegrationOrderDetailInfo.html#method_getRequiredFields", "name": "Bukoli\\Model\\IntegrationOrderDetailInfo::getRequiredFields", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Model", "fromLink": "Bukoli/Model.html", "link": "Bukoli/Model/IntegrationOrderInfo.html", "name": "Bukoli\\Model\\IntegrationOrderInfo", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getRequestOrderId", "name": "Bukoli\\Model\\IntegrationOrderInfo::getRequestOrderId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_setRequestOrderId", "name": "Bukoli\\Model\\IntegrationOrderInfo::setRequestOrderId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getParentRequestOrderId", "name": "Bukoli\\Model\\IntegrationOrderInfo::getParentRequestOrderId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_setParentRequestOrderId", "name": "Bukoli\\Model\\IntegrationOrderInfo::setParentRequestOrderId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getEndUserData", "name": "Bukoli\\Model\\IntegrationOrderInfo::getEndUserData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_setEndUserData", "name": "Bukoli\\Model\\IntegrationOrderInfo::setEndUserData", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getIntegrationOrderDetailInfoArr", "name": "Bukoli\\Model\\IntegrationOrderInfo::getIntegrationOrderDetailInfoArr", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_setIntegrationOrderDetailInfoArr", "name": "Bukoli\\Model\\IntegrationOrderInfo::setIntegrationOrderDetailInfoArr", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getSelectedJetonPointCode", "name": "Bukoli\\Model\\IntegrationOrderInfo::getSelectedJetonPointCode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_setSelectedJetonPointCode", "name": "Bukoli\\Model\\IntegrationOrderInfo::setSelectedJetonPointCode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getCustomerServicePassword", "name": "Bukoli\\Model\\IntegrationOrderInfo::getCustomerServicePassword", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getInvoiceNo", "name": "Bukoli\\Model\\IntegrationOrderInfo::getInvoiceNo", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_setInvoiceNo", "name": "Bukoli\\Model\\IntegrationOrderInfo::setInvoiceNo", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getIrsaliyeNo", "name": "Bukoli\\Model\\IntegrationOrderInfo::getIrsaliyeNo", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_setIrsaliyeNo", "name": "Bukoli\\Model\\IntegrationOrderInfo::setIrsaliyeNo", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getOrderDate", "name": "Bukoli\\Model\\IntegrationOrderInfo::getOrderDate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_setOrderDate", "name": "Bukoli\\Model\\IntegrationOrderInfo::setOrderDate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getOrderAmount", "name": "Bukoli\\Model\\IntegrationOrderInfo::getOrderAmount", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_setOrderAmount", "name": "Bukoli\\Model\\IntegrationOrderInfo::setOrderAmount", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getCargoAmount", "name": "Bukoli\\Model\\IntegrationOrderInfo::getCargoAmount", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_setCargoAmount", "name": "Bukoli\\Model\\IntegrationOrderInfo::setCargoAmount", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getPromotionCodes", "name": "Bukoli\\Model\\IntegrationOrderInfo::getPromotionCodes", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_setPromotionCodes", "name": "Bukoli\\Model\\IntegrationOrderInfo::setPromotionCodes", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_getReservedFields", "name": "Bukoli\\Model\\IntegrationOrderInfo::getReservedFields", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderInfo", "fromLink": "Bukoli/Model/IntegrationOrderInfo.html", "link": "Bukoli/Model/IntegrationOrderInfo.html#method_setReservedFields", "name": "Bukoli\\Model\\IntegrationOrderInfo::setReservedFields", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Model", "fromLink": "Bukoli/Model.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "fromLink": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html#method_getFirstName", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo::getFirstName", "doc": "&quot;Son Kullan\u0131c\u0131 Ad\u0131&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "fromLink": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html#method_setFirstName", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo::setFirstName", "doc": "&quot;Son Kullan\u0131c\u0131 Ad\u0131&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "fromLink": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html#method_getLastName", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo::getLastName", "doc": "&quot;Son Kullan\u0131c\u0131 Soyad\u0131&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "fromLink": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html#method_setLastName", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo::setLastName", "doc": "&quot;Son Kullan\u0131c\u0131 Soyad\u0131&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "fromLink": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html#method_getPhone", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo::getPhone", "doc": "&quot;Son Kullan\u0131c\u0131 Cep Telefonu&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "fromLink": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html#method_setPhone", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo::setPhone", "doc": "&quot;Son Kullan\u0131c\u0131 Cep Telefonu&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "fromLink": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html#method_getEmail", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo::getEmail", "doc": "&quot;Son Kullan\u0131c\u0131 Email&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "fromLink": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html#method_setEmail", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo::setEmail", "doc": "&quot;Son Kullan\u0131c\u0131 Email&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "fromLink": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html#method_getAddress", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo::getAddress", "doc": "&quot;Son Kullan\u0131c\u0131 Adres&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "fromLink": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html#method_setAddress", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo::setAddress", "doc": "&quot;Son Kullan\u0131c\u0131 Adres&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "fromLink": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html#method_getSelectedJetonPointCode", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo::getSelectedJetonPointCode", "doc": "&quot;Haritadan se\u00e7ilmi\u015f olan Bukoli noktas\u0131n\u0131n kodu&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\IntegrationOrderSummaryInfo", "fromLink": "Bukoli/Model/IntegrationOrderSummaryInfo.html", "link": "Bukoli/Model/IntegrationOrderSummaryInfo.html#method_setSelectedJetonPointCode", "name": "Bukoli\\Model\\IntegrationOrderSummaryInfo::setSelectedJetonPointCode", "doc": "&quot;Haritadan se\u00e7ilmi\u015f olan Bukoli noktas\u0131n\u0131n kodu&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Model", "fromLink": "Bukoli/Model.html", "link": "Bukoli/Model/MartialStatus.html", "name": "Bukoli\\Model\\MartialStatus", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Bukoli\\Model", "fromLink": "Bukoli/Model.html", "link": "Bukoli/Model/Model.html", "name": "Bukoli\\Model\\Model", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Model\\Model", "fromLink": "Bukoli/Model/Model.html", "link": "Bukoli/Model/Model.html#method_toArray", "name": "Bukoli\\Model\\Model::toArray", "doc": "&quot;Converts Model to array for Soap Request&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Model\\Response", "fromLink": "Bukoli/Model/Response.html", "link": "Bukoli/Model/Response/IntegrationResultInfo.html", "name": "Bukoli\\Model\\Response\\IntegrationResultInfo", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Model\\Response\\IntegrationResultInfo", "fromLink": "Bukoli/Model/Response/IntegrationResultInfo.html", "link": "Bukoli/Model/Response/IntegrationResultInfo.html#method_getStatus", "name": "Bukoli\\Model\\Response\\IntegrationResultInfo::getStatus", "doc": "&quot;Durum\n1 - Ba\u015far\u0131l\u0131\n0 - Hata&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\IntegrationResultInfo", "fromLink": "Bukoli/Model/Response/IntegrationResultInfo.html", "link": "Bukoli/Model/Response/IntegrationResultInfo.html#method_getMessage", "name": "Bukoli\\Model\\Response\\IntegrationResultInfo::getMessage", "doc": "&quot;Hata varsa hata mesaj\u0131 d\u00f6ner&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\IntegrationResultInfo", "fromLink": "Bukoli/Model/Response/IntegrationResultInfo.html", "link": "Bukoli/Model/Response/IntegrationResultInfo.html#method_getJetonOrderId", "name": "Bukoli\\Model\\Response\\IntegrationResultInfo::getJetonOrderId", "doc": "&quot;Jeton i\u015fyeri idsi&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\IntegrationResultInfo", "fromLink": "Bukoli/Model/Response/IntegrationResultInfo.html", "link": "Bukoli/Model/Response/IntegrationResultInfo.html#method_getTrackingNo", "name": "Bukoli\\Model\\Response\\IntegrationResultInfo::getTrackingNo", "doc": "&quot;Sipari\u015f Sistemindeki Takip Numaras\u0131&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Model\\Response", "fromLink": "Bukoli/Model/Response.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getJetonOrderId", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getJetonOrderId", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getRequestOrderID", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getRequestOrderID", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getTrackingNo", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getTrackingNo", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getStatus", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getStatus", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getDeliveryDate", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getDeliveryDate", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getPointCode", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getPointCode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getPointName", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getPointName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getPointAddress", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getPointAddress", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getNeighborhoodName", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getNeighborhoodName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getBoroughName", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getBoroughName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getCityName", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getCityName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getBoxCount", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getBoxCount", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo", "fromLink": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html", "link": "Bukoli/Model/Response/JetonOrderStatusDetailInfo.html#method_getDeciSum", "name": "Bukoli\\Model\\Response\\JetonOrderStatusDetailInfo::getDeciSum", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Model\\Response", "fromLink": "Bukoli/Model/Response.html", "link": "Bukoli/Model/Response/ResultInfo.html", "name": "Bukoli\\Model\\Response\\ResultInfo", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Model\\Response\\ResultInfo", "fromLink": "Bukoli/Model/Response/ResultInfo.html", "link": "Bukoli/Model/Response/ResultInfo.html#method_getStatus", "name": "Bukoli\\Model\\Response\\ResultInfo::getStatus", "doc": "&quot;Durum\n1 - Ba\u015far\u0131l\u0131\n0 - Hata&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Model\\Response\\ResultInfo", "fromLink": "Bukoli/Model/Response/ResultInfo.html", "link": "Bukoli/Model/Response/ResultInfo.html#method_getMessage", "name": "Bukoli\\Model\\Response\\ResultInfo::getMessage", "doc": "&quot;Hata varsa hata mesaj\u0131 d\u00f6ner&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Model", "fromLink": "Bukoli/Model.html", "link": "Bukoli/Model/Sex.html", "name": "Bukoli\\Model\\Sex", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Bukoli\\Request", "fromLink": "Bukoli/Request.html", "link": "Bukoli/Request/JetonPointStateGet.html", "name": "Bukoli\\Request\\JetonPointStateGet", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Request\\JetonPointStateGet", "fromLink": "Bukoli/Request/JetonPointStateGet.html", "link": "Bukoli/Request/JetonPointStateGet.html#method_request", "name": "Bukoli\\Request\\JetonPointStateGet::request", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\JetonPointStateGet", "fromLink": "Bukoli/Request/JetonPointStateGet.html", "link": "Bukoli/Request/JetonPointStateGet.html#method_response", "name": "Bukoli\\Request\\JetonPointStateGet::response", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\JetonPointStateGet", "fromLink": "Bukoli/Request/JetonPointStateGet.html", "link": "Bukoli/Request/JetonPointStateGet.html#method_toArray", "name": "Bukoli\\Request\\JetonPointStateGet::toArray", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\JetonPointStateGet", "fromLink": "Bukoli/Request/JetonPointStateGet.html", "link": "Bukoli/Request/JetonPointStateGet.html#method_setJetonPointCode", "name": "Bukoli\\Request\\JetonPointStateGet::setJetonPointCode", "doc": "&quot;Noktan\u0131n kodu&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Request", "fromLink": "Bukoli/Request.html", "link": "Bukoli/Request/OrderInsert.html", "name": "Bukoli\\Request\\OrderInsert", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Request\\OrderInsert", "fromLink": "Bukoli/Request/OrderInsert.html", "link": "Bukoli/Request/OrderInsert.html#method_request", "name": "Bukoli\\Request\\OrderInsert::request", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\OrderInsert", "fromLink": "Bukoli/Request/OrderInsert.html", "link": "Bukoli/Request/OrderInsert.html#method_response", "name": "Bukoli\\Request\\OrderInsert::response", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\OrderInsert", "fromLink": "Bukoli/Request/OrderInsert.html", "link": "Bukoli/Request/OrderInsert.html#method_toArray", "name": "Bukoli\\Request\\OrderInsert::toArray", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\OrderInsert", "fromLink": "Bukoli/Request/OrderInsert.html", "link": "Bukoli/Request/OrderInsert.html#method_setIntegrationOrderInfo", "name": "Bukoli\\Request\\OrderInsert::setIntegrationOrderInfo", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Request", "fromLink": "Bukoli/Request.html", "link": "Bukoli/Request/OrderStatusDetailGet.html", "name": "Bukoli\\Request\\OrderStatusDetailGet", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Request\\OrderStatusDetailGet", "fromLink": "Bukoli/Request/OrderStatusDetailGet.html", "link": "Bukoli/Request/OrderStatusDetailGet.html#method_request", "name": "Bukoli\\Request\\OrderStatusDetailGet::request", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\OrderStatusDetailGet", "fromLink": "Bukoli/Request/OrderStatusDetailGet.html", "link": "Bukoli/Request/OrderStatusDetailGet.html#method_response", "name": "Bukoli\\Request\\OrderStatusDetailGet::response", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\OrderStatusDetailGet", "fromLink": "Bukoli/Request/OrderStatusDetailGet.html", "link": "Bukoli/Request/OrderStatusDetailGet.html#method_toArray", "name": "Bukoli\\Request\\OrderStatusDetailGet::toArray", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\OrderStatusDetailGet", "fromLink": "Bukoli/Request/OrderStatusDetailGet.html", "link": "Bukoli/Request/OrderStatusDetailGet.html#method_setRequestOrderId", "name": "Bukoli\\Request\\OrderStatusDetailGet::setRequestOrderId", "doc": "&quot;Size ait sipari\u015f numaras\u0131&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Request", "fromLink": "Bukoli/Request.html", "link": "Bukoli/Request/OrderSummaryInsert.html", "name": "Bukoli\\Request\\OrderSummaryInsert", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Request\\OrderSummaryInsert", "fromLink": "Bukoli/Request/OrderSummaryInsert.html", "link": "Bukoli/Request/OrderSummaryInsert.html#method_request", "name": "Bukoli\\Request\\OrderSummaryInsert::request", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\OrderSummaryInsert", "fromLink": "Bukoli/Request/OrderSummaryInsert.html", "link": "Bukoli/Request/OrderSummaryInsert.html#method_response", "name": "Bukoli\\Request\\OrderSummaryInsert::response", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\OrderSummaryInsert", "fromLink": "Bukoli/Request/OrderSummaryInsert.html", "link": "Bukoli/Request/OrderSummaryInsert.html#method_toArray", "name": "Bukoli\\Request\\OrderSummaryInsert::toArray", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\OrderSummaryInsert", "fromLink": "Bukoli/Request/OrderSummaryInsert.html", "link": "Bukoli/Request/OrderSummaryInsert.html#method_setIntegrationOrderSummaryInfo", "name": "Bukoli\\Request\\OrderSummaryInsert::setIntegrationOrderSummaryInfo", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Request", "fromLink": "Bukoli/Request.html", "link": "Bukoli/Request/Request.html", "name": "Bukoli\\Request\\Request", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Request\\Request", "fromLink": "Bukoli/Request/Request.html", "link": "Bukoli/Request/Request.html#method___construct", "name": "Bukoli\\Request\\Request::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\Request", "fromLink": "Bukoli/Request/Request.html", "link": "Bukoli/Request/Request.html#method_getClient", "name": "Bukoli\\Request\\Request::getClient", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\Request", "fromLink": "Bukoli/Request/Request.html", "link": "Bukoli/Request/Request.html#method_setClient", "name": "Bukoli\\Request\\Request::setClient", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Request", "fromLink": "Bukoli/Request.html", "link": "Bukoli/Request/RequestInterface.html", "name": "Bukoli\\Request\\RequestInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Request\\RequestInterface", "fromLink": "Bukoli/Request/RequestInterface.html", "link": "Bukoli/Request/RequestInterface.html#method_request", "name": "Bukoli\\Request\\RequestInterface::request", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\RequestInterface", "fromLink": "Bukoli/Request/RequestInterface.html", "link": "Bukoli/Request/RequestInterface.html#method_response", "name": "Bukoli\\Request\\RequestInterface::response", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Request\\RequestInterface", "fromLink": "Bukoli/Request/RequestInterface.html", "link": "Bukoli/Request/RequestInterface.html#method_toArray", "name": "Bukoli\\Request\\RequestInterface::toArray", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Response", "fromLink": "Bukoli/Response.html", "link": "Bukoli/Response/JetonPointStateGetResponse.html", "name": "Bukoli\\Response\\JetonPointStateGetResponse", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Bukoli\\Response", "fromLink": "Bukoli/Response.html", "link": "Bukoli/Response/OrderInsertResponse.html", "name": "Bukoli\\Response\\OrderInsertResponse", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Bukoli\\Response", "fromLink": "Bukoli/Response.html", "link": "Bukoli/Response/OrderStatusDetailGetResponse.html", "name": "Bukoli\\Response\\OrderStatusDetailGetResponse", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Bukoli\\Response", "fromLink": "Bukoli/Response.html", "link": "Bukoli/Response/OrderSummaryInsertResponse.html", "name": "Bukoli\\Response\\OrderSummaryInsertResponse", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Bukoli\\Soap", "fromLink": "Bukoli/Soap.html", "link": "Bukoli/Soap/ClientInterface.html", "name": "Bukoli\\Soap\\ClientInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Soap\\ClientInterface", "fromLink": "Bukoli/Soap/ClientInterface.html", "link": "Bukoli/Soap/ClientInterface.html#method_request", "name": "Bukoli\\Soap\\ClientInterface::request", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Bukoli\\Soap", "fromLink": "Bukoli/Soap.html", "link": "Bukoli/Soap/SoapClient.html", "name": "Bukoli\\Soap\\SoapClient", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Bukoli\\Soap\\SoapClient", "fromLink": "Bukoli/Soap/SoapClient.html", "link": "Bukoli/Soap/SoapClient.html#method___construct", "name": "Bukoli\\Soap\\SoapClient::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Soap\\SoapClient", "fromLink": "Bukoli/Soap/SoapClient.html", "link": "Bukoli/Soap/SoapClient.html#method_getClient", "name": "Bukoli\\Soap\\SoapClient::getClient", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Bukoli\\Soap\\SoapClient", "fromLink": "Bukoli/Soap/SoapClient.html", "link": "Bukoli/Soap/SoapClient.html#method_request", "name": "Bukoli\\Soap\\SoapClient::request", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


