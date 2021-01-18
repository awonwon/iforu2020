# Fortify SCA 靜態源碼檢測

白箱測試：
Fortify SCA <http://10.172.19.100/chttl/index.php?web=tltc>

CHT License: [Fortify License](./info/fortify.license)

**_注意 CHT 上的版本資訊_**

## Install

### SCA

Static Code Analyzer

![install_sca_01](./install/sca_01.png "install_sca_01")
![install_sca_02](./install/sca_02.png "install_sca_02")
![install_sca_03](./install/sca_03.png "install_sca_03")
![install_sca_04](./install/sca_04.png "install_sca_04")
![install_sca_05](./install/sca_05.png "install_sca_05")
![install_sca_06](./install/sca_06.png "install_sca_06")
![install_sca_07](./install/sca_07.png "install_sca_07")
![install_sca_08](./install/sca_08.png "install_sca_08")
![install_sca_09](./install/sca_09.png "install_sca_09")
![install_sca_10](./install/sca_10.png "install_sca_10")
![install_sca_11](./install/sca_11.png "install_sca_11")

### CHT Report

`C:\Program Files\Fortify\Fortify_SCA_and_Apps_20.2.0\Core\config\reports`

![install_report_01](./install/cht_report_01.png "install_report_01")

### Rulepacks

`C:\Program Files\Fortify\Fortify_SCA_and_Apps_20.2.0\Core\config\rules`

![install_rules_01](./install/rules_01.png "install_rules_01")

### ExternalMetadata

`C:\Program Files\Fortify\Fortify_SCA_and_Apps_20.2.0\Core\config\ExternalMetadata`

![install_external_metadata_01](./install/external_metadata_01.png "install_external_metadata_01")

### 中文化

`C:\Program Files\Fortify\Fortify_SCA_and_Apps_20.2.0\bin\`

- scapostinstall.cmd

![install_eng2cht_01](./install/eng2cht_01.png "install_eng2cht_01")
![install_eng2cht_02](./install/eng2cht_02.png "install_eng2cht_02")

- fortifyupdate.cmd

![install_eng2cht_03](./install/eng2cht_03.png "install_eng2cht_03")

## Scan

1. 啟動 `Audit Workbench`

	![scan_fortify_1](./scan/1.png "scan_fortify_1")

1. 選擇要掃描的專案程式資料夾 `<project>\src\main\`

	![scan_fortify_2](./scan/2.png "scan_fortify_2")

1. 設定所需的 `lib` 與 `專案設定檔` 路徑

	- 分別加入所需的 `lib`

		```
		D:\UFOdigit\Coding\workspace\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\wtpwebapps\i4u\WEB-INF\lib
		```

		```
		D:\UFOdigit\Coding\workspace\i4u\lib
		```

		```
		D:\UFOdigit\Coding\apache-tomcat-8.5.38\lib
		```

	- 分別點選剛加入的 `lib` 設為 `classpath directory`

	- 檢查 java 版本

	- 設定 Build ID 改為專案名稱

	- 設定此次掃描的設定檔儲存路徑

		![scan_fortify_3](./scan/3.png "scan_fortify_3")

1. 進階參數設定
	
	分別在最後加入下列參數：

	```
	"-encoding"
	"UTF-8"
	"-exclude"
	"D:\UFOdigit\Coding\workspace\i4u\src\main\resources\common.properties;D:\UFOdigit\Coding\workspace\i4u\src\main\resources\beans_boot.xml;D:\UFOdigit\Coding\workspace\i4u\src\main\webapp\kendo\js\kendo.all.min.js;D:\UFOdigit\Coding\workspace\i4u\src\main\webapp\assets\global\scripts\metronic.js"
	```

	```
	"-encoding"
	"UTF-8"
	```

	![scan_fortify_4](./scan/4.png "scan_fortify_4")

1. 掃描結果確認

	- `Filter Set` 選 `Security Auditor View`。

		這裡顯示的弱點數量才是我們要的。
	
		![scan_fortify_5](./scan/5.png "scan_fortify_5")
	
	- 確認掃描程式與規則版本。

		![scan_fortify_6](./scan/6.png "scan_fortify_6")
	
	- 下載 `Warnings` 資訊。
	
		![scan_fortify_7](./scan/7.png "scan_fortify_7")


1. 報表匯出

	- 點選 Tools/Reports/Generate Legacy Report

		![scan_fortify_8](./scan/8.png "scan_fortify_8")
	
	- 選擇 `CHTTLTC` 樣版
	
		![scan_fortify_9](./scan/9.png "scan_fortify_9")
	
	- 選擇 `Save Report`
	
		![scan_fortify_10](./scan/10.png "scan_fortify_10")
	
	- 確認 `Location`，**分別** 匯出 `PDF` 與 `XML` 格式的報表。

		![scan_fortify_11](./scan/11.png "scan_fortify_11")

	- 將 `XML` 匯入 Excel 檔並刪除多餘的資訊。

		保留 `Critical`、`High`、`Medium` 等級的弱點並移除多餘的欄位。

		[sample](./info/sample.xlsx)

## Info

refer

- [custom-rule](./info/custom-rule.xml)
- [custom-rule2](./info/custom-rule2.xml)

## Reports

- 202007: [fpr](./reports/202007/iforu_20200707.fpr) | [pdf](./reports/202007/iforu_20200707.pdf) | [xlsx](./reports/202007/iforu_20200707.xlsx)
