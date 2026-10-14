INSERT into BOLDRS_Source (Name,IsActive) VALUES ( N'Viewer',1)
;

CREATE TABLE BOLDRS_FileDetail(
    Id SERIAL PRIMARY KEY NOT NULL,
    FileId uuid NOT NULL,
    Password varchar(255) NOT NULL,
    ModifiedDate timestamp NOT NULL,
    IsActive smallint NOT NULL)
;

ALTER TABLE BOLDRS_FileDetail ADD FOREIGN KEY(FileId) REFERENCES BOLDRS_Item (Id)
;
