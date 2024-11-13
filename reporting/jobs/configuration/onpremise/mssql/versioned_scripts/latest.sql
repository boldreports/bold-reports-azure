INSERT INTO [BOLDRS_PermissionAccEntity] (PermissionEntityId, PermissionAccessId, IsActive) VALUES (17,5,1)
;
INSERT INTO [BOLDRS_PermissionAccEntity] (PermissionEntityId, PermissionAccessId, IsActive) VALUES (18,5,1)
;
INSERT into [BOLDRS_LogField] (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'ReportDesignerSettings.ImportSampleData',N'ReportDesignerSettings.ImportSampleData',GETDATE(),1)
;
INSERT into [BOLDRS_LogField] (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'ReportDesignerSettings.CodeEditor',N'ReportDesignerSettings.CodeEditor',GETDATE(),1)
;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [ScheduleBucketExportInfo] [nvarchar](4000) NULL
;