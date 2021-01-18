# 員購網系統專案維運文件

[iforu](https://www.iforu.com.tw/)
目前使用 AWS 雲端平台，主要利用網頁與手機 APP 提供企業會員的員工線上購物的服務。

|          | Region                        | Account                         |
|----------|-------------------------------|---------------------------------|
| 線上環境 | 美國西部 (奧勒岡) us-west-2   | AWS.Webconsole.Production.root  |
| 測試環境 | 亞太地區 (東京)ap-northeast-1 | AWS.Webconsole.Development.root |

## 服務企業

目前因組織調整，不再對外擴大營業，僅供下列企業會員員工使用：

- 中華電信職工福利委員會
- 全國教師工會總聯合會
- 宏華國際股份有限公司職工福利委員會
- 中華電信退休同人協進會

## 待辦事項

新進同仁資料申請：
  - ldap
  - email
  - 識別證
  - 憑證卡
  - 桌面雲
  - higate
  - jira
  - git

Hicloud設定：
  - 建立使用者帳號
  - log留存時間設定
  - 服務log設定(tomcat, pgsql, solr, redis, solr...)
  - 防毒安裝
  - 推薦系統

服務移轉作業項目：
  - dns record
  - 移轉同步資料清單
    1. db dump file
    1. s3(edm.iforu.com.tw, www.iforu.com.tw)
    1. solr
    1. (後臺)供應商信用卡資料
    1. common.properties
        - email
        - edm
        - 一銀
    1. 一銀連線測試(信用卡)
        - 連入協定問題(80 or 443)。目前hicloud設定是80會轉導到443。