# 主機弱掃

- 弱掃軟體：NESSUS <https://zh-tw.tenable.com/products/nessus>
- 說明文件：<https://docs.tenable.com/nessus/8_6/Content/CreateAScan.htm>
- 掃描頁面：<https://nessus_host_ip/#/>
- 豁免說明：[豁免單範本](./exemption.xlsx)

## Install

on Amazon Linux AMI

```sh
rpm -ivh Nessus-8.6.0-amzn.x86_64.rpm --test
rpm -ivh Nessus-8.6.0-amzn.x86_64.rpm
```

Startup

```sh
service nessusd start   # /sbin/service nessusd start
```

Config

```sh
# /opt/nessus/sbin/nessuscli fix --list
/opt/nessus/sbin/nessuscli fix --set xmlrpc_listen_port=443
service nessusd restart
```

## Vulnerabilities

### 10756 - Apple Mac OS X Find-By-Content .DS_Store Web Directory Listing

```sh
find /var/lib/tomcat8/webapps/ROOT/ -name ".DS_Store" -print | xargs /bin/rm -f
```

or

```sh
sudo su -c 'find /var/lib/tomcat8/webapps/ROOT/ -name ".DS_Store" -print | xargs /bin/rm -f'
```

### 51192 - SSL Certificate Cannot Be Trusted

```
有風險，但已使用對應措施
```

```
ssl憑證設定在系統前端的LoadBalance上實作HA，因此不是設定在主機上。
```

### 15901 - SSL Certificate Expiry

```
有風險，但已使用對應措施
```

```
ssl憑證設定在系統前端的LoadBalance上實作HA，因此不是設定在主機上。
```

### 45411 - SSL Certificate with Wrong Hostname

```
有風險，但已使用對應措施
```

```
Domain name與ssl憑證皆設定在系統前端的LoadBalance上實作HA，因此不是設定在主機上。
```

### 57582 - SSL Self-Signed Certificate

```
有風險，但已使用對應措施
```

```
ssl憑證設定在系統前端的LoadBalance上實作HA，因此不是設定在主機上。
```
