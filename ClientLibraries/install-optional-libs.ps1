##########################################################################
# This the powershell script to move client libraries in boldreports designerservice
##########################################################################

[CmdletBinding()]
Param(
    [string]$ClientLibraries,
    [string]$clientlibraryextractpath = "Libraries"
)

$rootPath = "../reporting"
$pluginDirectories = "api","jobs","web","reportservice"
$apijson="${rootPath}/api/appsettings.Production.json;"
$jobsjson="${rootPath}/jobs/appsettings.Production.json;"
$webjson="${rootPath}/web/appsettings.Production.json;"
$servicejson="${rootPath}/reportservice/appsettings.json;"
$datajson="${rootPath}/web/wwwroot/cdn/scripts/datasource/dataconnectors.json"
$jsonfiles="$apijson$jobsjson$webjson$servicejson$datajson"
$mysqlassemblies=""
$postgresqlassemblies=""
$oracleassemblies=""
$Clientcollection = $ClientLibraries.Split(",")
try {
Foreach ($name in $Clientcollection)
{
Switch ($name)
{
"mysql"{
$mysqlassemblies="${name}=BoldReports.Data.MySQL;MemSQL;MariaDB;"
Foreach ($dirname in $pluginDirectories)
{
$destination="$rootPath/$dirname"
Copy-Item -Path $clientlibraryextractpath/BoldReports.Data.MySQL.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/MySqlConnector.dll -Destination $destination
}
echo "mysql libraries are installed"
}
"oracle" {
$oracleassemblies="${name}=BoldReports.Data.Oracle;"
Foreach ($dirname in $pluginDirectories)
{
$destination="$rootPath/$dirname"
Copy-Item -Path $clientlibraryextractpath/BoldReports.Data.Oracle.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/Oracle.ManagedDataAccess.dll -Destination $destination
}
echo "oracle libraries are installed"
}
"postgresql"{
$postgresqlassemblies="${name}=BoldReports.Data.PostgreSQL;"
Foreach ($dirname in $pluginDirectories)
{
$destination="$rootPath/$dirname"
Copy-Item -Path $clientlibraryextractpath/BoldReports.Data.PostgreSQL.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/Npgsql.dll -Destination $destination
}
echo "postgresql libraries are installed"
}
}
}

$clientLibraries="$mysqlassemblies$oracleassemblies$postgresqlassemblies"
dotnet clientlibraryutility/ClientLibraryUtil.dll $clientLibraries $jsonfiles
echo "client libraries are updated"
}
catch {
    if($PSItem.Exception.Message.ToLower().Contains('used by another process')) {
     'Exception: ' + $PSItem.Exception.Message
     echo 'File Lock Exception Occurred: Please stop the site and try it'
    } else {
     'Exception: ' + $PSItem.Exception.Message
    }    
}