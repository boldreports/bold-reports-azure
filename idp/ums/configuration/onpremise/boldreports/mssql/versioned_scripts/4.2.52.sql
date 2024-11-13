Create TABLE [BOLDRS_AttributeType](
	[Id] [int] IDENTITY(1,1) primary key NOT NULL,
	[Type] [nvarchar](100) NOT NULL UNIQUE,
	[IsActive] [bit] NOT NULL)
;

Create TABLE [BOLDRS_ItemAttribute](
	[Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
	[ItemTypeId] [int] NOT NULL,
	[ItemId] [uniqueidentifier] NULL,
	[AttributeType] [int] NOT NULL,
	[Value] [nvarchar](255) NOT NULL,
	[CreatedById] [int] NOT NULL,
	[ModifiedById] [int] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NOT NULL,
	[IsActive] [bit] NOT NULL)
;
  
INSERT into [BOLDRS_AttributeType] (Type,IsActive) VALUES ( N'Tag',1)
;
  
ALTER TABLE [BOLDRS_ItemAttribute]  ADD FOREIGN KEY([ItemId]) REFERENCES [BOLDRS_Item] ([Id])
;
ALTER TABLE [BOLDRS_ItemAttribute]  ADD FOREIGN KEY([ItemTypeId]) REFERENCES [BOLDRS_ItemType] ([Id])
;
ALTER TABLE [BOLDRS_ItemAttribute]  ADD FOREIGN KEY([AttributeType]) REFERENCES [BOLDRS_Item] ([Id])
;
ALTER TABLE [BOLDRS_ItemAttribute]  ADD FOREIGN KEY([CreatedById]) REFERENCES [BOLDRS_User] ([Id])
;
ALTER TABLE [BOLDRS_ItemAttribute]  ADD FOREIGN KEY([ModifiedById]) REFERENCES [BOLDRS_User] ([Id])
;