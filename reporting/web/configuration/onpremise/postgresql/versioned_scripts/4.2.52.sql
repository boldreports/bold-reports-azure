CREATE TABLE BOLDRS_AttributeType(
	Id SERIAL PRIMARY KEY NOT NULL,
	Type varchar(100) NULL UNIQUE,
	IsActive smallint NOT NULL)
;

CREATE TABLE BOLDRS_ItemAttribute(
	Id SERIAL primary key NOT NULL,
	ItemTypeId int NOT NULL,
	ItemId uuid NOT NULL,
	AttributeType int NOT NULL,
	Value varchar(255) NOT NULL,
	CreatedById int NOT NULL,
	ModifiedById int NOT NULL,
	CreatedDate timestamp NOT NULL,
	ModifiedDate timestamp NOT NULL,
	IsActive smallint NOT NULL)
;
  
INSERT into BOLDRS_AttributeType (Type,IsActive) VALUES ( N'Tags',1)
;
  
ALTER TABLE BOLDRS_ItemAttribute  ADD FOREIGN KEY(ItemId) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ItemAttribute  ADD FOREIGN KEY(ItemTypeId) REFERENCES BOLDRS_ItemType (Id)
;
ALTER TABLE BOLDRS_ItemAttribute  ADD FOREIGN KEY(AttributeType) REFERENCES BOLDRS_Item (Id)
;
ALTER TABLE BOLDRS_ItemAttribute  ADD FOREIGN KEY(CreatedById) REFERENCES BOLDRS_User (Id)
;
ALTER TABLE BOLDRS_ItemAttribute  ADD FOREIGN KEY(ModifiedById) REFERENCES BOLDRS_User (Id)
;