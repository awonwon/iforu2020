# firewalld

show current policy

```sh
# firewall-cmd --get-active-zones
firewall-cmd --list-all
```

## bastion

```sh
# 主機弱掃來源IP
firewall-cmd --zone=trusted --add-source="203.75.129.122/32" --permanent
# higate public ip
firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="202.39.167.144" port port="22" protocol="tcp" accept' --permanent
# AWS 正式環境跳板機 IP
firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="35.164.19.80" port port="22" protocol="tcp" accept' --permanent
firewall-cmd --zone=public --remove-service=cockpit --permanent
firewall-cmd --zone=public --remove-service=ssh --permanent
firewall-cmd --reload
```

## front / restapi / admin

```sh
# 主機弱掃來源IP
firewall-cmd --zone=trusted --add-source="203.75.129.122/32" --permanent
firewall-cmd --zone=public --add-service=http --permanent
firewall-cmd --zone=public --add-service=https --permanent
# Hicloud 跳板機 IP
firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.50.1" port port="22" protocol="tcp" accept' --permanent
firewall-cmd --zone=public --remove-service=cockpit --permanent
firewall-cmd --zone=public --remove-service=ssh --permanent
firewall-cmd --reload
```

## pgsql

```sh
# 主機弱掃來源IP
firewall-cmd --zone=trusted --add-source="203.75.129.122/32" --permanent
firewall-cmd --zone=public --add-service=postgresql --permanent
# Hicloud 跳板機 IP
firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.50.1" port port="22" protocol="tcp" accept' --permanent
firewall-cmd --zone=public --remove-service=cockpit --permanent
firewall-cmd --zone=public --remove-service=ssh --permanent
firewall-cmd --reload
```

## redis/solr

```sh
# 主機弱掃來源IP
firewall-cmd --zone=trusted --add-source="203.75.129.122/32" --permanent
firewall-cmd --zone=public --add-service=redis --permanent
firewall-cmd --zone=public --add-port=8983/tcp --permanent
# Hicloud 跳板機 IP
firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.50.1" port port="22" protocol="tcp" accept' --permanent
firewall-cmd --zone=public --remove-service=cockpit --permanent
firewall-cmd --zone=public --remove-service=ssh --permanent
firewall-cmd --reload
```

## syslog

```sh
# 主機弱掃來源IP
firewall-cmd --zone=trusted --add-source="203.75.129.122/32" --permanent
firewall-cmd --zone=public --add-service=syslog --permanent
firewall-cmd --zone=public --add-port=514/tcp --permanent
# Hicloud 跳板機 IP
firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.50.1" port port="22" protocol="tcp" accept' --permanent
firewall-cmd --zone=public --remove-service=cockpit --permanent
firewall-cmd --zone=public --remove-service=ssh --permanent
firewall-cmd --reload
```
