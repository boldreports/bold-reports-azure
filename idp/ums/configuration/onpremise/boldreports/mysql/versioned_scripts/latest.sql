ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD COLUMN ReplytoEmail VARCHAR(640) NULL
;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail MODIFY COLUMN ExportPath VARCHAR(500) NULL
;

CREATE TABLE  {database_name}.BOLDRS_MultiTabReport(
	Id int NOT NULL AUTO_INCREMENT,
	ParentReportId char(38) NOT NULL,
	ChildReportId char(38) NOT NULL,
	OrderNumber int NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	TabName varchar(255) NULL,
    PRIMARY KEY (Id)) ROW_FORMAT=DYNAMIC
;

ALTER TABLE {database_name}.BOLDRS_MultiTabReport  ADD FOREIGN KEY(ParentReportId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_MultiTabReport  ADD FOREIGN KEY(ChildReportId) REFERENCES {database_name}.BOLDRS_Item (Id)
;