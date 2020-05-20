var isSafariOrEdge = (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) || (navigator.userAgent.indexOf("Edge") !== -1);
$(document).ready(function () {
    var bodyWaitingPopupTemplateId = createLoader("body");
    $("#body").ejWaitingPopup({ template: $("#" + bodyWaitingPopupTemplateId) });

    $("a[data-toggle='tab']").on('click', function (e) {
        if ($(this).attr("id") === "make-public-setting") {
            $("#update-dashboard-settings").show();
            $("#cancel-dashboard-settings").show();
            $("#update-schedule-settings").hide();
        }
        else if ($(this).attr("id") === "schedule-setting") {
            $("#update-dashboard-settings").hide();
            $("#update-schedule-settings").show();
        }
        $(".success-message, .error-message").hide();
    });

    $(document).ready(function () {
        if ($("#dashboard-settings-container").is(":visible")) {
            if (location.href.match(/schedule-setting-tab/)) {
                $("#schedule-setting").tab("show");
                $("#update-dashboard-settings").hide();
                $("#update-schedule-settings").show();
            }
            else {
                $("#make-public-setting").tab("show");
                $("#update-dashboard-settings").show();
                $("#cancel-dashboard-settings").show();
                $("#update-schedule-settings").hide();
            }
        }
    });
    initializeFileSetting(1);

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
            hideWaitingPopup($("#body"));
        },
        error: handleAjaxError()
    });

});

$(document).on("click", "#update-dashboard-settings", function () {
    $(".confirmationMessage").html("");

    var reportSettings = {
      IsMarkItemsPublic: $("#restrict-makepublic-dashboard").is(":checked")
    };
    $("#body").ejWaitingPopup("show");
    $.ajax({
        type: "POST",
        url: $(this).data("url"),
        data: { reportSettingsData: reportSettings },
        success: function (result) {
            if (result.status) {
                SuccessAlert(window.Server.App.LocalizationContent.ReportSettings, window.Server.App.LocalizationContent.SettingsSuccessAlert, 7000);
            } else {
                WarningAlert(window.Server.App.LocalizationContent.ReportSettings, window.Server.App.LocalizationContent.SettingsWarningAlert, 7000);
            }
            $("#body").ejWaitingPopup("hide");
        }
    });
});

$(document).on("click", "#update-schedule-settings", function () {
    $(".confirmationMessage").html("");
    $("#error-filedkey-info").remove();
    showWaitingPopup($("#body"));
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
            var elee = CreateFieldKeyErrorElement();
            $(elee).appendTo($("#password-condition-section"));
            hideWaitingPopup($("#body"));
            return;
        }

    } else {
        scheduleExportFileSettings.PasswordType = "DefaultPassword";
    }


    scheduleExportFileSettings.PasswordProtocols = { PasswordKeyProtocol: value };

    $.ajax({
        type: "POST",
        url: $(this).data("url"),
        data: { scheduleExportFileSettingsData: JSON.stringify({ ExportFileSetting: scheduleExportFileSettings }) },
        success: function (result) {
            if (result.status) {
                SuccessAlert(window.Server.App.LocalizationContent.ScheduleSettings, window.Server.App.LocalizationContent.SettingsSuccessAlert, 7000);
            } else {
                WarningAlert(window.Server.App.LocalizationContent.ScheduleSettings, window.Server.App.LocalizationContent.SettingsWarningAlert, 7000);
            }
        },
        complete: function () {
            hideWaitingPopup($("#body"));
        }
    });
});

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
    $(".numeric-text-box").each(function () {
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
    $(".numeric-text-box").each(function () {
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
        '<div class="password-condition-section col-lg-12 col-md-12 col-sm-12 cls-margin-bot pointer-events"><div class="i-search-fields pull-left"><select data-width="50px" class="select-picker no-padding field-key-position" data-size="2"></select></div><div class="pull-left cls-margin"><input class="form-control field-key-count pull-left numeric-text-box" name="field-key-count" /></div><div class="pull-left"><label class="pull-left app-textbox-label no-margin" for="field-key-label">' + window.Server.App.LocalizationContent.CharacterOf + '</label><div class="i-search-fields  pull-left cls-padleft10"><select class="select-picker field-key" data-width="100px" data-size="4"></select></div></div><span id="remove-pwd-condition" class="su-close remove-condition-btn app-textbox-label no-margin" data-toggle="tooltip" data-placement="right" title="' + window.Server.App.LocalizationContent.PasswordConditionRemover + '"></span></div>';

    return ele;
}

function CreateFieldKeyErrorElement() {
    return '<span class="col-lg-8 col-md-8 col-sm-8" id="error-filedkey-info">' + window.Server.App.LocalizationContent.PasswordCondition + '</span>';
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