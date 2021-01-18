# 權限跨越測試

[Burp Suite](https://portswigger.net/) 權限跨越測試工具

因員購網系統是使用 POST 的方式呼叫 API，因此無法使用下方參考文件中的 Burpsuite Authz 套件來測試。
改以 BurpSuite 中的 Repeater 來操作。

- 測試環境
  - https://www.forugoal.com.tw/cht
  
- 測試帳號
  - UserA: tlz_vic@cht.com.tw
  - UserB: tlz_bs@cht.com.tw
    - 1qaz@WSX

## 軟體參考文件

[CHTTL BurpSuite Authz Doc](./Burpsuite-Authz-guide-release.docx)

其中 Authz 的測試改為內建的 Repeater 模組。

::: tip Tips
如果瀏覽器透過 Burp Suite 連線一直沒有回應，可能跟 `Intercept` 設定有關。
因為 Intercept 預設為 `on`，所以若有重啟 Burp Suite，記得檢查此設定。
:::

## 測試

1. 使用 Firefox 透過 BurpSuite Proxy 登入會員 UserA。

1. 使用 UserA 進行一些會員操作。

1. 在 BurpSuite Proxy -> HTTP history 錄製的資料中，挑選一些要測試的 request，送到 `Repeater` 待後續測試(一次只能選一筆)。

1. 使用其它瀏覽器透過正常網路登入會員 UserB。

1. 透過瀏覽器 F12 的 `開發人員工具`，查看並記錄 UserB 的 `memberId` 登入資料。

1. 修改 Repeater 中 UserA 的 `memberId` 連線資料為 UserB 的 `memberId`。

1. 重送 request 後，觀察回應是否為 UserB 的相關資料，若是能取得資料則表示測試失敗，程式有權限跨越的問題。
