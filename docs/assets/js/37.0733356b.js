(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{371:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"chtd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chtd"}},[s._v("#")]),s._v(" CHTD")]),s._v(" "),a("p",[s._v("目前因數分 "),a("code",[s._v("i寶貝")]),s._v(" 專案，帳務相關部份由系統自動匯出，供 DSIS 以 sftp 連線下載。")]),s._v(" "),a("h2",{attrs:{id:"dsis-介接資料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dsis-介接資料"}},[s._v("#")]),s._v(" DSIS 介接資料")]),s._v(" "),a("ul",[a("li",[s._v("介接方式：CHTD.DSIS -> EC2.ADMIN:22")]),s._v(" "),a("li",[s._v("介接服務：sftp only")]),s._v(" "),a("li",[s._v("連線帳號：chtddsis")]),s._v(" "),a("li",[s._v("驗證方式：ssh key")]),s._v(" "),a("li",[s._v("DSIS Source IP：\n"),a("ul",[a("li",[s._v("Firewall: 203.75.129.253")]),s._v(" "),a("li",[s._v("HOST: 203.75.129.143")])])])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sftp -o LogLevel=DEBUG3 chtddsis@54.148.88.230")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sftp")]),s._v(" chtddsis@54.148.88.230\n")])])]),a("h2",{attrs:{id:"ssh-credentials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-credentials"}},[s._v("#")]),s._v(" SSH Credentials")]),s._v(" "),a("p",[s._v("@CHTD.DSIS.SSHKEY")]),s._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[s._v("#")]),s._v(" Setup")]),s._v(" "),a("p",[s._v("因為只是臨時性需求，暫時先以後台主機介接，後續需考慮將專屬介接主機獨立出來。")]),s._v(" "),a("h3",{attrs:{id:"add-chtddsis-account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-chtddsis-account"}},[s._v("#")]),s._v(" add chtddsis account")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -s /sbin/nologin chtddsis\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# upload id_rsa.pub and mv to /home/chtddsis")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/chtddsis\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" .ssh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" id_rsa.pub "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .ssh/authorized_keys\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" id_rsa.pub\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R chtddsis:chtddsis .ssh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v(" .ssh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" .ssh/authorized_keys\n")])])]),a("h3",{attrs:{id:"for-sftp-only"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-sftp-only"}},[s._v("#")]),s._v(" for sftp only")]),s._v(" "),a("p",[s._v("vi /etc/ssh/sshd_config")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Subsystem       sftp    /usr/libexec/openssh/sftp-server")]),s._v("\nSubsystem       "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sftp")]),s._v("    internal-sftp\nMatch User chtddsis\n        ChrootDirectory %h\n        PasswordAuthentication no\n        X11Forwarding no\n        AllowTcpForwarding no\n        ForceCommand internal-sftp\n")])])]),a("h3",{attrs:{id:"for-chroot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-chroot"}},[s._v("#")]),s._v(" for chroot")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" root:root /home/chtddsis/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /home/chtddsis/\n")])])]),a("h3",{attrs:{id:"crontab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crontab"}},[s._v("#")]),s._v(" crontab")]),s._v(" "),a("p",[s._v("增加下列排程：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -e\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" * * * /bin/mv /opt/nextec/2recommend/reports/DSIS_ORDER* /home/chtddsis/\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);