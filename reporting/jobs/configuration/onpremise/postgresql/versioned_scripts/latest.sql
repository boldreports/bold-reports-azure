ALTER TABLE boldrs_scheduleparameter ALTER COLUMN parameter TYPE TEXT
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (17,5,1)
;
INSERT INTO BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES (18,5,1)
;
INSERT INTO BOLDRS_GroupPermission (PermissionAccessId,PermissionEntityId,ItemId,GroupId,IsActive) VALUES (16,17,NULL,1,'1')
;
ALTER TABLE BOLDRS_ScheduleDetail ADD IsEmailAttachment smallint NOT NULL DEFAULT 1
;
ALTER TABLE BOLDRS_ScheduleDetail ADD IsInsertReportInMailBody smallint NOT NULL DEFAULT 0
;