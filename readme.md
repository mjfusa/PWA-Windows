# My PWA+Windows (branch addserviceworker)

A Service Worker provides fine control over caching of assets providing you with the tools to provide a performant app experience with offline functionality. Additionally, it is in a services worker where you implement the handling of web push notifications via the [Push API]( https://developer.mozilla.org/en-US/docs/Web/API/Push_API). In this section we will implement caching. See the XXXXX branch for implementation of web push notifications.

## Caching Scenarios

There are several scenarios to consider when implementing caching. See [The Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/) for a great overview and when to use each one.

At a minimum we'll implement an offline page to be displayed whenever the user is offline. Also we'll implement pre-caching to start caching assets I know I will need later.

## Offline Page

We'll use the excellent tool [PWA Builder](https://www.pwabuilder.com) to help us create our service worker.

1. Open https://www.pwabuilder.com
2. In **Provide a URL field** enter your sites url
3. Click 'Skip to build Service Worker'

One the left of this page are the various scenarios and on the right top is code to install the service worker **Code for website**, and right bottom is the service worker code.

We'll use the offline page code. (default selection)

4. Add Service Worker to app
    
    1. Add the installation code to the app. This will run when the ```index.html``` page is loaded and register the service worker.
     
    2. Copy `https://raw.githubusercontent.com/GoogleChromeLabs/sw-precache/master/demo/app/js/service-worker-registration.js` to `ClientApp/src`

    Tip: Use `wget.ps1` in Scripts folder to copy from the http location to your hard drive.

    1. Copy `https://raw.githubusercontent.com/pwa-builder/serviceworkers/master/serviceWorker1/pwabuilder-sw.js` to  `ClientApp/src`

    2. In service-worker-registration.js, change `service-worker.js` to 'pwabuilder-sw.js'
    
    2. Update `ClientApp\src\index.html` `<body>` as follows:

    ```HTML
    <body>
    <app-root>Loading...</app-root>
    <script src="service-worker-registration.js"/>
    </body>
    ```
    3. Create `offline.html' and include it in the root.

    ```HTML
    <body>
    The application if offline. Please check your internet connection.
    <body>
    ```

Note: The service worker will only intercept requests from clients under the service worker's scope. The max scope for a service worker is the location of the worker. We want to catch the requests for the whole site, therefore we'll place the service worker in the root. As this is an Angular project, we need to update .angular.json to get these included in the site.

 ```json
 . . .
 "apps": [
    {
      "root": "src",
      "outDir": "dist",
      "assets": [
        "assets",
        "service-worker-registration.js",
        "pwabuilder-sw.js",
        "offline.html"
       ],
. . .
 ```
5. Add Chrome launch to debug menu
    1. Add the following to `launch.json`:
    ```json
    {
        "name": "Launch Chrome",
        "type": "chrome",
        "request": "launch",
        "sourceMaps": true,
        "url": "https://localhost:5001",
        "webRoot": "${workspaceFolder}/ClientApp",
        "runtimeArgs": [
            "--remote-debugging-port=9222"
        ]
    },
    ```

6. Debug the Service worker

    1. Select `.NET Core Launch (web)` from DEBUG side bar and press `CTRL-F5` to start web app without debugging
    2. Select `Launch Chrome` from DEBUG side bar and press F5 to launch the site in Chrome.
    3. Press F12 to start the developer tools.
    4. Click on the `Application` tab. You should see the following:
    <screen shot chrome-serviceworker-debug.png>
    5. Status should be `activated and is running`.
    6. Open the service worker by clicking on the __service-worker.js__ link.

    





Resources:

[Caching files with the Service worker](https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker)

[The Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/)
