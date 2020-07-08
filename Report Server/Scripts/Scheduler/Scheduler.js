var reportItemName = "";
var isSafari = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
var isSafariOrEdge = (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) || (navigator.userAgent.indexOf("Edge") !== -1);
var reportItemId = "";
var reportCategoryName = "";
var multiDashboardName = "";
var childId = "";
var createdItemId = "";
var url = "";
var alertChange = 1;
var dateFormat = "";
var timeFormat = "";
var listDashboards = "";
var childDashboards = "";
var isReportIdChanged = false;
var item = "";
var condition = "";
var itemConditionArray = "";
var recurrence = "";
var endType = "";
var endDate = "";
var endAfter = "";
var startDate = "";
var itemRecurrence = "";
var frequency = "";
var exportType = "";
var subscriberExternalRecipient = "";
var subscriberGroup = "";
var subscriberUser = "";
var itemConditionCategory = "";
var itemWidgetName = "";
var emailContent = "";
var buttonValue = "";
var reportParameterItemId = "";
var initialPosition = "";
var Subject = "";
var isEmailcontentChanged = 0;
var isSubjectcontentChanged = 0;
var subjectSettings = "";
var bodySettings = "";
var ReportName = "";
var CategoryName = "";
var ScheduleName = "";

$(document).ready(function () {
    dateFormat = $("#dateFormat").val();
    timeFormat = $("#timeFormat").val();
    $(".category-dropdown .bootstrap-select .bs-searchbox .input-block-level").attr("placeholder", window.Server.App.LocalizationContent.SearchCategories);
    $(".dashboard-dropdown .bootstrap-select .bs-searchbox .input-block-level").attr("placeholder", window.Server.App.LocalizationContent.SearchDashboards);
    $(".childdashboard-dropdown .bootstrap-select .bs-searchbox .input-block-level").attr("placeholder", window.Server.App.LocalizationContent.SearchTabs);
});

function createSchedule(itemId, itemName, categoryName) {
    itemName !== "" ? $(".schedule-popup-title").html(" " + itemName + " - " + window.Server.App.LocalizationContent.ScheduleTitle) : $(".schedule-popup-title").html(" " + itemName + " " + window.Server.App.LocalizationContent.ScheduleTitle);
    $(".schedule-popup-title").attr("title", itemName);
    parent.$("#popup-container_wrapper").ejWaitingPopup("hide");
    reportItemId = itemId;
    reportParameterItemId = itemId;
    reportItemName = itemName;
    reportCategoryName = categoryName;
    createdItemId = itemId;
}

function scheduleNameCheck(scheduleId, scheduleName) {
    $("#schedule-name-error-container").css("display", "none");
    $("span.loader-gif").remove();
    $("#schedule-name-error-container").parent().append($("<span class='col-sm-4 no-padding loader-gif'><div class='loader-blue loader-icon' id='schedule-name-validation-loader-icon'><svg class='circular'><circle class='path' cx='27' cy='27' r='13' fill='none' stroke-width='4' stroke-miterlimit='10'></circle></svg></div></span>"));
    $.ajax({
        type: "POST",
        url: checkScheduleNameExistUrl,
        data: { scheduleId: scheduleId, scheduleName: scheduleName },
        success: function (data) {
            if (data.Result) {
                $("span.loader-gif").remove();
                $("#schedule-name").closest("div").addClass("has-error");
                $("#schedule-name-error-container").css("display", "block");
                $("#schedule-name-validator").html(window.Server.App.LocalizationContent.IsScheduleExist);
            } else {
                $("#schedule-name").closest("div").removeClass("has-error");
                $("span.loader-gif").remove();
                $("#schedule-name-error-container").css("display", "none");
            }
        }
    });
}

