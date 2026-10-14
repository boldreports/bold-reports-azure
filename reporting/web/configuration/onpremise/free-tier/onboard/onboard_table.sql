CREATE TABLE BOLDRS_UserOnBoarding(
    Id SERIAL primary key NOT NULL,
    SiteId uuid NOT NULL,
    UserId int NOT NULL,
    UserRole varchar(255) NULL,
    Industry varchar(255) NULL,
    CurrentTools varchar(2000) NULL,
    ExistingReports varchar(50) NULL,
    ExistingReportCount varchar(50) NULL,
    Audience varchar(50) NULL,
    EmbedPlatforms varchar(2000) NULL,
    CustomerOrganizations varchar(50) NULL,
    ViewerCount varchar(50) NULL,
    DeploymentType varchar(50) NULL,
    ReportTypes varchar(2000) NULL,
    DataSources varchar(2000) NULL,
    FirstGoal varchar(50) NULL,
    Segment varchar(50) NULL,
    Routing varchar(1000) NULL,
    IsCompleted smallint NOT NULL,
    SkippedAtStep int NULL,
    CreatedDate timestamp NOT NULL,
    ModifiedDate timestamp NOT NULL)
;

ALTER TABLE BOLDRS_UserOnBoarding  ADD  FOREIGN KEY(UserId) REFERENCES BOLDRS_User (Id)
;
