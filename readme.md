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


