# Deploy

## front/api

CentOS 8

```sh
cd
systemctl stop tomcat.service
rm -rf /opt/tomcat/webapps/ROOT*
s3cmd get s3://mgmt/ROOT.war /opt/tomcat/webapps/
systemctl start tomcat.service && sleep 2m
systemctl stop tomcat.service && sleep 5s
sed -i 's/>\(all\|front\|admin\)</>front</' /opt/tomcat/webapps/ROOT/WEB-INF/web.xml
s3cmd get s3://mgmt/configs/AwsCredentials.properties /opt/tomcat/webapps/ROOT/WEB-INF/classes/
chown tomcat:tomcat /opt/tomcat/webapps/ROOT/WEB-INF/classes/AwsCredentials.properties
chmod o= /opt/tomcat/webapps/ROOT/WEB-INF/classes/AwsCredentials.properties
ls /opt/tomcat/webapps/ROOT/WEB-INF/lib/|wc -l
s3cmd get s3://mgmt/error.html /opt/tomcat/webapps/ROOT/
systemctl start tomcat.service && sleep 5s
tail -f /opt/tomcat/logs/catalina.out
```

## admin

Note: 只有後臺調整 maximumActiveTime 參數

```sh
cd
systemctl stop tomcat.service
rm -rf /opt/tomcat/webapps/ROOT*
s3cmd get s3://mgmt/ROOT.war /opt/tomcat/webapps/
systemctl start tomcat.service && sleep 60s
systemctl stop tomcat.service && sleep 10s
sed -i 's/>\(all\|front\|admin\)</>admin</' /opt/tomcat/webapps/ROOT/WEB-INF/web.xml
sed -i '/maximumActiveTime/s/3600000/7200000/' /opt/tomcat/webapps/ROOT/WEB-INF/classes/beans_boot.xml
s3cmd get s3://mgmt/configs/AwsCredentials.properties /opt/tomcat/webapps/ROOT/WEB-INF/classes/
chown tomcat:tomcat /opt/tomcat/webapps/ROOT/WEB-INF/classes/AwsCredentials.properties
chmod o= /opt/tomcat/webapps/ROOT/WEB-INF/classes/AwsCredentials.properties
cp -R /opt/tomcat/webapps/ROOT/WEB-INF/config/* /opt/nextec/excel_config/
chown tomcat:tomcat /opt/nextec/excel_config/*
ls /opt/tomcat/webapps/ROOT/WEB-INF/lib/|wc -l
s3cmd get s3://mgmt/error.admin.html /opt/tomcat/webapps/ROOT/error.html
systemctl start tomcat.service && sleep 5s
tail -f /opt/tomcat/logs/catalina.out
```

## 刪除目錄下所有指定的檔案(如：.DS_Store)

1. 尋找指定的檔案
```sh
find 目錄 -name "你的檔案名稱"
```

- 實際操作
```sh
find . -name ".DS_Store"
```

2. 尋找並刪除檔案

```sh
find / -name ".DS_Store" -depth -exec rm {} \;
```