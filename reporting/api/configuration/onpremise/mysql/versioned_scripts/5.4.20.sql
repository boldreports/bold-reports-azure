ALTER TABLE {database_name}.BOLDRS_UserPreference ADD ServerFeatures text(4000) NULL
;

CREATE TABLE {database_name}.BOLDRS_UserSession(
	Id Char(38) NOT NULL,
	IdpReferenceId Char(38) NOT NULL,
	SessionId Char(38) NOT NULL,
	DirectoryTypeId int NOT NULL DEFAULT 0,
	IpAddress varchar(255) NOT NULL,
	Browser varchar(255) NULL,
	LoggedInTime datetime NOT NULL,
	LastActive datetime NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;