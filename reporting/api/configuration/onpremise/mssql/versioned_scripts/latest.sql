ALTER TABLE [BOLDRS_ScheduleDetail] ADD [IsOverwrite] [bit] NULL
;

UPDATE [BOLDRS_ScheduleDetail] SET [IsOverwrite] = 0
;

ALTER TABLE [BOLDRS_ScheduleDetail] ALTER COLUMN [IsOverwrite] [bit] NOT NULL
;

ALTER TABLE [BOLDRS_ScheduleDetail] ADD [IsNotifySaveAs] [bit] NULL
;

UPDATE [BOLDRS_ScheduleDetail] SET [IsNotifySaveAs] = 0
;

ALTER TABLE [BOLDRS_ScheduleDetail] ALTER COLUMN [IsNotifySaveAs] [bit] NOT NULL
;

ALTER TABLE [BOLDRS_ScheduleLog] ADD [Message] [nvarchar](max) NULL
;