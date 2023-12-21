ALTER TABLE [BOLDRS_UserPreference] ADD [ServerFeatures] [nvarchar](4000) NULL
;

CREATE TABLE [BOLDRS_UserSession](
	[Id] [uniqueidentifier] PRIMARY KEY NOT NULL,
	[IdpReferenceId]  [uniqueidentifier] NOT NULL,
	[SessionId]  [uniqueidentifier] NOT NULL,
	[DirectoryTypeId] [int] NOT NULL,
	[IpAddress] [nvarchar](255) NOT NULL,
	[Browser] [nvarchar](255) NOT NULL,
	[LoggedInTime] [datetime] NOT NULL,
	[LastActive] [datetime] NULL,
	[IsActive] [bit] NOT NULL)
;