ALTER TABLE {database_name}.BOLDRS_ScheduleDetail ADD COLUMN ScheduleExportInfo text(500) NULL
;
ALTER TABLE {database_name}.BOLDRS_AzureADCredential ADD DeleteGroupUsers tinyint NOT NULL DEFAULT 0
;
ALTER TABLE {database_name}.BOLDRS_ItemLog Modify AdditionalLogInfo varchar(4000)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.OAuth2',N'UserDirectory.OAuth2',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.OpenIDConnect',N'UserDirectory.OpenIDConnect',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.AuthControl',N'UserDirectory.AuthControl',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'ReportSettings',N'ReportSettings',Now(),1)
;
INSERT into {database_name}.BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'NotificationSettings',N'NotificationSettings',Now(),1)
;