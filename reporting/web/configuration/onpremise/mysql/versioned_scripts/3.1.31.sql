ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN IsOverwrite smallint NOT NULL DEFAULT 0
;
ALTER TABLE BOLDRS_ScheduleDetail ADD COLUMN IsNotifySaveAs smallint NOT NULL DEFAULT 0
;
ALTER TABLE BOLDRS_SystemSettings  MODIFY Value text
; 
ALTER TABLE BOLDRS_ScheduleLog ADD Message text NULL
;
