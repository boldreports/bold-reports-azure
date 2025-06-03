INSERT into [BOLDRS_LogField] (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'ReportDesignerSettings.ImportSampleData',N'ReportDesignerSettings.ImportSampleData',GETDATE(),1)
;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [ScheduleBucketExportInfo] [nvarchar](4000) NULL
;