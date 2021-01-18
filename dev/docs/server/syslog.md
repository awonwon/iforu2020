# syslog

```sh
# lsblk
mkfs.ext4 /dev/sdb
```

`/etc/fstab`

```sh
echo "/dev/sdb                         /var/log            ext4    defaults    1 2" >> /etc/fstab
systemctl daemon-reload
```

```sh
restorecon -Rv /var/log
/sbin/reboot
```

## server

<!-- TODO: add later -->

## client

```sh
cat >> /etc/rsyslog.conf << "EOF"

action(type="omfwd"
queue.filename="fwdRule1"
queue.maxdiskspace="1g"
queue.saveonshutdown="on"
queue.type="LinkedList"
action.resumeRetryCount="-1"
Target="192.168.30.2" Port="514" Protocol="tcp")
EOF
systemctl restart rsyslog.service
```
