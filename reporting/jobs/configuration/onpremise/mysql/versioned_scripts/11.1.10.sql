INSERT into  {database_name}.BOLDRS_Source (Name,IsActive) VALUES ( 'Viewer',1)
;

CREATE TABLE  {database_name}.BOLDRS_FileDetail(
    Id int NOT NULL AUTO_INCREMENT,
    FileId char(38) NOT NULL,
    Password varchar(255) NOT NULL,
    ModifiedDate datetime NOT NULL,
    IsActive tinyint NOT NULL,
    PRIMARY KEY (Id)) ROW_FORMAT=DYNAMIC
;

ALTER TABLE  {database_name}.BOLDRS_FileDetail ADD FOREIGN KEY(FileId) REFERENCES  {database_name}.BOLDRS_Item (Id)
;
