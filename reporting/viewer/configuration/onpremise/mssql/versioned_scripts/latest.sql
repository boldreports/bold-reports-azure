ALTER TABLE [BOLDRS_DeploymentReports] ADD [IsMakeReportPublic] [bit] NOT NULL
;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [IsEmailAttachment] [bit] NOT NULL DEFAULT 1
;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [IsInsertReportInMailBody] [bit] NOT NULL DEFAULT 0
;
