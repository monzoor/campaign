# Demo Project

## [Live URL](https://monzoor-campaign.herokuapp.com/)

---

### Task List

---

1. A list of Campaign which shows

    1. The Name Status: :heavy_check_mark:
    2. The startDate Status: :heavy_check_mark:
    3. The endDate. Status: :heavy_check_mark:
    4. A flag to state if the Campaign is active (a campaign is running when the current date is inside the start-end date range). Status: :heavy_check_mark:
    5. The Budget (in USD dollar) Status: :heavy_check_mark:

2. A Search Form before the list in order to filter the list by Campaign Name. Status: :heavy_check_mark:

3. A DateRange component that filters the list of campaigns based on a Start and End Date. Status: :heavy_check_mark:
    1. If the campaign has a startDate that is contained in the range, it should show. Status: :heavy_check_mark:
    2. If the campaign has an endDate that is contained in the range, it should show. Status: :heavy_check_mark:
    3. You should not be able to select an end-date that is before the start-date. Status: :heavy_check_mark:
4. If the endDate is before the start Date, the campaign should not show.
5. Mockup
    1. The list should show in some kind of Table. Status: :heavy_check_mark:
    2. The active status should be in the green palette. Status: :heavy_check_mark:
    3. The inactive status should be in the red palette. Status: :heavy_check_mark:
6. Testing
    1. Global Method AddCampaigns can be invoked from browser js console. Status: :heavy_check_mark:
    2. That method will pass arrays of campaign and will render. Status: :heavy_check_mark:
    3. Method can be called multiple times. Status: :heavy_check_mark:
    4. New campaign data will append existing list. Status: :heavy_check_mark:

---

### Start project

```
yarn
yarn start
```
