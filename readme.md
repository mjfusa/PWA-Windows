# My PWA+Windows (branch addserviceworker)

A Service Worker provides fine control over caching of assets providing you with the tools to provide a performant app experience with offline functionality. Additionally, it is in a services worker where you implement the handling of web push notifications via the [Push API]( https://developer.mozilla.org/en-US/docs/Web/API/Push_API). In this section we will implement caching. See the XXXXX branch for implementation of web push notifications.

## Caching Scenarios

There are several scenarios to consider when implementing caching. See [The Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/) for a great overview and when to use each one.

At a minimum I'm choosing to implement an offline page to be displayed whenever the user is offline. Also I'll implement pre-caching to start caching assets I know I will need later.

## Offline Page

We'll use the excellent tool [PWA Builder](https://www.pwabuilder.com) to help us create our service worker.

1. Open https://www.pwabuilder.com
2. In **Provide a URL field** enter your sites url
3. Click 'Skip to build Service Worker'

One the left of this page are the various scenarios and on the right top is code to install the service worker **Code for website**, and right bottom is the service worker code.

We'll use the offline page code. (default selection)

4. Add Service Worker to app
    
    1. Add the installation code to the app. This will run when the ```index.html``` page is loaded and register the service worker.
    2. Copy `https://raw.githubusercontent.com/pwa-builder/serviceworkers/master/serviceWorker1/pwabuilder-sw-register.js` to `ClientApp/src`

    Tip: Use `wget.ps1` in Scripts folder to copy from the http location to your hard drive.

    3. Copy `https://raw.githubusercontent.com/pwa-builder/serviceworkers/master/serviceWorker1/pwabuilder-sw.js` to  `ClientApp/src`

    4. Update `ClientApp\src\index.html` `<body>` as follows:

    ```HTML
    <body>
    <app-root>Loading...</app-root>
    <script src="pwabuilder-sw-register.js"/>
    </body>
    ```
    5. Create `offline.html' and include it in the root.

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
        "pwabuilder-sw-register.js",
        "pwabuilder-sw.js",
        "offline.html"
       ],
       . . .
 ```


5. Test It

    1. Configure Chrome to localhost without valid SSL certificate:

    `chrome://flags/#allow-insecure-localhost`  


    1. Like in branch `webapp` build and start the web app:

    `dotnet run'

6. Debug It


Resources:

[Caching files with the Service worker](https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker)

[The Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/)
