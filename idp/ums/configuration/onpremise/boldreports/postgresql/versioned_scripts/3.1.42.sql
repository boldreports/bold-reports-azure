INSERT into BOLDRS_ExportType (Name,IsActive) VALUES (N'XML', 1)
;
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN ExportFileName varchar(150) NULL
;

CREATE TABLE BOLDRS_DeploymentReports(
	Id SERIAL primary key NOT NULL,
	ItemId uuid NOT NULL,
	ItemName varchar(255) NOT NULL,
	CategoryName varchar(255) NOT NULL,
	IsReportLocked smallint NOT NULL,
	IsDatasourceLocked smallint NOT NULL,
	IsDatasetLocked smallint NOT NULL,
	Description varchar(1026) NULL,
	CreatedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ExternalSites(
	Id SERIAL primary key NOT NULL,
	Name varchar(255) NOT NULL,
	ClientId varchar(255) NOT NULL,
	ClientSecret varchar(255) NULL,
	SiteURL varchar(255) NULL,
	CreatedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_PublishedItem(
	Id uuid primary key NOT NULL,
	TenantId uuid NOT NULL,
	ItemId uuid NOT NULL,
	ItemName varchar(255) NOT NULL,
	Description varchar(1026) NULL,
	CategoryName varchar(255) NULL,
	UserId int NOT NULL,
	DestinationItemId uuid NOT NULL,
	PublishType varchar(255) NOT NULL,
	IsLocked smallint NOT NULL,
	CreatedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_PublishJobs(
	Id SERIAL primary key NOT NULL,
	PublishId uuid NOT NULL,
	UserId int NOT NULL,
	JobDetails varchar(4000) NOT NULL,
	CreatedDate timestamp NOT NULL,
	CompletedDate timestamp NOT NULL,
	Status varchar(255) NOT NULL,
	IsActive smallint NOT NULL)
;

ALTER TABLE BOLDRS_DeploymentReports  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_DeploymentReports  ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_ExternalSites ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_DeploymentReports  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_DeploymentReports  ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_PublishedItem  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_PublishedItem  ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_PublishJobs  ADD FOREIGN KEY(PublishId) REFERENCES BOLDRS_PublishedItem (Id)
;
ALTER TABLE BOLDRS_PublishJobs  ADD FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;