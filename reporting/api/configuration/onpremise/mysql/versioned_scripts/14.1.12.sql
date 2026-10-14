CREATE TABLE {database_name}.BOLDRS_ItemSettings(
	Id int NOT NULL AUTO_INCREMENT,
	ItemId Char(38) NOT NULL,
	ItemConfig varchar(4000) NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id)) ROW_FORMAT=DYNAMIC
;

ALTER TABLE {database_name}.BOLDRS_ItemSettings ADD CONSTRAINT FK_ItemSettings_ItemId FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
CREATE TABLE {database_name}.BOLDRS_CustomEmailTemplate (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    IsEnabled BIT,
    DisclaimerContent VARCHAR(255) NOT NULL,
    HeaderContent VARCHAR(255) NULL,
    Subject VARCHAR(255),
    TemplateName VARCHAR(255),
    MailBody TEXT NOT NULL,
    CreatedDate DATETIME NOT NULL,
    ModifiedDate DATETIME,
    SendEmailAsHTML BIT NOT NULL,
    CustomVisibilityOptions TEXT NOT NULL,
    IsActive BIT NOT NULL,
	TemplateId INT NOT NULL,
	IsDefaultTemplate BIT NOT NULL,
	IsSystemDefault BIT NOT NULL,
	Description VARCHAR(255) NULL,
	ModifiedBy int NOT NULL
    );
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD COLUMN IsGroupingEnabled  tinyint NOT NULL DEFAULT 0 
;
ALTER TABLE {database_name}.BOLDRS_SubscribedUser ADD COLUMN IsCC  tinyint NOT NULL DEFAULT 0
;
ALTER TABLE {database_name}.BOLDRS_SubscribedGroup ADD COLUMN IsCC  tinyint NOT NULL DEFAULT 0
;
ALTER TABLE {database_name}.BOLDRS_SubscrExtnRecpt ADD COLUMN IsCC  tinyint NOT NULL DEFAULT 0
;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD COLUMN ExportTypes VARCHAR(500) NULL
;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD COLUMN DataDrivenScheduleDetails text NULL;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD COLUMN IsDataDrivenSchedule tinyint NOT NULL DEFAULT 0;
ALTER TABLE {database_name}.BOLDRS_Schedulelog ADD COLUMN RowDetails  varchar(10000)  NULL;
ALTER TABLE {database_name}.BOLDRS_Schedulelog ADD COLUMN IsDataDriven smallint NOT NULL DEFAULT 0;
ALTER TABLE {database_name}.BOLDRS_ScheduleLog ADD COLUMN ExportFileName varchar(255) NULL;
ALTER TABLE {database_name}.BOLDRS_ScheduleLog ADD COLUMN IsFileActive TINYINT(1) NOT NULL DEFAULT 0;

CREATE TABLE {database_name}.BOLDRS_ReportCopyLog(
    Id char(38) NOT NULL,
    BatchId char(38) NULL,
    IsBulkCopy tinyint NOT NULL,
    SourceItemId char(38) NOT NULL,
    SourceItemName varchar(255) NOT NULL,
    SourceCategoryId char(38) NULL,
    SourceCategoryName varchar(255) NULL,
    SourceTenantId char(38) NOT NULL,
	CopySiteType varchar(255) NULL,
	ExternalSiteUrl varchar(255) NULL,
    DestinationTenantId char(38) NOT NULL,
    DestinationTenantName varchar(255) NOT NULL,
    DestinationCategoryPath varchar(1000) NOT NULL,
    DestinationCategoryId char(38) NULL,
    DestinationItemId char(38) NULL,
    DestinationItemName varchar(255) NOT NULL,
    IsOverwrite tinyint NOT NULL,
    CopiedByUserId int NOT NULL,
    CopiedAt datetime NOT NULL,
    Status varchar(50) NOT NULL,
    FailureReason text NULL,
    PRIMARY KEY (Id))
;

ALTER TABLE {database_name}.BOLDRS_ReportCopyLog  ADD FOREIGN KEY(CopiedByUserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_ReportCopyLog  ADD FOREIGN KEY(SourceItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
-- Update existing NULL ScheduleRunStatus values to 'Idle'
UPDATE {database_name}.BOLDRS_ScheduleDetail SET ScheduleRunStatus = 'Idle' WHERE ScheduleRunStatus IS NULL;