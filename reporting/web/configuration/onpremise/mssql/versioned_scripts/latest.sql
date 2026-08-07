CREATE TABLE [BOLDRS_ItemSettings](
	[Id] [int] IDENTITY(1,1) primary key NOT NULL,
	[ItemId] [uniqueidentifier] NOT NULL,
	[ItemConfig] [nvarchar](4000) NULL,
	[ModifiedDate] [datetime] NOT NULL,
	[IsActive] [bit] NOT NULL)
;

ALTER TABLE [BOLDRS_ItemSettings] ADD CONSTRAINT FK_ItemSettings_ItemId FOREIGN KEY([ItemId]) REFERENCES [BOLDRS_Item] ([Id])
;


CREATE TABLE [BOLDRS_CustomEmailTemplate](
    [Id] [int] IDENTITY(1,1) primary key NOT NULL,
    [IsEnabled] [bit] NULL,
    [DisclaimerContent] [nvarchar](255) NOT NULL,
    [HeaderContent] [nvarchar](255) NULL,
    [Subject] [nvarchar](255) NULL,
    [TemplateName] [nvarchar](255) NULL,
    [MailBody] [nvarchar](max) NOT NULL,
    [CreatedDate] [datetime] NOT NULL,
    [ModifiedDate] [datetime] NULL,
    [SendEmailAsHTML] [bit] NOT NULL,
    [CustomVisibilityOptions] [nvarchar](max) NOT NULL,
    [IsActive] [bit] NOT NULL,
    [TemplateId] [int] NOT NULL,
    [IsDefaultTemplate][bit] NOT NULL,
    [IsSystemDefault][bit] NOT NULL,
    [Description][nvarchar](255) NULL,
    [ModifiedBy][int] NOT NULL)
;

ALTER TABLE [BOLDRS_ScheduleDetail] ALTER COLUMN [ScheduleBucketExportInfo] [nvarchar](max) NULL
;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [IsGroupingEnabled]  [bit]  NOT NULL DEFAULT 0
;
ALTER TABLE [BOLDRS_SubscribedUser] ADD [IsCC]  [bit] NOT NULL DEFAULT 0
;
ALTER TABLE [BOLDRS_SubscribedGroup] ADD [IsCC]  [bit] NOT NULL DEFAULT 0
;
ALTER TABLE [BOLDRS_SubscrExtnRecpt] ADD [IsCC]  [bit] NOT NULL DEFAULT 0
;ALTER TABLE [BOLDRS_ScheduleDetail] ADD [DataDrivenScheduleDetails] [nvarchar](4000) NULL;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [IsDataDrivenSchedule] [bit] NOT NULL DEFAULT 0;
ALTER TABLE [BOLDRS_Schedulelog] ADD [RowDetails]  varchar(8000)  NULL;
ALTER TABLE [BOLDRS_Schedulelog] ADD [IsDataDriven] [bit] NOT NULL DEFAULT 0; 
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [ExportTypes] [nvarchar](500) NULL;
ALTER TABLE [BOLDRS_ScheduleLog] ADD [ExportFileName] NVARCHAR(255) NULL;
ALTER TABLE [BOLDRS_ScheduleLog] ADD [IsFileActive] BIT NOT NULL DEFAULT 0;

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
-- Update existing NULL ScheduleRunStatus values to 'Idle'
UPDATE [BOLDRS_ScheduleDetail] SET [ScheduleRunStatus] = 'Idle' WHERE [ScheduleRunStatus] IS NULL;