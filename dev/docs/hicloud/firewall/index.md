# 防火牆

假定需設定 CHTD DSIS 介接，由 DSIS sftp 連到我方 admin-1 主機。

- DSIS Source IP: 203.75.129.253
- SFTP Port: 22

## 設定一外部 IP 轉導至 admin-1，提供 DSIS 連入連線。

![firewall_01](./firewall_01.png "firewall_01")
![firewall_02](./firewall_02.png "firewall_02")
![firewall_03](./firewall_03.png "firewall_03")
![firewall_04](./firewall_04.png "firewall_04")
![firewall_05](./firewall_05.png "firewall_05")
![firewall_06](./firewall_06.png "firewall_06")

## 開通 DSIS 連入防火牆設定

![firewall_07](./firewall_07.png "firewall_07")
![firewall_08](./firewall_08.png "firewall_08")
![firewall_09](./firewall_09.png "firewall_09")
![firewall_10](./firewall_10.png "firewall_10")
![firewall_11](./firewall_11.png "firewall_11")
![firewall_12](./firewall_12.png "firewall_12")
![firewall_13](./firewall_13.png "firewall_13")
![firewall_14](./firewall_14.png "firewall_14")
![firewall_15](./firewall_15.png "firewall_15")
![firewall_16](./firewall_16.png "firewall_16")

## 設定主機防火牆

```sh
firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="203.75.129.253/32" port port="22" protocol="tcp" accept' --permanent
firewall-cmd --reload
```
