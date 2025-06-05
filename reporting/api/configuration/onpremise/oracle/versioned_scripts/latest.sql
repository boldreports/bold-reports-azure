ALTER TABLE BOLDRS_ItemLog MODIFY AdditionalLogInfo VARCHAR2(4000);

ALTER TABLE BOLDRS_ScheduleDetail ADD IsEmailAttachment NUMBER(1) DEFAULT 1 NOT NULL;

ALTER TABLE BOLDRS_ScheduleDetail ADD IsInsertReportInMailBody NUMBER(1) DEFAULT 0 NOT NULL;

INSERT INTO BOLDRS_GroupPermission (PermissionAccessId,PermissionEntityId,ItemId,GroupId,IsActive) VALUES (16,'17',NULL,'1','1')
;