# hicloud 雲端平台

因應公司政策，雲端服務平台將由 AWS 移轉至 hicloud，以下記錄相關設定重點。
- [官方操作教學文件](https://userportal.hicloud.hinet.net/cloud-static/document/3rdup/zh_TW/index.html)

## VM Spec

比照當前 AWS EC2 的 cpu/memory 規格，挑選相近的 VM 主機。

| VM Role              | Spec     |
|----------------------|----------|
| admin                | b.2c8g   |
| front/restapi        | b.4c16g  |
| bastion              | b.1c1g   |
| postgresql           | c.16c32g |
| firstbankapi         | c.2c4g   |
| recommend/redis/solr | m.4c32g  |

## Server List

| Host       | Spec     | Inventory ID | CPU                                         |
|------------|----------|--------------|---------------------------------------------|
| bastion    | b.1c1g   | EQ2020003973 | Intel(R) Xeon(R) Gold 6240M CPU @ 2.60GHz   |
| admin-1    | b.2c8g   | EQ2020003974 | Intel(R) Xeon(R) Gold 6240M CPU @ 2.60GHz   |
| front-1    | b.4c16g  | EQ2020003972 | Intel(R) Xeon(R) Gold 6240M CPU @ 2.60GHz   |
| front-2    | b.4c16g  | EQ2020003840 | Intel(R) Xeon(R) Gold 6240M CPU @ 2.60GHz   |
| restapi-1  | b.4c16g  | EQ2020003975 | Intel(R) Xeon(R) Gold 6240M CPU @ 2.60GHz   |
| redis-solr | m.4c32g  | EQ2020003976 | Intel(R) Xeon(R) Gold 6240M CPU @ 2.60GHz   |
| syslog     | c.2c4g   | EQ2020003977 | Intel(R) Xeon(R) Gold 6240M CPU @ 2.60GHz   |
| pgsql-1    | c.16c32g | EQ2020003978 | Intel(R) Xeon(R) Gold 6240M CPU @ 2.60GHz   |
| mgmt       |          | EQ2020005358 | Intel(R) Xeon(R) CPU E5-2640 v4 @ 2.40GHz   |

## 外雲 IP List 對應

| Host       | 外雲 IP           |  外雲 SLB      |
|------------|-------------------|---------------|
| admin-1    | 10.191.73.5       | 210.59.170.2  |
| front-1    | 10.191.73.4       | 210.59.170.1  |
| front-2    | 10.191.73.2       | 210.59.170.4  |
| restapi-1  | 10.191.73.7       | 210.59.170.3  |
| redis-solr | 10.191.73.6       |               |
| syslog     | 10.191.73.3       |               |
| pgsql-1    | 10.191.74.1       |               |
| bastion    | 10.191.73.99      |               |
| mgmt       | 10.190.248.105    |               |


- [外雲防火牆審查](https://chtdeip.cht.com.tw/Portal)

- [iServer資產管理申請](https://ictinv.cht.com.tw/dashboard)