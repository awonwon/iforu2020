# 帳號盤點

[附件一_系統帳號權限清查表Sample範例](./Sample.docx)

## OS

```sh
grep -Ev '/sbin/nologin|/bin/sync|/sbin/halt|/sbin/shutdown|/bin/false' /etc/passwd | awk -F: '{print $1}'
```

刪除帳號

```sh
sudo vi /etc/sudoers.d/mgmt
sudo userdel -r fakeuser
```

## DB

### PostgreSQL

```sh
sudo su - postgres
psql -c '\du'
```

刪除帳號

```sh
sudo su - postgres
psql nextec
```

```sql
REASSIGN OWNED BY uforduserdaniel TO postgres;
DROP OWNED BY uforduserdaniel;
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM uforduserdaniel;
REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM uforduserdaniel;
REVOKE ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public FROM uforduserdaniel;
DROP USER uforduserdaniel;
```

### MySQL

```sh
mysql -u root -p
```

```sql
SELECT DISTINCT User FROM mysql.user;
```

- db: serviceplus
- user: i4uadmin

```sql
GRANT ALL PRIVILEGES ON `serviceplus`.* TO 'i4uadmin'@'%';
```