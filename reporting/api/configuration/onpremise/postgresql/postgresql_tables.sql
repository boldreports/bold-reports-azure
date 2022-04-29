CREATE TABLE BOLDRS_User(
	Id SERIAL primary key NOT NULL,
	FirstName varchar(255) NOT NULL,
	LastName varchar(255) NULL,
	DisplayName varchar(512) NULL,
	Username varchar(255) NOT NULL,
	Email varchar(350) NOT NULL,
	Contact varchar(20) NULL,
	Picture varchar(100) NOT NULL,	
	CreatedDate timestamp NOT NULL,
	ModifiedDate timestamp NULL,
	LastLogin timestamp NULL,
	PasswordChangedDate timestamp NULL,
	DirectoryTypeId int NOT NULL DEFAULT 0,
	IdPReferenceId uuid NOT NULL,
	ExternalProviderId varchar(1024) NULL,
	CanSync smallint NOT NULL DEFAULT 0,
	IsCloseRequest smallint NOT NULL DEFAULT 0,
	IsActive smallint NOT NULL,
	IsActivated smallint NOT NULL,
	IsDeleted smallint NOT NULL)
;

CREATE TABLE BOLDRS_Group(
	Id SERIAL PRIMARY KEY NOT NULL,
	Name varchar(255) NOT NULL,
	Description varchar(1026) NULL,
	Color varchar(255) NOT NULL DEFAULT 'White',
	ModifiedDate timestamp NOT NULL,
	DirectoryTypeId int NOT NULL DEFAULT 0,
	ExternalProviderId varchar(100) NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_UserGroup(
	Id SERIAL PRIMARY KEY NOT NULL,
	GroupId int NOT NULL,
	UserId int NOT NULL,
	ModifiedDate timestamp NOT NULL,
	ExternalProviderId varchar(100) NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_UserLogType(
	Id SERIAL primary key NOT NULL,
	Name varchar(100) NOT NULL UNIQUE,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_UserLog(
	Id uuid PRIMARY KEY NOT NULL,
	ActivityId uuid NOT NULL,
	UserLogTypeId int NOT NULL,
	LogFieldId int NOT NULL,
	OldValue varchar(4000) NULL,
	NewValue varchar(4000) NULL,	
	CurrentUserId int NULL,
	TargetUserId int NULL,
	SourceTypeId int NOT NULL,
	LogStatusId int NOT NULL,
	CreatedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_UserLogin(
	Id SERIAL PRIMARY KEY NOT NULL,
	UserId int NOT NULL,
	ClientToken varchar(4000) NOT NULL,
	IpAddress varchar(50) NOT NULL,
	LoggedInTime timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_UserPreference(
	Id SERIAL PRIMARY KEY NOT NULL,
	UserId int NOT NULL,
	Language varchar(4000) NULL,
	TimeZone varchar(100) NULL,
	RecordSize int NULL,
	ItemSort varchar(4000) NULL,
	ItemFilters varchar(4000) NULL,
	Notifications varchar(4000) NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ItemType(
	Id SERIAL PRIMARY KEY NOT NULL,
	Name varchar(100) NOT NULL UNIQUE,
	IsActive smallint NULL)
;

CREATE TABLE BOLDRS_Item(
	Id uuid PRIMARY KEY NOT NULL,
	Name varchar(255) NOT NULL,
	Description varchar(1026) NULL,
	ItemTypeId int NOT NULL,
	ParentId uuid NULL,
	Extension varchar(30) NULL,
	CloneItemId uuid NULL,
	CreatedById int NOT NULL,
	ModifiedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsSampleData smallint NULL,
	DataSource varchar(1026) null,
	IsPublic smallint NOT NULL DEFAULT 0,
	IsDraft smallint NULL DEFAULT 0,
	IsUserBased smallint NULL,
	IsActive smallint NULL,
	IsLocked smallint NULL DEFAULT 0)
;

CREATE TABLE BOLDRS_ItemView(
	Id SERIAL PRIMARY KEY NOT NULL,
	ItemId uuid NOT NULL,
	UserId int NOT NULL,
	ItemViewId uuid NOT NULL,
	QueryString varchar(4000) NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ItemLogType(
	Id SERIAL PRIMARY KEY NOT NULL,
	Name varchar(100) NULL UNIQUE,
	IsActive smallint NULL)
;


CREATE TABLE BOLDRS_ItemTrash(
	Id SERIAL PRIMARY KEY NOT NULL,
	ItemId uuid NOT NULL,
	TrashedById int NOT NULL,
	TrashedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ItemTrashDeleted(
	Id SERIAL PRIMARY KEY NOT NULL,
	ItemId uuid NOT NULL,
	ItemTrashId int NOT NULL,
	DeletedById int NOT NULL,
	DeletedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ItemVersion(
	Id SERIAL PRIMARY KEY NOT NULL,
	ItemId uuid NOT NULL,
	ItemTypeId int NOT NULL,
	ItemName varchar(265) NULL,
	VersionNumber int NOT NULL,
	RolledbackVersionNumber int NULL,
	Comment varchar(1026) NULL,
	IsCurrentVersion smallint NOT NULL,
	CreatedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ItemLog(
	Id SERIAL PRIMARY KEY NOT NULL,
	ItemLogTypeId int NOT NULL,
	ItemId uuid NOT NULL,
	ItemVersionId int NOT NULL,
	SourceTypeId int NOT NULL,
	ParentId uuid NULL,
	FromCategoryId uuid NULL,
	ToCategoryId uuid NULL,
	UpdatedUserId int NOT NULL,	
	AdditionalLogInfo varchar(100) NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_PermissionEntity(
	Id SERIAL PRIMARY KEY NOT NULL,
	Name varchar(100) NOT NULL UNIQUE,
	EntityType int NOT NULL,
	ItemTypeId int NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_UserPermission(
	Id SERIAL PRIMARY KEY NOT NULL,
	PermissionAccessId int NOT NULL,
	PermissionEntityId int NOT NULL,
	ItemId uuid NULL,
	UserId int NOT NULL,
	SettingsTypeId int NULL,
	ScopeGroupId int NULL,
	ItemTypeId int NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_GroupPermission(
	Id SERIAL PRIMARY KEY NOT NULL,
	PermissionAccessId int NOT NULL,
	PermissionEntityId int NOT NULL,
	ItemId uuid NULL,
	GroupId int NOT NULL,
	SettingsTypeId int NULL,
	ScopeGroupId int NULL,
	ItemTypeId int NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_RecurrenceType(
	Id SERIAL PRIMARY KEY NOT NULL,
	Name varchar(30) NOT NULL UNIQUE,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ExportType(
	Id SERIAL PRIMARY KEY NOT NULL,
	Name varchar(20) NOT NULL UNIQUE,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ScheduleDetail(
	Id SERIAL PRIMARY KEY NOT NULL,
	ScheduleId uuid NOT NULL,
	ItemId uuid NOT NULL,
	Name varchar(150) NOT NULL,
	RecurrenceTypeId int NULL,
	RecurrenceInfo varchar(4000) NULL,
	EmailContent varchar(4000) NULL,
	Subject varchar(4000) NULL,
	IsTimeInterval smallint NOT NULL DEFAULT 0,
	ExportFileSettingsInfo varchar(4000) NULL,
	StartDate timestamp NULL,
	EndDate timestamp NULL,
	EndAfter int NULL DEFAULT 0,
	NextSchedule timestamp NULL,
	ExportTypeId int NOT NULL,
	IsEnabled smallint NOT NULL,
	IsParameterEnabled smallint NOT NULL,
	IsSaveAsFile smallint NOT NULL,
    IsSendAsMail smallint NOT NULL DEFAULT 1,
    ReportCount int NOT NULL DEFAULT 0,
    ExportPath varchar(4000) NULL,
	CreatedById int NOT NULL,
	ModifiedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL,
	IsOverwrite smallint NOT NULL DEFAULT 1,
	IsNotifySaveAs smallint NOT NULL DEFAULT 1,
	ExportFileName varchar(150) NULL,
	ScheduleExportInfo varchar(4000) NULL)
;

CREATE TABLE BOLDRS_SubscribedUser(
	Id SERIAL PRIMARY KEY NOT NULL,
	ScheduleId uuid NOT NULL,
	SubscribedById int NOT NULL,
	RecipientUserId int NOT NULL,
	SubscribedDate timestamp NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_SubscribedGroup(
	Id SERIAL PRIMARY KEY NOT NULL,
	ScheduleId uuid NOT NULL,
	SubscribedById int NOT NULL,
	RecipientGroupId int NOT NULL,
	SubscribedDate timestamp NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_SubscrExtnRecpt(
	Id SERIAL PRIMARY KEY NOT NULL,
	ScheduleId uuid NOT NULL,
	SubscribedById int NOT NULL,
	EmailIds varchar(4000) NOT NULL,
	SubscribedDate timestamp NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;
	
CREATE TABLE BOLDRS_ScheduleStatus(
	Id SERIAL PRIMARY KEY NOT NULL,
	Name varchar(100) NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ScheduleLogUser(
	Id SERIAL PRIMARY KEY NOT NULL,
	ScheduleId uuid NOT NULL,
	ScheduleStatusId int NOT NULL,
	DeliveredUserId int NOT NULL,
	DeliveredDate timestamp NOT NULL,
	IsOnDemand smallint NOT NULL,	
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ScheduleLogGroup(
	Id SERIAL PRIMARY KEY NOT NULL,
	ScheduleId uuid NOT NULL,
	ScheduleStatusId int NOT NULL,
	GroupId int NOT NULL,
	DeliveredUserId int NOT NULL,
	DeliveredDate timestamp NOT NULL,
	IsOnDemand smallint NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_SchdLogExtnRecpt(
	Id SERIAL PRIMARY KEY NOT NULL,
	ScheduleId uuid NOT NULL,
	ScheduleStatusId int NOT NULL,
	DeliveredEmailId varchar(150) NOT NULL,
	DeliveredDate timestamp NOT NULL,
	IsOnDemand smallint NOT NULL,	
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ScheduleLog(
	Id SERIAL PRIMARY KEY NOT NULL,
	ScheduleStatusId int NOT NULL,
	ScheduleId uuid NOT NULL,
	ExecutedDate timestamp NOT NULL,
	ModifiedDate timestamp NOT NULL,
	Message text NULL,
	IsOnDemand smallint NOT NULL DEFAULT (0),
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_SystemSettings(
	Id SERIAL PRIMARY KEY NOT NULL,
	Key varchar(255) NOT NULL,
	Value text NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL,
	CONSTRAINT UK_BOLDRS_SystemSettings_Key UNIQUE(Key))
;

CREATE TABLE BOLDRS_ServerVersion(
	Id int PRIMARY KEY NOT NULL,
	VersionNumber varchar(20) NOT NULL)
;

CREATE TABLE BOLDRS_Comment(
    Id SERIAL PRIMARY KEY NOT NULL,
    Comment varchar(4000) NOT NULL,
    ItemId uuid NOT NULL,
    UserId int NOT NULL,
    ParentId int NULL,
    CreatedDate timestamp NOT NULL,
    ModifiedDate timestamp NOT NULL,
    ModifiedById int NOT NULL,
    IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ItemWatch(
	Id SERIAL PRIMARY KEY NOT NULL,
	ItemId uuid NOT NULL,
	UserId int NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsWatched smallint NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ItemCommentLogType(
    Id SERIAL PRIMARY KEY NOT NULL,
    Name varchar(100) NULL UNIQUE,
    IsActive smallint NULL)
;

CREATE TABLE BOLDRS_ItemCommentLog(
    Id SERIAL PRIMARY KEY NOT NULL,
    ItemCommentLogTypeId int NOT NULL,
    CurrentUserId int NOT NULL,    
    CommentId int NOT NULL,
	Url varchar(4000) NOT NULL,
    ClubId varchar(100) NOT NULL,
    RepliedFor int NULL,
    OldValue varchar(4000) NULL,
    NewValue varchar(4000) NULL,
    NotificationTo int NULL,    
    ModifiedDate timestamp NOT NULL,
    IsRead smallint NOT NULL,
    IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_FavoriteItem(
	Id SERIAL PRIMARY KEY NOT NULL,
	UserId int NOT NULL,
	ItemId uuid NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_AzureADCredential(
	Id SERIAL primary key NOT NULL,
	TenantName varchar(255),
	ClientId varchar(100),
	ClientSecret varchar(100),
	IsActive smallint NOT NULL,
	DeleteGroupUsers smallint NOT NULL)
;

CREATE TABLE BOLDRS_ADCredential(
Id SERIAL primary key NOT NULL,
Username varchar(100),
Password varchar(100),
LdapUrl varchar(255),
EnableSsl smallint NOT NULL,
DistinguishedName varchar(150),
PortNo int NOT NULL,
IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_SAMLSettings(
	Id SERIAL primary key NOT NULL, 
	MetadataURI varchar(4000),
	Authority varchar(4000),
	DesignerClientId varchar(100),
	TenantName varchar(100), 
	MobileAppId varchar(100),
	IsEnabled smallint NOT NULL)
;

CREATE TABLE BOLDRS_UserType(
	Id SERIAL primary key NOT NULL, 
	Type varchar(100) UNIQUE)
;

CREATE TABLE BOLDRS_DBCredential(
    Id SERIAL PRIMARY KEY NOT NULL,
    DatabaseType varchar(255) NOT NULL,
    ConnectionString varchar(4000) NOT NULL,
    UserNameSchema varchar(255) NOT NULL,
    UserNameTable varchar(255) NOT NULL,
    UserNameColumn varchar(255) NOT NULL,
    FirstNameSchema varchar(255) NOT NULL,
    FirstNameTable varchar(255) NOT NULL,
    FirstNameColumn varchar(255) NOT NULL,
    LastNameSchema varchar(255) NOT NULL,
    LastNameTable varchar(255) NOT NULL,
    LastNameColumn varchar(255) NOT NULL,
    EmailSchema varchar(255) NOT NULL,
    EmailTable varchar(255) NOT NULL,
    EmailColumn varchar(255) NOT NULL,
    IsActiveSchema varchar(255) NOT NULL,
    IsActiveTable varchar(255) NOT NULL,
    IsActiveColumn varchar(255) NOT NULL,
    Status  varchar(255) NOT NULL,
    ActiveStatusValue  varchar(255) NOT NULL,
    EmailRelationId int NULL,
    FirstNameRelationId int NULL,
    LastNameRelationId int NULL,
    IsActiveRelationId int NULL,
    IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_TableRelation(
    Id SERIAL PRIMARY KEY NOT NULL,
    LeftTable varchar(255) NOT NULL,
    LeftTableColumnName varchar(255) NOT NULL,	
    LeftTableCondition  varchar(255) NOT NULL,
    LeftTableName  varchar(255) NOT NULL,
    LeftTableSchema varchar(255) NOT NULL,
    Relationship varchar(255) NOT NULL,
    RightTable varchar(255) NOT NULL,
    RightTableColumnName varchar(255) NOT NULL,	
    RightTableCondition  varchar(255) NOT NULL,
    RightTableName  varchar(255) NOT NULL,
    RightTableSchema varchar(255) NOT NULL)
;

CREATE TABLE BOLDRS_Source(
    Id SERIAL PRIMARY KEY NOT NULL,
    Name varchar(100) NULL UNIQUE,
    IsActive smallint NULL)
;

CREATE TABLE BOLDRS_PermissionAccess(
	Id SERIAL PRIMARY KEY NOT NULL,
	Name varchar(100) UNIQUE NOT NULL,
	AccessId int UNIQUE NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_PermissionAccEntity(
	Id SERIAL PRIMARY KEY NOT NULL,
	PermissionEntityId int NOT NULL,
	PermissionAccessId int NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_PermissionLogType(
	Id SERIAL primary key NOT NULL,
	Name varchar(100) NOT NULL UNIQUE,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_UserPermissionLog(
	Id SERIAL primary key NOT NULL,
	UserId int NOT NULL,	
	AffectedUserId int NOT NULL,
	UserPermissionId int NULL,
	LogTypeId int NULL,
	CreatedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_GroupPermissionLog(
	Id SERIAL primary key NOT NULL,
	UserId int NOT NULL,	
	AffectedGroupId int NOT NULL,
	GroupPermissionId int NULL,
	LogTypeId int NULL,
	CreatedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_SystemLogType(
	Id SERIAL primary key NOT NULL,
	Name varchar(100) NOT NULL UNIQUE,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_LogStatus(
	Id SERIAL PRIMARY KEY NOT NULL,
	Name varchar(100) NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_SystemLog(
	Id SERIAL primary key NOT NULL,
	SystemLogTypeId int NOT NULL,
	LogFieldId int NOT NULL,
	OldValue varchar(4000) NULL,
	NewValue varchar(4000) NULL,
	LogStatusId int NOT NULL,
	UpdatedUserId int NOT NULL,
	CreatedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_LogModule(
	Id SERIAL primary key NOT NULL,
	Name varchar(1026) NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_LogField(
	Id SERIAL primary key NOT NULL,
	ModuleId int NOT NULL,
	Field varchar(1026) NOT NULL,
	Description varchar(1026) NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_GroupLogType(
	Id SERIAL primary key NOT NULL,
	Name varchar(100) NOT NULL UNIQUE,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_GroupLog(
	Id uuid PRIMARY KEY NOT NULL,
	ActivityId uuid NOT NULL,
	GroupLogTypeId int NOT NULL,
	LogFieldId int NOT NULL,
	OldValue varchar(4000) NULL,
	NewValue varchar(4000) NULL,	
	CurrentUserId int NULL,
	TargetGroupId int NULL,
	SourceTypeId int NOT NULL,
	LogStatusId int NOT NULL,
	CreatedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ProcessOption(
	Id SERIAL PRIMARY KEY NOT NULL,
	ItemId uuid NOT NULL,
	ProcessOption varchar(4000) NULL,
	NextScheduleDate timestamp NULL,
	CreatedDate timestamp NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ProcessOptionMap(
	Id SERIAL PRIMARY KEY NOT NULL,
	ProcessOptionId int NOT NULL,
	ItemId uuid NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ReportDataSource(
	Id SERIAL PRIMARY KEY NOT NULL,
	ReportItemId uuid NOT NULL,
	DataSourceItemId uuid NOT NULL,
	Name varchar(255) NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_DataSourceDetail(
	Id SERIAL PRIMARY KEY NOT NULL,
	DataSourceId uuid NOT NULL,
	Password varchar(255) NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_DatasetLinkage(
	Id SERIAL PRIMARY KEY NOT NULL,
	DatasetItemId uuid NOT NULL,
	ItemId uuid NOT NULL,
	Name varchar(255) NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ScheduleParameter(
    Id SERIAL PRIMARY KEY NOT NULL,
    ScheduleId uuid NOT NULL,
    Parameter varchar(4000) NOT NULL,
    IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_DeploymentReports(
	Id SERIAL primary key NOT NULL,
	ItemId uuid NOT NULL,
	ItemName varchar(255) NOT NULL,
	CategoryName varchar(255) NOT NULL,
	IsReportLocked smallint NOT NULL,
	IsDatasourceLocked smallint NOT NULL,
	IsDatasetLocked smallint NOT NULL,
	Description varchar(1026) NULL,
	CreatedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ExternalSites(
	Id SERIAL primary key NOT NULL,
	Name varchar(255) NOT NULL,
	ClientId varchar(255) NOT NULL,
	ClientSecret varchar(255) NULL,
	SiteURL varchar(255) NULL,
	CreatedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_PublishedItem(
	Id uuid primary key NOT NULL,
	TenantId uuid NOT NULL,
	ItemId uuid NOT NULL,
	ItemName varchar(255) NOT NULL,
	Description varchar(1026) NULL,
	CategoryName varchar(255) NULL,
	UserId int NOT NULL,
	DestinationItemId uuid NOT NULL,
	PublishType varchar(255) NOT NULL,
	IsLocked smallint NOT NULL,
	CreatedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_PublishJobs(
	Id SERIAL primary key NOT NULL,
	PublishId uuid NOT NULL,
	UserId int NOT NULL,
	JobDetails varchar(4000) NOT NULL,
	CreatedDate timestamp NOT NULL,
	CompletedDate timestamp NOT NULL,
	Status varchar(255) NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_UserAttributes(
    Id SERIAL primary key NOT NULL,
	Name varchar(255) NOT NULL,
	Value varchar(4000) NOT NULL,
	Description varchar(1026) NULL,
	Encrypt smallint NOT NULL,
	UserId int NOT NULL,
	CreatedById int NOT NULL,
	ModifiedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
    ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_GroupAttributes(
    Id SERIAL primary key NOT NULL,
	Name varchar(255) NOT NULL,
	Value varchar(4000) NOT NULL,
	Description varchar(1026) NULL,
	Encrypt smallint NOT NULL,
	GroupId int NOT NULL,
	CreatedById int NOT NULL,
	ModifiedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
    ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_SiteAttributes(
    Id SERIAL primary key NOT NULL,
	Name varchar(255) NOT NULL,
	Value varchar(4000) NOT NULL,
	Description varchar(1026) NULL,
	Encrypt smallint NOT NULL,
	CreatedById uuid NOT NULL,
	ModifiedById uuid NOT NULL,
	CreatedDate timestamp NOT NULL,
    ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_SettingsType(
	Id SERIAL PRIMARY KEY NOT NULL,
	Name varchar(100) NOT NULL UNIQUE,
	IsActive smallint NULL);
	
---- PASTE INSERT Queries below this section --------

INSERT into BOLDRS_ItemType (Name,IsActive) VALUES (N'Category',1)
;
INSERT into BOLDRS_ItemType (Name,IsActive) VALUES (N'Dashboard',1)
;
INSERT into BOLDRS_ItemType (Name,IsActive) VALUES (N'Report',1)
;
INSERT into BOLDRS_ItemType (Name,IsActive) VALUES (N'Datasource',1)
;
INSERT into BOLDRS_ItemType (Name,IsActive) VALUES (N'Dataset',1)
;
INSERT into BOLDRS_ItemType (Name,IsActive) VALUES (N'File',1)
;
INSERT into BOLDRS_ItemType (Name,IsActive) VALUES (N'Schedule',1)
;
insert into BOLDRS_ItemType (Name,IsActive) values (N'Widget',1)
;
insert into BOLDRS_ItemType (Name,IsActive) values (N'ItemView',1)
;
insert into BOLDRS_ItemType (Name,IsActive) values (N'Slideshow',1)
;
INSERT into BOLDRS_ItemType (Name, IsActive) Values (N'Settings',1)
; 
INSERT INTO BOLDRS_ItemType (Name, IsActive) Values (N'User Management',1)
;
INSERT INTO BOLDRS_ItemType (Name, IsActive) Values (N'Permissions',1)
;

INSERT into BOLDRS_SettingsType (Name,IsActive) VALUES (N'Site Settings',1)
;
INSERT into BOLDRS_SettingsType (Name,IsActive) VALUES (N'Reports Settings',1)
;
INSERT into BOLDRS_SettingsType (Name,IsActive) VALUES (N'Embed Settings',1)
;
INSERT into BOLDRS_SettingsType (Name, IsActive) VALUES (N'Connectors',1)
;
INSERT into BOLDRS_SettingsType (Name,IsActive) VALUES (N'Email Settings',1)
;
INSERT into BOLDRS_SettingsType (Name,IsActive) VALUES (N'Accounts Settings',1)
;
INSERT into BOLDRS_SettingsType (Name,IsActive) values (N'User Directory Settings',1)
;
INSERT into BOLDRS_SettingsType (Name,IsActive) values (N'Authentication Settings',1)
;
INSERT into BOLDRS_SettingsType (Name,IsActive) Values (N'Notification Settings',1)
;
INSERT into BOLDRS_SettingsType (Name,IsActive) Values (N'Manage License',1)
;
INSERT into BOLDRS_SettingsType (Name,IsActive) Values (N'Support Settings',1)
;
INSERT into BOLDRS_SettingsType (Name,IsActive) Values (N'Subscription',1)
;
INSERT into BOLDRS_SettingsType (Name,IsActive) Values (N'Payments',1)
;

INSERT into BOLDRS_ItemLogType (Name,IsActive) VALUES ( N'Added',1)
;
INSERT into BOLDRS_ItemLogType (Name,IsActive) VALUES ( N'Edited',1)
;
INSERT into BOLDRS_ItemLogType (Name,IsActive) VALUES ( N'Deleted',1)
;
INSERT into BOLDRS_ItemLogType (Name,IsActive) VALUES ( N'Moved',1)
;
INSERT into BOLDRS_ItemLogType (Name,IsActive) VALUES ( N'Copied',1)
;
INSERT into BOLDRS_ItemLogType (Name,IsActive) VALUES ( N'Cloned',1)
;
INSERT into BOLDRS_ItemLogType (Name,IsActive) VALUES ( N'Trashed',1)
;
INSERT into BOLDRS_ItemLogType (Name,IsActive) VALUES ( N'Restored',1)
;
INSERT into BOLDRS_ItemLogType (Name,IsActive) VALUES ( N'Rollbacked',1)
;
INSERT into BOLDRS_ItemLogType (Name,IsActive) VALUES ( N'Visited',1)
;

INSERT into BOLDRS_ExportType (Name,IsActive) VALUES (N'Excel', 1)
;
INSERT into BOLDRS_ExportType (Name,IsActive) VALUES (N'HTML', 1)
;
INSERT into BOLDRS_ExportType (Name,IsActive) VALUES (N'PDF', 1)
;
INSERT into BOLDRS_ExportType (Name,IsActive) VALUES (N'Word', 1)
;
INSERT into BOLDRS_ExportType (Name,IsActive) VALUES (N'Image', 1)
;
INSERT into BOLDRS_ExportType (Name,IsActive) VALUES (N'PPT', 1)
;
INSERT into BOLDRS_ExportType (Name,IsActive) VALUES (N'CSV', 1)
;
INSERT into BOLDRS_ExportType (Name,IsActive) VALUES (N'XML', 1)
;

INSERT into BOLDRS_RecurrenceType (Name,IsActive) VALUES (N'Daily', 1)
;
INSERT into BOLDRS_RecurrenceType (Name,IsActive) VALUES (N'DailyWeekDay', 1)
;
INSERT into BOLDRS_RecurrenceType (Name,IsActive) VALUES (N'Weekly', 1)
;
INSERT into BOLDRS_RecurrenceType (Name,IsActive) VALUES (N'Monthly', 1)
;
INSERT into BOLDRS_RecurrenceType (Name,IsActive) VALUES (N'MonthlyDOW', 1)
;
INSERT into BOLDRS_RecurrenceType (Name,IsActive) VALUES (N'Yearly', 1)
;
INSERT into BOLDRS_RecurrenceType (Name,IsActive) VALUES (N'YearlyDOW', 1)
;
INSERT into BOLDRS_RecurrenceType (Name,IsActive) VALUES (N'Time', 1)
;

INSERT into BOLDRS_ScheduleStatus (Name,IsActive) VALUES (N'Success', 1)
;
INSERT into BOLDRS_ScheduleStatus (Name,IsActive) VALUES (N'Failure', 1)
;
INSERT into BOLDRS_ScheduleStatus (Name,IsActive) VALUES (N'Run', 1)
;

INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES (N'All Reports',1,3,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'Reports in Category',2,1,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'Specific Report',0,3,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'All Categories',1,1,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'Specific Category',0,1,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'All Data Sources',1,4,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'Specific Data Source',0,4,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'All Files',1,6,0)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'Specific File',0,6,0)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'All Schedules',1,7,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'Specific Schedule',0,7,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'All Dashboards',1,2,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'Dashboards in Category',2,1,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'Specific Dashboard',0,2, 1)
;
insert into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) values(N'All Widgets',1,8,1)
;
insert into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) values(N'Specific Widget',0,8,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'All Datasets',1,5,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'Specific Dataset',0,5,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'Specific ItemView',0,9,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES (N'All ItemViews',1,9,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES (N'Specific Slideshow',0,10,1)
;
INSERT into BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES (N'All Slideshow',1,10,1)
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES (N'Specific Settings',0,11,1)
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES (N'All Settings',1,11,1)
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES (N'Specific Group',0,12,1)
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES (N'Users and Groups',1,12,1)
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES (N'Specific Permissions',0,13,1)
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES (N'All Permissions',1,13,1)
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES (N'All Groups',1,12,1)
;

INSERT into BOLDRS_Group (Name,Description,Color,ModifiedDate,DirectoryTypeId,IsActive) VALUES (N'System Administrator','Has administrative rights for the reports','#ff0000',now() at time zone 'utc', 1, 1)
;

INSERT into BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( N'Added',1)
;
INSERT into BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( N'Edited',1)
;
INSERT into BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( N'Deleted',1)
;
INSERT into BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( N'Upvoted',1)
;
INSERT into BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( N'Downvoted',1)
;
INSERT into BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( N'Replied',1)
;
INSERT into BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( N'UserMention',1)
;
INSERT into BOLDRS_UserType(Type) values(N'Server User')
;
INSERT into BOLDRS_UserType(Type) values(N'Active Directory User')
;
INSERT into BOLDRS_UserType(Type) values(N'Federation User')
;

INSERT into BOLDRS_RecurrenceType (Name,IsActive) VALUES (N'Hourly',1)
;


INSERT INTO BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES (N'Create',1,1)
;
INSERT INTO BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES (N'Read',2,1)
;
INSERT INTO BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES (N'Read, Write',6,1)
;
INSERT INTO BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES (N'Read, Write, Delete',14,1)
;
INSERT INTO BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES (N'Download',16,1)
;
--INSERT INTO BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES (N'Read, Download',18,1)
--;
--INSERT INTO BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES (N'Read, Write, Download',22,1)
--;
--INSERT INTO BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES (N'Read, Write, Delete, Download',30,1)
--;

INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (4,1,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (6,1,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (8,1,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (10,1,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (1,1,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (2,1,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (17,1,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (29,1,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (4,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (5,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (6,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (7,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (8,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (9,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (10,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (11,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (1,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (2,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (3,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (17,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (18,2,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (4,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (5,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (6,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (7,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (8,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (9,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (10,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (11,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (1,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (2,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (3,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (17,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (18,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (23,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (24,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (25,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (26,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (27,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (28,3,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (4,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (5,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (6,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (7,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (8,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (9,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (10,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (11,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (1,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (2,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (3,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (17,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (18,4,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (1,5,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (2,5,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (3,5,1)
;

INSERT into BOLDRS_PermissionLogType (Name,IsActive) VALUES ( N'PermissionAdded',1)
;
INSERT into BOLDRS_PermissionLogType (Name,IsActive) VALUES ( N'PermissionRemoved',1)
;

INSERT into BOLDRS_Source (Name,IsActive) VALUES ( N'Web',1)
;
INSERT into BOLDRS_Source (Name,IsActive) VALUES ( N'API',1)
;
INSERT into BOLDRS_Source (Name,IsActive) VALUES ( N'Schedule',1)
;

INSERT into BOLDRS_LogStatus (Name,IsActive) VALUES ( N'Start',1)
;
INSERT into BOLDRS_LogStatus (Name,IsActive) VALUES ( N'Success',1)
;
INSERT into BOLDRS_LogStatus (Name,IsActive) VALUES ( N'Fail',1)
;

INSERT into BOLDRS_SystemLogType (Name,IsActive) VALUES (N'Update',1)
;
INSERT into BOLDRS_SystemLogType (Name,IsActive) VALUES (N'Add',1)
;
INSERT into BOLDRS_SystemLogType (Name,IsActive) VALUES (N'Delete',1)
;
INSERT into BOLDRS_SystemLogType (Name,IsActive) VALUES (N'Activate',1)
;
INSERT into BOLDRS_SystemLogType (Name,IsActive) VALUES (N'Retry',1)
;
INSERT into BOLDRS_SystemLogType (Name,IsActive) VALUES (N'Enable',1)
;
INSERT into BOLDRS_SystemLogType (Name,IsActive) VALUES (N'Disable',1)
;
INSERT into BOLDRS_SystemLogType (Name,IsActive) VALUES (N'Visit',1)
;

INSERT into BOLDRS_UserLogType (Name,IsActive) VALUES ( N'Add',1)
;
INSERT into BOLDRS_UserLogType (Name,IsActive) VALUES ( N'Update',1)
;
INSERT into BOLDRS_UserLogType (Name,IsActive) VALUES ( N'Delete',1)
;
INSERT into BOLDRS_UserLogType (Name,IsActive) VALUES ( N'Synchronization',1)
;
INSERT into BOLDRS_UserLogType (Name,IsActive) VALUES ( N'Import',1)
;
INSERT into BOLDRS_UserLogType (Name,IsActive) VALUES ( N'Visit',1)
;

INSERT into BOLDRS_GroupLogType (Name,IsActive) VALUES ( N'Add',1)
;
INSERT into BOLDRS_GroupLogType (Name,IsActive) VALUES ( N'Update',1)
;
INSERT into BOLDRS_GroupLogType (Name,IsActive) VALUES ( N'Delete',1)
;
INSERT into BOLDRS_GroupLogType (Name,IsActive) VALUES ( N'Synchronization',1)
;
INSERT into BOLDRS_GroupLogType (Name,IsActive) VALUES ( N'Import',1)
;
INSERT into BOLDRS_GroupLogType (Name,IsActive) VALUES ( N'Visit',1)
;
INSERT into BOLDRS_GroupLogType (Name,IsActive) VALUES ( N'UserAdd',1)
;
INSERT into BOLDRS_GroupLogType (Name,IsActive) VALUES ( N'UserRemove',1)
;

INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'SystemSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'NotificationSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'NotificationAdministration',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'AzureADDetail',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'DatabaseConfiguration',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'TenantBillingSubscriptionInfo',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'CardDetail',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'UserDirectoryAzureSchedule',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'UserDirectoryDatabaseSchedule',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'SystemLogGeneral',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'User',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'UserManagementPages',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'UserManagement',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'UserPreferenceNotification',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'Group',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'GroupManagementPages',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'WindowsADDetail',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'UserDirectoryWindowsSchedule',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'EmailSettings',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'DateFormat',N'SiteSettings.DateFormat',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'TimeZone',N'SiteSettings.TimeZone',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'TimeFormat',N'SiteSettings.TimeFormat',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'OrganizationName',N'SiteSettings.OrganizationName',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'LoginLogo',N'SiteSettings.LoginScreenLogo',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'EmailLogo',N'SiteSettings.EmailLogo',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'MainScreenLogo',N'SiteSettings.HeaderLogo',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'FavIcon',N'SiteSettings.Favicon',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'IsEnableCopyrightInfo',N'SiteSettings.ShowCopyrightInformation',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'IsEnablePoweredBySyncfusion',N'SiteSettings.ShowPoweredBySyncfusion',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (2,N'EnableSystemNotification',N'NotificationSettings.SystemNotifications.DefaultSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (2,N'EnableMailNotification',N'NotificationSettings.MailNotifications.DefaultSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (2,N'EnableAutoWatchOfCommentsOfCreatedItems',N'NotificationSettings.AutowatchCommentsOfCreatedItems.DefaultSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (2,N'EnableAutoWatchOfCommentsOfAccessibleItems',N'NotificationSettings.AutowatchCommentsOfAccessibleItems.DefaultSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) Values (2,N'EnableReportScheduleNotification',N'NotificationSettings.ReportScheduleNotification.DefaultSetting',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) Values (2,N'EnableUserScheduleNotification',N'NotificationSettings.UserScheduleNotification.DefaultSetting',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,N'EnableSystemNotification',N'NotificationSettings.SystemNotifications.Allow',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,N'EnableMailNotification',N'NotificationSettings.MailNotifications.Allow',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,N'EnableAutoWatchOfCommentsOfCreatedItems',N'NotificationSettings.AutowatchCommentsOfCreatedItems.Allow',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,N'EnableAutoWatchOfCommentsOfAccessibleItems',N'NotificationSettings.AutowatchCommentsOfAccessibleItems.Allow',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,N'EnableReportScheduleNotification',N'NotificationSettings.ReportScheduleNotification.Allow',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,N'EnableUserScheduleNotification',N'NotificationSettings.UserScheduleNotification.Allow',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (4,N'TenantName',N'UserDirectory.Azure.TenantName',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (4,N'ClientId',N'UserDirectory.Azure.ClientId',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (4,N'ClientKey',N'UserDirectory.Azure.ClientSecret',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,N'ServerType',N'UserDirectory.Database.DatabaseType',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,N'ServerName',N'UserDirectory.Database.ServerName',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,N'UserName',N'UserDirectory.Database.Username',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,N'Password',N'UserDirectory.Database.Password',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,N'DatabaseName',N'UserDirectory.Database.DatabaseName',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,N'AuthenticationType',N'UserDirectory.Database.Authentication',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,N'DSN',N'UserDirectory.Database.DSN',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,N'Port',N'UserDirectory.Database.Port',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,N'FullName',N'Payments.BillingAddress.Name',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,N'Email',N'Payments.BillingAddress.Email',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,N'AddressLine1',N'Payments.BillingAddress.AddressLine1',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,N'AddressLine2',N'Payments.BillingAddress.AddressLine2',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,N'City',N'Payments.BillingAddress.City',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,N'State',N'Payments.BillingAddress.State',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,N'Country',N'Payments.BillingAddress.Country',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,N'ZipCode',N'Payments.BillingAddress.ZipCode',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,N'FullName',N'Payments.BillingAddress.Name',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,N'Email',N'Payments.BillingAddress.Email',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,N'Address1',N'Payments.BillingAddress.AddressLine1',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,N'Address2',N'Payments.BillingAddress.AddressLine2',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,N'City',N'Payments.BillingAddress.City',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,N'State',N'Payments.BillingAddress.State',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,N'Country',N'Payments.BillingAddress.Country',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,N'ZipCode',N'Payments.BillingAddress.ZipCode',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (8,N'IsEnabled',N'UserDirectory.Azure.Schedule.IsEnabled',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (8,N'RecurrenceType',N'UserDirectory.Azure.Schedule.RecurrenceType',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (8,N'RecurrenceInfo',N'UserDirectory.Azure.Schedule.Recurrence',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (8,N'StartDateString',N'UserDirectory.Azure.Schedule.Time',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (9,N'IsEnabled',N'UserDirectory.Database.Schedule.IsEnabled',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (9,N'RecurrenceType',N'UserDirectory.Database.Schedule.RecurrenceType',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (9,N'RecurrenceInfo',N'UserDirectory.Database.Schedule.Recurrence',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (9,N'StartDateString',N'UserDirectory.Database.Schedule.Time',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'Subscription',N'Subscription',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'NotificationSettings',N'NotificationSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.Azure.Schedule',N'UserDirectory.Azure.Schedule',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.Database.Schedule',N'UserDirectory.Database.Schedule',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.Azure',N'UserDirectory.Azure',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'SystemSettings',N'SystemSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.Database',N'UserDirectory.Database',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'ReportSettings',N'ReportSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'ReportSettings.PublicReports',N'ReportSettings.PublicReports',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'ReportSettings.ScheduleCustomBody',N'ReportSettings.ScheduleCustomBody',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'ConciergeSupport.ResourceAccess',N'ConciergeSupport.ResourceAccess',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'ConciergeSupport',N'ConciergeSupport',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'Payments',N'Payments',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'Payments.Card',N'Payments.Card',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'Payments.BillingAddress',N'Payments.BillingAddress',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'Subscription',N'Subscription',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'Subscription.Plan',N'Subscription.Plan',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'SiteSettings',N'SiteSettings',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'Contact',N'Contact',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'CreatedDate',N'CreatedDate',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'DisplayName',N'DisplayName',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'Email',N'Email',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'Username',N'Username',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'FirstName',N'FirstName',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'IsActivated',N'IsActivated',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'IsActive',N'IsActive',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'IsDeleted',N'IsDeleted',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'LastLogin',N'LastLogin',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'LastName',N'LastName',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'ModifiedDate',N'ModifiedDate',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'Picture',N'Picture',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'Password',N'Password',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'PasswordChangedDate',N'PasswordChangedDate',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'DirectoryTypeId',N'DirectoryTypeId',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'IdPReferenceId',N'IdPReferenceId',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'ExternalProviderId',N'ExternalProviderId',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'CanSync',N'CanSync',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,N'IsCloseRequest',N'IsCloseRequest',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'UserPermissionsManagement',N'Manage User Permissions',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'ConciergeSupportIncidents',N'Concierge Support Incidents',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'ViewConciergeSupportIncident',N'View Concierge Support Incident',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'UserConnectedAccounts',N'User Connected Accounts',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'UserProfile',N'User Profile',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'UserPermission',N'User Permission',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'AzureUserImport',N'Azure AD User Import',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'DatabaseUserImport',N'Database User Import',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'UserManagementIndex',N'User Management',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'DatabaseUsersSynchronization',N'Database users Synchronization',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'AzureUsersSynchronization',N'Azure AD users Synchronization',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'CsvUserImport',N'CSV User Import',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'UserManagementProfile',N'User Management Profile',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'User',N'User',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'Users',N'Users',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'CsvUsers',N'CSV Users',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'UserActiveStatus',N'User Active Status',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'DatabaseUsers',N'Database Users',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'AzureUsers',N'Azure Users',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'HomepageInProfile',N'Homepage in User Profile',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'DefaultHomepage',N'Default Homepage of User',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'UserProfilePicture',N'User Profile Picture',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'ProfileNotificationSettings',N'Notification Settings in Profile',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'UserPassword',N'User Password',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,N'EnableAutoWatchOfCommentsOfAccessibleItems',N'Auto Watch Of Comments Of Accessible Items',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,N'EnableAutoWatchOfCommentsOfCreatedItems',N'Auto Watch Of Comments Of Created Items',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,N'EnableMailNotification',N'Mail Notification',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,N'EnableSystemNotification',N'System Notification',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,N'EnableReportScheduleNotification',N'Report Schedule Notification',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,N'EnableUserScheduleNotification',N'User Schedule Notification',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'Group',N'Group',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'Color',N'Color',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'Description',N'Description',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'IsActive',N'IsActive',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'ModifiedDate',N'ModifiedDate',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'Name',N'Name',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'DirectoryTypeId',N'DirectoryTypeId',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'ExternalProviderId',N'ExternalProviderId',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'Groups',N'Groups',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'AzureGroups',N'Azure Groups',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,N'AzureADGroup',N'Azure AD groups Synchronization',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,N'AzureADGroupImport',N'Azure AD Group Import',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,N'Group',N'Group Management',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,N'ViewGroup',N'Group Detail',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,N'EditGroup',N'Edit Group',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,N'GroupPermission',N'Group Permission',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (17,N'Username',N'UserDirectory.Windows.Username',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (17,N'Password',N'UserDirectory.Windows.Password',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (17,N'LDAP URL',N'UserDirectory.Windows.LDAP URL',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (17,N'Distinguished Name',N'UserDirectory.Windows.Distinguished Name',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (17,N'Enable SSL',N'UserDirectory.Windows.Enable SSL',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (17,N'Port Number',N'UserDirectory.Windows.Port Number',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (18,N'IsEnabled',N'UserDirectory.Windows.Schedule.IsEnabled',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (18,N'RecurrenceType',N'UserDirectory.Windows.Schedule.RecurrenceType',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (18,N'RecurrenceInfo',N'UserDirectory.Windows.Schedule.Recurrence',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (18,N'StartDateString',N'UserDirectory.Windows.Schedule.Time',now() at time zone 'utc',1)
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.Windows.Schedule',N'UserDirectory.Windows.Schedule',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.Windows',N'UserDirectory.Windows',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'WindowsUserImport',N'Windows AD User Import',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,N'WindowsUsersSynchronization',N'Windows AD users Synchronization',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'AWindowsUsers',N'Windows Users',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'WindowsGroups',N'Windows Groups',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,N'WindowsADGroup',N'Windows AD groups Synchronization',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,N'WindowsADGroupImport',N'Windows AD Group Import',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) Values (2,N'EnableReportScheduleNotification',N'NotificationSettings.ReportScheduleNotification.DefaultSetting',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) Values (2,N'EnableUserScheduleNotification',N'NotificationSettings.UserScheduleNotification.DefaultSetting',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,N'EnableReportScheduleNotification',N'NotificationSettings.ReportScheduleNotification.Allow',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,N'EnableUserScheduleNotification',N'NotificationSettings.UserScheduleNotification.Allow',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,N'EnableReportScheduleNotification',N'Report Schedule Notification',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,N'EnableUserScheduleNotification',N'User Schedule Notification',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'EmbedSettings',N'EmbedSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,N'SMTPServer',N'SMTPServer.EmailSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,N'SMTPPort',N'SMTPPort.EmailSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,N'SenderName',N'SenderName.EmailSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,N'SenderEmailAddress',N'SenderEmailAddress.EmailSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,N'AuthenticationType',N'AuthenticationType.EmailSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,N'Username',N'Username.EmailSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,N'Password',N'Password.EmailSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,N'EnableSSL',N'EnableSSL.EmailSettings',now() at time zone 'utc',1)
;
INSERT into BOLDRS_SystemSettings (Key,Value,ModifiedDate,IsActive) VALUES (N'IsEmbedEnabled',N'false',now() at time zone 'utc',1)
;
INSERT into BOLDRS_SystemSettings (Key,Value,ModifiedDate,IsActive) VALUES (N'EmbedSecret',N'',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'ManageLicenseSettings',N'ManageLicenseSettings',now(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'DataConnectors',N'DataConnectors',now(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'EnableDefaultAuthentication',N'EnableDefaultAuthentication',now(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'EnableAuthSettings',N'EnableAuthSettings',now(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'EnableAuthControlSettings',N'EnableAuthControlSettings',now(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'ScheduleExportFileSettings',N'ScheduleExportFileSettings',now(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.OAuth2',N'UserDirectory.OAuth2',GETDATE(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.OpenIDConnect',N'UserDirectory.OpenIDConnect',GETDATE(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.AuthControl',N'UserDirectory.AuthControl',GETDATE(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'ReportSettings',N'ReportSettings',GETDATE(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (2,N'NotificationSettings',N'NotificationSettings',GETDATE(),1)
;

---- PASTE ALTER Queries below this section --------

ALTER TABLE BOLDRS_UserGroup  ADD FOREIGN KEY(GroupId) REFERENCES BOLDRS_Group (Id)
;
ALTER TABLE BOLDRS_UserGroup  ADD FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_UserLogin  ADD FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_UserPreference ADD FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_Item  ADD FOREIGN KEY(ItemTypeId) REFERENCES BOLDRS_ItemType (Id)
;
ALTER TABLE BOLDRS_Item  ADD FOREIGN KEY(ParentId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_Item  ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_Item  ADD FOREIGN KEY(ModifiedById) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_ItemView  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ItemView  ADD FOREIGN KEY(ItemViewId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ItemView  ADD FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_ItemTrash  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ItemTrash  ADD FOREIGN KEY(TrashedById) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_ItemTrashDeleted  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ItemTrashDeleted  ADD FOREIGN KEY(ItemTrashId) REFERENCES BOLDRS_ItemTrash (Id)
;
ALTER TABLE BOLDRS_ItemTrashDeleted  ADD FOREIGN KEY(DeletedById) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_ItemVersion  ADD FOREIGN KEY(ItemTypeId) REFERENCES BOLDRS_ItemType (Id)
;
ALTER TABLE BOLDRS_ItemVersion  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ItemVersion  ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_ItemLog  ADD FOREIGN KEY(ItemVersionId) REFERENCES BOLDRS_ItemVersion (Id)
;
ALTER TABLE BOLDRS_ItemLog  ADD FOREIGN KEY(ItemLogTypeId) REFERENCES BOLDRS_ItemLogType (Id)
;
ALTER TABLE BOLDRS_ItemLog  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ItemLog  ADD FOREIGN KEY(ParentId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ItemLog  ADD FOREIGN KEY(FromCategoryId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ItemLog  ADD FOREIGN KEY(ToCategoryId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ItemLog  ADD FOREIGN KEY(UpdatedUserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_ItemLog  ADD FOREIGN KEY(SourceTypeId) REFERENCES BOLDRS_Source (Id)
;

ALTER TABLE BOLDRS_PermissionEntity  ADD FOREIGN KEY(ItemTypeId) REFERENCES BOLDRS_ItemType (Id)
;

ALTER TABLE BOLDRS_UserPermission  ADD  FOREIGN KEY(PermissionEntityId) REFERENCES BOLDRS_PermissionEntity (Id)
;
ALTER TABLE BOLDRS_UserPermission  ADD  FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_UserPermission  ADD  FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_UserPermission ADD FOREIGN KEY (SettingsTypeId) REFERENCES BOLDRS_SettingsType (Id) 
;
ALTER TABLE BOLDRS_UserPermission  ADD  FOREIGN KEY(ScopeGroupId) REFERENCES BOLDRS_Group (Id)
;
ALTER TABLE BOLDRS_UserPermission  ADD  FOREIGN KEY(ItemTypeId) REFERENCES BOLDRS_ItemType (Id)
;

ALTER TABLE BOLDRS_GroupPermission  ADD  FOREIGN KEY(PermissionEntityId) REFERENCES BOLDRS_PermissionEntity (Id)
;
ALTER TABLE BOLDRS_GroupPermission  ADD  FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_GroupPermission  ADD  FOREIGN KEY(GroupId) REFERENCES BOLDRS_Group (Id)
;
ALTER TABLE BOLDRS_GroupPermission ADD FOREIGN KEY (SettingsTypeId) REFERENCES BOLDRS_SettingsType (Id)
;
ALTER TABLE BOLDRS_GroupPermission  ADD  FOREIGN KEY(ScopeGroupId) REFERENCES BOLDRS_Group (Id)
;
ALTER TABLE BOLDRS_GroupPermission  ADD  FOREIGN KEY(ItemTypeId) REFERENCES BOLDRS_ItemType (Id)
;

ALTER TABLE BOLDRS_ScheduleDetail  ADD FOREIGN KEY(ScheduleId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ScheduleDetail  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ScheduleDetail  ADD FOREIGN KEY(RecurrenceTypeId) REFERENCES BOLDRS_RecurrenceType (Id)
;
ALTER TABLE BOLDRS_ScheduleDetail  ADD FOREIGN KEY(ExportTypeId) REFERENCES BOLDRS_ExportType (Id)
;
ALTER TABLE BOLDRS_ScheduleDetail  ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_ScheduleDetail  ADD FOREIGN KEY(ModifiedById) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_SubscribedUser  ADD FOREIGN KEY(ScheduleId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_SubscribedUser  ADD FOREIGN KEY(SubscribedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_SubscribedUser  ADD FOREIGN KEY(RecipientUserId) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_SubscribedGroup  ADD FOREIGN KEY(ScheduleId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_SubscribedGroup  ADD FOREIGN KEY(SubscribedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_SubscribedGroup  ADD FOREIGN KEY(RecipientGroupId) REFERENCES BOLDRS_Group (Id)
;
	
ALTER TABLE BOLDRS_SubscrExtnRecpt  ADD FOREIGN KEY(ScheduleId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_SubscrExtnRecpt  ADD FOREIGN KEY(SubscribedById) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_ScheduleLogUser  ADD FOREIGN KEY(ScheduleStatusId) REFERENCES BOLDRS_ScheduleStatus (Id)
;
ALTER TABLE BOLDRS_ScheduleLogUser  ADD FOREIGN KEY(ScheduleId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ScheduleLogUser  ADD FOREIGN KEY(DeliveredUserId) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_ScheduleLogGroup  ADD FOREIGN KEY(ScheduleStatusId) REFERENCES BOLDRS_ScheduleStatus (Id)
;
ALTER TABLE BOLDRS_ScheduleLogGroup  ADD FOREIGN KEY(ScheduleId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ScheduleLogGroup  ADD FOREIGN KEY(GroupId) REFERENCES BOLDRS_Group (Id)
;
ALTER TABLE BOLDRS_ScheduleLogGroup  ADD FOREIGN KEY(DeliveredUserId) REFERENCES BOLDRS_User (Id)
;
	
ALTER TABLE BOLDRS_SchdLogExtnRecpt  ADD FOREIGN KEY(ScheduleStatusId) REFERENCES BOLDRS_ScheduleStatus (Id)
;
ALTER TABLE BOLDRS_SchdLogExtnRecpt  ADD FOREIGN KEY(ScheduleId) REFERENCES BOLDRS_Item (Id)
;

ALTER TABLE BOLDRS_ScheduleLog  ADD FOREIGN KEY(ScheduleStatusId) REFERENCES BOLDRS_ScheduleStatus (Id)
;
ALTER TABLE BOLDRS_ScheduleLog  ADD FOREIGN KEY(ScheduleId) REFERENCES BOLDRS_Item (Id)
;

ALTER TABLE BOLDRS_Comment ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_Comment ADD FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_Comment ADD FOREIGN KEY(ModifiedById) REFERENCES BOLDRS_User (Id)
; 
 
ALTER TABLE BOLDRS_ItemWatch ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ItemWatch ADD FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_ItemCommentLog  ADD FOREIGN KEY(CurrentUserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_ItemCommentLog  ADD FOREIGN KEY(ItemCommentLogTypeId) REFERENCES BOLDRS_ItemCommentLogType (Id)
;
ALTER TABLE BOLDRS_ItemCommentLog  ADD FOREIGN KEY(CommentId) REFERENCES BOLDRS_Comment (Id)
;
ALTER TABLE BOLDRS_ItemCommentLog  ADD FOREIGN KEY(RepliedFor) REFERENCES BOLDRS_Comment (Id)
;
ALTER TABLE BOLDRS_ItemCommentLog  ADD FOREIGN KEY(NotificationTo) REFERENCES BOLDRS_User (Id)
;
	
ALTER TABLE BOLDRS_FavoriteItem  ADD FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_FavoriteItem  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;

ALTER TABLE BOLDRS_PermissionAccEntity  ADD FOREIGN KEY(PermissionEntityId) REFERENCES BOLDRS_PermissionEntity (Id)
;
ALTER TABLE BOLDRS_PermissionAccEntity  ADD FOREIGN KEY(PermissionAccessId) REFERENCES BOLDRS_PermissionAccess (Id)
;

ALTER TABLE BOLDRS_UserPermissionLog  ADD  FOREIGN KEY(LogTypeId) REFERENCES BOLDRS_PermissionLogType (Id)
;
ALTER TABLE BOLDRS_UserPermissionLog  ADD  FOREIGN KEY(UserPermissionId) REFERENCES BOLDRS_UserPermission (Id)
;
ALTER TABLE BOLDRS_UserPermissionLog  ADD  FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_UserPermissionLog  ADD  FOREIGN KEY(AffectedUserId) REFERENCES BOLDRS_User (Id)
;

ALTER TABLE BOLDRS_GroupPermissionLog  ADD  FOREIGN KEY(LogTypeId) REFERENCES BOLDRS_PermissionLogType (Id)
;
ALTER TABLE BOLDRS_GroupPermissionLog  ADD  FOREIGN KEY(GroupPermissionId) REFERENCES BOLDRS_GroupPermission (Id)
;
ALTER TABLE BOLDRS_GroupPermissionLog  ADD  FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_GroupPermissionLog  ADD  FOREIGN KEY(AffectedGroupId) REFERENCES BOLDRS_Group (Id)
;

ALTER TABLE BOLDRS_SystemLog  ADD CONSTRAINT FK_SystemLog_SystemLogTypeId FOREIGN KEY(SystemLogTypeId) REFERENCES BOLDRS_SystemLogType (Id)
;
ALTER TABLE BOLDRS_SystemLog  ADD CONSTRAINT FK_SystemLog_UpdatedUserId FOREIGN KEY(UpdatedUserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_SystemLog  ADD CONSTRAINT FK_SystemLog_LogStatusId FOREIGN KEY(LogStatusId) REFERENCES BOLDRS_LogStatus (Id)
;

ALTER TABLE BOLDRS_LogField  ADD CONSTRAINT FK_LogField_ModuleId FOREIGN KEY(ModuleId) REFERENCES BOLDRS_LogModule (Id)
;

ALTER TABLE BOLDRS_SystemLog  ADD CONSTRAINT FK_SystemLog_LogFieldId FOREIGN KEY(LogFieldId) REFERENCES BOLDRS_LogField (Id)
;

ALTER TABLE BOLDRS_UserLog  ADD CONSTRAINT FK_UserLog_UserLogTypeId FOREIGN KEY(UserLogTypeId) REFERENCES BOLDRS_UserLogType (Id)
;
ALTER TABLE BOLDRS_UserLog  ADD CONSTRAINT FK_UserLog_TargetUserId FOREIGN KEY(TargetUserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_UserLog  ADD CONSTRAINT FK_UserLog_CurrentUserId FOREIGN KEY(CurrentUserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_UserLog  ADD CONSTRAINT FK_UserLog_SourceTypeId FOREIGN KEY(SourceTypeId) REFERENCES BOLDRS_Source (Id)
;
ALTER TABLE BOLDRS_UserLog  ADD CONSTRAINT FK_UserLog_LogStatusId FOREIGN KEY(LogStatusId) REFERENCES BOLDRS_LogStatus (Id)
;
ALTER TABLE BOLDRS_UserLog  ADD CONSTRAINT FK_UserLog_LogFieldId FOREIGN KEY(LogFieldId) REFERENCES BOLDRS_LogField (Id)
;

ALTER TABLE BOLDRS_GroupLog  ADD CONSTRAINT FK_GroupLog_GroupLogTypeId FOREIGN KEY(GroupLogTypeId) REFERENCES BOLDRS_GroupLogType (Id)
;
ALTER TABLE BOLDRS_GroupLog  ADD CONSTRAINT FK_GroupLog_TargetGroupId FOREIGN KEY(TargetGroupId) REFERENCES BOLDRS_Group (Id)
;
ALTER TABLE BOLDRS_GroupLog  ADD CONSTRAINT FK_GroupLog_CurrentUserId FOREIGN KEY(CurrentUserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_GroupLog  ADD CONSTRAINT FK_GroupLog_SourceTypeId FOREIGN KEY(SourceTypeId) REFERENCES BOLDRS_Source (Id)
;
ALTER TABLE BOLDRS_GroupLog  ADD CONSTRAINT FK_GroupLog_LogStatusId FOREIGN KEY(LogStatusId) REFERENCES BOLDRS_LogStatus (Id)
;
ALTER TABLE BOLDRS_GroupLog  ADD CONSTRAINT FK_GroupLog_LogFieldId FOREIGN KEY(LogFieldId) REFERENCES BOLDRS_LogField (Id)
;

ALTER TABLE BOLDRS_ProcessOption  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;

ALTER TABLE BOLDRS_ProcessOptionMap  ADD FOREIGN KEY(ProcessOptionId) REFERENCES BOLDRS_ProcessOption (Id)
;
ALTER TABLE BOLDRS_ProcessOptionMap  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;

ALTER TABLE BOLDRS_ReportDataSource  ADD FOREIGN KEY(ReportItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ReportDataSource  ADD FOREIGN KEY(DataSourceItemId) REFERENCES BOLDRS_Item (Id)
;

ALTER TABLE BOLDRS_DataSourceDetail ADD FOREIGN KEY(DataSourceId) REFERENCES BOLDRS_Item (Id)
;

ALTER TABLE BOLDRS_DatasetLinkage  ADD FOREIGN KEY(DatasetItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_DatasetLinkage  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;

ALTER TABLE BOLDRS_ScheduleParameter ADD FOREIGN KEY(ScheduleId) REFERENCES BOLDRS_Item (Id)
;

ALTER TABLE BOLDRS_DeploymentReports  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_DeploymentReports  ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_ExternalSites ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_DeploymentReports  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_DeploymentReports  ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_PublishedItem  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_PublishedItem  ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_PublishJobs  ADD FOREIGN KEY(PublishId) REFERENCES BOLDRS_PublishedItem (Id)
;
ALTER TABLE BOLDRS_PublishJobs  ADD FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;

CREATE INDEX IX_BOLDRS_ScheduleDetail_ScheduleId ON BOLDRS_ScheduleDetail(ScheduleId);

CREATE INDEX IX_BOLDRS_ScheduleLog_ScheduleId ON BOLDRS_ScheduleLog (ScheduleId);

CREATE INDEX IX_BOLDRS_Item ON BOLDRS_Item (IsActive, ItemTypeId, ParentId, IsDraft);

CREATE INDEX IX_BOLDRS_UserPermission ON BOLDRS_UserPermission (IsActive, UserId, ItemId, PermissionEntityId);