CREATE TABLE BOLDRS_ItemSettings(
	Id SERIAL primary key NOT NULL,
	ItemId uuid NOT NULL,
	ItemConfig varchar(4000) NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

ALTER TABLE BOLDRS_ItemSettings ADD CONSTRAINT FK_ItemSettings_ItemId FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
CREATE TABLE BOLDRS_CustomEmailTemplate (
    Id SERIAL PRIMARY KEY,
    IsEnabled smallint,
    DisclaimerContent VARCHAR(255) NOT NULL,
    HeaderContent VARCHAR(255) NULL,
    Subject VARCHAR(255),
    TemplateName VARCHAR(255),
    MailBody TEXT NOT NULL,
    CreatedDate TIMESTAMP NOT NULL,
    ModifiedDate TIMESTAMP,
    SendEmailAsHTML smallint NOT NULL,
    CustomVisibilityOptions TEXT NOT NULL,
    IsActive smallint NOT NULL,
    TemplateId INTEGER NOT NULL,
    IsDefaultTemplate smallint NOT NULL,
    IsSystemDefault smallint NOT NULL,
    Description VARCHAR(255) NULL,
    ModifiedBy int NULL
);

ALTER TABLE BOLDRS_ScheduleDetail ALTER COLUMN ScheduleBucketExportInfo  TYPE TEXT
;
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN IsGroupingEnabled smallint NOT NULL DEFAULT 0
;
ALTER TABLE BOLDRS_SubscribedUser ADD COLUMN IsCC smallint NOT NULL DEFAULT 0
;
ALTER TABLE BOLDRS_SubscribedGroup ADD COLUMN IsCC smallint NOT NULL DEFAULT 0
;
ALTER TABLE BOLDRS_SubscrExtnRecpt ADD COLUMN IsCC smallint NOT NULL DEFAULT 0
;
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN ExportTypes varchar(500) NULL;
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN DataDrivenScheduleDetails  varchar(4000)  NULL;
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN IsDataDrivenSchedule smallint NOT NULL DEFAULT 0;
ALTER TABLE BOLDRS_Schedulelog ADD COLUMN RowDetails  varchar(10000)  NULL;
ALTER TABLE BOLDRS_Schedulelog ADD COLUMN IsDataDriven smallint NOT NULL DEFAULT 0;
ALTER TABLE BOLDRS_ScheduleLog ADD COLUMN ExportFileName VARCHAR(255) NULL;
ALTER TABLE BOLDRS_ScheduleLog ADD COLUMN IsFileActive SMALLINT NOT NULL DEFAULT 0;

CREATE TABLE BOLDRS_ReportCopyLog(
    Id uuid NOT NULL PRIMARY KEY,
    BatchId uuid NULL,
    IsBulkCopy smallint NOT NULL,
    SourceItemId uuid NOT NULL,
    SourceItemName varchar(255) NOT NULL,
    SourceCategoryId uuid NULL,
    SourceCategoryName varchar(255) NULL,
    SourceTenantId uuid NOT NULL,
	CopySiteType varchar(255) NULL,
	ExternalSiteUrl varchar(255) NULL,
    DestinationTenantId uuid NOT NULL,
    DestinationTenantName varchar(255) NOT NULL,
    DestinationCategoryPath varchar(1000) NOT NULL,
    DestinationCategoryId uuid NULL,
    DestinationItemId uuid NULL,
    DestinationItemName varchar(255) NOT NULL,
    IsOverwrite smallint NOT NULL,
    CopiedByUserId int NOT NULL,
    CopiedAt timestamp NOT NULL,
    Status varchar(50) NOT NULL,
    FailureReason text NULL)
;

ALTER TABLE BOLDRS_ReportCopyLog  ADD  FOREIGN KEY(CopiedByUserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_ReportCopyLog  ADD  FOREIGN KEY(SourceItemId) REFERENCES BOLDRS_Item (Id)
;
-- Update existing NULL ScheduleRunStatus values to 'Idle'
UPDATE BOLDRS_ScheduleDetail SET ScheduleRunStatus = 'Idle' WHERE ScheduleRunStatus IS NULL;