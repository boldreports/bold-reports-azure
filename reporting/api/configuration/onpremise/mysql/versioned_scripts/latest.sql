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