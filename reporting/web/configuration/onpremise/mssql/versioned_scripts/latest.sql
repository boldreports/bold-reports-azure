CREATE TABLE [BOLDRS_EmailActivityLog](
    [Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
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

-- Add nullable SkipAttachment and SkipMail columns to support no-data options for existing installations
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [SkipAttachment] [bit] NULL;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [SkipMail] [bit] NULL;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [ScheduleRunStatus] [nvarchar](1000) NOT NULL DEFAULT 'Idle'
;

ALTER TABLE [BOLDRS_ItemView] ALTER COLUMN QueryString [nvarchar](MAX) NOT NULL;

CREATE TABLE [BOLDRS_ReportCopyLog](
    [Id] [uniqueidentifier] NOT NULL PRIMARY KEY,
    [BatchId] [uniqueidentifier] NULL,
    [IsBulkCopy] [bit] NOT NULL,
    [SourceItemId] [uniqueidentifier] NOT NULL,
    [SourceItemName] [nvarchar](255) NOT NULL,
    [SourceCategoryId] [uniqueidentifier] NULL,
    [SourceCategoryName] [nvarchar](255) NULL,
    [SourceTenantId] [uniqueidentifier] NOT NULL,
	[CopySiteType] [nvarchar](255) NULL,
	[ExternalSiteUrl] [nvarchar](255) NULL,
    [DestinationTenantId] [uniqueidentifier] NOT NULL,
    [DestinationTenantName] [nvarchar](255) NOT NULL,
    [DestinationCategoryPath] [nvarchar](1000) NOT NULL,
    [DestinationCategoryId] [uniqueidentifier] NULL,
    [DestinationItemId] [uniqueidentifier] NULL,
    [DestinationItemName] [nvarchar](255) NOT NULL,
    [IsOverwrite] [bit] NOT NULL,
    [CopiedByUserId] [int] NOT NULL,
    [CopiedAt] [datetime] NOT NULL,
    [Status] [nvarchar](50) NOT NULL,
    [FailureReason] [nvarchar](max) NULL)
;

ALTER TABLE [BOLDRS_ReportCopyLog] ADD FOREIGN KEY([CopiedByUserId]) REFERENCES [BOLDRS_User] ([Id])
;
ALTER TABLE [BOLDRS_ReportCopyLog] ADD FOREIGN KEY([SourceItemId]) REFERENCES [BOLDRS_Item] ([Id])
;