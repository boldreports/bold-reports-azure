INSERT INTO [BOLDRS_PermissionAccEntity] (PermissionEntityId, PermissionAccessId, IsActive) VALUES (17,5,1)
;
INSERT INTO [BOLDRS_PermissionAccEntity] (PermissionEntityId, PermissionAccessId, IsActive) VALUES (18,5,1)
;
INSERT INTO [BOLDRS_GroupPermission] ([PermissionAccessId],[PermissionEntityId],[ItemId],[SettingsTypeId],[ItemTypeId],[ScopeGroupId],[GroupId],[IsActive]) VALUES (16,17,NULL,NULL,NULL,NULL,1,N'True')
;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [IsEmailAttachment] [bit] NOT NULL DEFAULT 1
;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [IsInsertReportInMailBody] [bit] NOT NULL DEFAULT 0
;