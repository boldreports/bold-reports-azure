CREATE TABLE BOLDRS_AICredentials (
     Id VARCHAR2(36) PRIMARY KEY NOT NULL,
     AIModel NUMBER NOT NULL,
     AIConfiguration CLOB NOT NULL,
     IsAIModel NUMBER(1) DEFAULT 1 NOT NULL,
     IsAISummariesEnabledGlobally NUMBER(1) DEFAULT 0 NOT NULL,
     EnableAIFeature NUMBER(1) DEFAULT 0 NOT NULL,
     IsUnifiedAIAgentEnabled NUMBER(1) DEFAULT 0 NOT NULL,
     CreatedById VARCHAR2(36) NOT NULL,
     ModifiedById VARCHAR2(36) NOT NULL,
     CreatedDate TIMESTAMP NOT NULL,
     ModifiedDate TIMESTAMP NOT NULL,
     IsActive NUMBER(1) NOT NULL
);
ALTER TABLE BOLDRS_ScheduleDetail MODIFY DataDrivenScheduleDetails NULL;

CREATE TABLE BOLDRS_AIChatConversations (
    Id VARCHAR2(36) PRIMARY KEY NOT NULL,
    UserId NUMBER NOT NULL,
    ConversationName NVARCHAR2(255) NOT NULL,
    ConversationData NCLOB NOT NULL,
    CreatedDate TIMESTAMP NOT NULL,
    ModifiedDate TIMESTAMP NOT NULL,
    CONSTRAINT FK_AIChatConversations_UserId FOREIGN KEY (UserId) REFERENCES BOLDRS_User (Id) ON DELETE CASCADE
);

CREATE INDEX IX_BOLDRS_AIChatConversations_UserId ON BOLDRS_AIChatConversations (UserId, ModifiedDate);