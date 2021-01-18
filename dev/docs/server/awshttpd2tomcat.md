# AWS/HTTPD/TOMCAT

Apache HTTP Server + Tomcat Server On AWS

- Apache httpd 2.4.37 : [Apache HTTP Server](https://httpd.apache.org/)
- Tomcat 8.5.57 : [Apache Tomcat](https://tomcat.apache.org/)

## HTTP Server

### 移除舊版本，如果有的話

```sh
#列出所有已安裝的相關程式
yum list installed *httpd*
# httpd.x86_64
# httpd-manual.noarch
# httpd-tools.x86_64

yum list installed *mod_*
# mod_perl.x86_64
# mod_ssl.x86_64
# mod_wsgi.x86_64

yum remove httpd.x86_64 httpd-manual.noarch httpd-tools.x86_64 mod_perl.x86_64 mod_ssl.x86_64 mod_wsgi.x86_64
```

### install & start

```sh
yum -y install httpd mod_ssl
```

```sh
service httpd start
```

### 編輯 httpd.conf

設定變量

```sh
export HTTPD='/etc/httpd/conf/'
```

將option 設定為 none

```sh
sed -i 's/Options Indexes FollowSymLinks/Options None/' ${HTTPD}httpd.conf
```

自動轉導加密連線

```sh
cat >> ${HTTPD}httpd.conf << "EOF"

RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
EOF
```
取消變量
```sh
unset HTTPD
```

### 編輯ssl.conf

設定變量

```sh
export SSL='/etc/httpd/conf.d/'
```

憑證設定

- refer: [#憑證請求檔製作](/server/ssl/#憑證請求檔製作)

SSL 資安設定

```sh
vim ${SSL}ssl.conf
SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1/
SSLProxyProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1
SSLCipherSuite ALL:!aNULL:!ADH:!eNULL:!LOW:!EXP:!NULL:!RC4:!RC2:!DES:!3DES:!SHA:!SHA256:!SHA384:!MD5+HIGH:+MEDIUM
SSLProxyCipherSuite ALL:!aNULL:!ADH:!eNULL:!LOW:!EXP:!NULL:!RC4:!RC2:!DES:!3DES:!SHA:!SHA256:!SHA384:!MD5+HIGH:+MEDIUM
```
或是
```sh
sed -i '/SSLProtocol/s/.*/SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1/' ${SSL}ssl.conf
sed -i '/SSLProxyProtocol/s/.*/SSLProxyProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1/' ${SSL}ssl.conf
sed -i '/^SSLCipherSuite/s/.*/SSLCipherSuite ALL:!aNULL:!ADH:!eNULL:!LOW:!EXP:!NULL:!RC4:!RC2:!DES:!3DES:!SHA:!SHA256:!SHA384:!MD5+HIGH:+MEDIUM/' ${SSL}ssl.conf
sed -i '/^SSLProxyCipherSuite/s/.*/SSLProxyCipherSuite ALL:!aNULL:!ADH:!eNULL:!LOW:!EXP:!NULL:!RC4:!RC2:!DES:!3DES:!SHA:!SHA256:!SHA384:!MD5+HIGH:+MEDIUM/' ${SSL}ssl.conf
```

ProxyPass to Tomcat

```sh
vim ${SSL}ssl.conf
</VirtualHost>
ProxyPass / ajp://localhost:8009/
ProxyPassReverse / ajp://localhost:8009/
```
或是
```sh
sed -i '/<\/VirtualHost>/s/^/ProxyPass \/ ajp:\/\/localhost:8009\/\nProxyPassReverse \/ ajp:\/\/localhost:8009\/\n\n/' ${SSL}ssl.conf
```
取消變量
```sh
unset SSL
```

### selinux 關閉

```sh
setsebool -P httpd_can_network_connect 1
```

### restart tomcat

```sh
/usr/sbin/httpd -t && service httpd restart  # apachectl configtest
```

## Tomcat

### Install JRE

```sh
yum -y install java-1.8.0-openjdk.x86_64
#確認 JAVA 版本
java -version
```

如果系統中有多個 java 版本，可下指令切換預設使用的版本：

```sh
update-alternatives --config java
```

### Install & start Tomcat

```sh
yum install tomcat8
service tomcat8 start
```
aws 安裝包在安裝的同時便已經將 tomcat 群組權限加入，故不用執行以下設定
```sh
tar -zxf /opt/apache-tomcat-8.5.57.tar.gz -C /opt
ln -s /opt/apache-tomcat-8.5.57 /opt/tomcat
useradd -r tomcat -s /sbin/nologin -d /opt/tomcat
chown -Rh tomcat:tomcat /opt/tomcat /opt/apache-tomcat-8.5.57
```

### 編輯 Config

aws 安裝包在安裝的同時便已經將 startup script 設定，故也不需執行以下設定  

`/etc/systemd/system/tomcat.service`

```sh
cat > /etc/systemd/system/tomcat.service << "EOF"
[Unit]
Description=Tomcat
After=syslog.target network.target

[Service]
Type=forking

User=tomcat
Group=tomcat

Environment="CATALINA_BASE=/opt/tomcat"
Environment="CATALINA_HOME=/opt/tomcat"
Environment="CATALINA_PID=/opt/tomcat/tomcat.pid"

ExecStart=/opt/tomcat/bin/startup.sh
ExecStop=/opt/tomcat/bin/shutdown.sh

[Install]
WantedBy=multi-user.target
EOF
```

```sh
systemctl daemon-reload
systemctl start tomcat.service
systemctl enable tomcat.service
```

編輯 server.xml

`/etc/tomcat8/server.xml`

```xml
#將以下段落註解掉
<!-- 
<Connector port="8080" protocol="HTTP/1.1"
            connectionTimeout="20000"
            redirectPort="8443" />
-->

#於以下段落進行修改
<!-- Define an AJP 1.3 Connector on port 8009 -->
<Connector port="8009" protocol="AJP/1.3" secretRequired="false" />

#將以下段落註解掉
<!-- 
<Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
        prefix="localhost_access_log." suffix=".txt"
        pattern="%h %l %u %t &quot;%r&quot; %s %b" />
-->
```

編輯 logging.properties

`/etc/tomcat8/logging.properties`

```js
#將以下段落註解並改寫
#handlers = 1catalina.org.apache.juli.AsyncFileHandler, 2localhost.org.apache.juli.AsyncFileHandler, 3manager.org.apache.juli.AsyncFileHandler, 4host-manager.org.apache.juli.AsyncFileHandler, java.util.logging.ConsoleHandler
handlers = 1catalina.org.apache.juli.AsyncFileHandler, java.util.logging.ConsoleHandler

#.handlers = 1catalina.org.apache.juli.AsyncFileHandler, java.util.logging.ConsoleHandler
.handlers = 1catalina.org.apache.juli.AsyncFileHandler, java.util.logging.ConsoleHandler

#將以下段落註解並改寫
1catalina.org.apache.juli.AsyncFileHandler.level = FINE
1catalina.org.apache.juli.AsyncFileHandler.directory = ${catalina.base}/logs
1catalina.org.apache.juli.AsyncFileHandler.prefix = catalina.

#2localhost.org.apache.juli.AsyncFileHandler.level = FINE
#2localhost.org.apache.juli.AsyncFileHandler.directory = ${catalina.base}/logs
#2localhost.org.apache.juli.AsyncFileHandler.prefix = localhost.

#3manager.org.apache.juli.AsyncFileHandler.level = FINE
#3manager.org.apache.juli.AsyncFileHandler.directory = ${catalina.base}/logs
#3manager.org.apache.juli.AsyncFileHandler.prefix = manager.

#4host-manager.org.apache.juli.AsyncFileHandler.level = FINE
#4host-manager.org.apache.juli.AsyncFileHandler.directory = ${catalina.base}/logs
#4host-manager.org.apache.juli.AsyncFileHandler.prefix = host-manager.

#java.util.logging.ConsoleHandler.level = FINE
#java.util.logging.ConsoleHandler.formatter = org.apache.juli.OneLineFormatter

#將以下段落註解掉
#org.apache.catalina.core.ContainerBase.[Catalina].[localhost].level = INFO
#org.apache.catalina.core.ContainerBase.[Catalina].[localhost].handlers = 2localhost.org.apache.juli.AsyncFileHandler

#org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/manager].level = INFO
#org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/manager].handlers = 3manager.org.apache.juli.AsyncFileHandler

#org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/host-manager].level = INFO
#org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/host-manager].handlers = 4host-manager.org.apache.juli.AsyncFileHandler
```

編輯 web.xml

```xml
#以下段落註解並改寫
<!--
    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
        <welcome-file>index.htm</welcome-file>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>
  -->

  <error-page>
    <error-code>403</error-code>
    <location>/error.html</location>
  </error-page>
  <error-page>
    <error-code>404</error-code>
    <location>/error.html</location>
  </error-page>
  <error-page>
    <error-code>500</error-code>
    <location>/error.html</location>
  </error-page>
  <error-page>
    <exception-type>java.lang.Exception</exception-type>
    <location>/error.html</location>
  </error-page>

</web-app>
```

Tomcat8 restart

```sh
service tomcat8 restart
```

check tomcat service

```sh
curl -k https://localhost
```

## Production Env

### front

```sh
mkdir -p /opt/nextec/{temp,configs}
aws s3 cp s3://mgmt.iforu.com.tw/configs/common.properties.restapi /opt/nextec/configs/common.properties
chown -R tomcat:tomcat /opt/nextec
service tomcat8 restart
```

`/etc/httpd/conf.d/ssl.conf`

```
RewriteEngine On

RewriteCond %{REQUEST_URI} ^/(cht|nftu|honghwa|chtr)$ [NC]
RewriteRule ^/(.*) https://%{HTTP_HOST}/login?corp=$1 [L]

RewriteCond %{HTTP_HOST} ^www.i4u.com.tw$ [NC]
RewriteRule ^/(.*)$ https://www.iforu.com.tw/?$corp=cht [L]
```

### restapi

```sh
mkdir -p /opt/nextec/{temp,configs}
aws s3 cp s3://mgmt.iforu.com.tw/configs/common.properties.restapi /opt/nextec/configs/common.properties
chown -R tomcat:tomcat /opt/nextec
service tomcat8 restart
```

`/etc/httpd/conf.d/ssl.conf`

```
RewriteEngine On

RewriteCond %{REQUEST_URI} ^/(cht|nftu|honghwa|chtr)$ [NC]
RewriteRule ^/(.*) https://%{HTTP_HOST}/login?corp=$1 [L]

RewriteCond %{HTTP_HOST} ^www.i4u.com.tw$ [NC]
RewriteRule ^/(.*)$ https://www.iforu.com.tw/?$corp=cht [L]
```

### admin

```sh
mkdir -p /opt/nextec/{report_temp,temp,pdf,excel_config,configs/{bank,classpath}}
aws s3 cp s3://mgmt.iforu.com.tw/configs/common.properties.admin /opt/nextec/configs/common.properties
aws s3 cp s3://mgmt.iforu.com.tw/configs/bank/ /opt/nextec/configs/bank/ --recursive
aws s3 cp s3://mgmt.iforu.com.tw/configs/classpath/ /opt/nextec/configs/classpath/ --recursive
aws s3 cp s3://mgmt.iforu.com.tw/configs/pdf/ /opt/nextec/pdf/ --recursive
chown -R tomcat:tomcat /opt/nextec
service tomcat8 restart
```

更改 classpath

```sh
vim /etc/tomcat8/tomcat8.conf
CLASSPATH=/opt/nextec/configs/classpath/:/var/lib/tomcat8/webapps/ROOT/WEB-INF/lib/FISCToolkit.jar
```
```sh
service tomcat8 restart
```