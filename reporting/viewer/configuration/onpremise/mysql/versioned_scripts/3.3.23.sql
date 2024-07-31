ALTER TABLE {database_name}.BOLDRS_Item ADD IsLocked tinyint NULL DEFAULT 0
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

INSERT into  {database_name}.BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES ('EmailSettings',Now(),1)
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

CREATE TABLE {database_name}.BOLDRS_SettingsType(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(100) NOT NULL UNIQUE,
	IsActive tinyint NULL,
	PRIMARY KEY (Id))
;

INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'Site Settings', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='Site Settings' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'Reports Settings', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='Reports Settings' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'Embed Settings', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='Embed Settings' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'Connectors', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='Connectors' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'Email Settings', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='Email Settings' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'Accounts Settings', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='Accounts Settings' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'User Directory Settings', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='User Directory Settings' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'Authentication Settings', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='Authentication Settings' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'Notification Settings', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='Notification Settings' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'Manage License', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='Manage License' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'Support Settings', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='Support Settings' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'Subscription', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='Subscription' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_SettingsType (Name, IsActive) SELECT 'Payments', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_SettingsType WHERE Name='Payments' LIMIT 1)
;

ALTER TABLE {database_name}.BOLDRS_UserPermission ADD SettingsTypeId int NULL 
;
ALTER TABLE {database_name}.BOLDRS_UserPermission ADD ScopeGroupId int NULL 
;
ALTER TABLE {database_name}.BOLDRS_UserPermission ADD ItemTypeId int NULL 
;

ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD SettingsTypeId int NULL 
;
ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD ScopeGroupId int NULL 
;
ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD ItemTypeId int NULL 
;

ALTER TABLE {database_name}.BOLDRS_UserPermission ADD FOREIGN KEY (SettingsTypeId) REFERENCES {database_name}.BOLDRS_SettingsType (Id) 
;
ALTER TABLE {database_name}.BOLDRS_UserPermission ADD FOREIGN KEY(ScopeGroupId) REFERENCES {database_name}.BOLDRS_Group (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserPermission ADD FOREIGN KEY(ItemTypeId) REFERENCES {database_name}.BOLDRS_ItemType (Id)
;

ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD FOREIGN KEY (SettingsTypeId) REFERENCES {database_name}.BOLDRS_SettingsType (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD FOREIGN KEY(ScopeGroupId) REFERENCES {database_name}.BOLDRS_Group (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD FOREIGN KEY(ItemTypeId) REFERENCES {database_name}.BOLDRS_ItemType (Id)
;

INSERT INTO {database_name}.BOLDRS_ItemType (Name, IsActive) SELECT 'Slideshow', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_ItemType WHERE Name='Slideshow' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_ItemType (Name, IsActive) SELECT 'Settings', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_ItemType WHERE Name='Settings' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_ItemType (Name, IsActive) SELECT 'User Management', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_ItemType WHERE Name='User Management' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_ItemType (Name, IsActive) SELECT 'Permissions', 1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_ItemType WHERE Name='Permissions' LIMIT 1)
;

INSERT INTO {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'Specific Slideshow',0,10,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionEntity WHERE Name='Specific Slideshow' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'All Slideshow',1,10,1 FROM DUAL 
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionEntity WHERE Name='All Slideshow' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'Specific Settings',0,11,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionEntity WHERE Name='Specific Settings' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'All Settings',1,11,1 FROM DUAL 
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionEntity WHERE Name='All Settings' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'Specific Group',0,12,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionEntity WHERE Name='Specific Group' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'Users and Groups',1,12,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionEntity WHERE Name='Users and Groups' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'Specific Permissions',0,13,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionEntity WHERE Name='Specific Permissions' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'All Permissions',1,13,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionEntity WHERE Name='All Permissions' LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'All Groups',1,12,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionEntity WHERE Name='All Groups' LIMIT 1)
;

INSERT INTO {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 23,3,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 23 AND PermissionAccessId = 3 LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 24,3,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 24 AND PermissionAccessId = 3 LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 25,3,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 25 AND PermissionAccessId = 3 LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 26,3,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 26 AND PermissionAccessId = 3 LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 27,3,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 27 AND PermissionAccessId = 3 LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 28,3,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 28 AND PermissionAccessId = 3 LIMIT 1)
;
INSERT INTO {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 29,1,1 FROM DUAL
WHERE NOT EXISTS(SELECT * FROM {database_name}.BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 29 AND PermissionAccessId = 1 LIMIT 1)
;

ALTER TABLE {database_name}.BOLDRS_ItemLog ADD AdditionalLogInfo varchar(100) NULL
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
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.OAuth2',N'UserDirectory.OAuth2',GETDATE(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.OpenIDConnect',N'UserDirectory.OpenIDConnect',GETDATE(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.AuthControl',N'UserDirectory.AuthControl',GETDATE(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'ReportSettings',N'ReportSettings',GETDATE(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (2,N'NotificationSettings',N'NotificationSettings',GETDATE(),1)
;