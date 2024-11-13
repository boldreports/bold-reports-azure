INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (17,5,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (18,5,1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'ReportDesignerSettings.ImportSampleData',N'ReportDesignerSettings.ImportSampleData',now() at time zone 'utc',1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'ReportDesignerSettings.CodeEditor',N'ReportDesignerSettings.CodeEditor',now() at time zone 'utc',1)
;
ALTER TABLE BOLDRS_ScheduleDetail ADD ScheduleBucketExportInfo  varchar(4000) NULL
;