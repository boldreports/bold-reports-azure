INSERT into [BOLDRS_ExportType] (Name,IsActive) VALUES (N'XML', 1)
;
ALTER TABLE [BOLDRS_ScheduleDetail] ADD [ExportFileName] [nvarchar](150) NULL
;

CREATE TABLE [BOLDRS_ExternalSites](
	Id SERIAL primary key NOT NULL,
	Name varchar(255) NOT NULL,
	ClientId varchar(255) NOT NULL,
	ClientSecret varchar(255) NULL,
	SiteURL varchar(255) NULL,
	CreatedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;

CREATE TABLE [BOLDRS_DeploymentReports](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[ItemId] [uniqueidentifier] NOT NULL,
	[ItemName] [nvarchar](255) NOT NULL,
	[CategoryName] [nvarchar](255) NOT NULL,
	[Description] [nvarchar](1026) NULL,
	[IsReportLocked] [bit] NOT NULL,
	[IsDatasourceLocked] [bit] NOT NULL,
	[IsDatasetLocked] [bit] NOT NULL,
	[CreatedById] [int] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NOT NULL,
	[IsActive] [bit] NOT NULL)
;

CREATE TABLE [BOLDRS_PublishedItem](
	[Id] [uniqueidentifier] PRIMARY KEY NOT NULL,
	[TenantId] [uniqueidentifier] NOT NULL,
	[ItemId] [uniqueidentifier] NOT NULL,
	[ItemName] [nvarchar](255) NOT NULL,
	[Description] [nvarchar](1026) NULL,
	[CategoryName] [nvarchar](255) NULL,
	[UserId] [int] NOT NULL,
	[DestinationItemId] [uniqueidentifier] NOT NULL,
	[PublishType] [nvarchar](255) NOT NULL,
	[IsLocked] [bit] NOT NULL,
	[CreatedById] [int] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NOT NULL,
	[IsActive] [bit] NOT NULL)
;
CREATE TABLE [BOLDRS_PublishJobs](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[PublishId] [uniqueidentifier] NOT NULL,
	[UserId] [int] NOT NULL,
	[JobDetails] [nvarchar](4000) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CompletedDate] [datetime] NOT NULL,
	[Status] [nvarchar](255) NOT NULL,
	[IsActive] [bit] NOT NULL)
;

ALTER TABLE [BOLDRS_ExternalSites] ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE [BOLDRS_DeploymentReports]  ADD FOREIGN KEY([CreatedById]) REFERENCES [BOLDRS_User] ([Id])
;
ALTER TABLE [BOLDRS_DeploymentReports]  ADD FOREIGN KEY([ItemId]) REFERENCES [BOLDRS_Item] ([Id])
;
ALTER TABLE [BOLDRS_PublishedItem]  ADD FOREIGN KEY([ItemId]) REFERENCES [BOLDRS_Item] ([Id])
;
ALTER TABLE [BOLDRS_PublishedItem]  ADD FOREIGN KEY([CreatedById]) REFERENCES [BOLDRS_User] ([Id])
;
ALTER TABLE [BOLDRS_PublishJobs]  ADD FOREIGN KEY([PublishId]) REFERENCES [BOLDRS_PublishedItem] ([Id])
;
ALTER TABLE [BOLDRS_PublishJobs]  ADD FOREIGN KEY([UserId]) REFERENCES [BOLDRS_User] ([Id])
;