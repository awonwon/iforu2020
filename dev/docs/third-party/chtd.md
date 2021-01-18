# CHTD

目前因數分 `i寶貝` 專案，帳務相關部份由系統自動匯出，供 DSIS 以 sftp 連線下載。

## DSIS 介接資料

- 介接方式：CHTD.DSIS -> EC2.ADMIN:22
- 介接服務：sftp only
- 連線帳號：chtddsis
- 驗證方式：ssh key
- DSIS Source IP：
  - Firewall: 203.75.129.253
  - HOST: 203.75.129.143

```sh
# sftp -o LogLevel=DEBUG3 chtddsis@54.148.88.230
sftp chtddsis@54.148.88.230
```

## SSH Credentials

@CHTD.DSIS.SSHKEY

## Setup

因為只是臨時性需求，暫時先以後台主機介接，後續需考慮將專屬介接主機獨立出來。

### add chtddsis account

```sh
useradd -s /sbin/nologin chtddsis

# upload id_rsa.pub and mv to /home/chtddsis
cd /home/chtddsis
mkdir .ssh
cat id_rsa.pub >> .ssh/authorized_keys
rm id_rsa.pub
chown -R chtddsis:chtddsis .ssh
chmod 700 .ssh
chmod 600 .ssh/authorized_keys
```

### for sftp only

vi /etc/ssh/sshd_config

```sh
#Subsystem       sftp    /usr/libexec/openssh/sftp-server
Subsystem       sftp    internal-sftp
Match User chtddsis
        ChrootDirectory %h
        PasswordAuthentication no
        X11Forwarding no
        AllowTcpForwarding no
        ForceCommand internal-sftp
```

### for chroot

```sh
chown root:root /home/chtddsis/
chmod 755 /home/chtddsis/
```

### crontab

增加下列排程：

```sh
# root
crontab -e
0  5 * * * /bin/mv /opt/nextec/2recommend/reports/DSIS_ORDER* /home/chtddsis/
```