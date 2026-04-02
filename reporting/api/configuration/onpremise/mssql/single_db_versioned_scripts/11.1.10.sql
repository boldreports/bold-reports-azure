INSERT into [BOLDRS_Source] (Name,IsActive) VALUES ( N'Viewer',1)
;

CREATE TABLE [BOLDRS_FileDetail](
    [Id] [int] IDENTITY(1,1) PRIMARY KEY NOT NULL,
    [FileId] [uniqueidentifier] NOT NULL,
    [Password] [nvarchar](255) NOT NULL,
    [ModifiedDate] [datetime] NOT NULL,
    [IsActive] [bit] NOT NULL)
;

ALTER TABLE [BOLDRS_FileDetail] ADD FOREIGN KEY([FileId]) REFERENCES [BOLDRS_Item] ([Id])
;
