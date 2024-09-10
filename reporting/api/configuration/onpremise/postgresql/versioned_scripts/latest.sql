ALTER TABLE BOLDRS_ScheduleDetail ADD IsEmailAttachment smallint NOT NULL DEFAULT 1
;
ALTER TABLE BOLDRS_ScheduleDetail ADD IsInsertReportInMailBody smallint NOT NULL DEFAULT 0
;
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN IsNoDataEnabled smallint NULL;
ALTER TABLE BOLDRS_Item ADD ViewerFeatures varchar(4000) NULL
;