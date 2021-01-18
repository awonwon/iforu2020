(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{362:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"httpd-tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpd-tomcat"}},[t._v("#")]),t._v(" HTTPD/TOMCAT")]),t._v(" "),a("p",[t._v("Apache HTTP Server + Tomcat Server On CentOS 8")]),t._v(" "),a("ul",[a("li",[t._v("Apache httpd 2.4.37 : "),a("a",{attrs:{href:"https://httpd.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache HTTP Server"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Tomcat 8.5.57 : "),a("a",{attrs:{href:"https://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache Tomcat"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"http-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-server"}},[t._v("#")]),t._v(" HTTP Server")]),t._v(" "),a("h3",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" install")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" httpd mod_ssl\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" httpd\nsystemctl start httpd\n")])])]),a("h3",{attrs:{id:"httpd-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpd-conf"}},[t._v("#")]),t._v(" httpd.conf")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTPD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/etc/httpd/conf/'")]),t._v("\n")])])]),a("p",[t._v("Option None")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s/Options Indexes FollowSymLinks/Options None/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${HTTPD}")]),t._v("httpd.conf\n")])])]),a("p",[t._v("自動轉導加密連線")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${HTTPD}")]),t._v("httpd.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EOF"\n\nRewriteEngine On\nRewriteCond %{HTTPS} off\nRewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}\nEOF')]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("unset")]),t._v(" HTTPD\n")])])]),a("h3",{attrs:{id:"ssl-conf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssl-conf"}},[t._v("#")]),t._v(" ssl.conf")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SSL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/etc/httpd/conf.d/'")]),t._v("\n")])])]),a("p",[t._v("憑證設定")]),t._v(" "),a("p",[t._v("refer: "),a("a",{attrs:{href:"/third-party/domain-name/index#%E6%86%91%E8%AD%89%E6%AA%94%E6%A1%88%E8%A8%AD%E5%AE%9A"}},[t._v("#憑證檔案設定")])]),t._v(" "),a("ul",[a("li",[t._v("SSLCertificateFile")]),t._v(" "),a("li",[t._v("SSLCertificateKeyFile")]),t._v(" "),a("li",[t._v("SSLCertificateChainFile")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R root:root /opt/certs\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v(" /opt/certs\n")])])]),a("p",[t._v("SSL 資安設定")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SSL}")]),t._v("ssl.conf\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1\nSSLCipherSuite ALL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("aNULL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ADH:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("eNULL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("LOW:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("EXP:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("NULL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("RC4:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("RC2:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("DES:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("3DES:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("SHA:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("SHA256:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("SHA384:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("MD5+HIGH:+MEDIUM\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#由於之前編碼已被判定為弱點，因此接受弱掃建議採用以上編碼")]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/SSLProtocol/s/.*/SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SSL}")]),t._v("ssl.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/SSLProxyProtocol/s/.*/SSLProxyProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SSL}")]),t._v("ssl.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/^SSLCipherSuite/s/.*/SSLCipherSuite EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SSL}")]),t._v("ssl.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/^SSLProxyCipherSuite/s/.*/SSLProxyCipherSuite EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SSL}")]),t._v("ssl.conf\n")])])]),a("p",[t._v("ProxyPass to Tomcat")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SSL}")]),t._v("ssl.conf\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# add ProxyPass in ssl.conf")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/VirtualHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nProxyPass / ajp://localhost:8009/\nProxyPassReverse / ajp://localhost:8009/\n")])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/<\\/VirtualHost>/s/^/ProxyPass \\/ ajp:\\/\\/localhost:8009\\/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("ProxyPassReverse \\/ ajp:\\/\\/localhost:8009\\/"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${SSL}")]),t._v("ssl.conf\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("unset")]),t._v(" SSL\n")])])]),a("h3",{attrs:{id:"selinux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selinux"}},[t._v("#")]),t._v(" selinux")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("setsebool -P httpd_can_network_connect "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("h3",{attrs:{id:"restart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restart"}},[t._v("#")]),t._v(" restart")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("/usr/sbin/httpd -t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" systemctl restart httpd.service  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# apachectl configtest")]),t._v("\n")])])]),a("h2",{attrs:{id:"tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[t._v("#")]),t._v(" Tomcat")]),t._v(" "),a("h3",{attrs:{id:"jre"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jre"}},[t._v("#")]),t._v(" JRE")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" java-1.8.0-openjdk.x86_64\njava -version\n")])])]),a("p",[t._v("如果系統中有多個 java 版本，可下指令切換預設使用的版本：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("update-alternatives --config java\n")])])]),a("h3",{attrs:{id:"tomcat-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat-2"}},[t._v("#")]),t._v(" Tomcat")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -P /opt http://ftp.mirror.tw/pub/apache/tomcat/tomcat-8/v8.5.57/bin/apache-tomcat-8.5.57.tar.gz\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxf /opt/apache-tomcat-8.5.57.tar.gz -C /opt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /opt/apache-tomcat-8.5.57 /opt/tomcat\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" -r tomcat -s /sbin/nologin -d /opt/tomcat\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -Rh tomcat:tomcat /opt/tomcat /opt/apache-tomcat-8.5.57\n")])])]),a("h3",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" Config")]),t._v(" "),a("p",[t._v("startup script")]),t._v(" "),a("p",[a("code",[t._v("/etc/systemd/system/tomcat.service")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/systemd/system/tomcat.service "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EOF"\n[Unit]\nDescription=Tomcat\nAfter=syslog.target network.target\n\n[Service]\nType=forking\n\nUser=tomcat\nGroup=tomcat\n\nEnvironment="CATALINA_BASE=/opt/tomcat"\nEnvironment="CATALINA_HOME=/opt/tomcat"\nEnvironment="CATALINA_PID=/opt/tomcat/tomcat.pid"\n\nExecStart=/opt/tomcat/bin/startup.sh\nExecStop=/opt/tomcat/bin/shutdown.sh\n\n[Install]\nWantedBy=multi-user.target\nEOF')]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("systemctl daemon-reload\nsystemctl start tomcat.service\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" tomcat.service\n")])])]),a("p",[a("code",[t._v("/opt/tomcat/conf/server.xml")])]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- comment this\n<Connector port="8080" protocol="HTTP/1.1"\n            connectionTimeout="20000"\n            redirectPort="8443" />\n--\x3e')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Define an AJP 1.3 Connector on port 8009 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Connector")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8009"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("AJP/1.3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("secretRequired")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- comment this\n<Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"\n        prefix="localhost_access_log." suffix=".txt"\n        pattern="%h %l %u %t &quot;%r&quot; %s %b" />\n--\x3e')]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("systemctl restart tomcat.service\n")])])]),a("p",[t._v("check tomcat service")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -k https://localhost\n")])])]),a("h2",{attrs:{id:"production-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#production-env"}},[t._v("#")]),t._v(" Production Env")]),t._v(" "),a("h3",{attrs:{id:"front"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front"}},[t._v("#")]),t._v(" front")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /opt/nextec/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("temp,configs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ns3cmd get s3://mgmt/configs/common.properties.front /opt/nextec/configs/common.properties\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R tomcat:tomcat /opt/nextec\n")])])]),a("p",[a("code",[t._v("/etc/httpd/conf.d/ssl.conf")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("RewriteEngine On\n\nRewriteCond %{REQUEST_URI} ^/(cht|nftu|honghwa|chtr)$ [NC]\nRewriteRule ^/(.*) https://%{HTTP_HOST}/login?corp=$1 [L]\n\nRewriteCond %{HTTP_HOST} ^www.i4u.com.tw$ [NC]\nRewriteRule ^/(.*)$ https://www.iforu.com.tw/?$corp=cht [L]\n")])])]),a("h3",{attrs:{id:"restapi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restapi"}},[t._v("#")]),t._v(" restapi")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /opt/nextec/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("temp,configs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ns3cmd get s3://mgmt/configs/common.properties.restapi /opt/nextec/configs/common.properties\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R tomcat:tomcat /opt/nextec\n")])])]),a("p",[a("code",[t._v("/etc/httpd/conf.d/ssl.conf")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("RewriteEngine On\n\nRewriteCond %{REQUEST_URI} ^/(cht|nftu|honghwa|chtr)$ [NC]\nRewriteRule ^/(.*) https://%{HTTP_HOST}/login?corp=$1 [L]\n\nRewriteCond %{HTTP_HOST} ^www.i4u.com.tw$ [NC]\nRewriteRule ^/(.*)$ https://www.iforu.com.tw/?$corp=cht [L]\n")])])]),a("h3",{attrs:{id:"admin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#admin"}},[t._v("#")]),t._v(" admin")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /opt/nextec/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("report_temp,temp,pdf,excel_config,configs/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("bank,classpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ns3cmd get s3://mgmt/configs/common.properties.admin /opt/nextec/configs/common.properties\ns3cmd -r get s3://mgmt/configs/bank/ /opt/nextec/configs/bank/\ns3cmd -r get s3://mgmt/configs/classpath/ /opt/nextec/configs/classpath/\ns3cmd -r get s3://mgmt/configs/pdf/ /opt/nextec/pdf/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R tomcat:tomcat /opt/nextec\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export CLASSPATH=/opt/nextec/configs/classpath/:/opt/tomcat/webapps/ROOT/WEB-INF/lib/FISCToolkit.jar"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /opt/tomcat/bin/setenv.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" tomcat:tomcat /opt/tomcat/bin/setenv.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),t._v(" /opt/tomcat/bin/setenv.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" tomcat restart\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);