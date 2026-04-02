ALTER TABLE BOLDRS_ScheduleDetail ADD ReplytoEmail varchar(640) NULL
;

CREATE TABLE BOLDRS_MultiTabReport(
	Id SERIAL PRIMARY KEY NOT NULL,
	ParentReportId uuid NOT NULL,
	ChildReportId uuid NOT NULL,
	OrderNumber int NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL,
	TabName varchar(255) NULL)
;

ALTER TABLE BOLDRS_MultiTabReport  ADD FOREIGN KEY(ParentReportId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_MultiTabReport  ADD FOREIGN KEY(ChildReportId) REFERENCES BOLDRS_Item (Id)
;