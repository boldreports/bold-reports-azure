ALTER TABLE [BOLDRS_ScheduleDetail] ADD [ScheduleExportInfo] [nvarchar](4000) NULL
;
ALTER TABLE [BOLDRS_AzureADCredential] ADD [DeleteGroupUsers] [bit] NOT NULL DEFAULT 0
;