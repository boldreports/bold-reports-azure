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
