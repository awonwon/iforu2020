# HTTPD/TOMCAT

Apache HTTP Server + Tomcat Server On CentOS 8

- Apache httpd 2.4.37 : [Apache HTTP Server](https://httpd.apache.org/)
- Tomcat 8.5.57 : [Apache Tomcat](https://tomcat.apache.org/)

## HTTP Server

### install

```sh
yum -y install httpd mod_ssl
```

```sh
systemctl enable httpd
systemctl start httpd
```

### httpd.conf

```sh
export HTTPD='/etc/httpd/conf/'
```

Option None

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

```sh
unset HTTPD
```

### ssl.conf

```sh
export SSL='/etc/httpd/conf.d/'
```

憑證設定

refer: [#憑證檔案設定](/third-party/domain-name/index#憑證檔案設定)

- SSLCertificateFile
- SSLCertificateKeyFile
- SSLCertificateChainFile

```sh
chown -R root:root /opt/certs
chmod -R 600 /opt/certs
```

SSL 資安設定

```sh
vi ${SSL}ssl.conf
```
```sh
SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1
SSLCipherSuite ALL:!aNULL:!ADH:!eNULL:!LOW:!EXP:!NULL:!RC4:!RC2:!DES:!3DES:!SHA:!SHA256:!SHA384:!MD5+HIGH:+MEDIUM
#由於之前編碼已被判定為弱點，因此接受弱掃建議採用以上編碼
```
```sh
sed -i '/SSLProtocol/s/.*/SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1/' ${SSL}ssl.conf
sed -i '/SSLProxyProtocol/s/.*/SSLProxyProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1/' ${SSL}ssl.conf
sed -i '/^SSLCipherSuite/s/.*/SSLCipherSuite EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH/' ${SSL}ssl.conf
sed -i '/^SSLProxyCipherSuite/s/.*/SSLProxyCipherSuite EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH/' ${SSL}ssl.conf
```

ProxyPass to Tomcat

```sh
vi ${SSL}ssl.conf
```
```sh
# add ProxyPass in ssl.conf
</VirtualHost>
ProxyPass / ajp://localhost:8009/
ProxyPassReverse / ajp://localhost:8009/
```
or

```sh
sed -i '/<\/VirtualHost>/s/^/ProxyPass \/ ajp:\/\/localhost:8009\/\nProxyPassReverse \/ ajp:\/\/localhost:8009\/\n\n/' ${SSL}ssl.conf
```

```sh
unset SSL
```

### selinux

```sh
setsebool -P httpd_can_network_connect 1
```

### restart

```sh
/usr/sbin/httpd -t && systemctl restart httpd.service  # apachectl configtest
```

## Tomcat

### JRE

```sh
yum -y install java-1.8.0-openjdk.x86_64
java -version
```

如果系統中有多個 java 版本，可下指令切換預設使用的版本：

```sh
update-alternatives --config java
```

### Tomcat

```sh
wget -P /opt http://ftp.mirror.tw/pub/apache/tomcat/tomcat-8/v8.5.57/bin/apache-tomcat-8.5.57.tar.gz
```

```sh
tar -zxf /opt/apache-tomcat-8.5.57.tar.gz -C /opt
ln -s /opt/apache-tomcat-8.5.57 /opt/tomcat
useradd -r tomcat -s /sbin/nologin -d /opt/tomcat
chown -Rh tomcat:tomcat /opt/tomcat /opt/apache-tomcat-8.5.57
```

### Config

startup script  

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

`/opt/tomcat/conf/server.xml`

```xml
<!-- comment this
<Connector port="8080" protocol="HTTP/1.1"
            connectionTimeout="20000"
            redirectPort="8443" />
-->

<!-- Define an AJP 1.3 Connector on port 8009 -->
<Connector port="8009" protocol="AJP/1.3" secretRequired="false" />

<!-- comment this
<Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
        prefix="localhost_access_log." suffix=".txt"
        pattern="%h %l %u %t &quot;%r&quot; %s %b" />
-->
```

```sh
systemctl restart tomcat.service
```

check tomcat service

```sh
curl -k https://localhost
```

## Production Env

### front

```sh
mkdir -p /opt/nextec/{temp,configs}
s3cmd get s3://mgmt/configs/common.properties.front /opt/nextec/configs/common.properties
chown -R tomcat:tomcat /opt/nextec
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
s3cmd get s3://mgmt/configs/common.properties.restapi /opt/nextec/configs/common.properties
chown -R tomcat:tomcat /opt/nextec
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
s3cmd get s3://mgmt/configs/common.properties.admin /opt/nextec/configs/common.properties
s3cmd -r get s3://mgmt/configs/bank/ /opt/nextec/configs/bank/
s3cmd -r get s3://mgmt/configs/classpath/ /opt/nextec/configs/classpath/
s3cmd -r get s3://mgmt/configs/pdf/ /opt/nextec/pdf/
chown -R tomcat:tomcat /opt/nextec
```

```sh
echo "export CLASSPATH=/opt/nextec/configs/classpath/:/opt/tomcat/webapps/ROOT/WEB-INF/lib/FISCToolkit.jar" >> /opt/tomcat/bin/setenv.sh
chown tomcat:tomcat /opt/tomcat/bin/setenv.sh
chmod 750 /opt/tomcat/bin/setenv.sh
service tomcat restart
```
