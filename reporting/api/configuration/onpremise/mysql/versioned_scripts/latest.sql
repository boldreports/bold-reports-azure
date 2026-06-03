CREATE TABLE {database_name}.BOLDRS_ItemSettings(
	Id int NOT NULL AUTO_INCREMENT,
	ItemId Char(38) NOT NULL,
	ItemConfig varchar(4000) NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id)) ROW_FORMAT=DYNAMIC
;

ALTER TABLE {database_name}.BOLDRS_ItemSettings ADD CONSTRAINT FK_ItemSettings_ItemId FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
CREATE TABLE {database_name}.BOLDRS_CustomEmailTemplate (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    IsEnabled BIT,
    DisclaimerContent VARCHAR(255) NOT NULL,
    HeaderContent VARCHAR(255) NULL,
    Subject VARCHAR(255),
    TemplateName VARCHAR(255),
    MailBody TEXT NOT NULL,
    CreatedDate DATETIME NOT NULL,
    ModifiedDate DATETIME,
    SendEmailAsHTML BIT NOT NULL,
    CustomVisibilityOptions TEXT NOT NULL,
    IsActive BIT NOT NULL,
	TemplateId INT NOT NULL,
	IsDefaultTemplate BIT NOT NULL,
	IsSystemDefault BIT NOT NULL,
	Description VARCHAR(255) NULL,
	ModifiedBy int NOT NULL
);