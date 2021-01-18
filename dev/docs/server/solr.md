# Solr

Solr 7 on CentOS 8

## Install

```sh
cd /opt
wget https://archive.apache.org/dist/lucene/solr/7.7.3/solr-7.7.3.tgz
tar zxf solr-7.7.3.tgz
cd solr-7.7.3/bin
./install_solr_service.sh /opt/solr-7.7.3.tgz
```

`/etc/security/limits.d/solr.conf`

```sh
cat > /etc/security/limits.d/solr.conf << "EOF"
solr    soft    nofile    65000 
solr    hard    nofile    65000 
solr    soft    nproc   65000 
solr    hard    nproc   65000 
EOF
```

```sh
service solr restart
```

## Backup & Restore

- `/opt/solr/server/solr-webapp/webapp/WEB-INF/lib/ik-analyzer-7.6.0.jar`
- `/opt/solr/server/solr-webapp/webapp/WEB-INF/classes`
- `/var/solr/data/collection1`

```sh
service solr stop
s3cmd get s3://mgmt/solr/ik-analyzer-7.6.0.jar /opt/solr/server/solr-webapp/webapp/WEB-INF/lib/
s3cmd -r get s3://mgmt/solr/classes /opt/solr/server/solr-webapp/webapp/WEB-INF/
s3cmd -r get s3://mgmt/solr/collection1 /var/solr/data/
chown -R solr:solr /var/solr/data/collection1
service solr start
```
