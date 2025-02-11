ALTER TABLE BOLDRS_Item ADD IsLocked smallint NULL DEFAULT 0
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

INSERT into BOLDRS_LogModule (Name,ModifiedDate,IsActive) VALUES (N'EmailSettings',now() at time zone 'utc',1)
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

CREATE TABLE BOLDRS_SettingsType(
	Id SERIAL PRIMARY KEY NOT NULL,
	Name varchar(100) NOT NULL UNIQUE,
	IsActive smallint NULL)
;

INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'Site Settings', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'Site Settings')
;
INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'Reports Settings', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'Reports Settings')
;
INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'Embed Settings', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'Embed Settings')
;
INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'Connectors', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'Connectors')
;
INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'Email Settings', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'Email Settings')
;
INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'Accounts Settings', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'Accounts Settings')
;
INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'User Directory Settings', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'User Directory Settings')
;
INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'Authentication Settings', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'Authentication Settings')
;
INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'Notification Settings', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'Notification Settings')
;
INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'Manage License', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'Manage License')
;
INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'Support Settings', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'Support Settings')
;
INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'Subscription', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'Subscription')
;
INSERT INTO BOLDRS_SettingsType (Name, IsActive) SELECT N'Payments', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_SettingsType WHERE Name = N'Payments')
;

ALTER TABLE BOLDRS_UserPermission ADD SettingsTypeId int NULL
;
ALTER TABLE BOLDRS_UserPermission ADD ScopeGroupId int NULL
;
ALTER TABLE BOLDRS_UserPermission ADD ItemTypeId int NULL
;

ALTER TABLE BOLDRS_GroupPermission ADD SettingsTypeId int NULL
;
ALTER TABLE BOLDRS_GroupPermission ADD ScopeGroupId int NULL
;
ALTER TABLE BOLDRS_GroupPermission ADD ItemTypeId int NULL
;

ALTER TABLE BOLDRS_UserPermission ADD FOREIGN KEY (SettingsTypeId) REFERENCES BOLDRS_SettingsType (Id) 
;
ALTER TABLE BOLDRS_UserPermission  ADD  FOREIGN KEY(ScopeGroupId) REFERENCES BOLDRS_Group (Id)
;
ALTER TABLE BOLDRS_UserPermission  ADD  FOREIGN KEY(ItemTypeId) REFERENCES BOLDRS_ItemType (Id)
;

ALTER TABLE BOLDRS_GroupPermission ADD FOREIGN KEY (SettingsTypeId) REFERENCES BOLDRS_SettingsType (Id)
;
ALTER TABLE BOLDRS_GroupPermission ADD  FOREIGN KEY(ScopeGroupId) REFERENCES BOLDRS_Group (Id)
;
ALTER TABLE BOLDRS_GroupPermission  ADD  FOREIGN KEY(ItemTypeId) REFERENCES BOLDRS_ItemType (Id)
;

INSERT INTO BOLDRS_ItemType (Name, IsActive) SELECT 'Slideshow', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_ItemType WHERE Name = 'Slideshow')
;
INSERT INTO BOLDRS_ItemType (Name, IsActive) SELECT 'Settings', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_ItemType WHERE Name = 'Settings')
;
INSERT INTO BOLDRS_ItemType (Name, IsActive) SELECT 'User Management', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_ItemType WHERE Name = 'User Management')
;
INSERT INTO BOLDRS_ItemType (Name, IsActive) SELECT 'Permissions', 1
WHERE NOT EXISTS (SELECT Name FROM BOLDRS_ItemType WHERE Name = 'Permissions')
;

INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'Specific Slideshow',0,10,1
WHERE NOT EXISTS ( SELECT Name FROM BOLDRS_PermissionEntity WHERE Name = 'Specific Slideshow')
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'All Slideshow',1,10,1
WHERE NOT EXISTS ( SELECT Name FROM BOLDRS_PermissionEntity WHERE Name = 'All Slideshow')
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'Specific Settings',0,11,1
WHERE NOT EXISTS ( SELECT Name FROM BOLDRS_PermissionEntity WHERE Name = 'Specific Settings')
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'All Settings',1,11,1
WHERE NOT EXISTS ( SELECT Name FROM BOLDRS_PermissionEntity WHERE Name = 'All Settings')
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'Specific Group',0,12,1
WHERE NOT EXISTS ( SELECT Name FROM BOLDRS_PermissionEntity WHERE Name = 'Specific Group')
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'Users and Groups',1,12,1
WHERE NOT EXISTS ( SELECT Name FROM BOLDRS_PermissionEntity WHERE Name = 'Users and Groups')
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'Specific Permissions',0,13,1
WHERE NOT EXISTS ( SELECT Name FROM BOLDRS_PermissionEntity WHERE Name = 'Specific Permissions')
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'All Permissions',1,13,1
WHERE NOT EXISTS ( SELECT Name FROM BOLDRS_PermissionEntity WHERE Name = 'All Permissions')
;
INSERT INTO BOLDRS_PermissionEntity (Name,EntityType,ItemTypeId, IsActive) SELECT 'All Groups',1,12,1
WHERE NOT EXISTS ( SELECT Name FROM BOLDRS_PermissionEntity WHERE Name = 'All Groups')
;

INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 23,3,1
WHERE NOT EXISTS ( SELECT PermissionEntityId FROM BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 23 AND PermissionAccessId = 3)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 24,3,1
WHERE NOT EXISTS ( SELECT PermissionEntityId FROM BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 24 AND PermissionAccessId = 3)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 25,3,1
WHERE NOT EXISTS ( SELECT PermissionEntityId FROM BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 25 AND PermissionAccessId = 3)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 26,3,1
WHERE NOT EXISTS ( SELECT PermissionEntityId FROM BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 26 AND PermissionAccessId = 3)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 27,3,1
WHERE NOT EXISTS ( SELECT PermissionEntityId FROM BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 27 AND PermissionAccessId = 3)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 28,3,1
WHERE NOT EXISTS ( SELECT PermissionEntityId FROM BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 28 AND PermissionAccessId = 3)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) SELECT 29,1,1
WHERE NOT EXISTS ( SELECT PermissionEntityId FROM BOLDRS_PermissionAccEntity WHERE PermissionEntityId = 29 AND PermissionAccessId = 1)
;

ALTER TABLE BOLDRS_ItemLog ADD AdditionalLogInfo varchar(100) NULL
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