function addTitleForCategory() {
    $("#selected_category").selectpicker("refresh");
    for (var i = 0; i < $(".category-dropdown  .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $(".category-dropdown .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $(".category-dropdown .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
}

function addTitleForDashboard() {
    $("#selected_dashboard").selectpicker("refresh");
    for (var i = 0; i < $(".dashboard-dropdown  .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $(".dashboard-dropdown .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $(".dashboard-dropdown .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
}

function validateSchedule(current) {
    var startDateTimeObj = $("#start-date").data("ejDateTimePicker");
    var scheduleName = $("#schedule-name").val();
    if (!($("#schedule-name-error-container").css("display") === "block") && !($("body .loader-gif").length) && $("#selected_category option:selected").val() !== "" && $("#selected_dashboard option:selected").val() !== "" && scheduleName) {
        if (!parent.IsValidName("name", scheduleName)) {
            $("#schedule-name-error-container").css("display", "block");
            $("#schedule-name-validator").html(window.Server.App.LocalizationContent.AvoidSpecialCharactors);
            return false;
        }

        if ($(current).hasClass("recurrence-class-body")) {
            return validateParameters();
        }
    } else {
        if ($("#selected_category option:selected").val() === "") {
            $("#category-message").css("display", "block");
        }
        if ($("#selected_dashboard option:selected").val() === "") {
            $("#dashboard-message").css("display", "block");
        }
        if (!scheduleName) {
            $("#schedule-name-error-container").css("display", "block");
            $("#schedule-name-validator").html(window.Server.App.LocalizationContent.ScheduleValidator);
        }
        return false;
    }
    return true;
}

$(document).on("click", "#schedule-submit-cancel,#schedule-popup,#schedule-next-cancel", function (event) {
    closePopupContainer();
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) closePopupContainer();
});

function closePopupContainer() {
    parent.$("#popup-container").ejDialog("close");
    parent.$("#editpopup-container").ejDialog("close");
}

$(document).on("change", "#selected_category", function () {
    reportCategoryName = "";
    itemName = "";
    var selected = $(this).find("option:selected").text();
    if ($(this).find("option:selected").val() === "" || $(this).find("option:selected").val() !== "") {
        $(".schedule-popup-title").html(window.Server.App.LocalizationContent.Schedule);
        $(".schedule-popup-title").attr("title", "");
    }
    $("#selected_dashboard").attr("disabled", true);
    $(".dashboard-dropdown").append($("<span class='no-padding loader-gif'><div class='loader-blue loader-icon' id='selected-category-loader-icon'><svg class='circular'><circle class='path' cx='27' cy='27' r='13' fill='none' stroke-width='4' stroke-miterlimit='10'></circle></svg></div></span>"));
    var filterSettings = [];
    filterSettings.push({ PropertyName: "CategoryName", FilterType: "equals", FilterKey: selected });
    var invalid = undefined;
    if (itemId !== null) {
        listDashboards = "";
    }
    $.ajax({
        type: "POST",
        url: getReportUrl,
        data: { searchKey: invalid, skip: 0, take: 20, sorted: invalid, filterCollection: filterSettings, displayCategory: "SpecificCategory" },
        success: function (result, data) {
            $("#selected_dashboard").attr("disabled", false);
            $(".dashboard-dropdown span.loader-gif").remove();
            var dashboards = result.result;
            for (var t = 0; t < dashboards.length; t++) {
                listDashboards += '<option value="' + dashboards[t].Id + '">' + dashboards[t].Name + '</option>';
            }
            $("#selected_dashboard").html("");
            $("#selected_dashboard").html('<option value="" selected="selected" class="hide-option" disabled>' + window.Server.App.LocalizationContent.SelectDashboard + '</option>' + listDashboards).selectpicker("refresh");
            addTitleForDashboard();
        }
    });
    if ($("#selected_category option:selected").val() !== "") {
        $("#category-message").css("display", "none");
    }
});

$(document).on("change", "#selected_dashboard", function () {
    var selected = $(this).find("option:selected").text();
    var itemId = $(this).find("option:selected").val();
    createdItemId = itemId;
    var filterSettings = [];
    filterSettings.push({ PropertyName: "Name", FilterType: "equals", FilterKey: selected });
    if (itemId !== "") {
        $(".schedule-popup-title").html(" " + selected + " -" + window.Server.App.LocalizationContent.Schedule);
        $(".schedule-popup-title").attr("title", selected);
    }
    else {
        $(".schedule-popup-title").html(window.Server.App.LocalizationContent.Schedule);
        $(".schedule-popup-title").attr("title", "");
    }
    $(".items-dropdown select").html("");
    $(".items-dropdown").append($("<span class='no-padding loader-gif'><div class='loader-blue loader-icon' id='selected-dashboard-items-dropdown-loader-icon'><svg class='circular'><circle class='path' cx='27' cy='27' r='13' fill='none' stroke-width='4' stroke-miterlimit='10'></circle></svg></div></span>"));
    $(".items-dropdown").find("select").attr("disabled", true);
    $("#schedule-submit").attr("data-report-id", itemId);
    $("#schedule-submit").attr("data-item-id", itemId);
    if ($("#selected_dashboard option:selected").val() !== "") {
        $("#dashboard-message").css("display", "none");
    }

    isReportHasParameter(itemId);
});

function isReportHasParameter(itemId) {
    if (reportParameterItemId !== "" && reportParameterItemId !== itemId) {
        isReportIdChanged = true;
    }
    reportParameterItemId = itemId;
    $.ajax({
        type: "POST",
        url: reportHasParameterUrl,
        async: false,
        data: { itemId: itemId },
        success: function (data) {
            $("#enable-parameter").prop("checked", false);
            if (data.Result) {
                $(".reportparameter-tag").css("display", "none");
                $("#enable-parameter").prop("disabled", false);
            } else {
                $("#enable-parameter").prop("disabled", true);
                $(".reportparameter-tag").css("display", "block");
            }
        }
    });
}

$(document).on("focusout", "#schedule-name", function (event) {
    var scheduleName = $("#schedule-name").val().trim();
    var idSchedule = "";
    if (actionType === "Create") {
       idSchedule = $("#schedule-submit").attr("data-schedule-id");
    }
    else {
        idSchedule = scheduleId;
    }
    
    if ($.trim(scheduleName) != "") {
        $("#schedule-name").closest("div").removeClass("has-error");
        $("#schedule-name-error-container").css("display", "none");
        if (scheduleName) {
            scheduleNameCheck(idSchedule, scheduleName);
        } else {
            $("#schedule-name-error-container").css("display", "none");
        }
    }
    else {
        $("#schedule-name").closest("div").addClass("has-error");
        $("#schedule-name-error-container").css("display", "block");
        $("#schedule-name-validator").html(window.Server.App.LocalizationContent.ScheduleValidator);
    }
});

$(document).on("keyup", "#schedule-name", function (event) {
    if ($.trim($("#schedule-name").val()) !== "") {
        $("#schedule-name").closest("div").removeClass("has-error");
        $("#schedule-name-error-container").css("display", "none");
    }
    else {
        $("#schedule-name").closest("div").addClass("has-error");
        $("#schedule-name-error-container").css("display", "block");
        $("#schedule-name-validator").html(window.Server.App.LocalizationContent.ScheduleValidator);
    }
});

$(document).on("click", "#schedule-next", function (event) {
    var scheduleMessage = "";
    if (validateSchedule(this)) {
        
        var frequecy = $("#frequency").css("display");
            if (frequecy === "block") {
                $("#recurrence-type option[value='Hourly']").attr("selected", "selected");
                $("#recurrence-type").selectpicker("refresh");
            }
            if ($(this).hasClass("time-interval-body")) {
                url = recurrenceType;
                enableTimeIntervalOption();
                }
            else if ($(this).hasClass("subscribe-body")) {
                $("#error-filedkey-info").remove();
                var scheduleExportFileSettings = GetExportFileSettingInfo();
                if (scheduleExportFileSettings === null) {
                    return;
                }
                url = scheduleRecipients;
                enableSubscribeOption();
                
            }
            else if ($(this).hasClass("schedule-settings-password-body")) {
                url = passwordOptions;
                validateNextSchedule();
                $("#schedule-next").prop("disabled", false);
            }
            else if ($(this).hasClass("email-template-body")) {
                url = emailEditor;
                $("#error-filedkey-info").remove();
                var ispasswordvalid = GetExportFileSettingInfo();
                if (ispasswordvalid == false) {
                    var elem = CreateFieldKeyErrorElement();
                    $(elem).appendTo($("#password-condition-section"));
                    hideWaitingPopup($("#body"));
                    $("#schedule-next").prop("disabled", false);
                }
                else {
                    enableEmailEditor();
                }
            }
            else if ($(this).hasClass("recurrence-class-body")) {
                url = recurrenceType;
                enableTimeIntervalOption();
            }
            else {
                if ($("#enable-parameter").prop("checked")) {
                    if (actionType === "Edit") {
                        url = isReportIdChanged ? getSchedulerParameter : editSchedulerParameter;
                    } else {
                        url = getSchedulerParameter;
                    }
                    if (parameterObj !== undefined && parameterObj.length === 0) {
                        url = recurrenceType;
                        enableTimeIntervalOption();
                    } else {
                        enableParameterOption();
                    }
                } else {
                    url = recurrenceType;
                    enableTimeIntervalOption();
                }
            }
        }
});

function enableParameterOption() {
    $(".schedule-popup-body, .subscribe-popup-body").css("display", "none");
    $(".parameter-popup-body").fadeIn();
    $("#next-container").css("display", "block");
    $("#submit-container").css("display", "none");
    $(".schedule-dialog .modal-body #time-intervals-div").css("display", "none");
    $("#schedule-back").css("display", "inline");
    $("#schedule-next").addClass("recurrence-class-body");
    $("#windowCaption").text(window.Server.App.LocalizationContent.ParameterOption);
    className = "parameters-panel";
    if (isReportIdChanged) {
        $(".schedule-dialog").find("#parameters-panel").remove();
    }
    if ($(".schedule-dialog").find("#parameters-panel").length <= 0) {
        scheduleParameterPost(url, className);
    }
}

function enablePasswordOption() {
    $(".schedule-popup-body").css("display", "none");
    $(".schedule-password-body").fadeIn();
    $("#next-container").css("display", "block");
    $("#submit-container").css("display", "none");
    $(".schedule-dialog .modal-body #time-intervals-div").css("display", "none");
    $(".schedule-dialog .modal-body #email-editor-panel").css("display", "none");
    $(".subscribe-popup-body").css("display", "none");
    $("#schedule-back").css("display", "inline");
    $("#windowCaption").text(window.Server.App.LocalizationContent.PasswordOption);
    $("#schedule-next").addClass("email-template-body");
    $("#schedule-next").removeClass("schedule-settings-password-body");
    className = "schedule-settings-body";
    if ($(".schedule-dialog").find("#schedule-settings-body").length <= 0) {
        schedulePasswordSettingPost(url, className);

    }
}

$(document).on("click", "#schedule-back", function (event) {
    if ($("#schedule-next").parent("div").css("display") === "none") {
        enableEmailEditor();
    }
    else if ($("#schedule-next").hasClass("schedule-settings-password-body")) {
        if ($("#enable-parameter").prop("checked")) {
            if (parameterObj.length === 0) {
                enableScheduleOption();
            } else {
                url = getSchedulerParameter;
                enableParameterOption();
            }
        } else {
            enableScheduleOption();
        }
        $("#schedule-next").removeClass("schedule-settings-password-body");
    }
    else if ($("#schedule-next").hasClass("recurrence-class-body")) {
        enableScheduleOption();
        $("#schedule-next").removeClass("recurrence-class-body");
    }
    else if ($("#schedule-next").hasClass("email-template-body")) {
        enableTimeIntervalOption();
        $("#schedule-next").removeClass("email-template-body");
    }
    else if ($("#schedule-next").hasClass("subscribe-body")) {
        enablePasswordOption();
        $("#schedule-next").removeClass("subscribe-body");
    }
});

function enableEmailEditor() {
    $("#windowCaption").html(window.Server.App.LocalizationContent.CustomEmailtemplate);
    $(".schedule-popup-body, #schedule-settings-body").css("display", "none");
    $(".schedule-dialog .modal-body #time-intervals-div,.schedule-dialog .modal-body #subscribers-panel").css("display", "none");
    $("#email-editor-panel").fadeIn();
    $("#next-container").css("display", "block");
    $("#submit-container").css("display", "none");
    $("#schedule-next").addClass("subscribe-body");
    $("#schedule-next").removeClass("email-template-body");
    $("#schedule-back").css("display", "inline");
    var scheduleExportFileSettings = GetExportFileSettingInfo();   
    ReportName = $("#selected_dashboard").children("option:selected").text();
    CategoryName = $("#selected_category").children("option:selected").text();
    ScheduleName = $('#schedule-name').val();
    className = "email-editor-panel";
    if ($(".schedule-dialog").find("#email-editor-panel").length <= 0) {
        scheduleemailcontentpost(url, className);
    }
    if ($(".schedule-dialog").find("#email-editor-panel").length > 0) {
        if (scheduleExportFileSettings.IsCompressionEnabled && scheduleExportFileSettings.IsPasswordProtected) {
            if ($("#email-editor-panel").find("#passwordhint").length <= 0) {

                $("#email-editor-panel").append("<div id='passwordhint' style='position: absolute;top: 485px;'><span><strong>" + window.Server.App.LocalizationContent.Note + "</strong>" + window.Server.App.LocalizationContent.PasswordHintMessage + "</span ></div >");
            }
        }
        else {
            $("#email-editor-panel").find("#passwordhint").remove();
        }
    }
}

function scheduleemailcontentpost(url, className) {
    if (!$(".schedule-dialog").hasClass(className)) {
        parent.$("#popup-container_wrapper").ejWaitingPopup("show");
        parent.$("#editpopup-container_wrapper").ejWaitingPopup("show");
            $.ajax({
            type: "POST",
            url: url,
            data: {},
            cache: false,
            dataType: 'html',
            success: function (data) {
                $(".modal-body").append(data);
                $("#variable-drop-box").selectpicker("refresh");
                cursorPos = renderMde("#rte-post");
                var defaultEmailBody = "#### **Scheduled Report**\n\n\nHello {:FullName},\n\nPlease find attached, the report that you had requested.\n\nSchedule- {:ReportName} has exported the report {:ReportLink} .\n\n\nRegards,\n\n{:OrganizationName}";
                emailcontentsettings();
                if (actionType == "Create") {
                    if (subjectSettings == "" || subjectSettings == null) {
                        getsubject();
                    } else {
                        $('#sub_email-text-box').val(subjectSettings);
                    }
                    if (bodySettings == "" || bodySettings == null) {
                        cursorPos.value(defaultEmailBody);
                    } else {
                        cursorPos.value(bodySettings);
                    }
                }
                else {
                    if (subjectSettings == "" || subjectSettings == null) {
                        if (Subject == null || Subject == "") {
                            getsubject();
                        }
                        else {
                            $('#sub_email-text-box').val(Subject);
                        }
                    } else {
                        if (Subject == null || Subject == "") {
                            $('#sub_email-text-box').val(subjectSettings);
                        } else {
                            $('#sub_email-text-box').val(Subject);
                        }
                    }
                    if (bodySettings == "" || bodySettings == null) {
                        if (emailContent == null || emailContent == "") {
                            cursorPos.value(defaultEmailBody);
                        }
                        else {
                            cursorPos.value(emailContent);
                        }
                    } else {
                        if (emailContent == null || emailContent == "") {
                            cursorPos.value(bodySettings);
                        } else {
                            cursorPos.value(emailContent);
                        }
                    }
                }
                var scheduleExportFileSettings = GetExportFileSettingInfo();
                if (scheduleExportFileSettings.IsCompressionEnabled && scheduleExportFileSettings.IsPasswordProtected) {
                    $("#email-editor-panel").append("<div id='passwordhint' style='position: absolute;top: 485px;'><span><strong>" + window.Server.App.LocalizationContent.Note + "</strong>" + window.Server.App.LocalizationContent.PasswordHintMessage + "</span ></div >");
                }

                $(document).on("click", ".CodeMirror-code", function () {
                    isEmailcontentChanged = 1;
                    emailContent = null;
                });

                $(".CodeMirror-code").select(function () {
                    isEmailcontentChanged = 1;
                    emailContent = null;
                });

                $(document).on("click", "#sub_email-text-box", function () {
                    isSubjectcontentChanged = 1;
                    Subject = null;
                });

                $("#sub_email-text-box").select(function () {
                    isSubjectcontentChanged = 1;
                    Subject = null;
                });

                parent.$("#popup-container_wrapper").ejWaitingPopup("hide");
                parent.$("#editpopup-container_wrapper").ejWaitingPopup("hide");
            },            
        });
    }
}

function emailcontentsettings() {
    $.ajax({
        type: "POST",
        url: getScheduleContentUrl,
        data: {},
        async: false,
        success: function (data) {
            subjectSettings = (data.Subject == "" || data.Subject == null) ? "" : data.Subject;
            bodySettings = (data.CustomBody == "" || data.CustomBody == null) ? "" : data.CustomBody;
        },
    })
}

function getsubject() {
    $.ajax({
        type: "POST",
        url: subjectItem,
        data: {},
        async: false,
        success: function (data) {
            var ReportName = $("#selected_dashboard").children("option:selected").text();
            $('#sub_email-text-box').val(data + ": " + ReportName);
        },
    });      
}

$(document).on("change", "#variable-drop-box", function () {
    cursorPos.codemirrorIgnore;
    var position = cursorPos.codemirror.getCursor();
    initialPosition = position;
    var line = position.line;
    var ch = position.ch;
    var getLine = cursorPos.codemirror.getLine(line);
    initialLine = getLine;
    var totalCh = getLine.length;
    cursorPos.codemirror.setSelection({ line: line, ch: 0 }, { line: line, ch: totalCh });
    cursorPos.codemirror.replaceSelection(initialLine);
    cursorPos.codemirror.setSelection({ line: line, ch: ch }, { line: line, ch: ch });
    var selected = $(':selected', this);
    cursorPos.codemirror.replaceSelection("{:" + $("#variable-drop-box").val() + "}");
    $("#variable-drop-box").val(null).selectpicker("refresh");
});

function enableTimeIntervalOption() {
    $(".schedule-popup-body, #parameters-panel, .subscribe-popup-body").css("display", "none");
    $("#windowCaption").html(window.Server.App.LocalizationContent.RecurrenceIntervalValidator);
    $(".schedule-dialog .modal-body #time-intervals-div").css("display", "inline");
    $(".schedule-dialog #data-changes-div-container,.schedule-dialog #data-changes-container,.schedule-dialog #email-editor-panel").css("display", "none");
    $(".subscribe-popup-body").css("display", "none");
    $("#next-container").css("display", "block");
    $("#submit-container").css("display", "none");
    if ($("#schedule-next").hasClass("time-interval-body")) {
        $("#schedule-next").removeClass("time-interval-body");
    }
    if ($("#schedule-settings-body").length > 0) {
        $("#schedule-settings-body").css("display", "none");
    }
    $("#schedule-next").addClass("schedule-settings-password-body");
    $("#schedule-next").removeClass("recurrence-class-body");
    $("#schedule-back").css("display", "inline");
    className = "schedule-recurrence";
    if ($(".schedule-dialog").find("#time-intervals-div").length <= 0) {
        partialPost(url, className);
    }
}

function enableSubscribeOption() {
    $("#windowCaption").html(window.Server.App.LocalizationContent.ExportFormatValidator);
    $(".schedule-popup-body").css("display", "none");
    $(".schedule-dialog .modal-body #email-editor-panel,.schedule-dialog .modal-body #time-intervals-div, #parameters-panel").css("display", "none");
    $(".schedule-dialog #data-changes-div-container,.schedule-dialog #data-changes-container").css("display", "none");
    $(".subscribe-popup-body").fadeIn();
    $("#next-container").css("display", "none");
    $("#submit-container").css("display", "block");
    $("#schedule-back").css("display", "inline");
    if (isEmailcontentChanged == 1) {
        emailContent = cursorPos.value();
    }
    if (isEmailcontentChanged == 0 && emailContent != "" && emailContent != null) {
        emailContent = cursorPos.value();
    }
    if (isSubjectcontentChanged == 1) {
        Subject = $('#sub_email-text-box').val();
    }
    if (isSubjectcontentChanged == 0 && Subject != "" && Subject != null) {
        Subject = $('#sub_email-text-box').val();
    }
    if ($("#schedule-settings-body").length > 0) {
        $("#schedule-settings-body").css("display", "none");
    }
    className = "subscribers-panel";
    if ($(".schedule-dialog").find("#subscribers-panel").length <= 0) {
        partialRecipientListPost(url, className);
    }
}

function enableScheduleOption() {
    $("#windowCaption").html(window.Server.App.LocalizationContent.TimeBaseSchedule);
    $(".subscribe-popup-body, #next-container, #submit-container,#time-intervals-div,#parameters-panel").css("display", "none");
    $(".schedule-popup-body").fadeIn();
    $("#next-container").css("display", "block");
    $("#schedule-back").css("display", "none");
    if ($("#schedule-settings-body").length > 0) {
        $("#schedule-settings-body").css("display", "none");
    }
    if ($("#schedule-next").hasClass("subscribe-body") || $("#schedule-next").hasClass("time-interval-body")) {
        $("#schedule-next").removeClass("subscribe-body");
        $("#schedule-next").removeClass("time-interval-body");
        $("#schedule-next").removeClass("schedule-settings-password-body");
    }
}

function partialPost(url, className) {
    if (!$(".schedule-dialog").hasClass(className)) {
        parent.$("#popup-container_wrapper").ejWaitingPopup("show");
        parent.$("#editpopup-container_wrapper").ejWaitingPopup("show");
        $.ajax({
            type: "POST",
            url: url,
            data: {},
            cache: false,
            dataType: 'html',
            success: function (data) {
                $(".modal-body").append(data);
            }
        });
    }
}

function scheduleParameterPost(url, className) {
    if (!$(".schedule-dialog").hasClass(className)) {
        parent.$("#popup-container_wrapper").ejWaitingPopup("show");
        parent.$("#editpopup-container_wrapper").ejWaitingPopup("show");
        $.ajax({
            type: "POST",
            url: url,
            data: { itemId: reportParameterItemId },
            cache: false,
            dataType: 'html',
            success: function (data) {
                $(".modal-body").append(data);
            }
        });
    }
}

function partialRecipientListPost(url, className) {
    if (!$(".schedule-dialog").hasClass(className)) {
        parent.$("#popup-container_wrapper").ejWaitingPopup("show");
        parent.$("#editpopup-container_wrapper").ejWaitingPopup("show");
        $.ajax({
            type: "POST",
            url: url,
            data: { itemId: reportParameterItemId },
            cache: false,
            dataType: 'html',
            success: function (data) {
                $(".modal-body").append(data);
                if (className === "subscribers-panel") {
                    $(".schedule-dialog #subscribers-panel").css("display", "inline");
                    getAllStaticData();
                    if (actionType == "Create") {
                        $("select#user-search option").each(function (i) {
                            if ($(this).val().toLowerCase() === $("#userName").val().toLowerCase()) {
                                var currentuser = $(this).text();
                                $(this).attr("selected", true);
                                $("#user-search").selectpicker("refresh");
                                var userTile = $("<div>").attr("id", $(this).val()).attr("data-searchtype", "userSearch").addClass("SelectedShareItems");
                                userTile.html("<div class='InstantSearch'><span class='details' title='" + currentuser + "'>" + currentuser
                                    + "</span><div style='width:auto' class='instant-cancel'><span class='su su-close i-selected-cancel'/></div></div>");
                                $("#selected-users").append(userTile);
                            }
                        });
                    }
                    else {
                        for (var i = 0; i < subscriberUser.length; i++) {
                            $("#user-search option[value='" + subscriberUser[i] + "']").attr("selected", true);
                            $("#user-search").selectpicker("refresh");
                            var user = $("#user-search option[value='" + subscriberUser[i] + "']").text();
                            var userTile = $("<div>").attr("id", subscriberUser[i]).attr("data-searchtype", "userSearch").addClass("SelectedShareItems");
                            userTile.html("<div class='InstantSearch'><span class='details' title='" + user.trim() + "'>" + user.trim() + "</span><div style='width:auto' class='instant-cancel'><span class='su su-close i-selected-cancel'/></div></div>");
                            $("#selected-users").append(userTile);
                        }

                        oldUserSelected = $("#user-search").val();
                        for (var i = 0; i < subscriberGroup.length; i++) {
                            $("#group-search option[value='" + subscriberGroup[i] + "']").attr("selected", true);
                            $("#group-search").selectpicker("refresh");
                            var group = $("#group-search option[value='" + subscriberGroup[i] + "']").text();
                            var groupTile = $("<div>").attr("id", subscriberGroup[i]).attr("data-searchtype", "groupSearch").addClass("SelectedShareItems");
                            groupTile.html("<div class='InstantSearch'><span class='details' title='" + group.trim() + "'>" + group.trim() + "</span><div style='width:auto' class='instant-cancel'><span class='su su-close i-selected-cancel'/></div></div>");
                            $("#selected-users").append(groupTile);
                        }
                        oldGroupSelected = $("#group-search").val();

                        for (var i = 0; i < subscriberExternalRecipient.length; i++) {
                            var emailid = subscriberExternalRecipient[i];
                            var externalRecipientTile = $("<div>").attr("id", subscriberExternalRecipient[i]).attr("data-searchtype", "externalRecipient").addClass("SelectedShareItems");
                            externalRecipientTile.html("<div class='InstantSearch'><span class='details'title='" + emailid + "'>" + emailid + "</span><div style='width:auto' class='instant-cancel'><span class='su su-close i-selected-cancel'/></div></div>");
                            $("#selected-users").append(externalRecipientTile);
                        }

                        var selectedCountGroup = $("#group-search-container .bootstrap-select li.selected").length;
                        var allListCountGroup = $("#group-search-container .bootstrap-select li").length;
                        var selectedCountUser = $("#user-search-container .bootstrap-select li.selected").length;
                        var allListCountUser = $("#user-search-container .bootstrap-select li").length;
                        if (selectedCountGroup === allListCountGroup) {
                            $("#group-search-container .bs-select-all-custom").removeClass('bs-select-all-custom').addClass('bs-deselect-all-custom');
                        }
                        if (selectedCountUser === allListCountUser) {
                            $("#user-search-container .bs-select-all-custom").removeClass('bs-select-all-custom').addClass('bs-deselect-all-custom');
                        }
                        $("#pdf-export").prop("checked", item.ExportType.toLowerCase() === "pdf");
                        $("#excel-export").prop("checked", item.ExportType.toLowerCase() === "excel");
                        $("#word-export").prop("checked", item.ExportType.toLowerCase() === "word");
                        $("#html-export").prop("checked", item.ExportType.toLowerCase() === "html");
                        $("#ppt-export").prop("checked", item.ExportType.toLowerCase() === "ppt");
                        $("#csv-export").prop("checked", item.ExportType.toLowerCase() === "csv");
                        $("#schedule-submit").attr("data-schedule-id", scheduleId);
                        $("#save-as-file").prop("checked", item.IsSaveAsFile);
                        $("#enable-send-mail").prop("checked", item.IsSendAsMail);
                        if (item.IsSaveAsFile) {
                            $(".save-as-file-type").css("display", "block");
                        }
                        else {
                            $(".save-as-file-type").css("display", "none");
                        }
                        if (item.IsSendAsMail) {
                            $(".send-mail-block").css("display", "block");
                        }
                        else {
                            $(".send-mail-block").css("display", "none");
                        }
                        if (!item.IsSaveAsFile && !item.IsSendAsMail) {
                            $("#enable-send-mail").prop("checked", true);
                            $(".send-mail-block").css("display", "block");
                        }

                        $("#export-path").val(item.ExportPath);
                        $("#max-report-count").val(item.ReportCount);
                    }
                    selectedItemsCount();
                    validateExternalRecipient();
                    addTitleForUsersAndGroups();
                }

                parent.$("#editpopup-container_wrapper").ejWaitingPopup("hide");
                parent.$("#popup-container_wrapper").ejWaitingPopup("hide");
            }
        });
    }
}


function schedulePasswordSettingPost(url, className) {
    if (!$(".schedule-dialog").hasClass(className)) {
        parent.$("#popup-container_wrapper").ejWaitingPopup("show");
        parent.$("#editpopup-container_wrapper").ejWaitingPopup("show");
        $.ajax({
            type: "POST",
            url: url,
            data: { itemId: reportParameterItemId },
            cache: false,
            dataType: 'html',
            success: function (data) {
                $(".modal-body").append(data);

                if (className === "schedule-settings-body") {
                    $(".schedule-dialog #schedule-settings-body").css("display", "inline");
                    if (actionType === "Create") {

                        var exportFilesetting = "";
                        $.ajax({
                            type: "POST",
                            url: getExportFileSettingInfoUrl,
                            success: function (data) {
                                if (data !== null && data !== "") {
                                    exportFilesetting = data.ExportFileSetting;
                                    if (exportFilesetting !== null && exportFilesetting !== undefined) {
                                        //Assiging values to the field.
                                        var length = exportFilesetting.PasswordProtocols.PasswordKeyProtocol.length;
                                        for (var t = 1; t <= length; t++) {
                                            var ele = $(".password-condition-section:nth-child(" + t + ")");
                                            if (!ele.length) {
                                                AddNewElementAndIntialize();
                                                ele = $(".password-condition-section:nth-child(" + t + ")");
                                            }

                                            ele.find(".field-key-position").prop("disabled", false);
                                            ele.find(".field-key-position")
                                                .find("option[value='" +
                                                    exportFilesetting.PasswordProtocols.PasswordKeyProtocol[t - 1]
                                                        .FieldKeyPosition +
                                                    "']").prop("selected", "selected");
                                            ele.find(".field-key-position").selectpicker("refresh");
                                            var fieldKeyPosition = ele.find(".field-key-count").data("ejNumericTextbox");
                                            fieldKeyPosition.enable();
                                            fieldKeyPosition.option("value",
                                                exportFilesetting.PasswordProtocols.PasswordKeyProtocol[t - 1].NumberOfFieldKeys);
                                            ele.find(".field-key").prop("disabled", false);
                                            ele.find(".field-key")
                                                .find("option[value='" +
                                                    exportFilesetting.PasswordProtocols.PasswordKeyProtocol[t - 1].FieldKey +
                                                    "']").prop("selected", "selected");
                                            ele.find(".field-key").selectpicker("refresh");
                                        }
                                        switch (exportFilesetting.PasswordType) {
                                            case "CustomPassword":
                                                $("#custom-password").prop("checked", true).trigger("change");
                                                $("#password-condition-container").show();
                                                $("#default-password-info").hide();
                                                break;
                                            default:
                                                $("#default-password").prop("checked", true).trigger("change");
                                                $("#password-condition-container").hide();
                                                $("#default-password-info").show();
                                        }
                                        $("#enable-password-protection").prop("checked", exportFilesetting.IsPasswordProtected)
                                            .trigger("change");
                                        $("#enable-compression").prop("checked", exportFilesetting.IsCompressionEnabled).trigger("change");

                                        if ($("#password-condition-section").find(".password-condition-section").length >= 3) {
                                            $(".pwd-condition-btn").addClass("pointer-events");
                                        }
                                    } else {
                                        //Enabling Default Password and unchecking the Compression and Password protection option
                                        $("#default-password").prop("checked", true).trigger("change");
                                        $("#password-condition-container").hide();
                                        $("#default-password-info").show();
                                        $("#enable-password-protection").prop("checked", false)
                                            .trigger("change");
                                        $("#enable-compression").prop("checked", false).trigger("change");
                                    }
                                }
                            },
                            error: handleAjaxError()
                        });

                    }
                    if (actionType === "Edit") {
                        if (exportFilesettingInEdit !== null && exportFilesettingInEdit !== undefined) {
                            //Assiging values to the field.
                            var length = exportFilesettingInEdit.PasswordProtocols.PasswordKeyProtocol.length;
                            for (var t = 1; t <= length; t++) {
                                var ele = $(".password-condition-section:nth-child(" + t + ")");
                                if (!ele.length) {
                                    AddNewElementAndIntialize();
                                    ele = $(".password-condition-section:nth-child(" + t + ")");
                                }

                                ele.find(".field-key-position").prop("disabled", false);
                                ele.find(".field-key-position")
                                    .find("option[value='" +
                                        exportFilesettingInEdit.PasswordProtocols.PasswordKeyProtocol[t - 1]
                                            .FieldKeyPosition +
                                        "']").prop("selected", "selected");
                                ele.find(".field-key-position").selectpicker("refresh");
                                var fieldKeyPosition = ele.find(".field-key-count").data("ejNumericTextbox");
                                fieldKeyPosition.enable();
                                fieldKeyPosition.option("value",
                                    exportFilesettingInEdit.PasswordProtocols.PasswordKeyProtocol[t - 1].NumberOfFieldKeys);
                                ele.find(".field-key").prop("disabled", false);
                                ele.find(".field-key")
                                    .find("option[value='" +
                                        exportFilesettingInEdit.PasswordProtocols.PasswordKeyProtocol[t - 1].FieldKey +
                                        "']").prop("selected", "selected");
                                ele.find(".field-key").selectpicker("refresh");
                            }
                            switch (exportFilesettingInEdit.PasswordType) {
                                case "CustomPassword":
                                    $("#custom-password").prop("checked", true).trigger("change");
                                    $("#password-condition-container").show();
                                    $("#default-password-info").hide();
                                    break;
                                default:
                                    $("#default-password").prop("checked", true).trigger("change");
                                    $("#password-condition-container").hide();
                                    $("#default-password-info").show();
                            }
                            $("#enable-password-protection").prop("checked", exportFilesettingInEdit.IsPasswordProtected)
                                .trigger("change");
                            $("#enable-compression").prop("checked", exportFilesettingInEdit.IsCompressionEnabled).trigger("change");

                            if ($("#password-condition-section").find(".password-condition-section").length >= 3) {
                                $(".pwd-condition-btn").addClass("pointer-events");
                            }
                        } else {
                            //Enabling Default Password and unchecking the Compression and Password protection option
                            $("#default-password").prop("checked", true).trigger("change");
                            $("#password-condition-container").hide();
                            $("#default-password-info").show();
                            $("#enable-password-protection").prop("checked", false)
                                .trigger("change");
                            $("#enable-compression").prop("checked", false).trigger("change");
                        }
                    }
                }

                parent.$("#editpopup-container_wrapper").ejWaitingPopup("hide");
                parent.$("#popup-container_wrapper").ejWaitingPopup("hide");
            }
        });
    }
}

$("#scheduleSearch_global").on("keyup", "#scheduleSearch_formfield", function () {
    var searchText = $(this).val();
    if (searchText.length > 2) {
        $("#scheduleGrid").data("ejGrid").search(searchText);
    } else {
        $("#scheduleGrid").data("ejGrid").search("");
    }
});

function refreshScheduleGridItem(scheduleId) {
    //change the loading icon to play icon
    var scheduleGridObj = $("#scheduleGrid").data("ejGrid");
    for (var i = 0; i < scheduleGridObj.model.currentViewData.length; i++) {
        if (scheduleGridObj.model.currentViewData[i].Id == scheduleId) {
            $("span span[data-scheduleid =" + scheduleId + "]").removeClass("loader-gif").addClass("su-play-folder");
        }
    }
}

function editSchedule(id, itemId, itemName, categoryName) {
    reportParameterItemId = id;
    reportItemId = itemId;
    reportCategoryName = categoryName;
    reportItemName = itemName;
    createdItemId = itemId;
    
    itemName !== "" ? $(".schedule-popup-title").html(" " + itemName + " - Schedule") : $(".schedule-popup-title").html(" " + itemName + " Schedule");
    $(".schedule-popup-title").attr("title", itemName);
    scheduleId = id;
    reportItemName = itemName;
    var filterSettings = [];
    filterSettings.push({ PropertyName: "CategoryName", FilterType: "equals", FilterKey: reportCategoryName });
    var invalid = undefined;
    var listItems = "";
    var listCategories = "";
    $.ajax({
        type: "POST",
        url: getScheduleInfoUrl,
        data: { scheduleId: id },
        success: function (data) {
            parent.$("#editpopup-container_wrapper").ejWaitingPopup("hide");
            item = data.ScheduleItem;
            $("#enable-schedule").prop("checked", item.IsEnabled);
            $("#enable-parameter").prop("checked", item.IsParameterEnabled);
            recurrence = item.RecurrenceType;
            endType = item.EndType;
            endDate = item.EndDateString;
            endAfter = item.EndAfter;
            startDate = item.StartDateString;
            Subject = item.Subject;
            emailContent = item.EmailContent;
            createdItemId = item.ItemId;
            itemRecurrence = item.Recurrence;
            if (recurrence.toLowerCase() === "hourly") {
                frequency = item.Recurrence.HourlySchedule.MinutesInterval;
            }
            exportType = item.ExportType;
            subscriberExternalRecipient = data.SubscribedExternalRecipient;
            subscriberGroup = data.SubscribedGroup;
            subscriberUser = data.SubscribedUser;

            //Export File Setting Info
            exportFilesettingInEdit = data.ExportFileSetting;
            $("#schedule-name").val(item.Name);
            if(!item.IsEnabled)
            {
                $("#enable-schedule").prop("checked", "");
            }
        }
    });
 }

function refreshConditionCategory() {
    $(".condition-category-changes").find("select").html("");
    $(".condition-category-changes").find("select").append('<option value="5" data-title="' + window.Server.App.LocalizationContent.ValueChange + '" name="ValueChanges" selected="selected">' + window.Server.App.LocalizationContent.ValueChangeOption + '</option>' +
                                        '<option value="1" data-title="' + window.Server.App.LocalizationContent.Increases + '" name="Increases">' + window.Server.App.LocalizationContent.IncreasesOption + '</option>' +
                                        '<option value="2" data-title="' + window.Server.App.LocalizationContent.ContinousIncreases + '" name="ContinousIncreases">' + window.Server.App.LocalizationContent.ContinousIncreasesOption + '</option>' +
                                        '<option value="3" data-title="' + window.Server.App.LocalizationContent.Decreases + '" name="Decreases">' + window.Server.App.LocalizationContent.DecreasesOption + '</option>' +
                                        '<option value="4" data-title="' + window.Server.App.LocalizationContent.ContinousDecreases + '" name="ContinousDecreases">' + window.Server.App.LocalizationContent.ContinousDecreasesOption + '</option>').selectpicker("refresh");
    $("#selected-option").selectpicker("refresh");
    for (var i = 0; i < $(".condition-category-changes select option").length; i++) {
        var hoveredtext = $(".condition-category-changes select option").eq(i).attr("data-title");
        $(".condition-category-changes .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr({ "title": hoveredtext, "data-toggle": "tooltip", "data-container": "body", "data-placement": "right" });
    }
    $(".condition-category-changes .btn-group .dropdown-menu .selectpicker li a").tooltip();
}

function addTitleForWidgets() {
    $("#selected-items").selectpicker("refresh");
    for (var i = 0; i < $(".items-dropdown  .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $(".items-dropdown .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $(".items-dropdown .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
}

function addTitleForUsersAndGroups() {
    $("#user-search").selectpicker("refresh");
    for (var i = 0; i < $("#user-search-container .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $("#user-search-container .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $("#user-search-container .btn-group .dropdown-menu .selectpicker li").eq(i).find("a").attr("title", hoveredtext);
    }
    $("#group-search").selectpicker("refresh");
    for (var i = 0; i <= $("#group-search-container .btn-group .dropdown-menu  li").length; i++) {
        var hoveredtext = $("#group-search-container .btn-group .dropdown-menu  li").eq(i).find("a .text").text();
        $("#group-search-container .btn-group .dropdown-menu li ").eq(i).find("a").attr("title", hoveredtext);
    }
}

function addTitleForRecurrenceType() {
    $("#recurrence-type").selectpicker("refresh");
    $("#recurrence-type-container").find(".dropdown-menu").addClass("dropdown-height");
    for (var i = 0; i < $("#recurrence-type-container .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $("#recurrence-type-container .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $("#recurrence-type-container .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }

    $("#monthly-dow-week").selectpicker("refresh");
    for (var i = 0; i < $("#monthly-dow-week-container .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $("#monthly-dow-week-container .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $("#monthly-dow-week-container .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
    $("#monthly-dow-day").selectpicker("refresh");
    $("#monthly-dow-day-container").find(".dropdown-menu").addClass("day-dropdown-width");
    for (var i = 0; i < $("#monthly-dow-day-container .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $("#monthly-dow-day-container .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $("#monthly-dow-day-container .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
    $("#yearly-dow-week").selectpicker("refresh");
    for (var i = 0; i < $("#yearly-dow-week-container .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $("#yearly-dow-week-container .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $("yearly-dow-week-container .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
    $("#yearly-dow-day").selectpicker("refresh");
    $("#yearly-dow-day-container").find(".dropdown-menu").addClass("day-dropdown-width");
    for (var i = 0; i < $("#yearly-dow-day-container .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $("#yearly-dow-day-container .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $("#yearly-dow-day-container .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
    $("#yearly-dow-month").selectpicker("refresh");
    $("#yearly-dow-month-ccontainer").find(".dropdown-menu").addClass("day-dropdown-width");
    for (var i = 0; i < $("#yearly-dow-month-ccontainer .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $("#yearly-dow-month-ccontainer .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $("#yearly-dow-month-ccontainer .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
    $("#yearly-month").selectpicker("refresh");
    $("#yearly-month").next("div").find(".dropdown-menu").addClass("day-dropdown-width");
    for (var i = 0; i < $("#yearly-schedule-option .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $("#yearly-schedule-option .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $("#yearly-schedule-option .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
}

var listCategories = "";
$(document).on('show.bs.dropdown', '.category-dropdown', function () {
    $(".category-dropdown").find(".open,.bootstrap-select").removeClass("dropdown-alignment");
    if (listCategories === "") {
        $(".category-dropdown .bootstrap-select").append($("<span class='no-padding loader-gif'><div class='loader-blue loader-icon' id='category-dropdown-loader-icon'><svg class='circular'><circle class='path' cx='27' cy='27' r='13' fill='none' stroke-width='4' stroke-miterlimit='10'></circle></svg></div></span>"));
        $(".category-dropdown .bootstrap-select .open").hide();
        var filterSettings = [];
        filterSettings.push({ PropertyName: "CategoryName", FilterType: "equals", FilterKey: reportCategoryName });
        var invalid = undefined;
        $.ajax({
            type: "POST",
            url: getCategoryUrl,
            success: function (data) {
                var categories = data;
                for (var t = 0; t < categories.data.length; t++) {
                    if (categories.data[t].Name == reportCategoryName) {
                        listCategories += '<option value="' + categories.data[t].Id + '" selected= "selected">' + categories.data[t].Name + '</option>';
                    }
                    else {
                        listCategories += '<option value="' + categories.data[t].Id + '">' + categories.data[t].Name + '</option>';
                    }
                }
                $("#selected_category").html("");
                if (reportItemId == "") {
                    $("#selected_category").html('<option value="" disabled="disabled" class="hide-option" selected="selected">'+window.Server.App.LocalizationContent.SelectCategory+'</option>' + listCategories)
                  .selectpicker("refresh");
                }
                else {
                    $("#selected_category").html(listCategories)
                                  .selectpicker("refresh");
                }
                addTitleForCategory();
                $(".category-dropdown .bootstrap-select ul li").each(function () {
                    if($(this).hasClass("selected")){
                        $(this).addClass("active");
                    }
                })
                if (listCategories != "") {
                    $(".category-dropdown .bootstrap-select .open").show();
                }
                $(".category-dropdown span.loader-gif").remove();
                }
        });
    }
    $(".category-dropdown").find(".open").addClass("dropdown-alignment");
});

$(document).on('show.bs.dropdown', '.dashboard-dropdown', function () {
    $(".dashboard-dropdown").find(".open,.bootstrap-select").removeClass("dropdown-alignment");
    if ($("#selected_category").find("option:selected").val() === "" && multiDashboardName === null) {
        $("#category-message").css("display", "block");
        $("#selected_dashboard").attr("disabled", false);
    }
    else {
        if (listDashboards == "") {
            $(".dashboard-dropdown .bootstrap-select").append($("<span class='no-padding loader-gif'><div class='loader-blue loader-icon' id='dashboard-dropdown-loader-icon'><svg class='circular'><circle class='path' cx='27' cy='27' r='13' fill='none' stroke-width='4' stroke-miterlimit='10'></circle></svg></div></span>"));
            $(".dashboard-dropdown .bootstrap-select .open").hide();

            var filterSettings = [];
            filterSettings.push({ PropertyName: "CategoryName", FilterType: "equals", FilterKey: reportCategoryName });
            var invalid = undefined;
            var listItems = "";
            var childItems = "";
            if ((reportItemId == "" || reportItemId != "") && (itemName != "" && reportCategoryName != "")) {
                $.ajax({
                    type: "POST",
                    url: getReportUrl,
                    data: { searchKey: invalid, skip: 0, take: 20, sorted: invalid, filterCollection: filterSettings, displayCategory: "SpecificCategory" },
                    success: function (result, data) {
                        var dashboards = result.result;
                        for (var t = 0; t < dashboards.length; t++) {
                            if (multiDashboardName == null || multiDashboardName == "undefined" || multiDashboardName == "") {
                                listDashboards += (dashboards[t].Name.toLowerCase() == itemName.toLowerCase())
                                    ? '<option value="' +
                                    dashboards[t].Id +
                                    '" selected=selected>' +
                                    dashboards[t].Name +
                                    '</option>'
                                    : '<option value="' + dashboards[t].Id + '">' + dashboards[t].Name + '</option>';
                            }
                            else {
                                listDashboards += (dashboards[t].Name.toLowerCase() == multiDashboardName.toLowerCase())
                                    ? '<option value="' +
                                    dashboards[t].Id +
                                    '" selected=selected>' +
                                    dashboards[t].Name +
                                    '</option>'
                                    : '<option value="' + dashboards[t].Id + '">' + dashboards[t].Name + '</option>';
                            }
                        }
                        $("#selected_dashboard").html("");
                        if (reportItemId == "") {
                            $("#selected_dashboard")
                                .html("<option value='' disabled='disabled' class='hide-option' selected='selected'>" + window.Server.App.LocalizationContent.SelectDashboard + "</option>" + listDashboards)
                                .selectpicker("refresh");
                        }
                        else {
                            $("#selected_dashboard")
                                .html(listDashboards)
                                .selectpicker("refresh");
                        }
                        addTitleForDashboard();
                        $(".dashboard-dropdown ul li").each(function () {
                            if ($(this).hasClass("selected")) {
                                $(this).addClass("active");
                            }
                        });
                        if (listDashboards != "") {
                            $(".dashboard-dropdown .bootstrap-select .open").show();
                            }
                       
                        $(".dashboard-dropdown span.loader-gif").remove();
                      }
                });
            } else {
                $("#selected_dashboard").html('<option value="" disabled="disabled" class="hide-option"selected="selected">'+ window.Server.App.LocalizationContent.SelectDashboard +'</option>').selectpicker("refresh");
                $(".dashboard-dropdown .bootstrap-select .open").show();
                $(".dashboard-dropdown .btn-group .dropdown-menu.open").removeAttr("style");
                $(".dashboard-dropdown .btn-group .dropdown-menu.open").css("overflow", "hidden");
                $(".dashboard-dropdown span.loader-gif").remove();
            }
        } 
    }
    $(".dashboard-dropdown").find(".open").addClass("dropdown-alignment");
});

//Export File Setting

$(document).on("click", ".pwd-condition-btn", function () {
    $("#error-filedkey-info").remove();
    AddNewElementAndIntialize();
    if ($("#password-condition-section").find(".password-condition-section").length >= 3) {
        $(".pwd-condition-btn").addClass("pointer-events");
    }
});

$(document).on("click", "#remove-pwd-condition", function () {
    $("#error-filedkey-info").remove();
    $(this).parent().closest('.password-condition-section').remove();
    $(".pwd-condition-btn, .remove-condition-btn").removeClass("pointer-events");
});

$(document).on("change", "#enable-compression", function () {
    if (isSafariOrEdge) {
        $(this).find("label").toggleClass("check");
        $("#custom-password, #default-password, #enable-password-protection").next().toggleClass("check");
    }
    if ($(this).is(":checked")) {
        $("#enable-password-protection").prop("disabled", false);
        EnablePasswordProtectionSection();
    }
    else {
        $("#enable-password-protection").prop("disabled", true);
        DisablePasswordProtectionSection();
    }
});

$(document).on("change", "#enable-password-protection", function () {
    if (isSafariOrEdge) {
        $("#custom-password, #default-password").next().toggleClass("check");
    }
    if ($(this).is(":checked")) {
        EnablePasswordProtectionSection();
    }
    else {
        DisablePasswordProtectionSection();
    }
});

function EnablePasswordProtectionSection() {
    if ($("#enable-password-protection").is(":checked")) {
        $("#default-password, #custom-password").prop("disabled", false);
        if ($("#custom-password").is(":checked") && (!$("#custom-password").hasClass("disabled"))) {
            EnablePasswordConditionSection();
        } else {
            DisablePasswordConditionSection();
        }
    }
}

function DisablePasswordProtectionSection() {
    $("#default-password, #custom-password").prop("disabled", true);
    DisablePasswordConditionSection();
}

function EnablePasswordConditionSection() {
    $(".select-picker").removeAttr("disabled").selectpicker("refresh");
    $(".numeric-text-box")
        .each(function () {
            var obj = $(this).data("ejNumericTextbox");
            obj.enable();
        });
    if ($("#password-condition-section").find(".password-condition-section").length < 3) {
        $(".pwd-condition-btn").removeClass("pointer-events");
    }
    $(".remove-condition-btn").removeClass("pointer-events");
}

function DisablePasswordConditionSection() {
    $(".select-picker").attr("disabled", true).selectpicker("refresh");
    $(".numeric-text-box")
        .each(function () {
            var obj = $(this).data("ejNumericTextbox");
            obj.disable();
        });
    $(".pwd-condition-btn, .remove-condition-btn").addClass("pointer-events");
}

function initializeFileSetting(count) {

    var fieldKeyPosition = "";
    var fieldKeys = "";
    $.ajax({
        type: "POST",
        url: getScheduleFileSettingTypeUrl,
        async: false,
        success: function (data) {

            for (var t = 0; t < data.FieldKeyPosition.length; t++) {
                fieldKeyPosition += "<option value= " + data.FieldKeyPosition[t] + ">" + data.FieldKeyPosition[t] + "</option>";
            }

            for (var i = 0; i < data.FieldKey.length; i++) {
                fieldKeys += "<option value= '" + data.FieldKey[i] + "'>" + data.FieldKey[i] + "</option>";
            }
        },
        complete: function () {
        }
    });

    var passwordConditionLength = $("#password-condition-section").find(".password-condition-section").length;
    for (var t = count; t <= passwordConditionLength; t++) {
        var ele = $(".password-condition-section:nth-child(" + t + ")");
        ele.find(".field-key-position").append(fieldKeyPosition);
        ele.find(".field-key-count").ejNumericTextbox({ name: "numeric", value: 4, minValue: 4, maxValue: 8, width: "65px", height: "32px" });
        ele.find(".field-key").append(fieldKeys);
        ele.find(".field-key, .field-key-position").selectpicker("refresh");
    }
}

function createPasswordConditionElement() {
    var ele =
        '<div class="password-condition-section col-lg-12 col-md-12 col-sm-12 cls-margin-bot pointer-events"><div class="i-search-fields pull-left"><select data-width="50px" class="select-picker no-padding field-key-position" data-size="2"></select></div><div class="pull-left cls-margin"><input class="form-control field-key-count pull-left numeric-text-box" name="field-key-count" /></div><div class="pull-left"><label class="pull-left app-textbox-label no-margin" for="field-key-label">' + window.Server.App.LocalizationContent.CharacterOf + '</label><div class="i-search-fields  pull-left cls-padleft10"><select class="select-picker field-key" data-width="100px" data-size="4"></select></div></div><span id="remove-pwd-condition" class="su-close remove-condition-btn app-textbox-label no-margin" data-toggle="tooltip" data-placement="right" title="' + window.Server.App.LocalizationContent.RemoveSlide + '"></span></div>';

    return ele;
}

function CreateFieldKeyErrorElement() {
    return '<span class="col-lg-8 col-md-8 col-sm-8" id="error-filedkey-info">' + window.Server.App.LocalizationContent.CustomPasswordCondition + '</span>';
}

function AddNewElementAndIntialize() {
    var ele = "";
    var btnCount = $("#password-condition-section").find(".password-condition-section").length;
    if (($("#password-condition-section").find(".password-condition-section").length) < 3) {
        ele = createPasswordConditionElement();
        $(ele).appendTo($("#password-condition-section"));
        initializeFileSetting(btnCount + 1);
        $(".password-condition-section").removeClass("pointer-events");
    }

    $('[data-toggle="tooltip"]').tooltip();
}

function GetExportFileSettingInfo() {
    var scheduleExportFileSettings = {};
    var value = [];
    var passwordConditionLength = $("#password-condition-section").find(".password-condition-section").length;
    for (var t = 1; t <= passwordConditionLength; t++) {
        var ele = $(".password-condition-section:nth-child(" + t + ")");
        var passwordKeyProtocol = {};
        passwordKeyProtocol.FieldKeyPosition = ele.find(".field-key-position").val();
        passwordKeyProtocol.NumberOfFieldKeys = ele.find(".field-key-count").val();
        passwordKeyProtocol.FieldKey = ele.find(".field-key").val();
        value.push(passwordKeyProtocol);
    }
    scheduleExportFileSettings.IsCompressionEnabled = $("#enable-compression").is(":checked");
    scheduleExportFileSettings.IsPasswordProtected = $("#enable-password-protection").is(":checked");
    if ($("#enable-compression").is(":checked") && $("#enable-password-protection").is(":checked") && $("#custom-password").is(":checked")) {
        scheduleExportFileSettings.PasswordType = "CustomPassword";
        var result = value;
        var hasFirstOrLastName = false;
        for (i = 0; i < result.length; i++) {
            if (result[i].FieldKey.toLowerCase() === "first name" || result[i].FieldKey.toLowerCase() === "email") {
                hasFirstOrLastName = true;
            }
        }
        if (!hasFirstOrLastName) {
            return false;
        }
    } else {
        scheduleExportFileSettings.PasswordType = "DefaultPassword";
    }
    scheduleExportFileSettings.PasswordProtocols = { PasswordKeyProtocol: value };

    return scheduleExportFileSettings;
}

//recepient page scripts
$(document).on("change", "#save-as-file", function () {
    $("#checkbox-validation").css("visibility", "hidden");
    if ($(this).is(":checked")) {
        $(".save-as-file-type").css("display", "block");
        if ($(".save-as-file-type").find("#export-path").val() === "") {
            $(".save-as-file-type").find("#export-path").val($("#edit-export-path").val());
        }
        if ($(".save-as-file-type").find("#max-report-count").val() === "0") {
            $(".save-as-file-type").find("#max-report-count").val($("#export-report-count").val());
        }
    }
    else {
        $(".save-as-file-type").css("display", "none");
    }
});

$(document).on("change", "#enable-send-mail", function () {
    $("#checkbox-validation").css("visibility", "hidden");
    if ($(this).is(":checked")) {
        $(".send-mail-block").css("display", "block");
    }
    else {
        $(".send-mail-block").css("display", "none");
    }
});

$(document).on("focusout", "#export-path", function (event) {
    var path = $("#export-path").val();
    if (path !== "") {
        exportPathExistCheck(path);
    }
    else {
        $(".directory-check").css("display", "block");
        $(".directory-check").html(window.Server.App.LocalizationContent.ScheduleReportPath).css({ "color": "#a94442", "font-size": "12px" });
        return;
    }
});

$(document).on("focusout", "#max-report-count", function (event) {
    if ($.isNumeric(parseInt($("#max-report-count").val()))) {
        $("#report-count-validation").css("visibility", "hidden");
    } else {
        $("#report-count-validation").css("visibility", "visible").css({ "color": "#a94442", "font-size": "12px" });
    }
});

function exportPathExistCheck(exportReportPath) {
    $.ajax({
        type: "POST",
        url: exportPathExistUrl,
        async: false,
        data: { exportPath: exportReportPath },
        success: function (data) {
            if (data.Result) {
                $(".directory-check").removeClass("directory-exist");
                $(".directory-check").css("display", "none");
            } else {
                $(".directory-check").css("display", "block");
                $(".directory-check").addClass("directory-exist");
                $(".directory-check").html(window.Server.App.LocalizationContent.pathNotExist).css({ "color": "#a94442", "font-size": "12px" });
                return;
            }
        }
    });
}
