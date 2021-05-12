﻿//Get Link
var getLinkInputObj = "";
var getLinkCopyLinkobj = "";
var isChrome = navigator.userAgent.indexOf("Chrome") != -1;

$(function () {
    var getLinkInputObj = $("#secret-code");
    var getLinkCopyLinkobj = $("#secret-code-copy");
    $('[data-toggle="popover"]').popover();
    if (!$("#restrict-embed-enabled").is(":checked")) {
        $("#import-validation-msg").html("");
    }

    $(document).on('click', '#restrict-embed-enabled', function () {
        var key = "IsEmbedEnabled";
        if ($("#restrict-embed-enabled").is(":checked")) {
            $("#get-embed-code").removeAttr("disabled");
            if (getLinkInputObj.val() != "") {
                getLinkInputObj.removeAttr("disabled");
                getLinkCopyLinkobj.removeAttr("disabled");
                getLinkCopyLinkobj.css("cursor", "pointer");
                getLinkCopyLinkobj.tooltip("enable").attr("data-original-title", window.TM.App.LocalizationContent.LinkCopy$).tooltip("fixTitle").tooltip("enable");
            }
            var isEmbed = "true";
            $(".download-template").show();
            $("#trigger-file").removeClass("disabled");
            $("#filename").removeClass("disabled");

        } else {
            $("#get-embed-code").attr("disabled", "disabled");
            getLinkInputObj.attr("disabled", "disabled");
            getLinkCopyLinkobj.attr("disabled", "disabled");
            getLinkCopyLinkobj.tooltip("disable").attr("data-original-title", window.TM.App.LocalizationContent.LinkCopy$).tooltip("fixTitle").tooltip("disable");
            getLinkCopyLinkobj.css("cursor", "default");
            $(".download-template").hide();
            $("#trigger-file").addClass("disabled");
            $("#filename").addClass("disabled");
            $("#import-validation-msg").html("");
            var isEmbed = "false";
        }
        $("#restrict-embed-enabled").attr("disabled", "disabled");
        $(".embed-loader").append($("<span class='no-padding loader-gif'><div class='loader-blue loader-icon' id='embed-enabled-loader-icon'><svg class='circular'><circle class='path' cx='27' cy='27' r='13' fill='none' stroke-width='4' stroke-miterlimit='10'></circle></svg></div></span>"));
        $.ajax({
            type: "POST",
            url: updateSystemSettingsValueUrl,
            data: { systemSettingValue: isEmbed, key: key },
            success: function (data) {
                if (data.status) {
                    $("#restrict-embed-enabled").removeAttr("disabled");
                    $(".embed-loader span.loader-gif").remove();
                    return;
                } else {
                    $("#restrict-embed-enabled").removeAttr("disabled");
                    if ($("#restrict-embed-enabled").is(":checked")) {
                        $("#restrict-embed-enabled").attr("checked", false);
                    }
                    else {
                        $("#restrict-embed-enabled").attr("checked", true);
                    }
                    $(".embed-loader span.loader-gif").remove();
                }
            }
        });
    });

    getLinkCopyLinkobj.on("click", function (e) {
        if (!getLinkInputObj.is(":disabled")) {
            getLinkCopyLinkobj.tooltip("hide").attr("data-original-title", window.TM.App.LocalizationContent.LinkCopy$).tooltip("fixTitle").tooltip("show");
            getLinkInputObj.select();
            if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
                getLinkCopyLinkobj.removeClass("su su-copy");
                getLinkCopyLinkobj.attr("data-original-title", "");
            }
            else {
                document.execCommand('copy');
                getLinkCopyLinkobj.attr("data-original-title", window.TM.App.LocalizationContent.Copysuccess);
                getLinkCopyLinkobj.tooltip("hide").attr("data-original-title", window.TM.App.LocalizationContent.Copysuccess).tooltip("fixTitle").tooltip("show");
                setTimeout(function () { getLinkCopyLinkobj.attr("data-original-title", window.TM.App.LocalizationContent.LinkCopy); getLinkCopyLinkobj.tooltip(); }, 3000);
            }
        }
    });

    getLinkCopyLinkobj.removeClass("focusdiv");
    getLinkInputObj.on("focusin", function () {
        getLinkCopyLinkobj.addClass("focusdiv");
    });
    getLinkInputObj.on("focusout", function () {
        getLinkCopyLinkobj.removeClass("focusdiv");
    });
});

function getEmbedSecret() {
    if ($("#get-embed-code").html().trim() == window.TM.App.LocalizationContent.ResetHeader) {
        $(".message-content").addClass("messagebox-align");
        if (!isChrome) {
            $(".message-content").css("vertical-align", "initial");
        }
        messageBox("su su-embed", window.TM.App.LocalizationContent.ResetHeader, window.TM.App.LocalizationContent.ResetConfirmationMessage, "error", resetEmbedSecret);
    }
    else {
        $.ajax({
            type: "POST",
            url: isResetEmbedSecretUrl,
            success: function (data) {
                if (data.status) {
                    secretCodeChange(data);
                    $("#get-embed-code").html(window.TM.App.LocalizationContent.ResetHeader);
                }
            }
        });
    }
}

function resetEmbedSecret() {
    onCloseMessageBox();
    showWaitingPopup($("#body"));
    $.ajax({
        type: "POST",
        url: isResetEmbedSecretUrl,
        success: function (data) {
            if (data.status) {
                secretCodeChange(data);
                SuccessAlert(window.TM.App.LocalizationContent.EmbedSettings, window.TM.App.LocalizationContent.ResetSecretSuccessAlert, 7000);
            }
            hideWaitingPopup($("#body"));
        }
    });
}

function secretCodeChange(data) {
    $("#secret-code-copy").tooltip("hide").attr("data-original-title", window.TM.App.LocalizationContent.LinkCopy$).tooltip("fixTitle");
    $("#secret-code").removeAttr("disabled");
    $("#secret-code-copy").removeAttr("disabled");
    $("#secret-code").val(data.resetEmbedSecret);
    $(".secret-code-notification").show();
}

$(document).on('click', function (e) {
    if ($(".popover").children().hasClass("popover-content")) {
        $(".popover-content").attr("id", "popover-content");
        $(".arrow").attr("id", "arrow");
    }

    if (e.target.id !== "popover-content" && e.target.id !== "arrow" && e.target.id !== "embed-info") {
        $(".popover").css("display", "none");
    }

    $('.popover').each(function () {
        if (!($(this).is(e.target) || $(this).has(e.target).length > 0) &&
            $(this).siblings('.popover').length !== 0 &&
            $(this).siblings('.popover').has(e.target).length === 0) {
            $(this).popover().remove();
        }
    });
});

$(document).on("click", "#trigger-file,#filename", function () {
    if ($("#restrict-embed-enabled").is(":checked")) {
        $("#csfile").trigger("click");
        $("#csfile").focus();
    }
});

$(document).on("change", "#csfile", function (e) {
    var value = $(this).val();
    if ($(this).val().substring($(this).val().lastIndexOf('.') + 1) != "json") {
        $("#cs-upload").attr("disabled", true);
        $("#filename").val("Please upload a valid cs file.").css("color", "#c94442");
        $("#filename,#trigger-file").addClass("error-file-upload");
    } else {
        $("#cs-upload").attr("disabled", false);
        $("#filename,#trigger-file").removeClass("error-file-upload");
        $("#filename").val(value).css("color", "#333");
        $('#csfile').attr('title', value);
    }
});