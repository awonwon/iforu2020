# 開源軟體檢測

[White Source Software](https://www.whitesourcesoftware.com/)

利用 java 套件工具取得程式檔案的 sha1 值清單，而後上傳至開源軟體資料庫的 Server 端比對。
跟 [pwned](https://haveibeenpwned.com/) 的檢測原理相同。

## 軟體參考文件

[CHTTL White Source Doc](./20200306-OSSv2.1.3.pptx)

## Agent

登入後下載設定檔與 jar 檔，並上傳至待測主機 /opt/wss 資料夾中：

- [config](https://www.boxe.cht.com.tw/CgnyHV/ICTINV/wss-unified-agent.config?a=AFjaCRSon7Q)
- [jar](https://www.boxe.cht.com.tw/CgnyHV/ICTINV/wss-unified-agent.zip?a=-NQV8rwg0n0)

注意需設定各台受測主機的 config

```
productName=8080
projectName=IFORU_{hostname}
```

## JRE

- Java JDK 11(建議版本)
- Java JDK 8
- Java JRE 8

### 安裝版

```sh
java -version
yum install java-1.8.0-openjdk.x86_64
```

### 免安裝

[OpenJDK Download](https://jdk.java.net/archive/)

```sh
cd /opt
wget https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_linux-x64_bin.tar.gz
tar -zxvf openjdk-11.0.2_linux-x64_bin.tar.gz
```

## 檢測

開源軟體資料庫伺服器連結位置：<https://saas.whitesourcesoftware.com/agent>
依受測主機網路環境可分兩種檢測模式：

- Online Mode: 在受測主機取得清單後直接上傳到 server。
- Offline Mode: 在受測主機取得清單檔 `/opt/wss/whitesource/update-request.txt` 到其它可連線至伺服器的主機上傳。

注意事項：

- 設定的記憶體大小，依當前受測主機的可用記憶體的 **2/3**。
- 若有 `GC Exception` 的錯誤訊息，則需使用 Offline Mode 的分批檢測方式。

### Online Mode

```sh
cd /opt/wss
/opt/jdk-11.0.2/bin/java -Xmx4000m -Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8 -jar wss-unified-agent-20.1.2.jar -d / > osstest.log
```

### Offline Mode

```sh
cd /opt/wss
/opt/jdk-11.0.2/bin/java -Xmx4000m -Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8 -jar wss-unified-agent-20.1.2.jar -offline true -d / > osstest.log
```

將 /opt/wss/whitesource 中 `update-request.txt` 檔案移至可連外網路的主機上，再執下列指令上傳：

> Offline Mode 的上傳主機要將 Config 中的 productName 及 projectName 註解掉。

```sh
/opt/jdk-11.0.2/bin/java -Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8 -jar wss-unified-agent-20.1.2.jar -requestFiles update-request.txt > offline.log
```

#### 分批檢測

1. 手動將每次産出的清單檔案 `update-request.txt` 更名。
1. 第二次以後上傳需加上參數 `-updateType APPEND`。

### 本機原始碼檢測

- [config](./wss-unified-agent.config) (本機檢測用設定檔)
- productName=C10
- projectName=2020C10_IFORU

```sh
java -Xmx4096m -Dfile.encoding=UTF-8 -jar wss-unified-agent-20.1.2.jar -d D:\UFOdigit\Coding\workspace\i4u\src > osstest.log
```
