CREATE TABLE [BOLDRS_ReportPartType](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[Name] [nvarchar](100) NOT NULL UNIQUE,
	[IsActive] [bit] NULL)
;

CREATE TABLE [BOLDRS_ReportPartTypeInfo](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[ReportPartId] [uniqueidentifier] NOT NULL,
	[ReportPartTypeId] [int] NOT NULL,
	[ItemTypeId] [int] NULL,
	[ItemId] [uniqueidentifier] NULL,
	[CreatedById] [int] NOT NULL,
	[ModifiedById] [int] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NOT NULL,
	[IsActive] [bit] NOT NULL)
;

CREATE TABLE [BOLDRS_ReportPartLinkage](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[ReportPartId] [uniqueidentifier] NOT NULL,
	[ReportId] [uniqueidentifier] NOT NULL,
	[CreatedById] [int] NOT NULL,
	[ModifiedById] [int] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NOT NULL,
	[IsActive] [bit] NOT NULL)
;

INSERT INTO [BOLDRS_ItemType] (Name, IsActive) Values (N'ReportPart',1)
;

INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'textbox',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'image',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'line',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'rectangle',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'tablix',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'map',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'subreport',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_databar',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_sparkline',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'customitem',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_column',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_bar',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_stackedcolumn',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_stackedbar',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_stackedcolumnpercent',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_stackedbarpercent',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_rangecolumn',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_rangebar',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_pie',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_explodedpie',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_doughnut',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_pyramid',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_funnel',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_area',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_smootharea',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_stackedarea',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_stackedareapercent',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_rangearea',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_smoothrangearea',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_line',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_smoothline',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_steppedline',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_linewithmarkers',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_smoothlinewithmarkers',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_scatter',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_bubble',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_polar',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'chart_radar',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'radialgauge',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'lineargauge',1)
;
INSERT INTO [BOLDRS_ReportPartType] (Name, IsActive) Values (N'indicator',1)
;

ALTER TABLE [BOLDRS_ReportPartTypeInfo] ADD FOREIGN KEY([ReportPartId]) REFERENCES [BOLDRS_Item] ([Id])
;
ALTER TABLE [BOLDRS_ReportPartTypeInfo] ADD FOREIGN KEY([ReportPartTypeId]) REFERENCES [BOLDRS_ReportPartType] ([Id])
;
ALTER TABLE [BOLDRS_ReportPartTypeInfo] ADD FOREIGN KEY([ItemId]) REFERENCES [BOLDRS_Item] ([Id])
;
ALTER TABLE [BOLDRS_ReportPartTypeInfo] ADD FOREIGN KEY([ItemTypeId]) REFERENCES [BOLDRS_ItemType] ([Id])
;
ALTER TABLE [BOLDRS_ReportPartTypeInfo] ADD FOREIGN KEY([CreatedById]) REFERENCES [BOLDRS_User] ([Id])
;
ALTER TABLE [BOLDRS_ReportPartTypeInfo] ADD FOREIGN KEY([ModifiedById]) REFERENCES [BOLDRS_User] ([Id])
;

ALTER TABLE [BOLDRS_ReportPartLinkage] ADD FOREIGN KEY([ReportPartId]) REFERENCES [BOLDRS_Item] ([Id])
;
ALTER TABLE [BOLDRS_ReportPartLinkage]  ADD FOREIGN KEY([ReportId]) REFERENCES [BOLDRS_Item] ([Id])
;
ALTER TABLE [BOLDRS_ReportPartLinkage] ADD FOREIGN KEY([CreatedById]) REFERENCES [BOLDRS_User] ([Id])
;
ALTER TABLE [BOLDRS_ReportPartLinkage]  ADD FOREIGN KEY([ModifiedById]) REFERENCES [BOLDRS_User] ([Id])
;