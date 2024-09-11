ALTER TABLE [BOLDRS_ScheduleDetail] ADD [IsEmailAttachment] [bit] NOT NULL DEFAULT 1
;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [IsInsertReportInMailBody] [bit] NOT NULL DEFAULT 0
;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [IsNoDataEnabled] BIT NULL;
ALTER TABLE [BOLDRS_Item] ADD [ViewerFeatures] [nvarchar](4000) NULL
;