ALTER TABLE BOLDRS_ScheduleDetail ADD IsEmailAttachment tinyint NOT NULL DEFAULT 1
;
ALTER TABLE BOLDRS_ScheduleDetail ADD IsInsertReportInMailBody tinyint NOT NULL DEFAULT 0
;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD IsNoDataEnabled TINYINT NULL;
ALTER TABLE {database_name}.BOLDRS_Item ADD ViewerFeatures varchar(4000) NULL
;
