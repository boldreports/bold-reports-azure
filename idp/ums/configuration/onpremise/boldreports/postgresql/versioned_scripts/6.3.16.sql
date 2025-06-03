INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'ReportDesignerSettings.ImportSampleData',N'ReportDesignerSettings.ImportSampleData',now() at time zone 'utc',1)
;
ALTER TABLE BOLDRS_ScheduleDetail ADD ScheduleBucketExportInfo  varchar(4000) NULL
;