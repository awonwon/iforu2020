# Initial

伺服端相關設定

## hostname

`/etc/hostname`

```sh
echo "your_hostname" > /etc/hostname
```

## set sysctl

```sh
/bin/sh -c 'cat > set_sysctl.sh << "EOF"
#! /bin/bash

set -o noclobber

SYSCTLCMD=/sbin/sysctl
SYSCTLCONF=/etc/sysctl.conf

function set_sysctl() {
    src_value=`$SYSCTLCMD -n $1`
    if (( $src_value < $2 )); then
        if grep -q ^$1 $SYSCTLCONF; then
            sed -i "/^$1/s/[[:digit:]]\+$/$2/" $SYSCTLCONF
        else
            echo "$1 = $2" >> $SYSCTLCONF
        fi
    fi
}

set_sysctl fs.file-max 1000000
set_sysctl net.core.somaxconn 3240000
set_sysctl net.ipv4.tcp_max_syn_backlog 3240000

$SYSCTLCMD -p /etc/sysctl.conf
EOF' \
&& /bin/sh set_sysctl.sh \
&& \rm set_sysctl.sh
```

## common packages

```sh
yum -y install epel-release
```

## chrony

```sh
yum -y install chrony
```

`/etc/chrony.conf`

```sh
sed -i '/^pool/a\server 0.tw.pool.ntp.org iburst\nserver 1.tw.pool.ntp.org iburst\nserver 2.tw.pool.ntp.org iburst\nserver 3.tw.pool.ntp.org iburst' /etc/chrony.conf
sed -i '/^pool/s/^/#/' /etc/chrony.conf
systemctl start chronyd
systemctl enable chronyd

chronyc -a makestep
```

## S3cmd

```sh
# yum -y install epel-release
yum -y install s3cmd
```

```sh
s3cmd --configure
```

```
  Access Key: your ak
  Secret Key: your sk
  Default Region: US
  S3 Endpoint: s3.hicloud.net.tw
  DNS-style bucket+hostname:port template for accessing a bucket: %(bucket)s.s3.hicloud.net.tw
  Encryption password:
  Path to GPG program: /usr/bin/gpg
  Use HTTPS protocol: True
  HTTP Proxy server name:
  HTTP Proxy server port: 0
  
Test access with supplied credentials? [Y/n] n

Save settings? [y/N] Y
```

```sh
sed -i '/^signature_v2/s/False/True/' /root/.s3cfg
sed -i '/^signurl_use_https/s/False/True/' /root/.s3cfg
sed -i '/^use_https/s/False/True/' /root/.s3cfg
sed -i '/^progress_meter/s/True/False/' /root/.s3cfg
s3cmd ls
```

## iServer Linux Agent

- Agent Version : iServer_setup_linux_3.6.7_x86_64.tar
- Server IP : 202.39.165.13
- 跳板機 Server IP：10.190.251.33
- InventoryID : [#serverlist](/hicloud/#server-list)

```sh
s3cmd get s3://mgmt/iServer_setup_linux_3.6.7_x86_64.tar ./
tar -xf iServer_setup_linux_3.6.7_x86_64.tar
cd setup
./install.sh
```

check process

```sh
ps aux | grep isAgent
```

### policy

#### 帳戶密碼最大使用期限超過90天

```sh
chage -M 90 root
sed -i '/^PASS_MAX_DAYS/s/[[:digit:]]\+$/90/' /etc/login.defs
grep ^PASS_MAX_DAYS /etc/login.defs
```

#### 閒置連線關閉時間超過30分鐘

```sh
sed -i 's/^#ClientAliveInterval.*/ClientAliveInterval 600/' /etc/ssh/sshd_config
sed -i '/ClientAliveCountMax/s/^#//' /etc/ssh/sshd_config
systemctl restart sshd
```

#### 帳戶登入失敗次數超過3次
#### 帳戶密碼最小長度小於12字元
#### 密碼設定歷程小於3代

```sh
cp /etc/pam.d/system-auth /etc/pam.d/system-auth.def
sed -i '/^auth.*pam_env.so$/a\auth\t\trequired\t\t\t\t\tpam_faillock.so preauth silent audit deny=3 unlock_time=1800' /etc/pam.d/system-auth
sed -i '/^account.*pam_unix.so$/i\account\t\trequired\t\t\t\t\tpam_faillock.so' /etc/pam.d/system-auth
sed -i '/^password.*requisite/s/pam_pwquality.*/pam_pwquality.so try_first_pass local_users_only retry=3 authtok_type= minlen=12 dcredit=-1 ucredit=-1 lcredit=-1 ocredit=-1 enforce_for_root/' /etc/pam.d/system-auth
sed -i '0,/^password/s/\(^password.*\)/\1\npassword\trequisite\t\t\t\t\tpam_pwhistory.so use_authtok remember=3/' /etc/pam.d/system-auth
```

```sh
cp /etc/pam.d/password-auth /etc/pam.d/password-auth.def
sed -i '/^auth.*pam_env.so$/a\auth\t\trequired\t\t\t\t\tpam_faillock.so preauth silent audit deny=3 unlock_time=1800' /etc/pam.d/password-auth
sed -i '/^account.*pam_unix.so$/i\account\t\trequired\t\t\t\t\tpam_faillock.so' /etc/pam.d/password-auth
```
