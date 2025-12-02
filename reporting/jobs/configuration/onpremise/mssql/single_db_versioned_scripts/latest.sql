ALTER TABLE [BOLDRS_UserLog] ADD [SiteId] [uniqueidentifier] NULL;
ALTER TABLE [BOLDRS_ItemLog] ADD [SiteId] [uniqueidentifier] NULL;
ALTER TABLE [BOLDRS_ScheduleLog] ADD [SiteId] [uniqueidentifier] NULL;
ALTER TABLE [BOLDRS_ItemCommentLog] ADD [SiteId] [uniqueidentifier] NULL;
ALTER TABLE [BOLDRS_UserPermissionLog] ADD [SiteId] [uniqueidentifier] NULL;
ALTER TABLE [BOLDRS_GroupPermissionLog] ADD [SiteId] [uniqueidentifier] NULL;
ALTER TABLE [BOLDRS_GroupLog] ADD [SiteId] [uniqueidentifier] NULL;

ALTER TABLE [BOLDRS_SystemSettings] ADD CONSTRAINT UK_BOLDRS_SystemSettings_Key_SiteId UNIQUE ([Key], [SiteId]);

ALTER TABLE [BOLDRS_ScheduleDetail] ADD [ReplytoEmail] [nvarchar](640) NULL
;

CREATE TABLE [BOLDRS_MultiTabReport](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[ParentReportId] [uniqueidentifier] NOT NULL,
	[ChildReportId] [uniqueidentifier] NOT NULL,
	[OrderNumber] [int] NULL,
	[ModifiedDate] [datetime] NOT NULL,
	[IsActive] [bit] NOT NULL,
	[TabName] [nvarchar](255) NULL)
;

ALTER TABLE [BOLDRS_MultiTabReport]  ADD FOREIGN KEY([ParentReportId]) REFERENCES [BOLDRS_Item] ([Id])
;
ALTER TABLE [BOLDRS_MultiTabReport]  ADD FOREIGN KEY([ChildReportId]) REFERENCES [BOLDRS_Item] ([Id])
;