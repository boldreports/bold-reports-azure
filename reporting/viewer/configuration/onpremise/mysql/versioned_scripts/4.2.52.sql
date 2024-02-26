CREATE TABLE  {database_name}.BOLDRS_AttributeType(
	Id int NOT NULL AUTO_INCREMENT,
	Type varchar(100) NOT NULL UNIQUE,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

Create TABLE {database_name}.BOLDRS_ItemAttribute(
	Id int NOT NULL AUTO_INCREMENT,
	ItemTypeId int NOT NULL,
	ItemId char(38) NOT NULL,
	AttributeType int NOT NULL,
	Value varchar(255) NOT NULL,
	CreatedById int NOT NULL,
	ModifiedById int NOT NULL,
	CreatedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

INSERT into  {database_name}.BOLDRS_AttributeType (Type,IsActive) VALUES ( 'Tag',1)
;

ALTER TABLE {database_name}.BOLDRS_ItemAttribute  ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemAttribute  ADD FOREIGN KEY(ItemTypeId) REFERENCES  {database_name}.BOLDRS_ItemType (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemAttribute  ADD FOREIGN KEY(AttributeType) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemAttribute  ADD FOREIGN KEY(CreatedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;
ALTER TABLE  {database_name}.BOLDRS_ItemAttribute  ADD FOREIGN KEY(ModifiedById) REFERENCES  {database_name}.BOLDRS_User (Id)
;
