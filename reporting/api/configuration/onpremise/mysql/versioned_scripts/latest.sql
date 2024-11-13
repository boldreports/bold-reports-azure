INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES(17,5,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES(18,5,1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'ReportDesignerSettings.ImportSampleData','ReportDesignerSettings.ImportSampleData',Now(),1)
;
INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'ReportDesignerSettings.CodeEditor','ReportDesignerSettings.CodeEditor',Now(),1)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD COLUMN ScheduleBucketExportInfo text NULL
;