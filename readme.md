# Tutorial: PWA+Windows (branch addwebmanifest)

The web manifest contains the metadata used by web browser and other services [(like the Microsoft Store)](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps/microsoft-store) to determine the capabilities of your web site / application. The JSON format web manifest determines the which icons are displayed when your PWA is pinned to the Start / Home screen, the app's startup window behavior, the displayed app name and app description. 

The lack of a web manifest was noted when we did the PWA audit. In this module we'll add the web manifest and re-run the audit.

## Creating a Web App Manifest

Create the file `ClientApp\src\manifest.json' and paste in the following boilerplate:

>```json
>{
>    "dir": "ltr",
>    "lang": "en-us",
>    "name": "My PWA and Windows",
>    "scope": "/",
>    "display": "browser",
>    "start_url": "https://localhost:5001",
>    "short_name": "PWAWindows",
>    "theme_color": "transparent",
>    "description": "My sample PWA with Windows extensions",
>    "orientation": "any",
>    "background_color": "transparent",
>    "related_applications": [],
>    "prefer_related_applications": false,
>    "icons": []
>}
>```


References:

* [Get started with PWAs](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps/get-started)

* [The Web App Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/)

* [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
