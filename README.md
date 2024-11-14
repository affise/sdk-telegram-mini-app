# sdk-telegram-mini-app
JS SDK for Telegram Mini App


```shell
<script src="https://sdk.affisemmp.com/tg-mini-app.js"></script>
```

### SDK initialization
```shell
AffiseMMP.init({
  affise_app_token: AFFISE_APP_TOKEN, // application token in affise mmp platform
})
```
`AffiseMMP.init` should be called after `window.onload`

### For events registration
`affise_event_name` should be one from the list below

`affise_parameters` keys should be one from the list below
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

### For send custom parameters about the user
```shell
"affise_p_param_01": window.Telegram?.WebApp?.initDataUnsafe?.user?.username || 'Unknown username',
"affise_p_param_02": window.Telegram?.WebApp?.initDataUnsafe?.user?.first_name || 'Unknown first_name',
"affise_p_param_03": window.Telegram?.WebApp?.initDataUnsafe?.user?.last_name || 'Unknown last_name',
"affise_p_param_04": window.Telegram?.WebApp?.initDataUnsafe?.user?.language_code || 'Unknown language_code',
```

### For send one event with simplify syntax
```shell
AffiseMMP.sendEvent("Order", {
  "affise_p_order_id": "23123",
  "affise_p_price": "2.19",
  "affise_p_quantity": 1
})
```

### Check status
Method `AffiseMMP.checkStatus` return `Promise` <br />
To use this method you must have sent at least one event
```shell
AffiseMMP.checkStatus()
  .then((response) => response.json())
```

<details>
<summary>List of available `affise_event_name`</summary>
- AchieveLevel </br>
- AddPaymentInfo </br>
- AddToCart </br>
- AddToWishlist </br>
- AdRevenue </br>
- ClickAdv </br>
- CompleteRegistration </br>
- CompleteStream </br>
- CompleteTrial </br>
- CompleteTutorial </br>
- Contact </br>
- ContentItemsView </br>
- CustomizeProduct </br>
- DeepLinked </br>
- Donate </br>
- FindLocation </br>
- InitiateCheckout </br>
- InitiatePurchase </br>
- InitiateStream </br>
- Invite </br>
- LastAttributedTouch </br>
- Lead </br>
- ListView </br>
- Login </br>
- OpenedFromPushNotification </br>
- Order </br>
- OrderItemAdded </br>
- OrderItemRemove </br>
- OrderCancel </br>
- OrderReturnRequest </br>
- OrderReturnRequestCancel </br>
- Purchase </br>
- Rate </br>
- ReEngage </br>
- Reserve </br>
- Sales </br>
- Schedule </br>
- Search </br>
- Share </br>
- SpendCredits </br>
- StartRegistration </br>
- StartTrial </br>
- StartTutorial </br>
- SubmitApplication </br>
- Subscribe </br>
- TravelBooking </br>
- UnlockAchievement </br>
- Unsubscribe </br>
- Update </br>
- ViewAdv </br>
- ViewCart </br>
- ViewContent </br>
- ViewItem </br>
- ViewItems </br>
- InitialSubscription </br>
- InitialTrial </br>
- InitialOffer </br>
- ConvertedTrial </br>
- ConvertedOffer </br>
- TrialInRetry </br>
- OfferInRetry </br>
- SubscriptionInRetry </br>
- RenewedSubscription </br>
- FailedSubscriptionFromRetry </br>
- FailedOfferFromRetry </br>
- FailedTrialFromRetry </br>
- FailedSubscription </br>
- FailedOfferise </br>
- FailedTrial </br>
- ReactivatedSubscription </br>
- RenewedSubscriptionFromRetry </br>
- ConvertedOfferFromRetry </br>
- ConvertedTrialFromRetry </br>
- Unsubscription </br>
</details>

