# My PWA+Windows (branch pwagaps)

## 1. Analyze app for PWA Gaps Using Chrome Lighthouse PWA Audit

1. Open web site with Chrome
2. Select Developer Tools
3. Select Audits
    1. Device: Desktop
    2. Audits: Progressive Web App (checked), all others unchecked
    3. Throttling: Simulated Fast 3G
    4. Clear Storage (checked)

![chrome audits](https://github.com/mjfusa/PWA-Windows/blob/pwagaps/docs/chrome_2018-09-21_10-27-09.png)

5. Click 'Run Audits'

Your report should look something like:

![audit results](https://github.com/mjfusa/PWA-Windows/blob/pwagaps/docs/chrome_2018-09-21_10-29-24.png)

Our goal to be to get that score above **90**.


## 2. The good news - passed audits

Click on the 'Passed Audits' to see the PWA requirements that we are meeting.

|#|Audit|
| --- | --- |
|1|Page load is fast enough on 3G|
|2|Uses HTTPS|
|3|Redirects HTTP traffic to HTTPS|
|4|Has a <meta name="viewport"> tag with width or initial-scale|
|5|Contains some content when JavaScript is not available|

So we're meeting the requirements around load time, https, http redirect, no-JavaScript allowed and viewport tag - nice start!

## 3. The backlog - failed audits

At the top of the page we see the failed audits. Click on the drop down for each test case for more detail and suggestions for mediation. For example for the ```Does not respond with a 200 when offline``` audit suggests we add a service worker so the app works offline. This will definitely be a work item for us.

These checks validate the aspects of a Progressive Web App, as specified by the baseline PWA Checklist.

|#|Audit|
| --- | --- |
|1|Does not respond with a 200 when offline. If you're building a Progressive Web App, consider using `a service worker` so that your app can work offline.|
2|User will not be prompted to Install the Web App. Failures: No manifest was fetched, Site does not register a `service worker`.|
|3|Does not register a `service worker`|
|4|Is not configured for a custom splash screen. Failures: `No manifest was fetched.`|
|5|Address bar does not match brand colors. Failures: `No manifest was fetched`, No `<meta name="theme-color">` tag found.|
|6|Content is not sized correctly for the viewport. The viewport size is 892px, whereas the window size is 1920px.|

Boiling this down, we need to a a service worker, web manifest, and fix the resizing of content. Let's add these in the next sections.


References:

[PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist)
