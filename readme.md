My PWA+Windows (branch webapp)
==============================

In this module you will:

-   Create a .NET Core Angular app using the .NET Core CLI

-   Open the app in Visual Studio Code

-   Debug the app in Visual Studio Code

Prerequisites
-------------

-   Windows 10 Pro version \>= 1803

-   .NET SDK. Install from
    [here](https://www.microsoft.com/net/learn/dotnet/hello-world-tutorial).

Create .Net Core Angular app
----------------------------

1.  Create a folder for your project:

>   md \\mywindowspwa

>   cd \\mywindowspwa

1.  Create ASP.NET Core Angular app, using .NET CLI:

-   `dotnet new angular`

Install development certificate
-------------------------------

Install the development cert, created during app creation, into the local user
certificate store. This will allow web browsers to treat <http://localhost> as
trusted. run the following command:

-   `dotnet dev-certs https --trust`

Test it 
--------

1. Run the following command:

-   `dotnet run`

Note: You will see the app build and then start <http://localhost:port> in your
default web browser. The output should look something like this:

\<screenshot\>

1.  CTRL-Break to stop Kestrel (Microsoft local web server)

Debug It
--------

Note: You’ll use Visual Studio Code to debug your C\# code and the [Microsoft
Edge DevTools
Preview](https://www.microsoft.com/en-us/p/microsoft-edge-devtools-preview/9mzbfrmz0mnj#activetab=pivot:overviewtab)
to debug the Angular typescript.

1.  Open Visual Studio Code. Install the [C\#
    Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)
    if you haven’t already.

2.  In Visual Studio Code, open the project folder.

3.  At the prompt, have the extension create the necessary support files for
    you. This will help you debug the app.

4.  Click on the Explorer Tab.

    1.  Open Program.cs

    2.  Place a breakpoint in CreateWebHostBuilder().

5.  Click on the Debug Tab. In the Debug Drop down select:

>   `.NET Core Launch (Web)`

>   Click the green arrow to start the debugger.

>   Note in the output window the progress of the build and web app launch.

Note: The debugger stops at the breakpoint.

1.  Press F5 to continue running app.

2.  Switch to app running in Edge

3.  Press F12 to start the Edge developer tools.

    1.  Click on the Debugger tab

    2.  Navigate to webpack:\\src\\app\\counter\\counter.component.ts

    3.  Place a breakpoint in incrementCounter()

4.  Switch back to Edge

    1.  Click the ‘Counter’ button to the Counter page.

    2.  Click on ‘Increment’

>   Note: The breakpoint is hit in the debugger.

>   \<edge-debugger.png\>

References:

[.NET Core command-line interface (CLI)
tools](https://docs.microsoft.com/en-us/dotnet/core/tools/?tabs=netcore2x)

[The Angular .NET Core 2.1 Template (Part
Two)](https://blog.jeremylikness.com/the-angular-net-core-2-1-template-part-two-d4db52550764)

Pause and Reflect
-----------------

You have created, built and run a ASP.NET Core Angular app. You have also
debugged the C\# and TypeScript code. High Five!

(Optional) Check in your created app to public GitHub repo. Note URL
--------------------------------------------------------------------

(Optional) Create Azure Web Site (requires Azure subscription)
--------------------------------------------------------------

1.  [Install Azure CLI
    2.0](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

2.  Create a resource group. For example:

-   `az group create --location westus --name myResourceGroup`

1.  Create Plan (service level / hardware config)

-   `az appservice plan create -n <plan name> -g <resource group created above>`

1.  Create Web App

-   `az webapp create --name <web app name> --resource-group <resource group
    name>  --plan <plan name>`

(Optional) Associate your GitHub repo with newly created web app
----------------------------------------------------------------

1.  Configure in Azure portal

2.  In the left menu, click Deployment Center \> GitHub \> Authorize. Follow the
    authorization prompts.

(Optional) Deploy Github source to web app, build and start
-----------------------------------------------------------

1.  From Azure CLI

`az webapp deployment source config -n <web app name> -g <resource group name>
--repo-url <git hub url> --branch <repo branch> --repository-type github`

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To sync code as you go:
```az webapp deployment source sync -n <web app name> -g <resource group name>```
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1.  Test it! Access your deployed web site.

2.  References:

3.  [Deploy continuously from
    GitHub](https://docs.microsoft.com/en-us/azure/app-service/app-service-continuous-deployment)

4.  Note: This step took 25 minutes(!) on first run. Time to walk around the
    building.

5.  [Visual Studio Code and Azure App Service - a perfect
    fit](https://azure.microsoft.com/en-us/blog/visual-studio-code-and-azure-app-service-a-perfect-fit/)
