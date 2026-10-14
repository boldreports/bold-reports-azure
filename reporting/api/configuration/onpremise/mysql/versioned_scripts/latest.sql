CREATE TABLE {database_name}.BOLDRS_AICredentials(
    Id Char(38) NOT NULL,
    AIModel int NOT NULL,
    AIConfiguration text NOT NULL,
    IsAIModel tinyint NOT NULL DEFAULT 1,
    IsAISummariesEnabledGlobally tinyint NOT NULL DEFAULT 0,
    EnableAIFeature tinyint NOT NULL DEFAULT 0,
    IsUnifiedAIAgentEnabled tinyint NOT NULL DEFAULT 0,
    CreatedById Char(38) NOT NULL,
    ModifiedById Char(38) NOT NULL,
    CreatedDate datetime NOT NULL,
    ModifiedDate datetime NOT NULL,
    IsActive tinyint NOT NULL,
    PRIMARY KEY (Id)) ROW_FORMAT=DYNAMIC
;

CREATE TABLE {database_name}.BOLDRS_AIChatConversations(
	Id char(38) NOT NULL,
	UserId int NOT NULL,
	ConversationName varchar(255) NOT NULL,
	ConversationData text NOT NULL,
	CreatedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	PRIMARY KEY (Id),
	CONSTRAINT FK_AIChatConversations_UserId FOREIGN KEY (UserId) REFERENCES {database_name}.BOLDRS_User (Id) ON DELETE CASCADE
) ROW_FORMAT=DYNAMIC
;

CREATE INDEX IX_BOLDRS_AIChatConversations_UserId ON {database_name}.BOLDRS_AIChatConversations (UserId, ModifiedDate)
;