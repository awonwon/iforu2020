# Redis

Redis 5 on CentOS 8

```sh
yum -y install redis
```

```sh
systemctl enable redis.service
systemctl start redis.service
```

## Config

```sh
echo never > /sys/kernel/mm/transparent_hugepage/enabled
echo 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' >> /etc/rc.local
echo 'vm.overcommit_memory = 1' >> /etc/sysctl.conf
sysctl -p /etc/sysctl.conf
```

```sh
cp /etc/redis.conf /etc/redis.conf.def
sed -i '/^bind/s/^/# /' /etc/redis.conf
sed -i '/protected-mode/s/yes/no/' /etc/redis.conf
sed -i '/tcp-backlog/s/[[:digit:]]\+$/10240/' /etc/redis.conf
```

```sh
systemctl restart redis.service
```

## Usage

```sh
redis-cli monitor
```

```sh
redis-cli flushall
```
