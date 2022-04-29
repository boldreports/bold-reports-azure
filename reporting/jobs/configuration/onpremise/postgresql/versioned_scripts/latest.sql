ALTER TABLE BOLDRS_ScheduleDetail ADD ScheduleExportInfo varchar(4000) NULL
;
ALTER TABLE BOLDRS_AzureADCredential ADD DeleteGroupUsers smallint NOT NULL DEFAULT 0
;
ALTER TABLE BOLDRS_ITEM ALTER COLUMN Description Type varchar(4000)
;
ALTER TABLE BOLDRS_PublishedItem ALTER COLUMN Description Type varchar(4000)
;
ALTER TABLE BOLDRS_ItemLog ADD AdditionalLogInfo varchar(4000) NULL
;

INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.OAuth2',N'UserDirectory.OAuth2',now(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.OpenIDConnect',N'UserDirectory.OpenIDConnect',now(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (10,N'UserDirectory.AuthControl',N'UserDirectory.AuthControl',now(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (1,N'ReportSettings',N'ReportSettings',now(),1)
;
INSERT into BOLDRS_LogField (ModuleId,Field,Description,ModifiedDate,IsActive) VALUES (2,N'NotificationSettings',N'NotificationSettings',now(),1)
;