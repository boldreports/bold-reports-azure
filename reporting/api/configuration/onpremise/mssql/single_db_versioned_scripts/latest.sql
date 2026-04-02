ALTER TABLE [BOLDRS_ScheduleDetail] ADD [SkipAttachment] bit NULL;

ALTER TABLE [BOLDRS_ScheduleDetail] ADD [SkipMail] bit NULL;

ALTER TABLE [BOLDRS_ScheduleDetail] ADD [ScheduleRunStatus] [nvarchar](1000) NOT NULL DEFAULT 'Idle';

CREATE TABLE [BOLDRS_EmailActivityLog](
    [Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[SiteId] [uniqueidentifier] NOT NULL,
    [Event] [nvarchar](255) NOT NULL,
    [RecipientEmail] [nvarchar](255) NOT NULL,
    [SenderEmail] [nvarchar](255) NOT NULL,
    [MailSubject] [nvarchar](255) NOT NULL,
    [MailBody] [nvarchar](max) NULL,
    [CreatedDate] [datetime] NOT NULL,
    [ModifiedDate] [datetime] NULL,
    [InitiatedBy] int NOT NULL,
    [UserId] [int] NULL,
    [GroupId] [int] NULL,
    [ItemId] [uniqueidentifier] NULL,
    [CommentId] [int] NULL,
    [PermissionId] [int] NULL,
    [Status] [int] NOT NULL,
    [StatusMessage] [nvarchar](max) NULL,
    [IsActive] [bit] NOT NULL)
;

ALTER TABLE [BOLDRS_EmailActivityLog]  ADD  FOREIGN KEY([UserId]) REFERENCES [BOLDRS_User] ([Id])
;
ALTER TABLE [BOLDRS_EmailActivityLog]  ADD  FOREIGN KEY([GroupId]) REFERENCES [BOLDRS_Group] ([Id])
;
ALTER TABLE [BOLDRS_EmailActivityLog]  ADD  FOREIGN KEY([ItemId]) REFERENCES [BOLDRS_Item] ([Id])
;
ALTER TABLE [BOLDRS_EmailActivityLog]  ADD FOREIGN KEY([CommentId]) REFERENCES [BOLDRS_Comment] ([Id])
;
ALTER TABLE [BOLDRS_ItemView] ALTER COLUMN QueryString [nvarchar](MAX) NOT NULL;