ALTER TABLE `{database_name}`.BOLDRS_DeploymentReports ADD IsMakeReportPublic tinyint NOT NULL;

ALTER TABLE BOLDRS_ScheduleDetail ADD IsEmailAttachment tinyint NOT NULL DEFAULT 1
;
ALTER TABLE BOLDRS_ScheduleDetail ADD IsInsertReportInMailBody tinyint NOT NULL DEFAULT 0
