CREATE TABLE [BOLDRS_AICredentials](
    [Id] [uniqueidentifier] PRIMARY KEY NOT NULL,
    [AIModel] [int] NOT NULL,
    [AIConfiguration] [nvarchar](max) NOT NULL,
    [IsAIModel] [bit] NOT NULL DEFAULT 1,
    [IsAISummariesEnabledGlobally] [bit] NOT NULL DEFAULT 0,
    [EnableAIFeature] [bit] NOT NULL DEFAULT 0,
    [IsUnifiedAIAgentEnabled] [bit] NOT NULL DEFAULT 0,
    [CreatedById] [uniqueidentifier] NOT NULL,
    [ModifiedById] [uniqueidentifier] NOT NULL,
    [CreatedDate] [datetime] NOT NULL,
    [ModifiedDate] [datetime] NOT NULL,
    [IsActive] [bit] NOT NULL)
;

CREATE TABLE [BOLDRS_AIChatConversations](
	[Id] [uniqueidentifier] PRIMARY KEY NOT NULL,
	[UserId] [int] NOT NULL,
	[ConversationName] [nvarchar](255) NOT NULL,
	[ConversationData] [nvarchar](max) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NOT NULL
)
;

ALTER TABLE [BOLDRS_AIChatConversations] ADD CONSTRAINT [FK_AIChatConversations_UserId] FOREIGN KEY([UserId]) REFERENCES [BOLDRS_User] ([Id]) ON DELETE CASCADE
;

CREATE NONCLUSTERED INDEX [IX_BOLDRS_AIChatConversations_UserId] ON [BOLDRS_AIChatConversations] ([UserId], [ModifiedDate]) WITH (ONLINE = ON)
;