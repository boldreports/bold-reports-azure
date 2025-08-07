ALTER TABLE BOLDRS_DeploymentReports ADD IsMakeReportPublic smallint NOT NULL;

ALTER TABLE BOLDRS_ScheduleDetail ADD IsEmailAttachment smallint NOT NULL DEFAULT 1
;
ALTER TABLE BOLDRS_ScheduleDetail ADD IsInsertReportInMailBody smallint NOT NULL DEFAULT 0
