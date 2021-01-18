# SSL SNI 

## 何謂SNI（Server Name Indication）
SNI（Server Name Indication）是為了解決一台伺服器使用多個域名和證書的 SSL/TLS 的技術，在 SSLv3/TLSv1 中被啓用，要使用 SNI，需要用戶端和伺服器端同時滿足條件，幸好對於現代瀏覽器來說，大部分都支持 SSLv3/TLSv1，所以都可以享受 SNI 帶來的便利

- **以前的 SSL 憑證無法多個域名使用同一組 IP ?**
早期的 SSLv2 根據經典的公鑰基礎設施 PKI(Public Key Infrastructure) 設計，它預設值為：一台伺服器（或者說一個IP）只會提供一個服務，所以在 SSL 握手時，伺服器端可以確認客戶端申請的是哪張證書，但是讓人萬萬沒有想到的是，虛擬主機快速的蓬勃發展 ，就造成了一個 IP 會對應多個域名的情況。<br>
SNI技術中，在 HTTP 協議中，請求的網域名稱作為表頭（Host）放在 HTTP Header 中，所以伺服器端知道應該把請求引向哪個網域名稱，但是早期的 SSL 做不到這一點，因為在 SSL 握手的過程中，根本不會有 Host 的信息，所以伺服器端通常返回的是配置中的第一個可用憑證。因而一些較老的環境，可能會產生多個網域名稱分別配好了憑證後，但返回的始終是同一個。<br>
SNI並非可以適用於所有的狀況，還是有條件限制的，若要知道你目前使用的憑證是否可以使用SNI技術，需要從用戶端及伺服器端兩個部分來看，相對的伺服器端比較容易解決，如果是用戶端就難一點，當然你可以在網站上告訴用戶，請用戶升級他們的瀏覽器版本。

## Apache 設定
**apache httpd 2.2.12 版本之後，單一 IP 可不需裝其它模組即可安裝多張 SSL 憑證**

- 在 `/etc/httpd/conf.d/ssl.conf` 設定檔裡去做設定
1. 首先找到 `VirtualHost _default_:443`註解掉，在這個設定的上方增加設定值`NameVirtualHost *:443`，如此一來，才可以讓 Apache 辨認 domain name 來區分，然後再將

```sh
NameVirtualHost *:443
#<VirtualHost _default_:443>
```

2. 編輯 `VirtualHost` 區塊

```sh
<VirtualHost *:443>
ServerName www.iforu.com.tw
SSLEngine on
SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1
SSLCipherSuite HIGH:MED
SSLCACertificateFile  /etc/httpd/cert/CertB64.cer
SSLCertificateKeyFile /etc/httpd/cert/iforuprivate.pem
SSLCertificateFile    /etc/httpd/cert/eCA_PublicCA.pem
</VirtualHost>
```

```sh
<VirtualHost *:443>
ServerName www.i4u.com.tw
SSLEngine on
SSLProtocol all -SSLv2 -SSLv3 -TLSv1 -TLSv1.1
SSLCipherSuite HIGH:MED
SSLCACertificateFile  /etc/ssl/eCA_PublicCA-i4u.pem
SSLCertificateKeyFile /etc/ssl/i4uprivate.key
SSLCertificateFile    /etc/ssl/eCA_PublicCA-i4u.pem
</VirtualHost>
```

