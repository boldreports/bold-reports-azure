CREATE TABLE BOLDRS_AICredentials(
    Id uuid PRIMARY KEY NOT NULL,
    AIModel int NOT NULL,
    AIConfiguration text NOT NULL,
    IsAIModel smallint NOT NULL DEFAULT 1,
    IsAISummariesEnabledGlobally smallint NOT NULL DEFAULT 0,
    EnableAIFeature smallint NOT NULL DEFAULT 0,
    IsUnifiedAIAgentEnabled smallint NOT NULL DEFAULT 0,
    CreatedById uuid NOT NULL,
    ModifiedById uuid NOT NULL,
    CreatedDate timestamp NOT NULL,
    ModifiedDate timestamp NOT NULL,
    IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_AIChatConversations(
    Id uuid PRIMARY KEY NOT NULL,
    UserId int NOT NULL,
    ConversationName varchar(255) NOT NULL,
    ConversationData text NOT NULL,
    CreatedDate timestamp NOT NULL,
    ModifiedDate timestamp NOT NULL,
    CONSTRAINT FK_AIChatConversations_UserId FOREIGN KEY (UserId) REFERENCES BOLDRS_User (Id) ON DELETE CASCADE)
;

CREATE INDEX IX_BOLDRS_AIChatConversations_UserId ON BOLDRS_AIChatConversations (UserId, ModifiedDate)
;