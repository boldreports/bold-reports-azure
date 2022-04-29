CREATE TABLE  {database_name}.BOLDRS_User(
	Id int NOT NULL AUTO_INCREMENT,
	UserName varchar(100) NOT NULL,
	FirstName varchar(255) NOT NULL,
	LastName varchar(150) NULL,
	DisplayName varchar(255) NULL,
	Email varchar(100) NOT NULL,
	Contact varchar(20) NULL,
	Picture varchar(100) NOT NULL,	
	CreatedDate datetime NOT NULL,
	ModifiedDate datetime NULL,
	LastLogin datetime NULL,
	PasswordChangedDate datetime NULL,
    DirectoryTypeId int NOT NULL DEFAULT 0,
    IdPReferenceId char(38) NOT NULL,
    ExternalProviderId varchar(1024) NULL,
	CanSync tinyint NOT NULL DEFAULT 0,
    IsCloseRequest tinyint NOT NULL DEFAULT 0,
	IsActivated tinyint NOT NULL,
	IsActive tinyint NOT NULL,
	IsDeleted tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_Group(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(255) NOT NULL,
	Description varchar(1026) NULL,
	Color varchar(255) NOT NULL DEFAULT 'White',
	ModifiedDate datetime NOT NULL,
    DirectoryTypeId int NOT NULL DEFAULT 0,
    ExternalProviderId varchar(100) NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_UserGroup(
	Id int NOT NULL AUTO_INCREMENT,
	GroupId int NOT NULL,
	UserId int NOT NULL,
	ModifiedDate datetime NOT NULL,
	ExternalProviderId varchar(100) NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_UserLogType(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(100) NOT NULL UNIQUE,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_UserLog(
	Id char(38) NOT NULL,
    ActivityId char(38) NOT NULL,
	UserLogTypeId int NOT NULL,	
    LogFieldId int NOT NULL,	
	OldValue varchar(4000) NULL,
	NewValue varchar(4000) NULL,
	CurrentUserId int NULL,
	TargetUserId int NULL,
    SourceTypeId int NOT NULL,
    LogStatusId int NOT NULL,
	CreatedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;


CREATE TABLE  {database_name}.BOLDRS_UserLogin(
	Id int NOT NULL AUTO_INCREMENT,
	UserId int NOT NULL,
	ClientToken varchar(4000) NOT NULL,
	IpAddress varchar(50) NOT NULL,
	LoggedInTime datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_UserPreference(
	Id int NOT NULL AUTO_INCREMENT,
	UserId int NOT NULL,
	Language varchar(4000) NULL,
	TimeZone varchar(100) NULL,
	RecordSize int NULL,
	ItemSort varchar(4000) NULL,
	ItemFilters varchar(4000) NULL,
	Notifications varchar(4000) NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ItemType(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(100) NOT NULL UNIQUE,
	IsActive tinyint NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_Item(
	Id char(38) NOT NULL,
	Name varchar(255) NOT NULL,
	Description varchar(1026) NULL,
	ItemTypeId int NOT NULL,
	ParentId char(38) NULL,
	Extension varchar(30) NULL,
	CloneItemId char(38) NULL,
	CreatedById int NOT NULL,
	ModifiedById int NOT NULL,
	CreatedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
    IsSampleData tinyint NULL,
    DataSource varchar(4000) NULL,
	IsPublic tinyint NOT NULL DEFAULT 0,
	IsActive tinyint NULL,
	IsDraft tinyint NULL DEFAULT 0,
	IsUserBased tinyint NULL,
	IsLocked tinyint NULL DEFAULT 0,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ItemView(
	Id int NOT NULL AUTO_INCREMENT,
	ItemId char(38) NOT NULL,
	UserId int NOT NULL,
	ItemViewId char(38) NOT NULL,
	QueryString varchar(4000) NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ItemLogType(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(100) NULL UNIQUE,
	IsActive tinyint NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ItemTrash(
	Id int NOT NULL AUTO_INCREMENT,
	ItemId char(38) NOT NULL,
	TrashedById int NOT NULL,
	TrashedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ItemTrashDeleted(
	Id int NOT NULL AUTO_INCREMENT,
	ItemId char(38) NOT NULL,
	ItemTrashId int NOT NULL,
	DeletedById int NOT NULL,
	DeletedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ItemVersion(
	Id int NOT NULL AUTO_INCREMENT,
	ItemId char(38) NOT NULL,
	ItemTypeId int NOT NULL,
	ItemName varchar(265) NULL,
	VersionNumber int NOT NULL,
	RolledbackVersionNumber int NULL,
	Comment varchar(1026) NULL,
	IsCurrentVersion tinyint NOT NULL,
	CreatedById int NOT NULL,
	CreatedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ItemLog(
	Id int NOT NULL AUTO_INCREMENT,
	ItemLogTypeId int NOT NULL,
	ItemId char(38) NOT NULL,
	ItemVersionId int NOT NULL,
    SourceTypeId int NOT NULL,
	ParentId char(38) NULL,
	FromCategoryId char(38) NULL,
	ToCategoryId char(38) NULL,
	UpdatedUserId int NOT NULL,	
	AdditionalLogInfo varchar(4000) NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_PermissionEntity(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(100) NOT NULL UNIQUE,
	EntityType int NOT NULL,
	ItemTypeId int NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_UserPermission(
	Id int NOT NULL AUTO_INCREMENT,
	PermissionAccessId int NOT NULL,
	PermissionEntityId int NOT NULL,
	ItemId char(38) NULL,
	UserId int NOT NULL,
	SettingsTypeId int NULL,
	ScopeGroupId int NULL,
	ItemTypeId int NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_GroupPermission(
	Id int NOT NULL AUTO_INCREMENT,
	PermissionAccessId int NOT NULL,
	PermissionEntityId int NOT NULL,
	ItemId char(38) NULL,
	GroupId int NOT NULL,
	SettingsTypeId int NULL,
	ScopeGroupId int NULL,
	ItemTypeId int NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;



CREATE TABLE  {database_name}.BOLDRS_RecurrenceType(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(30) NOT NULL UNIQUE,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ExportType(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(20) NOT NULL UNIQUE,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ScheduleDetail(
	Id int NOT NULL AUTO_INCREMENT,
	ScheduleId char(38) NOT NULL,
	ItemId char(38) NOT NULL,
	Name varchar(150) NOT NULL,
	RecurrenceTypeId int NOT NULL,
	RecurrenceInfo varchar(4000) NOT NULL,
	EmailContent varchar(4000) NULL,
	Subject text(4000) NULL,
    IsTimeInterval tinyint NOT NULL DEFAULT 0,
    ExportFileSettingsInfo varchar(4000) NOT NULL,
	StartDate datetime NOT NULL,
	EndDate datetime NULL,
	EndAfter int NOT NULL DEFAULT 0,
	NextSchedule datetime,
	ExportTypeId int NOT NULL,
	IsEnabled tinyint NOT NULL,
	IsParameterEnabled tinyint NOT NULL,
	IsSaveAsFile tinyint NOT NULL,
    IsSendAsMail tinyint NOT NULL DEFAULT 1,
    ReportCount int NOT NULL DEFAULT 0,
    ExportPath varchar(4000) NULL,
	CreatedById int NOT NULL,
	ModifiedById int NOT NULL,
	CreatedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	IsNotifySaveAs tinyint NOT NULL,
	IsOverwrite tinyint NOT NULL,
	ExportFileName varchar(130) NULL,
	ScheduleExportInfo text(500) NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_SubscribedUser(
	Id int NOT NULL AUTO_INCREMENT,
	ScheduleId char(38) NOT NULL,
	SubscribedById int NOT NULL,
	RecipientUserId int NOT NULL,
	SubscribedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_SubscribedGroup(
	Id int NOT NULL AUTO_INCREMENT,
	ScheduleId char(38) NOT NULL,
	SubscribedById int NOT NULL,
	RecipientGroupId int NOT NULL,
	SubscribedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_SubscrExtnRecpt(
	Id int NOT NULL AUTO_INCREMENT,
	ScheduleId char(38) NOT NULL,
	SubscribedById int NOT NULL,
	EmailIds varchar(4000) NOT NULL,
	SubscribedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;
	
CREATE TABLE  {database_name}.BOLDRS_ScheduleStatus(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(100) NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ScheduleLogUser(
	Id int NOT NULL AUTO_INCREMENT,
	ScheduleId char(38) NOT NULL,
	ScheduleStatusId int NOT NULL,
	DeliveredUserId int NOT NULL,
	DeliveredDate datetime NOT NULL,
	IsOnDemand tinyint NOT NULL,	
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ScheduleLogGroup(
	Id int NOT NULL AUTO_INCREMENT,
	ScheduleId char(38) NOT NULL,
	ScheduleStatusId int NOT NULL,
	GroupId int NOT NULL,
	DeliveredUserId int NOT NULL,
	DeliveredDate datetime NOT NULL,
	IsOnDemand tinyint NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_SchdLogExtnRecpt(
	Id int NOT NULL AUTO_INCREMENT,
	ScheduleId char(38) NOT NULL,
	ScheduleStatusId int NOT NULL,
	DeliveredEmailId varchar(150) NOT NULL,
	DeliveredDate datetime NOT NULL,
	IsOnDemand tinyint NOT NULL,	
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;
	
CREATE TABLE  {database_name}.BOLDRS_ScheduleLog(
	Id int NOT NULL AUTO_INCREMENT,
	ScheduleStatusId int NOT NULL,
	ScheduleId char(38) NOT NULL,
	ExecutedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	Message text NULL,
	IsOnDemand tinyint NOT NULL DEFAULT 0,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_SystemSettings(
	Id int NOT NULL AUTO_INCREMENT,
	`Key` varchar(255) NOT NULL,
	Value text NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id),
	CONSTRAINT UK_BOLDRS_SystemSettings_Key UNIQUE(`Key`))
;

CREATE TABLE  {database_name}.BOLDRS_ServerVersion(
	Id int NOT NULL,
	VersionNumber varchar(20) NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_Comment(
    Id int NOT NULL AUTO_INCREMENT,
    Comment varchar(4000) NOT NULL,
    ItemId char(38) NOT NULL,
    UserId int NOT NULL,
    ParentId int NULL,
    CreatedDate datetime NOT NULL,
    ModifiedDate datetime NOT NULL,
    ModifiedById int NOT NULL,
    IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ItemWatch(
	Id int NOT NULL AUTO_INCREMENT,
	ItemId char(38) NOT NULL,
	UserId int NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsWatched tinyint NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;
 
CREATE TABLE  {database_name}.BOLDRS_ItemCommentLogType(
    Id int NOT NULL AUTO_INCREMENT,
    Name varchar(100) NULL UNIQUE,
    IsActive tinyint NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ItemCommentLog(
    Id int NOT NULL AUTO_INCREMENT,
    ItemCommentLogTypeId int NOT NULL,
    CurrentUserId int NOT NULL,    
    CommentId int NOT NULL,
	Url varchar(4000) NOT NULL,
    ClubId varchar(100) NOT NULL,
    RepliedFor int NULL,
    OldValue varchar(4000) NULL,
    NewValue varchar(4000) NULL,
    NotificationTo int NULL,    
    ModifiedDate datetime NOT NULL,
    IsRead tinyint NOT NULL,
    IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_FavoriteItem(
	Id int NOT NULL AUTO_INCREMENT,
	UserId int NOT NULL,
	ItemId char(38) NOT NULL,
	IsActive tinyint NOT NULL,
    PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_AzureADCredential(
	Id int NOT NULL AUTO_INCREMENT,
	TenantName varchar(255),
	ClientId varchar(100),
	ClientSecret varchar(100),
	IsActive tinyint NOT NULL,
	DeleteGroupUsers tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ADCredential(
	Id int NOT NULL AUTO_INCREMENT,
	Username varchar(100),
	Password varchar(100),
	LdapUrl varchar(255),
	EnableSsl tinyint not null,
	DistinguishedName varchar(150),
	PortNo int not null,
	IsActive tinyint not null,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_SAMLSettings(
	Id int NOT NULL AUTO_INCREMENT, 
	MetadataURI varchar(4000),
	Authority varchar(4000),
	DesignerClientId varchar(100),
	TenantName varchar(100),
	MobileAppId varchar(100),
	IsEnabled tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_UserType(
	Id int NOT NULL AUTO_INCREMENT,
	Type varchar(100) UNIQUE,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_DBCredential(
    Id int NOT NULL AUTO_INCREMENT,
    DatabaseType varchar(255) NOT NULL,
    ConnectionString varchar(4000) NOT NULL,
    IsActive tinyint NOT NULL,
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
    Status varchar(255) NOT NULL,	
    ActiveStatusValue varchar(255) NOT NULL,
    EmailRelationId int NULL,
    FirstNameRelationId int NULL,
    IsActiveRelationId int NULL,
    LastNameRelationId int NULL,
    PRIMARY KEY (Id))
;
CREATE TABLE  {database_name}.BOLDRS_TableRelation(
   Id int NOT NULL AUTO_INCREMENT,
   LeftTable varchar(255) NOT NULL,
   LeftTableColumnName varchar(255) NOT NULL,	
   LeftTableCondition varchar(255) NOT NULL,
   LeftTableName varchar(255) NOT NULL,
   LeftTableSchema varchar(255) NOT NULL,
   Relationship varchar(255) NOT NULL,
   RightTable varchar(255) NOT NULL,
   RightTableColumnName varchar(255) NOT NULL,	
   RightTableCondition varchar(255) NOT NULL,
   RightTableName varchar(255) NOT NULL,
   RightTableSchema varchar(255) NOT NULL,
   PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_Source(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(100) NULL UNIQUE,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_PermissionAccess(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(100) NULL UNIQUE,
    AccessId int NOT NULL UNIQUE,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_PermissionAccEntity(
   Id int NOT NULL AUTO_INCREMENT,
   PermissionEntityId int NOT NULL,
   PermissionAccessId int NOT NULL,
   IsActive tinyint NOT NULL,
   PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_PermissionLogType(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(100) NULL UNIQUE,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_UserPermissionLog(
	Id int NOT NULL AUTO_INCREMENT,
    UserId int NOT NULL,
	AffectedUserId int NOT NULL,
	UserPermissionId int NULL,
	LogTypeId int NULL,
	CreatedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_GroupPermissionLog(
	Id int NOT NULL AUTO_INCREMENT,
    UserId int NOT NULL,
	AffectedGroupId int NOT NULL,
	GroupPermissionId int NULL,
	LogTypeId int NULL,
	CreatedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_SystemLogType(
	Id int NOT NULL AUTO_INCREMENT,
    Name varchar(100) NULL UNIQUE,
    IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_LogStatus(
	Id int NOT NULL AUTO_INCREMENT,
    Name varchar(100) NULL UNIQUE,
    IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_SystemLog(
	Id int NOT NULL AUTO_INCREMENT,
	SystemLogTypeId int NOT NULL,
    LogFieldId int NOT NULL,
    OldValue varchar(4000) NULL,
    NewValue varchar(4000) NULL,
    LogStatusId int NOT NULL,
	UpdatedUserId int NOT NULL,
	CreatedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_LogModule(
	Id int NOT NULL AUTO_INCREMENT,
    Name varchar(100) NULL UNIQUE,
    ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_LogField(
	Id int NOT NULL AUTO_INCREMENT,
    ModuleId int NOT NULL,
    Field varchar(4000) NOT NULL,
    Description varchar(4000) NOT NULL,
    ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_GroupLogType(
	Id int NOT NULL AUTO_INCREMENT,
    Name varchar(100) NULL UNIQUE,
    IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_GroupLog(
	Id char(38) NOT NULL,
	ActivityId char(38) NOT NULL,
	GroupLogTypeId int NOT NULL,
	LogFieldId int NOT NULL,
	OldValue varchar(4000) NULL,
	NewValue varchar(4000) NULL,	
	CurrentUserId int NULL,
	TargetGroupId int NULL,
	SourceTypeId int NOT NULL,
	LogStatusId int NOT NULL,
	CreatedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ProcessOption(
	Id int NOT NULL AUTO_INCREMENT,
    ItemId char(38) NOT NULL,
    ProcessOption varchar(4000) NULL,
    NextScheduleDate datetime NULL,
    CreatedDate datetime NOT NULL,
    ModifiedDate datetime NOT NULL,
    IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ProcessOptionMap(
	Id int NOT NULL AUTO_INCREMENT,
    ItemId char(38) NOT NULL,
    ProcessOptionId int NOT NULL,
    IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;
 
 CREATE TABLE  {database_name}.BOLDRS_ReportDataSource(
	Id int NOT NULL AUTO_INCREMENT,
	ReportItemId char(38) NOT NULL,
	DataSourceItemId char(38) NOT NULL,
	Name varchar(255) NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_DataSourceDetail(
	Id int NOT NULL AUTO_INCREMENT,
	DataSourceId char(38) NOT NULL,
	Password varchar(255) NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

 CREATE TABLE  {database_name}.BOLDRS_DatasetLinkage(
	Id int NOT NULL AUTO_INCREMENT,
	DatasetItemId char(38) NOT NULL,
	ItemId char(38) NOT NULL,
	Name varchar(255) NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE  {database_name}.BOLDRS_ScheduleParameter(
	Id int NOT NULL AUTO_INCREMENT,
    ScheduleId char(38) NOT NULL,
    Parameter varchar(4000) NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_DeploymentReports(
	Id int NOT NULL AUTO_INCREMENT,
	ItemId Char(38) NOT NULL,
	ItemName varchar(255) NOT NULL,
	CategoryName varchar(255) NOT NULL,
	Description varchar(1026) NULL,
	IsReportLocked tinyint NOT NULL,
	IsDatasourceLocked tinyint NOT NULL,
	IsDatasetLocked tinyint NOT NULL,
	CreatedById int NOT NULL,
	CreatedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_ExternalSites(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(255) NOT NULL,
	ClientId varchar(255) NOT NULL,
	ClientSecret varchar(255) NOT NULL,
	SiteURL varchar(255) NOT NULL,
	CreatedById int NOT NULL,
	CreatedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_PublishedItem(
	Id Char(38) NOT NULL,
	TenantId Char(38) NOT NULL,
	ItemId Char(38) NOT NULL,
	ItemName varchar(255) NOT NULL,
	Description varchar(1026) NULL,
	CategoryName varchar(255) NULL,
	UserId int NOT NULL,
	DestinationItemId Char(38) NOT NULL,
	PublishType varchar(255) NOT NULL,
	IsLocked tinyint NOT NULL,
	CreatedById int NOT NULL,
	CreatedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_PublishJobs(
	Id int NOT NULL AUTO_INCREMENT,
	PublishId Char(38) NOT NULL,
	UserId int NOT NULL,
	JobDetails varchar(4000) NOT NULL,
	CreatedDate datetime NOT NULL,
	CompletedDate datetime NOT NULL,
	Status varchar(255) NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_UserAttributes(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(255) NOT NULL,
	Value varchar(4000) NOT NULL,
	Description varchar(1026) NULL,
	Encrypt tinyint NOT NULL,
	UserId int NOT NULL,
	CreatedById int NOT NULL,
	ModifiedById int NOT NULL,
    CreatedDate datetime NOT NULL,
    ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_GroupAttributes(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(255) NOT NULL,
	Value varchar(4000) NOT NULL,
	Description varchar(1026) NULL,
	Encrypt tinyint NOT NULL,
	GroupId int NOT NULL,
	CreatedById int NOT NULL,
	ModifiedById int NOT NULL,
    CreatedDate datetime NOT NULL,
    ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_SiteAttributes(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(255) NOT NULL,
	Value varchar(4000) NOT NULL,
	Description varchar(1026) NULL,
	Encrypt tinyint NOT NULL,
	CreatedById Char(38) NOT NULL,
	ModifiedById Char(38) NOT NULL,
    CreatedDate datetime NOT NULL,
    ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_SettingsType(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(100) NOT NULL UNIQUE,
	IsActive tinyint NULL,
	PRIMARY KEY (Id))
;

/*INSERT Queries below this section*/ 

INSERT into  {database_name}.BOLDRS_ItemType (Name,IsActive) VALUES ('Category',1)
;
INSERT into  {database_name}.BOLDRS_ItemType (Name,IsActive) VALUES ('Dashboard',1)
;
INSERT into  {database_name}.BOLDRS_ItemType (Name,IsActive) VALUES ('Report',1)
;
INSERT into  {database_name}.BOLDRS_ItemType (Name,IsActive) VALUES ('Datasource',1)
;
INSERT into  {database_name}.BOLDRS_ItemType (Name,IsActive) VALUES ('Dataset',1)
;
INSERT into  {database_name}.BOLDRS_ItemType (Name,IsActive) VALUES ('File',1)
;
INSERT into  {database_name}.BOLDRS_ItemType (Name,IsActive) VALUES ('Schedule',1)
;
INSERT into  {database_name}.BOLDRS_ItemType (Name,IsActive) VALUES ('Widget',1)
;
INSERT into  {database_name}.BOLDRS_ItemType (Name,IsActive) VALUES ('ItemView',1)
;
INSERT into  {database_name}.BOLDRS_ItemType (Name,IsActive) VALUES ('Slideshow',1)
;
INSERT into {database_name}.BOLDRS_ItemType (Name, IsActive) Values ('Settings',1)
;
INSERT into {database_name}.BOLDRS_ItemType (Name, IsActive) Values ('User Management',1)
;
INSERT into {database_name}.BOLDRS_ItemType (Name, IsActive) Values ('Permissions',1)
;

INSERT into {database_name}.BOLDRS_SettingsType (Name,IsActive) VALUES ('Site Settings',1)
;
INSERT into {database_name}.BOLDRS_SettingsType (Name,IsActive) VALUES ('Reports Settings',1)
;
INSERT into {database_name}.BOLDRS_SettingsType (Name,IsActive) VALUES ('Embed Settings',1)
;
INSERT into {database_name}.BOLDRS_SettingsType (Name,IsActive) VALUES ('Connectors',1)
;
INSERT into {database_name}.BOLDRS_SettingsType (Name,IsActive) VALUES ('Email Settings',1)
;
INSERT into {database_name}.BOLDRS_SettingsType (Name,IsActive) VALUES ('Accounts Settings',1)
;
INSERT into {database_name}.BOLDRS_SettingsType (Name,IsActive) values ('User Directory Settings',1)
;
INSERT into {database_name}.BOLDRS_SettingsType (Name,IsActive) values ('Authentication Settings',1)
;
INSERT into {database_name}.BOLDRS_SettingsType (Name, IsActive) Values ('Notification Settings',1)
;
INSERT into {database_name}.BOLDRS_SettingsType (Name, IsActive) Values ('Manage License',1)
;
INSERT into {database_name}.BOLDRS_SettingsType (Name,IsActive) VALUES ( 'Support Settings',1)
;
INSERT into {database_name}.BOLDRS_SettingsType (Name,IsActive) VALUES ( 'Subscription',1)
;
INSERT into {database_name}.BOLDRS_SettingsType (Name,IsActive) VALUES ( 'Payments',1)
;

INSERT into  {database_name}.BOLDRS_ItemLogType (Name,IsActive) VALUES ( 'Added',1)
;
INSERT into  {database_name}.BOLDRS_ItemLogType (Name,IsActive) VALUES ( 'Edited',1)
;
INSERT into  {database_name}.BOLDRS_ItemLogType (Name,IsActive) VALUES ( 'Deleted',1)
;
INSERT into  {database_name}.BOLDRS_ItemLogType (Name,IsActive) VALUES ( 'Moved',1)
;
INSERT into  {database_name}.BOLDRS_ItemLogType (Name,IsActive) VALUES ( 'Copied',1)
;
INSERT into  {database_name}.BOLDRS_ItemLogType (Name,IsActive) VALUES ( 'Cloned',1)
;
INSERT into  {database_name}.BOLDRS_ItemLogType (Name,IsActive) VALUES ( 'Trashed',1)
;
INSERT into  {database_name}.BOLDRS_ItemLogType (Name,IsActive) VALUES ( 'Restored',1)
;
INSERT into  {database_name}.BOLDRS_ItemLogType (Name,IsActive) VALUES ( 'Rollbacked',1)
;
INSERT into  {database_name}.BOLDRS_ItemLogType (Name,IsActive) VALUES ( 'Visited',1)
;

INSERT into  {database_name}.BOLDRS_ExportType (Name,IsActive) VALUES ('Excel', 1)
;
INSERT into  {database_name}.BOLDRS_ExportType (Name,IsActive) VALUES ('HTML', 1)
;
INSERT into  {database_name}.BOLDRS_ExportType (Name,IsActive) VALUES ('PDF', 1)
;
INSERT into  {database_name}.BOLDRS_ExportType (Name,IsActive) VALUES ('Word', 1)
;
INSERT into  {database_name}.BOLDRS_ExportType (Name,IsActive) VALUES ('Image', 1)
;
INSERT into  {database_name}.BOLDRS_ExportType (Name,IsActive) VALUES ('PPT', 1)
;
INSERT into  {database_name}.BOLDRS_ExportType (Name,IsActive) VALUES ('CSV', 1)
;
INSERT into  {database_name}.BOLDRS_ExportType (Name,IsActive) VALUES ('XML', 1)
;

INSERT into  {database_name}.BOLDRS_RecurrenceType (Name,IsActive) VALUES ('Daily', 1)
;
INSERT into  {database_name}.BOLDRS_RecurrenceType (Name,IsActive) VALUES ('DailyWeekDay', 1)
;
INSERT into  {database_name}.BOLDRS_RecurrenceType (Name,IsActive) VALUES ('Weekly', 1)
;
INSERT into  {database_name}.BOLDRS_RecurrenceType (Name,IsActive) VALUES ('Monthly', 1)
;
INSERT into  {database_name}.BOLDRS_RecurrenceType (Name,IsActive) VALUES ('MonthlyDOW', 1)
;
INSERT into  {database_name}.BOLDRS_RecurrenceType (Name,IsActive) VALUES ('Yearly', 1)
;
INSERT into  {database_name}.BOLDRS_RecurrenceType (Name,IsActive) VALUES ('YearlyDOW', 1)
;
INSERT into  {database_name}.BOLDRS_RecurrenceType (Name,IsActive) VALUES ('Time', 1)
;
INSERT into  {database_name}.BOLDRS_RecurrenceType (Name,IsActive) VALUES ('Hourly',1)
;

INSERT into  {database_name}.BOLDRS_ScheduleStatus (Name,IsActive) VALUES ('Success', 1)
;
INSERT into  {database_name}.BOLDRS_ScheduleStatus (Name,IsActive) VALUES ('Failure', 1)
;
INSERT into  {database_name}.BOLDRS_ScheduleStatus (Name,IsActive) VALUES ('Run', 1)
;

INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('All Reports',1,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('Reports in Category',2,1,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('Specific Report',0,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('All Categories',1,1,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('Specific Category',0,1,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('All Data Sources',1,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('Specific Data Source',0,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('All Files',1,6,0)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('Specific File',0,6,0)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('All Schedules',1,7,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('Specific Schedule',0,7,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('All Dashboards',1,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('Dashboards in Category',2,1,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('Specific Dashboard',0,2, 1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES('All Widgets',1,8,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES('Specific Widget',0,8,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('All Datasets',1,5, 1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('Specific Dataset',0,5,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('Specific ItemView',0,9,1)
;
INSERT into  {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId,IsActive) VALUES ('All ItemViews',1,9,1)
;
INSERT into {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES ('Specific Slideshow',0,10,1)
;
INSERT into {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES ('All Slideshow',1,10,1)
;
INSERT into {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES ('Specific Settings',0,11,1)
;
INSERT into {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES ('All Settings',1,11,1)
;
INSERT into {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES ('Specific Group',0,12,1)
;
INSERT into {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES ('Users and Groups',1,12,1)
;
INSERT into {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES ('Specific Permissions',0,13,1)
;
INSERT into {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES ('All Permissions',1,13,1)
;
INSERT into {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) VALUES ('All Groups',1,12,1)
;

INSERT into  {database_name}.BOLDRS_Group (Name,Description,Color,ModifiedDate,DirectoryTypeId,IsActive) VALUES ('System Administrator','Has administrative rights for the reports','#ff0000',Now(), 1, 1)
;

INSERT into  {database_name}.BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( 'Added',1)
;
INSERT into  {database_name}.BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( 'Edited',1)
;
INSERT into  {database_name}.BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( 'Deleted',1)
;
INSERT into  {database_name}.BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( 'Upvoted',1)
;
INSERT into  {database_name}.BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( 'Downvoted',1)
;
INSERT into  {database_name}.BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( 'Replied',1)
;
INSERT into  {database_name}.BOLDRS_ItemCommentLogType (Name,IsActive) VALUES ( 'UserMention',1)
;

INSERT into  {database_name}.BOLDRS_UserType(Type) values('Server User')
;
INSERT into  {database_name}.BOLDRS_UserType(Type) values('Active Directory User')
;
INSERT into  {database_name}.BOLDRS_UserType(Type) values('Federation User')
;

INSERT into  {database_name}.BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES ('Create',1,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES ('Read',2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES ('Read, Write',6,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES  ('Read, Write, Delete',14,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES ('Download',16,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES ('Read, Download',18,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES ('Read, Write, Download',22,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccess (Name, AccessId, IsActive) VALUES ('Read, Write, Delete, Download',30,1)
;

INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (4,1,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (6,1,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (8,1,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (10,1,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (1,1,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (2,1,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (17,1,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (29,1,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (4,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (5,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (6,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (7,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (8,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (9,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (10,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (11,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (1,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (2,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (3,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (17,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (18,2,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (4,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (5,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (6,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (7,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (8,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (9,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (10,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (11,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (1,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (2,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (3,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (17,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (18,3,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (23,3,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (24,3,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (25,3,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (26,3,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (27,3,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (28,3,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (4,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (5,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (6,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (7,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (8,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (9,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (10,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (11,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (1,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (2,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (3,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (17,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (18,4,1)
;
INSERT into  {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES(1,5,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES(2,5,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES(3,5,1)
;
INSERT into  {database_name}.BOLDRS_PermissionLogType (Name,IsActive) VALUES ( 'PermissionAdded',1)
;
INSERT into  {database_name}.BOLDRS_PermissionLogType (Name,IsActive) VALUES ( 'PermissionRemoved',1)
;

INSERT into  {database_name}.BOLDRS_Source (Name,IsActive) VALUES ( 'Web',1)
;
INSERT into  {database_name}.BOLDRS_Source (Name,IsActive) VALUES ( 'API',1)
;
INSERT into  {database_name}.BOLDRS_Source (Name,IsActive) VALUES ( 'Schedule',1)
;

INSERT into  {database_name}.BOLDRS_LogStatus (Name,IsActive) VALUES ( 'Start',1)
;
INSERT into  {database_name}.BOLDRS_LogStatus (Name,IsActive) VALUES ( 'Success',1)
;
INSERT into  {database_name}.BOLDRS_LogStatus (Name,IsActive) VALUES ( 'Fail',1)
;

INSERT into  {database_name}.BOLDRS_SystemLogType (Name,IsActive) VALUES ('Update',1)
;
INSERT into  {database_name}.BOLDRS_SystemLogType (Name,IsActive) VALUES ('Add',1)
;
INSERT into  {database_name}.BOLDRS_SystemLogType (Name,IsActive) VALUES ('Delete',1)
;
INSERT into  {database_name}.BOLDRS_SystemLogType (Name,IsActive) VALUES ('Activate',1)
;
INSERT into  {database_name}.BOLDRS_SystemLogType (Name,IsActive) VALUES ('Retry',1)
;
INSERT into  {database_name}.BOLDRS_SystemLogType (Name,IsActive) VALUES ('Enable',1)
;
INSERT into  {database_name}.BOLDRS_SystemLogType (Name,IsActive) VALUES ('Disable',1)
;
INSERT into  {database_name}.BOLDRS_SystemLogType (Name,IsActive) VALUES ('Visit',1)
;

INSERT into  {database_name}.BOLDRS_UserLogType (Name,IsActive) VALUES ( 'Add',1)
;
INSERT into  {database_name}.BOLDRS_UserLogType (Name,IsActive) VALUES ( 'Update',1)
;
INSERT into  {database_name}.BOLDRS_UserLogType (Name,IsActive) VALUES ( 'Delete',1)
;
INSERT into  {database_name}.BOLDRS_UserLogType (Name,IsActive) VALUES ( 'Synchronization',1)
;
INSERT into  {database_name}.BOLDRS_UserLogType (Name,IsActive) VALUES ( 'Import',1)
;
INSERT into  {database_name}.BOLDRS_UserLogType (Name,IsActive) VALUES ( 'Visit',1)
;

INSERT into  {database_name}.BOLDRS_GroupLogType (Name,IsActive) VALUES ( 'Add',1)
;
INSERT into  {database_name}.BOLDRS_GroupLogType (Name,IsActive) VALUES ( 'Update',1)
;
INSERT into  {database_name}.BOLDRS_GroupLogType (Name,IsActive) VALUES ( 'Delete',1)
;
INSERT into  {database_name}.BOLDRS_GroupLogType (Name,IsActive) VALUES ( 'Synchronization',1)
;
INSERT into  {database_name}.BOLDRS_GroupLogType (Name,IsActive) VALUES ( 'Import',1)
;
INSERT into  {database_name}.BOLDRS_GroupLogType (Name,IsActive) VALUES ( 'Visit',1)
;
INSERT into  {database_name}.BOLDRS_GroupLogType (Name,IsActive) VALUES ( 'UserAdd',1)
;
INSERT into  {database_name}.BOLDRS_GroupLogType (Name,IsActive) VALUES ( 'UserRemove',1)
;

INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('SystemSettings',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('NotificationSettings',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('NotificationAdministration',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('AzureADDetail',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('DatabaseConfiguration',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('TenantBillingSubscriptionInfo',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('CardDetail',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('UserDirectoryAzureSchedule',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('UserDirectoryDatabaseSchedule',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('SystemLogGeneral',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('User',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('UserManagementPages',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('UserManagement',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('UserPreferenceNotification',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('Group',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('GroupManagementPages',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('WindowsADDetail',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('UserDirectoryWindowsSchedule',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('EmailSettings',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,'DateFormat','SiteSettings.DateFormat',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,'TimeZone','SiteSettings.TimeZone',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,'TimeFormat','SiteSettings.TimeFormat',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,'OrganizationName','SiteSettings.OrganizationName',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,'LoginLogo','SiteSettings.LoginScreenLogo',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,'EmailLogo','SiteSettings.EmailLogo',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,'MainScreenLogo','SiteSettings.HeaderLogo',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,'FavIcon','SiteSettings.Favicon',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,'IsEnableCopyrightInfo','SiteSettings.ShowCopyrightInformation',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,'IsEnablePoweredBySyncfusion','SiteSettings.ShowPoweredBySyncfusion',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (2,'EnableSystemNotification','NotificationSettings.SystemNotifications.DefaultSettings',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (2,'EnableMailNotification','NotificationSettings.MailNotifications.DefaultSettings',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (2,'EnableAutoWatchOfCommentsOfCreatedItems','NotificationSettings.AutowatchCommentsOfCreatedItems.DefaultSettings',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (2,'EnableAutoWatchOfCommentsOfAccessibleItems','NotificationSettings.AutowatchCommentsOfAccessibleItems.DefaultSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) Values (2,'EnableReportScheduleNotification','NotificationSettings.ReportScheduleNotification.DefaultSetting',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) Values (2,'EnableUserScheduleNotification','NotificationSettings.UserScheduleNotification.DefaultSetting',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,'EnableSystemNotification','NotificationSettings.SystemNotifications.Allow',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,'EnableMailNotification','NotificationSettings.MailNotifications.Allow',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,'EnableAutoWatchOfCommentsOfCreatedItems','NotificationSettings.AutowatchCommentsOfCreatedItems.Allow',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,'EnableAutoWatchOfCommentsOfAccessibleItems','NotificationSettings.AutowatchCommentsOfAccessibleItems.Allow',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,'EnableReportScheduleNotification','NotificationSettings.ReportScheduleNotification.Allow',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,'EnableUserScheduleNotification','NotificationSettings.UserScheduleNotification.Allow',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (4,'TenantName','UserDirectory.Azure.TenantName',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (4,'ClientId','UserDirectory.Azure.ClientId',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (4,'ClientKey','UserDirectory.Azure.ClientSecret',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,'ServerType','UserDirectory.Database.DatabaseType',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,'ServerName','UserDirectory.Database.ServerName',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,'UserName','UserDirectory.Database.Username',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,'Password','UserDirectory.Database.Password',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,'DatabaseName','UserDirectory.Database.DatabaseName',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,'AuthenticationType','UserDirectory.Database.Authenticatio',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,'DSN','UserDirectory.Database.DSN',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (5,'Port','UserDirectory.Database.Port',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,'FullName','Payments.BillingAddress.Name',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,'Email','Payments.BillingAddress.Email',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,'AddressLine1','Payments.BillingAddress.AddressLine1',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,'AddressLine2','Payments.BillingAddress.AddressLine2',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,'City','Payments.BillingAddress.City',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,'State','Payments.BillingAddress.State',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,'Country','Payments.BillingAddress.Country',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (6,'ZipCode','Payments.BillingAddress.ZipCode',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,'FullName','Payments.BillingAddress.Name',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,'Email','Payments.BillingAddress.Email',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,'Address1','Payments.BillingAddress.AddressLine1',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,'Address2','Payments.BillingAddress.AddressLine2',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,'City','Payments.BillingAddress.City',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,'State','Payments.BillingAddress.State',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,'Country','Payments.BillingAddress.Country',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (7,'ZipCode','Payments.BillingAddress.ZipCode',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (8,'IsEnabled','UserDirectory.Azure.Schedule.IsEnabled',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (8,'RecurrenceType','UserDirectory.Azure.Schedule.RecurrenceType',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (8,'RecurrenceInfo','UserDirectory.Azure.Schedule.Recurrence',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (8,'StartDateString','UserDirectory.Azure.Schedule.Time',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (9,'IsEnabled','UserDirectory.Database.Schedule.IsEnabled',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (9,'RecurrenceType','UserDirectory.Database.Schedule.RecurrenceType',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (9,'RecurrenceInfo','UserDirectory.Database.Schedule.Recurrence',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (9,'StartDateString','UserDirectory.Database.Schedule.Time',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'Subscription','Subscription',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'NotificationSettings','NotificationSettings',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'UserDirectory.Azure.Schedule','UserDirectory.Azure.Schedule',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'UserDirectory.Database.Schedule','UserDirectory.Database.Schedule',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'UserDirectory.Azure','UserDirectory.Azure',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'SystemSettings','SystemSettings',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'UserDirectory.Database','UserDirectory.Database',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'ReportSettings','ReportSettings',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'ReportSettings.PublicReports','ReportSettings.PublicReports',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'ReportSettings.ScheduleCustomBody','ReportSettings.ScheduleCustomBody',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'ConciergeSupport.ResourceAccess','ConciergeSupport.ResourceAccess',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'ConciergeSupport','ConciergeSupport',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'Payments','Payments',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'Payments.Card','Payments.Card',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'Payments.BillingAddress','Payments.BillingAddress',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'Subscription','Subscription',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'Subscription.Plan','Subscription.Plan',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'SiteSettings','SiteSettings',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'Contact','Contact',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'CreatedDate','CreatedDate',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'DisplayName','DisplayName',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'Email','Email',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'Username','Username',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'FirstName','FirstName',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'IsActivated','IsActivated',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'IsActive','IsActive',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'IsDeleted','IsDeleted',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'LastLogin','LastLogin',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'LastName','LastName',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'ModifiedDate','ModifiedDate',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'Picture','Picture',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'Password','Password',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'PasswordChangedDate','PasswordChangedDate',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'DirectoryTypeId','DirectoryTypeId',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'IdPReferenceId','IdPReferenceId',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'ExternalProviderId','ExternalProviderId',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'CanSync','CanSync',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (11,'IsCloseRequest','IsCloseRequest',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'UserPermissionsManagement','Manage User Permissions',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'ConciergeSupportIncidents','Concierge Support Incidents',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'ViewConciergeSupportIncident','View Concierge Support Incident',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'UserConnectedAccounts','User Connected Accounts',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'UserProfile','User Profile',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'UserPermission','User Permission',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'AzureUserImport','Azure AD User Import',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'DatabaseUserImport','Database User Import',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'UserManagementIndex','User Management',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'DatabaseUsersSynchronization','Database users Synchronization',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'AzureUsersSynchronization','Azure AD users Synchronization',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'CsvUserImport','CSV User Import',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'UserManagementProfile','User Management Profile',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,'User','User',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,'Users','Users',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,'CsvUsers','CSV Users',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,'UserActiveStatus','User Active Status',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,'DatabaseUsers','Database Users',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,'AzureUsers','Azure Users',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,'HomepageInProfile','Homepage in User Profile',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,'DefaultHomepage','Default Homepage of User',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,'UserProfilePicture','User Profile Picture',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,'ProfileNotificationSettings','Notification Settings in Profile',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,'UserPassword','User Password',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,'EnableAutoWatchOfCommentsOfAccessibleItems','Auto Watch Of Comments Of Accessible Items',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,'EnableAutoWatchOfCommentsOfCreatedItems','Auto Watch Of Comments Of Created Items',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,'EnableMailNotification','Mail Notification',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,'EnableSystemNotification','System Notification',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,'EnableReportScheduleNotification','Report Schedule Notification',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,'EnableUserScheduleNotification','User Schedule Notification',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,'Group','Group',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,'Color','Color',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,'Description','Description',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,'IsActive','IsActive',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,'ModifiedDate','ModifiedDate',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,'Name','Name',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,'DirectoryTypeId','DirectoryTypeId',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,'ExternalProviderId','ExternalProviderId',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,'Groups','Groups',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,'AzureGroups','Azure Groups',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,'AzureADGroup','Azure AD groups Synchronizatio',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,'AzureADGroupImport','Azure AD Group Import',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,'Group','Group Management',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,'ViewGroup','Group Detail',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,'EditGroup','Edit Group',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,'GroupPermission','Group Permission',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (17,'Username','UserDirectory.Windows.Username',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (17,'Password','UserDirectory.Windows.Password',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (17,'LDAP URL','UserDirectory.Windows.LDAP URL',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (17,'Distinguished Name','UserDirectory.Windows.Distinguished Name',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (17,'Enable SSL','UserDirectory.Windows.Enable SSL',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (17,'Port Number','UserDirectory.Windows.Port Number',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (18,'IsEnabled','UserDirectory.Windows.Schedule.IsEnabled',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (18,'RecurrenceType','UserDirectory.Windows.Schedule.RecurrenceType',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (18,'RecurrenceInfo','UserDirectory.Windows.Schedule.Recurrence',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (18,'StartDateString','UserDirectory.Windows.Schedule.Time',Now(),1)
;

INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'UserDirectory.Windows.Schedule','UserDirectory.Windows.Schedule',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'UserDirectory.Windows','UserDirectory.Windows',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'WindowsUserImport','Windows AD User Import',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (12,'WindowsUsersSynchronization','Windows AD users Synchronization',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,'AWindowsUsers','Windows Users',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,'WindowsGroups','Windows Groups',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,'WindowsADGroup','Windows AD groups Synchronization',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (16,'WindowsADGroupImport','Windows AD Group Import',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,'EmbedSettings','EmbedSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) Values (2,'EnableReportScheduleNotification','NotificationSettings.ReportScheduleNotification.DefaultSetting',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) Values (2,'EnableUserScheduleNotification','NotificationSettings.UserScheduleNotification.DefaultSetting',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,'EnableReportScheduleNotification','NotificationSettings.ReportScheduleNotification.Allow',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (3,'EnableUserScheduleNotification','NotificationSettings.UserScheduleNotification.Allow',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,'EnableReportScheduleNotification','Report Schedule Notification',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (14,'EnableUserScheduleNotification','User Schedule Notification',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,'SMTPServer','SMTPServer.EmailSettings',Now(),1)
;
INSERT into{database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,'SMTPPort','SMTPPort.EmailSettings',Now(),1)
;
INSERT into{database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,'SenderName','SenderName.EmailSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,'SenderEmailAddress','SenderEmailAddress.EmailSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,'AuthenticationType','AuthenticationType.EmailSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,'Username','Username.EmailSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,'Password','Password.EmailSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (19,'EnableSSL','EnableSSL.EmailSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'ManageLicenseSettings',N'ManageLicenseSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'DataConnectors',N'DataConnectors',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'EnableDefaultAuthentication',N'EnableDefaultAuthentication',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'EnableAuthSettings',N'EnableAuthSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'EnableAuthControlSettings',N'EnableAuthControlSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'ScheduleExportFileSettings',N'ScheduleExportFileSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.OAuth2',N'UserDirectory.OAuth2',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.OpenIDConnect',N'UserDirectory.OpenIDConnect',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.AuthControl',N'UserDirectory.AuthControl',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'ReportSettings',N'ReportSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (2,N'NotificationSettings',N'NotificationSettings',Now(),1)
;

/*ALTER Queries below this section */

ALTER TABLE  {database_name}.BOLDRS_UserGroup  ADD FOREIGN KEY(GroupId) REFERENCES  {database_name}.BOLDRS_Group (Id)
;
ALTER TABLE  {database_name}.BOLDRS_UserGroup  ADD FOREIGN KEY(UserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_UserLogin  ADD FOREIGN KEY(UserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_UserPreference ADD FOREIGN KEY(UserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_Item  ADD FOREIGN KEY(ItemTypeId) REFERENCES  {database_name}.BOLDRS_ItemType (Id)
;
ALTER TABLE  {database_name}.BOLDRS_Item  ADD FOREIGN KEY(ParentId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_Item  ADD FOREIGN KEY(CreatedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_Item  ADD FOREIGN KEY(ModifiedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ItemView  ADD FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemView  ADD FOREIGN KEY(ItemViewId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemView  ADD FOREIGN KEY(UserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ItemTrash  ADD FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemTrash  ADD FOREIGN KEY(TrashedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ItemTrashDeleted  ADD FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemTrashDeleted  ADD FOREIGN KEY(ItemTrashId) REFERENCES  {database_name}.BOLDRS_ItemTrash (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemTrashDeleted  ADD FOREIGN KEY(DeletedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ItemVersion  ADD FOREIGN KEY(ItemTypeId) REFERENCES  {database_name}.BOLDRS_ItemType (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemVersion  ADD FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemVersion  ADD FOREIGN KEY(CreatedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ItemLog  ADD FOREIGN KEY(ItemVersionId) REFERENCES  {database_name}.BOLDRS_ItemVersion (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemLog  ADD FOREIGN KEY(ItemLogTypeId) REFERENCES  {database_name}.BOLDRS_ItemLogType (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemLog  ADD FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemLog  ADD FOREIGN KEY(ParentId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemLog  ADD FOREIGN KEY(FromCategoryId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemLog  ADD FOREIGN KEY(ToCategoryId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemLog  ADD FOREIGN KEY(UpdatedUserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemLog  ADD FOREIGN KEY(SourceTypeId) REFERENCES  {database_name}.BOLDRS_Source (Id)
;

ALTER TABLE  {database_name}.BOLDRS_PermissionEntity ADD FOREIGN KEY(ItemTypeId) REFERENCES  {database_name}.BOLDRS_ItemType (Id)
;

ALTER TABLE  {database_name}.BOLDRS_UserPermission  ADD  FOREIGN KEY(PermissionEntityId) REFERENCES  {database_name}.BOLDRS_PermissionEntity (Id)
;
ALTER TABLE  {database_name}.BOLDRS_UserPermission  ADD  FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_UserPermission  ADD  FOREIGN KEY(UserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserPermission ADD FOREIGN KEY ([SettingsTypeId]) REFERENCES [BOLDRS_SettingsType] (Id) 
;
ALTER TABLE {database_name}.BOLDRS_UserPermission  ADD  FOREIGN KEY([ScopeGroupId]) REFERENCES [BOLDRS_Group] ([Id])
;
ALTER TABLE {database_name}.BOLDRS_UserPermission  ADD  FOREIGN KEY([ItemTypeId]) REFERENCES [BOLDRS_ItemType] ([Id])
;

ALTER TABLE  {database_name}.BOLDRS_GroupPermission  ADD  FOREIGN KEY(PermissionEntityId) REFERENCES  {database_name}.BOLDRS_PermissionEntity (Id)
;
ALTER TABLE  {database_name}.BOLDRS_GroupPermission  ADD  FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_GroupPermission  ADD  FOREIGN KEY(GroupId) REFERENCES  {database_name}.BOLDRS_Group (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD FOREIGN KEY ([SettingsTypeId]) REFERENCES [BOLDRS_SettingsType] (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupPermission  ADD  FOREIGN KEY([ScopeGroupId]) REFERENCES [BOLDRS_Group] ([Id])
;
ALTER TABLE {database_name}.BOLDRS_GroupPermission  ADD  FOREIGN KEY([ItemTypeId]) REFERENCES [BOLDRS_ItemType] ([Id])
;

ALTER TABLE  {database_name}.BOLDRS_ScheduleDetail  ADD FOREIGN KEY(ScheduleId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ScheduleDetail  ADD FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ScheduleDetail  ADD FOREIGN KEY(RecurrenceTypeId) REFERENCES  {database_name}.BOLDRS_RecurrenceType (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ScheduleDetail  ADD FOREIGN KEY(ExportTypeId) REFERENCES  {database_name}.BOLDRS_ExportType (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ScheduleDetail  ADD FOREIGN KEY(CreatedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ScheduleDetail  ADD FOREIGN KEY(ModifiedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_SubscribedUser  ADD FOREIGN KEY(ScheduleId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_SubscribedUser  ADD FOREIGN KEY(SubscribedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_SubscribedUser  ADD FOREIGN KEY(RecipientUserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_SubscribedGroup  ADD FOREIGN KEY(ScheduleId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_SubscribedGroup  ADD FOREIGN KEY(SubscribedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_SubscribedGroup  ADD FOREIGN KEY(RecipientGroupId) REFERENCES  {database_name}.BOLDRS_Group (Id)
;

ALTER TABLE  {database_name}.BOLDRS_SubscrExtnRecpt  ADD FOREIGN KEY(ScheduleId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_SubscrExtnRecpt  ADD FOREIGN KEY(SubscribedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ScheduleLogUser  ADD FOREIGN KEY(ScheduleStatusId) REFERENCES  {database_name}.BOLDRS_ScheduleStatus (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ScheduleLogUser  ADD FOREIGN KEY(ScheduleId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ScheduleLogUser  ADD FOREIGN KEY(DeliveredUserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ScheduleLogGroup  ADD FOREIGN KEY(ScheduleStatusId) REFERENCES  {database_name}.BOLDRS_ScheduleStatus (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ScheduleLogGroup  ADD FOREIGN KEY(ScheduleId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ScheduleLogGroup  ADD FOREIGN KEY(GroupId) REFERENCES  {database_name}.BOLDRS_Group (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ScheduleLogGroup  ADD FOREIGN KEY(DeliveredUserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_SchdLogExtnRecpt  ADD FOREIGN KEY(ScheduleStatusId) REFERENCES  {database_name}.BOLDRS_ScheduleStatus (Id)
;
ALTER TABLE  {database_name}.BOLDRS_SchdLogExtnRecpt  ADD FOREIGN KEY(ScheduleId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ScheduleLog  ADD FOREIGN KEY(ScheduleStatusId) REFERENCES  {database_name}.BOLDRS_ScheduleStatus (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ScheduleLog  ADD FOREIGN KEY(ScheduleId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE  {database_name}.BOLDRS_Comment ADD FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_Comment ADD FOREIGN KEY(UserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_Comment ADD FOREIGN KEY(ModifiedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ItemWatch ADD FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemWatch ADD FOREIGN KEY(UserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ItemCommentLog  ADD FOREIGN KEY(CurrentUserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemCommentLog  ADD FOREIGN KEY(ItemCommentLogTypeId) REFERENCES  {database_name}.BOLDRS_ItemCommentLogType (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemCommentLog  ADD FOREIGN KEY(CommentId) REFERENCES  {database_name}.BOLDRS_Comment (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemCommentLog  ADD FOREIGN KEY(RepliedFor) REFERENCES  {database_name}.BOLDRS_Comment (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemCommentLog  ADD FOREIGN KEY(NotificationTo) REFERENCES  {database_name}.BOLDRS_User (Id)
;
	
ALTER TABLE  {database_name}.BOLDRS_FavoriteItem  ADD FOREIGN KEY(UserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_FavoriteItem  ADD FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE  {database_name}.BOLDRS_PermissionAccEntity  ADD FOREIGN KEY(PermissionEntityId) REFERENCES  {database_name}.BOLDRS_PermissionEntity (Id)
;
ALTER TABLE  {database_name}.BOLDRS_PermissionAccEntity  ADD FOREIGN KEY(PermissionAccessId) REFERENCES  {database_name}.BOLDRS_PermissionAccess (Id)
;

ALTER TABLE  {database_name}.BOLDRS_UserPermissionLog  ADD  FOREIGN KEY(LogTypeId) REFERENCES  {database_name}.BOLDRS_PermissionLogType (Id)
;
ALTER TABLE  {database_name}.BOLDRS_UserPermissionLog  ADD  FOREIGN KEY(UserPermissionId) REFERENCES  {database_name}.BOLDRS_UserPermission (Id)
;
ALTER TABLE  {database_name}.BOLDRS_UserPermissionLog  ADD  FOREIGN KEY(UserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_UserPermissionLog  ADD  FOREIGN KEY(AffectedUserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;

ALTER TABLE  {database_name}.BOLDRS_GroupPermissionLog  ADD  FOREIGN KEY(LogTypeId) REFERENCES  {database_name}.BOLDRS_PermissionLogType (Id)
;
ALTER TABLE  {database_name}.BOLDRS_GroupPermissionLog  ADD  FOREIGN KEY(GroupPermissionId) REFERENCES  {database_name}.BOLDRS_GroupPermission (Id)
;
ALTER TABLE  {database_name}.BOLDRS_GroupPermissionLog  ADD  FOREIGN KEY(UserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_GroupPermissionLog  ADD  FOREIGN KEY(AffectedGroupId) REFERENCES  {database_name}.BOLDRS_Group (Id)
;


ALTER TABLE  {database_name}.BOLDRS_SystemLog  ADD CONSTRAINT FK_SystemLog_SystemLogTypeId FOREIGN KEY(SystemLogTypeId) REFERENCES  {database_name}.BOLDRS_SystemLogType (Id)
;
ALTER TABLE  {database_name}.BOLDRS_SystemLog  ADD CONSTRAINT FK_SystemLog_UpdatedUserId FOREIGN KEY(UpdatedUserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_SystemLog  ADD CONSTRAINT FK_SystemLog_LogStatusId FOREIGN KEY(LogStatusId) REFERENCES  {database_name}.BOLDRS_LogStatus (Id)
;

ALTER TABLE  {database_name}.BOLDRS_LogField ADD CONSTRAINT FK_LogField_ModuleId FOREIGN KEY(ModuleId) REFERENCES  {database_name}.BOLDRS_LogModule (Id)
;

ALTER TABLE  {database_name}.BOLDRS_SystemLog  ADD CONSTRAINT FK_SystemLog_LogFieldId FOREIGN KEY(LogFieldId) REFERENCES  {database_name}.BOLDRS_LogField (Id)
;

ALTER TABLE  {database_name}.BOLDRS_UserLog  ADD CONSTRAINT FK_UserLog_UserLogTypeId FOREIGN KEY(UserLogTypeId) REFERENCES  {database_name}.BOLDRS_UserLogType (Id)
;
ALTER TABLE  {database_name}.BOLDRS_UserLog  ADD CONSTRAINT FK_UserLog_TargetUserId FOREIGN KEY(TargetUserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_UserLog  ADD CONSTRAINT FK_UserLog_CurrentUserId FOREIGN KEY(CurrentUserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_UserLog  ADD CONSTRAINT FK_UserLog_SourceTypeId FOREIGN KEY(SourceTypeId) REFERENCES  {database_name}.BOLDRS_Source (Id)
;
ALTER TABLE  {database_name}.BOLDRS_UserLog  ADD CONSTRAINT FK_UserLog_LogStatusId FOREIGN KEY(LogStatusId) REFERENCES  {database_name}.BOLDRS_LogStatus (Id)
;
ALTER TABLE  {database_name}.BOLDRS_UserLog  ADD CONSTRAINT FK_UserLog_LogFieldId FOREIGN KEY(LogFieldId) REFERENCES  {database_name}.BOLDRS_LogField (Id)
;

ALTER TABLE  {database_name}.BOLDRS_GroupLog  ADD CONSTRAINT FK_GroupLog_GroupLogTypeId FOREIGN KEY(GroupLogTypeId) REFERENCES  {database_name}.BOLDRS_GroupLogType (Id)
;
ALTER TABLE  {database_name}.BOLDRS_GroupLog  ADD CONSTRAINT FK_GroupLog_TargetGroupId FOREIGN KEY(TargetGroupId) REFERENCES  {database_name}.BOLDRS_Group (Id)
;
ALTER TABLE  {database_name}.BOLDRS_GroupLog  ADD CONSTRAINT FK_GroupLog_CurrentUserId FOREIGN KEY(CurrentUserId) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_GroupLog  ADD CONSTRAINT FK_GroupLog_SourceTypeId FOREIGN KEY(SourceTypeId) REFERENCES  {database_name}.BOLDRS_Source (Id)
;
ALTER TABLE  {database_name}.BOLDRS_GroupLog  ADD CONSTRAINT FK_GroupLog_LogStatusId FOREIGN KEY(LogStatusId) REFERENCES  {database_name}.BOLDRS_LogStatus (Id)
;
ALTER TABLE  {database_name}.BOLDRS_GroupLog  ADD CONSTRAINT FK_GroupLog_LogFieldId FOREIGN KEY(LogFieldId) REFERENCES  {database_name}.BOLDRS_LogField (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ProcessOption  ADD FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ProcessOptionMap  ADD FOREIGN KEY(ProcessOptionId) REFERENCES  {database_name}.BOLDRS_ProcessOption (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ProcessOptionMap ADD FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ReportDataSource ADD FOREIGN KEY(ReportItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ReportDataSource  ADD FOREIGN KEY(DataSourceItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE  {database_name}.BOLDRS_DataSourceDetail ADD FOREIGN KEY(DataSourceId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE  {database_name}.BOLDRS_DatasetLinkage  ADD FOREIGN KEY(DatasetItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_DatasetLinkage  ADD FOREIGN KEY(ItemId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE  {database_name}.BOLDRS_ScheduleParameter ADD FOREIGN KEY(ScheduleId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE  {database_name}.BOLDRS_DeploymentReports  ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_DeploymentReports  ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ExternalSites  ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_PublishedItem  ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_PublishedItem  ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_PublishJobs  ADD FOREIGN KEY(PublishId) REFERENCES {database_name}.BOLDRS_PublishedItem (Id)
;
ALTER TABLE  {database_name}.BOLDRS_PublishJobs  ADD FOREIGN KEY(UserId) REFERENCES {database_name}.BOLDRS_User (Id)
;

CREATE  INDEX IX_BOLDRS_ScheduleDetail_ScheduleId ON  {database_name}.BOLDRS_ScheduleDetail (ScheduleId);

CREATE  INDEX IX_BOLDRS_ScheduleLog_ScheduleId ON  {database_name}.BOLDRS_ScheduleLog (ScheduleId,ExecutedDate, ScheduleStatusId);

CREATE  INDEX IX_BOLDRS_Item ON  {database_name}.BOLDRS_Item (IsActive, ItemTypeId, ParentId, IsDraft, CreatedById, CreatedDate);

CREATE  INDEX IX_BOLDRS_UserPermission ON  {database_name}.BOLDRS_UserPermission (IsActive, UserId, ItemId, PermissionEntityId,PermissionAccessId);