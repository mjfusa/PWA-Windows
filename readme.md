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

We'll us the offline page code. (default selection)

4. Create 

Resources:

[Caching files with the Service worker](https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker)

[The Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/)
