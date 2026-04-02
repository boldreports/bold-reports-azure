CREATE TABLE BOLDRS_EmailActivityLog(
    Id  SERIAL PRIMARY KEY NOT NULL,
    Event varchar(255) NOT NULL,
    RecipientEmail varchar(255) NOT NULL,
    SenderEmail varchar(255) NOT NULL,
    MailSubject varchar(255) NOT NULL,
    MailBody text NULL,
    CreatedDate timestamp NOT NULL,
    ModifiedDate timestamp  NULL,
    InitiatedBy int NOT NULL,
    UserId int NULL,
    GroupId int NULL,
    ItemId uuid NULL,
    CommentId int NULL,
    PermissionId int NULL,
    Status int NOT NULL,
    StatusMessage text NULL,
    IsActive smallint NOT NULL)
;

ALTER TABLE BOLDRS_EmailActivityLog  ADD  FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_EmailActivityLog  ADD  FOREIGN KEY(GroupId) REFERENCES BOLDRS_Group (Id)
;
ALTER TABLE BOLDRS_EmailActivityLog  ADD  FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_EmailActivityLog  ADD FOREIGN KEY(CommentId) REFERENCES BOLDRS_Comment (Id)
;

-- Add nullable SkipAttachment and SkipMail columns to support no-data options for existing installations
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN SkipAttachment smallint NULL;
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN SkipMail smallint NULL;
ALTER TABLE BOLDRS_ScheduleDetail ADD ScheduleRunStatus varchar(1000) NOT NULL DEFAULT 'Idle'
;
ALTER TABLE BOLDRS_ItemView ALTER COLUMN QueryString TYPE TEXT
;