### List of available keys for `affise_parameters`
-    `affise_p_achievement_id`                  `String`
-    `affise_p_adrev_ad_type`                   `String`
-    `affise_p_brand`                           `String`
-    `affise_p_brick`                           `String`
-    `affise_p_campaign_id`                     `String`
-    `affise_p_catalogue_id`                    `String`
-    `affise_p_channel_type`                    `String`
-    `affise_p_city`                            `String`
-    `affise_p_class`                           `String`
-    `affise_p_click_id`                        `String`
-    `affise_p_content`                         `String`
-    `affise_p_content_id`                      `String`
-    `affise_p_content_ids`                     `String`
-    `affise_p_content_list`                    `String`
-    `affise_p_content_name`                    `String`
-    `affise_p_content_type`                    `String`
-    `affise_p_conversion_id`                   `String`
-    `affise_p_country`                         `String`
-    `affise_p_coupon_code`                     `String`
-    `affise_p_currency`                        `String`
-    `affise_p_currency_rate`                   `Float64`
-    `affise_p_customer_segment`                `String`
-    `affise_p_customer_type`                   `String`
-    `affise_p_customer_user_id`                `String`
-    `affise_p_date_a`                          `DateTime`
-    `affise_p_date_b`                          `DateTime`
-    `affise_p_deep_link`                       `String`
-    `affise_p_departing_arrival_date`          `DateTime`
-    `affise_p_departing_departure_date`        `DateTime`
-    `affise_p_description`                     `String`
-    `affise_p_destination_a`                   `String`
-    `affise_p_destination_b`                   `String`
-    `affise_p_destination_list`                `String`
-    `affise_p_event_name`                      `String`
-    `affise_p_event_start`                     `DateTime`
-    `affise_p_event_end`                       `DateTime`
-    `affise_p_hotel_score`                     `Int64`
-    `affise_p_lat`                             `Float64`
-    `affise_p_level`                           `Int64`
-    `affise_p_long`                            `Float64`
-    `affise_p_max_rating_value`                `Int64`
-    `affise_p_new_version`                     `String`
-    `affise_p_num_adults`                      `Int64`
-    `affise_p_num_children`                    `Int64`
-    `affise_p_num_infants`                     `Int64`
-    `affise_p_old_version`                     `String`
-    `affise_p_order_id`                        `String`
-    `affise_p_param_01`                        `String`
-    `affise_p_param_02`                        `String`
-    `affise_p_param_03`                        `String`
-    `affise_p_param_04`                        `String`
-    `affise_p_param_05`                        `String`
-    `affise_p_param_06`                        `String`
-    `affise_p_param_07`                        `String`
-    `affise_p_param_08`                        `String`
-    `affise_p_param_09`                        `String`
-    `affise_p_param_10`                        `String`
-    `affise_p_payment_info_available`          `String`
-    `affise_p_pid`                             `String`
-    `affise_p_preferred_neighborhoods`         `String`
-    `affise_p_preferred_num_stops`             `Int64`
-    `affise_p_preferred_price_range`           `Int64`
-    `affise_p_preferred_star_ratings`          `Int64`
-    `affise_p_price`                           `Int64`
-    `affise_p_product_id`                      `String`
-    `affise_p_product_name`                    `String`
-    `affise_p_purchase_currency`               `String`
-    `affise_p_purchase_currency_rate`          `Float64`
-    `affise_p_quantity`                        `Int64`
-    `affise_p_rating_value`                    `Int64`
-    `affise_p_receipt_id`                      `String`
-    `affise_p_region`                          `String`
-    `affise_p_registration_method`             `String`
-    `affise_p_returning_arrival_date`          `DateTime`
-    `affise_p_returning_departure_date`        `DateTime`
-    `affise_p_revenue`                         `Int64`
-    `affise_p_review_text`                     `String`
-    `affise_p_score`                           `Int64`
-    `affise_p_search_string`                   `String`
-    `affise_p_segment`                         `String`
-    `affise_p_status`                          `String`
-    `affise_p_subscription_id`                 `String`
-    `affise_p_success`                         `String`
-    `affise_p_suggested_destinations`          `String`
-    `affise_p_suggested_hotels`                `String`
-    `affise_p_travel_start`                    `DateTime`
-    `affise_p_travel_end`                      `DateTime`
-    `affise_p_tutorial_id `                    `String`
-    `affise_p_user_score`                      `Int64`
-    `affise_p_utm_campaign`                    `String`
-    `affise_p_utm_medium`                      `String`
-    `affise_p_utm_source`                      `String`
-    `affise_p_validated`                       `String`
-    `affise_p_virtual_currency_name`           `String`
-    `affise_p_vertical`                        `String`
-    `affise_p_voucher_code`                    `String`


## Example for ReactJS
Add to `index.html` following code:
```shell
<script src="https://sdk.affisemmp.com/tg-mini-app.js"></script>
```

Example of init `AffiseMMP` and send event from React component:
```shell
function App() {
  AffiseMMP.init({
    affise_app_token: AFFISE_APP_TOKEN, // application token in affise mmp platform
  })

  return (
    <Page />
  )
}

function Page() {
  const handleSendEvent = () => {
    AffiseMMP.sendEvent("Order", {
      "affise_p_order_id": "23123",
      "affise_p_price": "2.19",
      "affise_p_quantity": 1
    })
  }

  return (
    <button onClick={handleSendEvent}>Click me for send event</button>
  )
}
```


## Example for Angular
Example of init `AffiseMMP` and send event from Angular component:
```shell
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit {
  @Input() dependency: any;

  ngOnInit() {
    AffiseMMP.init({
      affise_app_token: AFFISE_APP_TOKEN, // application token in affise mmp platform
    })
  }
}
```

#### example.component.html
```shell
<button (click)="onButtonClick()">Click me for send event</button>
```

#### typescript
```shell
onButtonClick() {
    AffiseMMP.sendEvent("Order", {
      "affise_p_order_id": "23123",
      "affise_p_price": "2.19",
      "affise_p_quantity": 1
    })
}
```
