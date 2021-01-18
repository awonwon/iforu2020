# SFTP without SSH

目標：
- 開啟 sftp 服務連線
- 不允許 ssh 連線
- chroot 在各資料夾內

## 建立帳號

1. 先建立 sftp 群組 `sftpgroup`

```sh
groupadd sftpgroup
```

2. 建立一個 `sftpuser1` 範例帳號

```sh 
useradd -G sftpgroup -s /sbin/nologin sftpuser1
```

3. 設定登入密碼

```sh
passwd sftpuser1
```

## 設定 SFTP 連線

1. 編輯 `/etc/ssh/sshd_config` 這個 `sshd` 伺服器設定檔，找到下面 `Subsystem` 的設定

```sh
vim /etc/ssh/sshd_config
```

改寫成以下設定

```sh
#Subsystem       sftp    /usr/libexec/openssh/sftp-server  #註解掉此行改寫如下
Subsystem       sftp    internal-sftp
#Match User sftpuser1    # 比對帳號
Match Group sftpgroup
        ChrootDirectory /home/%u     
        PasswordAuthentication yes
		X11Forwarding no
        AllowTcpForwarding no
        ForceCommand internal-sftp
```

- 若只用 key 認證，則參數設定為：`PasswordAuthentication no`
- ChrootDirectory：設定該群組根目錄，%u 代表使用者帳號
- 設定 Chroot 根目錄擁有者與權限：由於 `chroot` 的特殊限制，這個要 `chroot` 目錄的擁有者必須為 `root`，而且該目錄的權限也必須設定為唯讀 755 才行

```sh
chown root:root /home/sftpuser1
chmod 755 /home/sftpuser1
```

4. 先確認剛剛的設定有沒有問題，若沒問題再重啟 sshd 服務：

```sh
sshd -t && service sshd restart
```

## 連線測試

```sh
sftp sftpuser1@{server_ip}
```

- 如果出現登入錯誤

```sh
sftp> ls
remote readdir("/"): Permission denied
```

可能是 `SELinux` 造成，嘗試下列指令後重新測試看看

```sh
# -P 是將設定寫到設定檔中，可以測試確定問題後再以 -P 重下一次指令。
setsebool [-P] ssh_chroot_full_access on
restorecon -R /sftp/sftpuser1

# 若是 chroot 是指向使用者家目錄，可改下列指令。
setsebool [-P] ssh_chroot_rw_homedirs on
```

## 設定 SFTP log

若要記錄 sftp log，將 `ForceCommand` 修改如下

```
ForceCommand internal-sftp -l INFO
```

修改之後重啟 `sshd` 服務

```sh
service sshd restart
```