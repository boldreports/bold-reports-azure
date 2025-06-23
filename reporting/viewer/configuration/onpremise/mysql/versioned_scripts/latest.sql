ALTER TABLE `{database_name}`.BOLDRS_ItemLog Modify AdditionalLogInfo text NULL
;
ALTER TABLE `{database_name}`.BOLDRS_DeploymentReports ADD IsMakeReportPublic tinyint NOT NULL;