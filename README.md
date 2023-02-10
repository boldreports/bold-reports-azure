This v4.2.53 version contains v4.2.52 features and below additional improvements

# Bold Reports Improvements 

### 1. Authenticate with Azure AD B2C service.

We integrated the support in bold reports server to import the user from Azure AD B2C service. Please follow the below steps to import the users into report server


* Login to the report server, then navigate to this settings URL({Bold Reports application URL}/ums/administration/sso?view=azure-ad-b2c-settings)

* Add and save your B2C settings.

* Logout the report server.

* In login page you will find the button for “Azure AD B2C” then click and proceed for login.

* Now, you will get the B2C service login page, provide your credential and proceed login.

* On successful authentication, the user will be added to the report server, and you will be redirected to the report server home page.