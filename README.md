# sdk-telegram-mini-app
JS SDK for Telegram Mini App


```shell
<script src="https://clk.affisemmp.com/sdk/mmp.js"></script>
```

### SDK initialization
```shell
AffiseMMP.init({
  affise_app_token: AFFISE_APP_TOKEN, // application token in affise mmp platform
})
```

### For events registration
`affise_event_name` should be one of https://github.com/affise/sdk-android/blob/main/README.md?plain=1#L455
```shell
AffiseMMP.registerEvents([
    {
        "affise_event_name": "Order",
        "affise_parameters": {
            "affise_p_order_id": "23123",
            "affise_p_price": "2.19",
            "affise_p_quantity": 1
        }
    }
])
```

### For send one event with simplify syntax
```shell
AffiseMMP.sendEvent("Order", {
  "affise_p_order_id": "23123",
  "affise_p_price": "2.19",
  "affise_p_quantity": 1
})
```
