(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{365:function(s,t,a){"use strict";a.r(t);var r=a(17),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"solr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solr"}},[s._v("#")]),s._v(" Solr")]),s._v(" "),a("p",[s._v("Solr 7 on CentOS 8")]),s._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[s._v("#")]),s._v(" Install")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://archive.apache.org/dist/lucene/solr/7.7.3/solr-7.7.3.tgz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxf solr-7.7.3.tgz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" solr-7.7.3/bin\n./install_solr_service.sh /opt/solr-7.7.3.tgz\n")])])]),a("p",[a("code",[s._v("/etc/security/limits.d/solr.conf")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/security/limits.d/solr.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"EOF"\nsolr    soft    nofile    65000 \nsolr    hard    nofile    65000 \nsolr    soft    nproc   65000 \nsolr    hard    nproc   65000 \nEOF')]),s._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" solr restart\n")])])]),a("h2",{attrs:{id:"backup-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-restore"}},[s._v("#")]),s._v(" Backup & Restore")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("/opt/solr/server/solr-webapp/webapp/WEB-INF/lib/ik-analyzer-7.6.0.jar")])]),s._v(" "),a("li",[a("code",[s._v("/opt/solr/server/solr-webapp/webapp/WEB-INF/classes")])]),s._v(" "),a("li",[a("code",[s._v("/var/solr/data/collection1")])])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" solr stop\ns3cmd get s3://mgmt/solr/ik-analyzer-7.6.0.jar /opt/solr/server/solr-webapp/webapp/WEB-INF/lib/\ns3cmd -r get s3://mgmt/solr/classes /opt/solr/server/solr-webapp/webapp/WEB-INF/\ns3cmd -r get s3://mgmt/solr/collection1 /var/solr/data/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R solr:solr /var/solr/data/collection1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" solr start\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);