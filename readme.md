# My PWA+Windows

## 1. Create .Net Core Angular app

1. Using .Net CLI:

    ```dotnet new angular```

2. Test it:

    ```dotnet run```

References:

[The Angular .NET Core 2.1 Template (Part Two)](https://blog.jeremylikness.com/the-angular-net-core-2-1-template-part-two-d4db52550764)

## 2. Check in your created app to public GitHub repo. Note URL

## 3. Create Azure Web Site (requires Azure subscription)

1. [Install Azure CLI 2.0 ](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

2. Create a resource group. For example:
   
    ```az group create --location westus --name myResourceGroup```

3. Create Plan (service level / hardware config)

    ```az appservice plan create -n <plan name> -g <resource group created above>```

4. Create Web App

    ```az webapp create --name <web app name> --resource-group <resource group name>  --plan <plan name>```

## 4. Associate your GitHub repo with newly created web app

1. Configure in Azure portal

2. In the left menu, click Deployment Center > GitHub > Authorize. Follow the authorization prompts. 

## 5. Deploy Github source to web app, build and start

1. From Azure CLI
    
   ```az webapp deployment source config -n <web app name> -g <resource group name> --repo-url <git hub url> --branch <repo branch> --repository-type github```

2. Test it! Access your deployed web site.

# Pause and Reflect

We now have our source code checked in, deployed and set up for CI/CD. Nice! High Five! Now let see what we need to do to make this a PWA.


References:

[Deploy continuously from GitHub](https://docs.microsoft.com/en-us/azure/app-service/app-service-continuous-deployment)

Note: This step took 25 minutes(!) on first run. Time to walk around the building.

[Visual Studio Code and Azure App Service - a perfect fit](https://azure.microsoft.com/en-us/blog/visual-studio-code-and-azure-app-service-a-perfect-fit/)

## Analyze app for PWA Gaps Using Chrome Lighthouse PWA Audit

## Add Web Manifest

## Add Service Worker

## Add Windows 10 Background Tasks

## Add Windows 10 Toast and Tile Updates

