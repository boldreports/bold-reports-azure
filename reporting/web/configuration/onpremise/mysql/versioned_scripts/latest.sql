CREATE TABLE {database_name}.BOLDRS_EmailActivityLog(
    Id int NOT NULL AUTO_INCREMENT,
    Event varchar(255) NOT NULL,
    RecipientEmail varchar(255) NOT NULL,
    SenderEmail varchar(255) NOT NULL,
    MailSubject varchar(255) NOT NULL,
    MailBody text NULL,
    CreatedDate datetime NOT NULL,
    ModifiedDate datetime  NULL,
    InitiatedBy int NOT NULL,
    UserId int NULL,
    GroupId int NULL,
    ItemId Char(38) NULL,
    CommentId int NULL,
    PermissionId int NULL,
    Status int NOT NULL,
    StatusMessage text NULL,
    IsActive tinyint NOT NULL,
    PRIMARY KEY (Id))
;

ALTER TABLE {database_name}.BOLDRS_EmailActivityLog  ADD  FOREIGN KEY(UserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_EmailActivityLog  ADD  FOREIGN KEY(GroupId) REFERENCES {database_name}.BOLDRS_Group (Id)
;
ALTER TABLE {database_name}.BOLDRS_EmailActivityLog  ADD  FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_EmailActivityLog  ADD FOREIGN KEY(CommentId) REFERENCES {database_name}.BOLDRS_Comment (Id)
;

/* Add nullable SkipAttachment and SkipMail columns to support no-data options for existing installations */
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD COLUMN SkipAttachment tinyint NULL;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD COLUMN SkipMail tinyint NULL;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD ScheduleRunStatus varchar(1000) NOT NULL DEFAULT 'Idle';
ALTER TABLE {database_name}.BOLDRS_ItemView Modify QueryString text NOT NULL
;

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