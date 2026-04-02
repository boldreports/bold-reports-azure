CREATE TABLE {database_name}.BOLDRS_ReportPartType(
	Id int NOT NULL AUTO_INCREMENT,
	Name varchar(100) NOT NULL UNIQUE,
	IsActive tinyint null,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_ReportPartTypeInfo(
	Id int NOT NULL AUTO_INCREMENT,
	ReportPartId char(38) NOT NULL,
	ReportPartTypeId int NOT NULL,
	ItemTypeId int NULL,
	ItemId char(38) NULL,
	CreatedById int NOT NULL,
	ModifiedById int NOT NULL,
	CreatedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

CREATE TABLE {database_name}.BOLDRS_ReportPartLinkage(
	Id int NOT NULL AUTO_INCREMENT,
	ReportPartId char(38) NOT NULL,
	ReportId char(38) NOT NULL,
	CreatedById int NOT NULL,
	ModifiedById int NOT NULL,
	CreatedDate datetime NOT NULL,
	ModifiedDate datetime NOT NULL,
	IsActive tinyint NOT NULL,
	PRIMARY KEY (Id))
;

INSERT into {database_name}.BOLDRS_ItemType (Name, IsActive) Values ('ReportPart',1)
;

INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('textbox',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('image',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('line',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('rectangle',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('tablix',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('map',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('subreport',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_databar',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_sparkline',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('customitem',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_column',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_bar',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_stackedcolumn',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_stackedbar',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_stackedcolumnpercent',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_stackedbarpercent',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_rangecolumn',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_rangebar',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_pie',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_explodedpie',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_doughnut',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_pyramid',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_funnel',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_area',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_smootharea',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_stackedarea',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_stackedareapercent',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_rangearea',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_smoothrangearea',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_line',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_smoothline',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_steppedline',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_linewithmarkers',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_smoothlinewithmarkers',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_scatter',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_bubble',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_polar',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('chart_radar',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('radialgauge',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('lineargauge',1)
;
INSERT into {database_name}.BOLDRS_ReportPartType (Name, IsActive) Values ('indicator',1)
;

ALTER TABLE {database_name}.BOLDRS_ReportPartTypeInfo ADD FOREIGN KEY(ReportPartId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ReportPartTypeInfo ADD FOREIGN KEY(ReportPartTypeId) REFERENCES {database_name}.BOLDRS_ReportPartType (Id)
;
ALTER TABLE {database_name}.BOLDRS_ReportPartTypeInfo  ADD FOREIGN KEY(ItemId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ReportPartTypeInfo  ADD FOREIGN KEY(ItemTypeId) REFERENCES {database_name}.BOLDRS_ItemType (Id)
;
ALTER TABLE {database_name}.BOLDRS_ReportPartTypeInfo  ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_ReportPartTypeInfo  ADD FOREIGN KEY(ModifiedById) REFERENCES {database_name}.BOLDRS_User (Id)
;

ALTER TABLE {database_name}.BOLDRS_ReportPartLinkage ADD FOREIGN KEY(ReportPartId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ReportPartLinkage  ADD FOREIGN KEY(ReportId) REFERENCES {database_name}.BOLDRS_Item (Id)
;
ALTER TABLE {database_name}.BOLDRS_ReportPartLinkage  ADD FOREIGN KEY(CreatedById) REFERENCES {database_name}.BOLDRS_User (Id)
;
ALTER TABLE {database_name}.BOLDRS_ReportPartLinkage  ADD FOREIGN KEY(ModifiedById) REFERENCES {database_name}.BOLDRS_User (Id)
;