INSERT into  {database_name}.BOLDRS_ExportType (Name,IsActive) VALUES ('XML', 1)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD COLUMN ExportFileName varchar(130) NULL
;

CREATE TABLE {database_name}.BOLDRS_DeploymentReports(
	Id int NOT NULL AUTO_INCREMENT,
	ItemId Char(38) NOT NULL,
	ItemName varchar(255) NOT NULL,
	CategoryName varchar(255) NOT NULL,
	Description varchar(1026) NULL,
	IsReportLocked tinyint NOT NULL,
	IsDatasourceLocked tinyint NOT NULL,
	IsDatasetLocked tinyint NOT NULL,
	CreatedById int NOT NULL,
	CreatedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_ExternalSites(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(255) NOT NULL,
	ClientId varchar(255) NOT NULL,
	ClientSecret varchar(255) NOT NULL,
	SiteURL varchar(255) NOT NULL,
	CreatedById int NOT NULL,
	CreatedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_PublishedItem(
	Id Char(38) NOT NULL,
	TenantId Char(38) NOT NULL,
	ItemId Char(38) NOT NULL,
	ItemName varchar(255) NOT NULL,
	Description varchar(1026) NULL,
	CategoryName varchar(255) NULL,
	UserId int NOT NULL,
	DestinationItemId Char(38) NOT NULL,
	PublishType varchar(255) NOT NULL,
	IsLocked tinyint NOT NULL,
	CreatedById int NOT NULL,
	CreatedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_PublishJobs(
	Id int NOT NULL AUTO_INCREMENT,
	PublishId Char(38) NOT NULL,
	UserId int NOT NULL,
	JobDetails varchar(4000) NOT NULL,
	CreatedDate datetime NOT NULL,
	CompletedDate datetime NOT NULL,
	Status varchar(255) NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

ALTER TABLE  {database_name}.BOLDRS_DeploymentReports  ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_DeploymentReports  ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ExternalSites  ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_PublishedItem  ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_PublishedItem  ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_PublishJobs  ADD FOREIGN KEY(PublishId) REFERENCES {database_name}.BOLDRS_PublishedItem (Id)
;
ALTER TABLE  {database_name}.BOLDRS_PublishJobs  ADD FOREIGN KEY(UserId) REFERENCES {database_name}.BOLDRS_User (Id)
;