CREATE TABLE SyncDS_ItemUserPreference(
    Id SERIAL primary key NOT NULL,
    ItemId uuid NOT NULL,
    UserId int NOT NULL,
    AutosaveFilter varchar(4000) NULL,
    DefaultViewId uuid NULL,
    ModifiedDate timestamp NOT NULL,
    IsActive smallint NOT NULL)
;
INSERT into SyncDS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (13,N'UserDashboardSettings',N'Dashboard Settings in Profile',GETDATE(),1)
;
INSERT into SyncDS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'DashboardSettings.DefaultViews',N'DashboardSettings.DefaultViews',GETDATE(),1)
;
INSERT into SyncDS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'DashboardSettings.AutosaveFilter',N'DashboardSettings.AutosaveFilter',GETDATE(),1)
;
ALTER TABLE SyncDS_ItemUserPreference  ADD FOREIGN KEY(ItemId) REFERENCES SyncDS_Item (Id)
;
ALTER TABLE SyncDS_ItemUserPreference  ADD FOREIGN KEY(UserId) REFERENCES SyncDS_User (Id)
;
Alter Table SyncDS_UserPreference Add Dashboards varchar(4000) NULL
;
INSERT into SyncDS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'OAuthGroups',N'OAuth2 Groups',now() at time zone 'utc',1)
;
INSERT into SyncDS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (15,N'OpenIDGroups',N'OpenID Connect Groups',now() at time zone 'utc',1)
;

ALTER TABLE SyncDS_DashboardWidget ADD WidgetInfo varchar(4000)
;
ALTER TABLE SyncDS_MultiTabDashboard Add OrderNumber int NULL
;

ALTER TABLE SyncDS_AzureADCredential ADD EnableGroupUserImport smallint NOT NULL DEFAULT 1
;
ALTER TABLE SyncDS_ADCredential ADD EnableGroupUserImport smallint NOT NULL DEFAULT 1
;