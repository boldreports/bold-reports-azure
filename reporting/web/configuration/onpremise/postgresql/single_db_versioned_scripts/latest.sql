CREATE TABLE BOLDRS_EmailActivityLog(
    Id  SERIAL PRIMARY KEY NOT NULL,
    SiteId uuid NOT NULL,
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

-- Add SkipAttachment and SkipMail to BOLDRS_ScheduleDetail for existing installations
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN IF NOT EXISTS SkipAttachment smallint NULL;
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN IF NOT EXISTS SkipMail smallint NULL;
ALTER TABLE BOLDRS_ScheduleDetail ADD ScheduleRunStatus varchar(1000) NOT NULL DEFAULT 'Idle'
;
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN SkipOn varchar(4000) NULL;
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN ActualNextScheduleDate timestamp NULL;
ALTER TABLE BOLDRS_ScheduleLog ADD COLUMN ExportFileName VARCHAR(255) NULL;
ALTER TABLE BOLDRS_ScheduleLog ADD COLUMN IsFileActive SMALLINT NULL;
ALTER TABLE BOLDRS_ItemLog ALTER COLUMN AdditionalLogInfo TYPE TEXT;
ALTER TABLE BOLDRS_ItemView ALTER COLUMN QueryString TYPE TEXT
;