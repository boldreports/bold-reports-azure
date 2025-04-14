##########################################################################
# This the powershell script to move client libraries in boldreports designerservice
##########################################################################

[CmdletBinding()]
Param(
    [string]$ClientLibraries,
    [string]$clientlibraryextractpath = "clientlibraries"
)

$rootPath = "../../reporting"
$pluginDirectories = "api","jobs","web","viewer","reportservice"
$apijson="${rootPath}/api/appsettings.Production.json;"
$jobsjson="${rootPath}/jobs/appsettings.Production.json;"
$webjson="${rootPath}/web/appsettings.Production.json;"
$viewerjson="${rootPath}/viewer/appsettings.Production.json;"
$servicejson="${rootPath}/reportservice/appsettings.json"
$jsonfiles="$apijson$jobsjson$webjson$viewerjson$servicejson"
$mysqlassemblies=""
$postgresqlassemblies=""
$oracleassemblies=""
$snowflakeassemblies=""
$Clientcollection = $ClientLibraries.Split(",")
try {
Foreach ($name in $Clientcollection)
{
Switch ($name)
{
"snowflake"{
$snowflakeassemblies="${name}=BoldReports.Data.Snowflake;"
Foreach ($dirname in $pluginDirectories)
{
$destination="$rootPath/$dirname"
Copy-Item -Path $clientlibraryextractpath/BoldReports.Data.Snowflake.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/Snowflake.Data.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/Mono.Unix.dll -Destination $destination
}
echo "snowflake libraries are installed"
}
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
"googlebigquery"{
$googlebigqueryassemblies="${name}=BoldReports.Data.GoogleBigQuery;"
Foreach ($dirname in $pluginDirectories)
{
$destination="$rootPath/$dirname"
Copy-Item -Path $clientlibraryextractpath/BoldReports.Data.GoogleBigQuery.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/Google.Cloud.BigQuery.V2.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/Google.Api.Gax.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/Google.Api.Gax.Rest.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/Google.Apis.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/Google.Apis.Auth.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/Google.Apis.Bigquery.v2.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/Google.Apis.Core.dll -Destination $destination
}
echo "googlebigquery libraries are installed"
}
"mongodb"{
$mongodbassemblies="${name}=BoldReports.Data.MongoDB;"
Foreach ($dirname in $pluginDirectories)
{
$destination="$rootPath/$dirname"
Copy-Item -Path $clientlibraryextractpath/BoldReports.Data.MongoDB.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/MongoDB.Bson.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/MongoDB.Driver.dll -Destination $destination
Copy-Item -Path $clientlibraryextractpath/DnsClient.dll -Destination $destination
}
echo "mongodb libraries are installed"
}
}
}

$clientLibraries="$mysqlassemblies$oracleassemblies$postgresqlassemblies$snowflakeassemblies$googlebigqueryassemblies$mongodbassemblies"
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