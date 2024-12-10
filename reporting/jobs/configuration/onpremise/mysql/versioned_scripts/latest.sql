ALTER TABLE boldrs_scheduleparameter MODIFY parameter TEXT
;
INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES(17,5,1)
;
INSERT into {database_name}.BOLDRS_PermissionAccEntity (PermissionEntityId, PermissionAccessId, IsActive) VALUES(18,5,1)
;
INSERT INTO {database_name}.BOLDRS_GroupPermission (PermissionAccessId, PermissionEntityId, ItemId, GroupId, IsActive) VALUES (16,17,NULL,1,1)
;