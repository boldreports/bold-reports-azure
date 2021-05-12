ALTER TABLE [SyncRS_ScheduleDetail] ADD [IsOverwrite] [bit] NULL
;

UPDATE [SyncRS_ScheduleDetail] SET [IsOverwrite] = 0
;

ALTER TABLE [SyncRS_ScheduleDetail] ALTER COLUMN [IsOverwrite] [bit] NOT NULL
;

ALTER TABLE [SyncRS_ScheduleDetail] ADD [IsNotifySaveAs] [bit] NULL
;

UPDATE [SyncRS_ScheduleDetail] SET [IsNotifySaveAs] = 0
;

ALTER TABLE [SyncRS_ScheduleDetail] ALTER COLUMN [IsNotifySaveAs] [bit] NOT NULL
;