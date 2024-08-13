ALTER TABLE BOLDRS_UserPreference ADD ServerFeatures varchar(4000) NULL
;

CREATE TABLE BOLDRS_UserSession(
	Id uuid primary key NOT NULL,
	IdpReferenceId uuid NOT NULL,
	SessionId uuid NOT NULL,
	DirectoryTypeId int NOT NULL DEFAULT 0,
	IpAddress varchar(255) NULL,
	Browser varchar(1024) NULL,
	LoggedInTime timestamp NULL,
	LastActive timestamp NULL,
	IsActive smallint NOT NULL)
;