INSERT into  {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,'ReportDesignerSettings.ImportSampleData','ReportDesignerSettings.ImportSampleData',Now(),1)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD COLUMN ScheduleBucketExportInfo text NULL
;