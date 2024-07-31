ALTER TABLE {database_name}.BOLDRS_ItemAttribute ADD FOREIGN KEY(AttributeType) REFERENCES {database_name}.BOLDRS_AttributeType (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemAttribute ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemAttribute ADD FOREIGN KEY(ModifiedById) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_ItemView ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemView ADD FOREIGN KEY(ItemViewId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemView ADD FOREIGN KEY(UserId) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_ItemTrash ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemTrash ADD FOREIGN KEY(TrashedById) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_ItemTrashDeleted ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemTrashDeleted ADD FOREIGN KEY(ItemTrashId) REFERENCES {database_name}.BOLDRS_ItemTrash (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemTrashDeleted ADD FOREIGN KEY(DeletedById) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_ItemVersion ADD FOREIGN KEY(ItemTypeId) REFERENCES {database_name}.BOLDRS_ItemType (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemVersion ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemVersion ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_ItemLog ADD FOREIGN KEY(ItemVersionId) REFERENCES {database_name}.BOLDRS_ItemVersion (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemLog ADD FOREIGN KEY(ItemLogTypeId) REFERENCES {database_name}.BOLDRS_ItemLogType (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemLog ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemLog ADD FOREIGN KEY(ParentId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemLog ADD FOREIGN KEY(FromCategoryId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemLog ADD FOREIGN KEY(ToCategoryId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemLog ADD FOREIGN KEY(UpdatedUserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemLog ADD FOREIGN KEY(SourceTypeId) REFERENCES {database_name}.BOLDRS_Source (Id)
;

ALTER TABLE {database_name}.BOLDRS_PermissionEntity ADD FOREIGN KEY(ItemTypeId) REFERENCES {database_name}.BOLDRS_ItemType (Id)
;

ALTER TABLE {database_name}.BOLDRS_UserPermission ADD FOREIGN KEY(PermissionEntityId) REFERENCES {database_name}.BOLDRS_PermissionEntity (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserPermission ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserPermission ADD FOREIGN KEY(UserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserPermission ADD FOREIGN KEY (SettingsTypeId) REFERENCES {database_name}.BOLDRS_SettingsType (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserPermission ADD FOREIGN KEY(ScopeGroupId) REFERENCES {database_name}.BOLDRS_Group (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserPermission ADD FOREIGN KEY(ItemTypeId) REFERENCES {database_name}.BOLDRS_ItemType (Id)
;

ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD FOREIGN KEY(PermissionEntityId) REFERENCES {database_name}.BOLDRS_PermissionEntity (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD FOREIGN KEY(GroupId) REFERENCES {database_name}.BOLDRS_Group (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD FOREIGN KEY (SettingsTypeId) REFERENCES {database_name}.BOLDRS_SettingsType (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD FOREIGN KEY(ScopeGroupId) REFERENCES {database_name}.BOLDRS_Group (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupPermission ADD FOREIGN KEY(ItemTypeId) REFERENCES {database_name}.BOLDRS_ItemType (Id)
;

ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD FOREIGN KEY(ScheduleId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD FOREIGN KEY(RecurrenceTypeId) REFERENCES {database_name}.BOLDRS_RecurrenceType (Id)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD FOREIGN KEY(ExportTypeId) REFERENCES {database_name}.BOLDRS_ExportType (Id)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD FOREIGN KEY(ModifiedById) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_SubscribedUser ADD FOREIGN KEY(ScheduleId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_SubscribedUser ADD FOREIGN KEY(SubscribedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_SubscribedUser ADD FOREIGN KEY(RecipientUserId) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_SubscribedGroup ADD FOREIGN KEY(ScheduleId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_SubscribedGroup ADD FOREIGN KEY(SubscribedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_SubscribedGroup ADD FOREIGN KEY(RecipientGroupId) REFERENCES {database_name}.BOLDRS_Group (Id)
;

ALTER TABLE {database_name}.BOLDRS_SubscrExtnRecpt ADD FOREIGN KEY(ScheduleId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_SubscrExtnRecpt ADD FOREIGN KEY(SubscribedById) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_ScheduleLogUser ADD FOREIGN KEY(ScheduleStatusId) REFERENCES {database_name}.BOLDRS_ScheduleStatus (Id)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleLogUser ADD FOREIGN KEY(ScheduleId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleLogUser ADD FOREIGN KEY(DeliveredUserId) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_ScheduleLogGroup ADD FOREIGN KEY(ScheduleStatusId) REFERENCES {database_name}.BOLDRS_ScheduleStatus (Id)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleLogGroup ADD FOREIGN KEY(ScheduleId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleLogGroup ADD FOREIGN KEY(GroupId) REFERENCES {database_name}.BOLDRS_Group (Id)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleLogGroup ADD FOREIGN KEY(DeliveredUserId) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_SchdLogExtnRecpt ADD FOREIGN KEY(ScheduleStatusId) REFERENCES {database_name}.BOLDRS_ScheduleStatus (Id)
;
ALTER TABLE {database_name}.BOLDRS_SchdLogExtnRecpt ADD FOREIGN KEY(ScheduleId) REFERENCES {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE {database_name}.BOLDRS_ScheduleLog ADD FOREIGN KEY(ScheduleStatusId) REFERENCES {database_name}.BOLDRS_ScheduleStatus (Id)
;
ALTER TABLE {database_name}.BOLDRS_ScheduleLog ADD FOREIGN KEY(ScheduleId) REFERENCES {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE {database_name}.BOLDRS_Comment ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_Comment ADD FOREIGN KEY(UserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_Comment ADD FOREIGN KEY(ModifiedById) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_ItemWatch ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemWatch ADD FOREIGN KEY(UserId) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_ItemCommentLog ADD FOREIGN KEY(CurrentUserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemCommentLog ADD FOREIGN KEY(ItemCommentLogTypeId) REFERENCES {database_name}.BOLDRS_ItemCommentLogType (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemCommentLog ADD FOREIGN KEY(CommentId) REFERENCES {database_name}.BOLDRS_Comment (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemCommentLog ADD FOREIGN KEY(RepliedFor) REFERENCES {database_name}.BOLDRS_Comment (Id)
;
ALTER TABLE {database_name}.BOLDRS_ItemCommentLog ADD FOREIGN KEY(NotificationTo) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_FavoriteItem ADD FOREIGN KEY(UserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_FavoriteItem ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE {database_name}.BOLDRS_PermissionAccEntity ADD FOREIGN KEY(PermissionEntityId) REFERENCES {database_name}.BOLDRS_PermissionEntity (Id)
;
ALTER TABLE {database_name}.BOLDRS_PermissionAccEntity ADD FOREIGN KEY(PermissionAccessId) REFERENCES {database_name}.BOLDRS_PermissionAccess (Id)
;

ALTER TABLE {database_name}.BOLDRS_UserPermissionLog ADD FOREIGN KEY(LogTypeId) REFERENCES {database_name}.BOLDRS_PermissionLogType (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserPermissionLog ADD FOREIGN KEY(UserPermissionId) REFERENCES {database_name}.BOLDRS_UserPermission (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserPermissionLog ADD FOREIGN KEY(UserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserPermissionLog ADD FOREIGN KEY(AffectedUserId) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_GroupPermissionLog ADD FOREIGN KEY(LogTypeId) REFERENCES {database_name}.BOLDRS_PermissionLogType (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupPermissionLog ADD FOREIGN KEY(GroupPermissionId) REFERENCES {database_name}.BOLDRS_GroupPermission (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupPermissionLog ADD FOREIGN KEY(UserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupPermissionLog ADD FOREIGN KEY(AffectedGroupId) REFERENCES {database_name}.BOLDRS_Group (Id)
;


ALTER TABLE {database_name}.BOLDRS_SystemLog ADD CONSTRAINT FK_SystemLog_SystemLogTypeId FOREIGN KEY(SystemLogTypeId) REFERENCES {database_name}.BOLDRS_SystemLogType (Id)
;
ALTER TABLE {database_name}.BOLDRS_SystemLog ADD CONSTRAINT FK_SystemLog_UpdatedUserId FOREIGN KEY(UpdatedUserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_SystemLog ADD CONSTRAINT FK_SystemLog_LogStatusId FOREIGN KEY(LogStatusId) REFERENCES {database_name}.BOLDRS_LogStatus (Id)
;

ALTER TABLE {database_name}.BOLDRS_LogField ADD CONSTRAINT FK_LogField_ModuleId FOREIGN KEY(ModuleId) REFERENCES {database_name}.BOLDRS_LogModule (Id)
;

ALTER TABLE {database_name}.BOLDRS_SystemLog ADD CONSTRAINT FK_SystemLog_LogFieldId FOREIGN KEY(LogFieldId) REFERENCES {database_name}.BOLDRS_LogField (Id)
;

ALTER TABLE {database_name}.BOLDRS_UserLog ADD CONSTRAINT FK_UserLog_UserLogTypeId FOREIGN KEY(UserLogTypeId) REFERENCES {database_name}.BOLDRS_UserLogType (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserLog ADD CONSTRAINT FK_UserLog_TargetUserId FOREIGN KEY(TargetUserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserLog ADD CONSTRAINT FK_UserLog_CurrentUserId FOREIGN KEY(CurrentUserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserLog ADD CONSTRAINT FK_UserLog_SourceTypeId FOREIGN KEY(SourceTypeId) REFERENCES {database_name}.BOLDRS_Source (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserLog ADD CONSTRAINT FK_UserLog_LogStatusId FOREIGN KEY(LogStatusId) REFERENCES {database_name}.BOLDRS_LogStatus (Id)
;
ALTER TABLE {database_name}.BOLDRS_UserLog ADD CONSTRAINT FK_UserLog_LogFieldId FOREIGN KEY(LogFieldId) REFERENCES {database_name}.BOLDRS_LogField (Id)
;

ALTER TABLE {database_name}.BOLDRS_GroupLog ADD CONSTRAINT FK_GroupLog_GroupLogTypeId FOREIGN KEY(GroupLogTypeId) REFERENCES {database_name}.BOLDRS_GroupLogType (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupLog ADD CONSTRAINT FK_GroupLog_TargetGroupId FOREIGN KEY(TargetGroupId) REFERENCES {database_name}.BOLDRS_Group (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupLog ADD CONSTRAINT FK_GroupLog_CurrentUserId FOREIGN KEY(CurrentUserId) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupLog ADD CONSTRAINT FK_GroupLog_SourceTypeId FOREIGN KEY(SourceTypeId) REFERENCES {database_name}.BOLDRS_Source (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupLog ADD CONSTRAINT FK_GroupLog_LogStatusId FOREIGN KEY(LogStatusId) REFERENCES {database_name}.BOLDRS_LogStatus (Id)
;
ALTER TABLE {database_name}.BOLDRS_GroupLog ADD CONSTRAINT FK_GroupLog_LogFieldId FOREIGN KEY(LogFieldId) REFERENCES {database_name}.BOLDRS_LogField (Id)
;

ALTER TABLE {database_name}.BOLDRS_ProcessOption ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE {database_name}.BOLDRS_ProcessOptionMap ADD FOREIGN KEY(ProcessOptionId) REFERENCES {database_name}.BOLDRS_ProcessOption (Id)
;
ALTER TABLE {database_name}.BOLDRS_ProcessOptionMap ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE {database_name}.BOLDRS_ReportDataSource ADD FOREIGN KEY(ReportItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ReportDataSource ADD FOREIGN KEY(DataSourceItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE {database_name}.BOLDRS_DataSourceDetail ADD FOREIGN KEY(DataSourceId) REFERENCES {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE {database_name}.BOLDRS_DatasetLinkage ADD FOREIGN KEY(DatasetItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_DatasetLinkage ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE {database_name}.BOLDRS_ScheduleParameter ADD FOREIGN KEY(ScheduleId) REFERENCES {database_name}.BOLDRS_Item (Id)
;

ALTER TABLE {database_name}.BOLDRS_DeploymentReports ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_DeploymentReports ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ExternalSites ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_PublishedItem ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_PublishedItem ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_PublishJobs ADD FOREIGN KEY(PublishId) REFERENCES {database_name}.BOLDRS_PublishedItem (Id)
;
ALTER TABLE {database_name}.BOLDRS_PublishJobs ADD FOREIGN KEY(UserId) REFERENCES {database_name}.BOLDRS_User (Id)
;

CREATE INDEX IX_BOLDRS_ScheduleDetail_ScheduleId ON {database_name}.BOLDRS_ScheduleDetail (ScheduleId);

CREATE INDEX IX_BOLDRS_ScheduleLog_ScheduleId ON {database_name}.BOLDRS_ScheduleLog (ScheduleId,ExecutedDate, ScheduleStatusId);

CREATE INDEX IX_BOLDRS_Item ON {database_name}.BOLDRS_Item (IsActive, ItemTypeId, ParentId, IsDraft, CreatedById, CreatedDate);

CREATE INDEX IX_BOLDRS_UserPermission ON {database_name}.BOLDRS_UserPermission (IsActive, UserId, ItemId, PermissionEntityId,PermissionAccessId);