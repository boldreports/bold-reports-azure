var firstName, emailid, lastName, password, addUserDialogPosition;
$(document).ready(function () {
    addPlacehoder("#user-add-dialog");
    addPlacehoder("#search-area");
    $("#user-add-dialog").ejDialog({
        width: "500px",
        height: "auto",
        showOnInit: false,
        allowDraggable: true,
        enableResize: false,
        title: window.Server.App.LocalizationContent.AddUser,
        showHeader: false,
        enableModal: true,
        close: "onUserAddDialogClose",
        closeOnEscape: true,
    });

    $("#messageBox").ejDialog({
        width: (window.innerWidth > 460) ? "450px" : (window.innerWidth - 10),
        showOnInit: false,
        allowDraggable: true,
        enableResize: false,
        height: "auto",
        showHeader: false,
        enableModal: true,
        close: "onMessageDialogClose"
    });

    if (($(parent.window).width()) > 1400) {
        $("#permission-container").addClass("permissions");
    }

    if (($(parent.window).width()) < 1400) {
        $("#permission-container").removeClass("permissions");
    }

    addPlacehoder("body");
    bindAllUsersandGroups();

    if ($("#user-search option").length > 0)
        $(".share-popup #user-search-container .bs-deselect-all").after("<div class='bs-select-all-custom'><span>" + window.Server.App.LocalizationContent.Select + "</span><span class='bs-select-custom-tick glyphicon glyphicon-ok'></span></div>");
    else
        $(".share-popup #user-search-container .bs-deselect-all").after("<span class='noResult'>" + window.Server.App.LocalizationContent.NoResult + "</span>");

    if ($("#group-search option").length > 0)
        $(".share-popup #group-search-container .bs-deselect-all").after("<div class='bs-select-all-custom'><span>" + window.Server.App.LocalizationContent.Select + "</span><span class='bs-select-custom-tick glyphicon glyphicon-ok'></span></div>");
    else
        $(".share-popup #group-search-container .bs-deselect-all").after("<span class='noResult'>" + window.Server.App.LocalizationContent.NoResult + "</span>");

    if ($("#is-owner").val().toLowerCase() == "true") {
        $("#permission-container").addClass("is-item-owner");
    } else {
        $("#permission-container").addClass("is-item-viewer");
    }

    $("#user-search-container").on('click', '.bs-select-all-custom', function (e) {
        $("#user-search-container").addClass("value-changed");
        $('#user-search').data("selectpicker").selectAll();
        $(this).removeClass('bs-select-all-custom').addClass('bs-deselect-all-custom').css("display", "inline");
        $($(this).children("span")[0]).text(window.Server.App.LocalizationContent.Clear);
        e.stopPropagation();
    });

    $("#group-search-container").on('click', '.bs-select-all-custom', function (e) {
        $("#group-search-container").addClass("value-changed");
        $('#group-search').data("selectpicker").selectAll();
        $(this).removeClass('bs-select-all-custom').addClass('bs-deselect-all-custom');
        $($(this).children("span")[0]).text(window.Server.App.LocalizationContent.Clear);
        e.stopPropagation();
    });

    $("#user-search-container").on('click', '.bs-deselect-all-custom', function (e) {
        $("#user-search-container").addClass("value-changed");
        $('#user-search').data("selectpicker").deselectAll();
        $(this).removeClass('bs-deselect-all-custom').addClass('bs-select-all-custom');
        $($(this).children("span")[0]).text(window.Server.App.LocalizationContent.Select);
        e.stopPropagation();
    });

    $("#group-search-container").on('click', '.bs-deselect-all-custom', function (e) {
        $("#group-search-container").addClass("value-changed");
        $('#group-search').data("selectpicker").deselectAll();
        $(this).removeClass('bs-deselect-all-custom').addClass('bs-select-all-custom');
        $($(this).children("span")[0]).text(window.Server.App.LocalizationContent.Select);
        e.stopPropagation();
    });

    $("#user-search-container").on('click', '.bootstrap-select li a', function (e) {
        $("#user-search-container").addClass("value-changed");;
        var selectedCount = $("#user-search-container .bootstrap-select li.selected").length;
        var allListCount = $("#user-search-container .bootstrap-select li").length;

        if (selectedCount == allListCount) {
            $($('#user-search-container div.bs-select-all-custom').children("span")[0]).text(window.Server.App.LocalizationContent.Clear);
            $('#user-search-container div.bs-select-all-custom').removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
        }
        if ($(this).parent().hasClass("selected")) {
            var selectedUser = $("#user-search").find("option")[parseInt($(this).parent().attr("data-original-index"))];
            var userTile = $("<div>").attr("id", $(selectedUser).val()).attr("data-searchtype", "userSearch").addClass("selected-share-items");
            userTile.html("<div class='instant-search'><span class='details' title='" + $(selectedUser).text() + "'>" + $(selectedUser).text() + "</span><div style='width:auto' class='instant-cancel'><span class='su su-close i-selected-cancel'/></div></div>");
            $("#selected-users").append(userTile);
        }
        else {
            var selectedUser = $("#user-search").find("option")[parseInt($(this).parent().attr("data-original-index"))];
            $(".selected-share-items[id='" + $(selectedUser).val() + "']").remove();
            $($('#user-search-container .bs-deselect-all-custom').children("span")[0]).text(window.Server.App.LocalizationContent.Select);
            $("#user-search-container .bs-deselect-all-custom").removeClass('bs-deselect-all-custom').addClass('bs-select-all-custom');
        }
        $(this).parent().addClass("active");
        e.stopPropagation();
    });

    $("#group-search-container").on('click', '.bootstrap-select .dropdown-menu .selectpicker li a', function (e) {
        $("#group-search-container").addClass("value-changed");;
        var selectedCount = $("#group-search-container .bootstrap-select li.selected").length;
        var allListCount = $("#group-search-container .bootstrap-select li").length;
        if (selectedCount == allListCount) {
            $($('#group-search-container div.bs-select-all-custom').children("span")[0]).text(window.Server.App.LocalizationContent.Clear);
            $('#group-search-container div.bs-select-all-custom').removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
        }

        if ($(this).parent().hasClass("selected")) {
            var selectedGroup = $("#group-search").find("option")[parseInt($(this).parent().attr("data-original-index"))];
            var groupTile = $("<div>").attr("id", $(selectedGroup).val()).attr("data-searchtype", "groupSearch").addClass("selected-share-items");
            groupTile.html("<div class='instant-search'><span class='details' title='" + $(selectedGroup).text() + "'>" + $(selectedGroup).text() + "</span><div style='width:auto' class='instant-cancel'><span class='su su-close i-selected-cancel'/></div></div>");
            $("#selected-users").append(groupTile);
        }
        else {
            var selectedGroup = $("#group-search").find("option")[parseInt($(this).parent().attr("data-original-index"))];
            $(".selected-share-items").filter("[data-searchtype='groupSearch']").filter("#" + $(selectedGroup).val()).remove();
            $($('#group-search-container .bs-deselect-all-custom').children("span")[0]).text(window.Server.App.LocalizationContent.Select);
            $("#group-search-container .bs-deselect-all-custom").removeClass('bs-deselect-all-custom').addClass('bs-select-all-custom');
        }
        $(this).parent().addClass("active");
        e.stopPropagation();
    });

    $("#user-search-container").on('click', '.bootstrap-select li a', function (e) {
        ValidateFields();
    });

    $("#group-search-container").on('click', '.bootstrap-select .dropdown-menu .selectpicker li a', function (e) {
        ValidateFields();
    });

    $("#access-selection-container").on('click', '.bootstrap-select .dropdown-menu .selectpicker li a', function (e) {
        ValidateFields();
    });

    $(document).on("click", "#users-tab", function (e) {
        $("#groups-tab").parent().removeClass("active");
        $("#item-user-permission-container").removeClass("hidden").addClass("show");
        $("#item-group-permission-container").removeClass("show").addClass("hidden");
        $("#group-search-area").removeClass("show").addClass("hidden");
        $("#user-search-area").removeClass("hidden").addClass("show");
        $("#clear-search").click();
    });

    $(document).on("click", "#groups-tab", function (e) {
        $("#users-tab").parent().removeClass("active");
        $("#groups-tab").parent().addClass("active");
        $("#item-user-permission-container").removeClass("show").addClass("hidden");
        $("#item-group-permission-container").removeClass("hidden").addClass("show");
        $("#user-search-area").removeClass("show").addClass("hidden");
        $("#group-search-area").removeClass("hidden").addClass("show");
        $("#clear-search").click();
    });

    $(document).on("click", ".itempermission-popup-close", function (e) {
        eDialog = parent.$("#permission-popup").data("ejDialog");
        eDialog.close();
        $("#permission-popup iframe").attr("src", "");
    });

    if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
        $("#item-link-copy").removeClass("su su-copy");
        $("#item-link-copy").hide();
        $("#item-link").css({ width: "100%", borderRadius: "4px" });
        $("#item-link-copy").attr("data-original-title", "");
    }
    else {
        $("#item-link-copy").tooltip({
            animation: false
        });
    }

    $("#item-link-copy").removeClass("focusdiv");
    $("#item-link").on("focusin", function () {
        $("#item-link-copy").addClass("focusdiv");
    });
    $("#item-link").on("focusout", function () {
        $("#item-link-copy").removeClass("focusdiv");
    });

    $.validator.addMethod("isRequired", function (value, element) {
        return !isEmptyOrWhitespace(value);
    }, window.Server.App.LocalizationContent.ItemNameValidator);

    $.validator.addMethod("hasWhiteSpace", function (value, element) {
        return HasWhiteSpace(value)
    }, window.Server.App.LocalizationContent.HasWhiteSpace);

    $.validator.addMethod("isValidEmail", function (value, element) {
        if (value.trim() == "") {
            return true;
        } else {
            return IsEmail(value);
        }
    }, window.Server.App.LocalizationContent.IsValidEmail);

    $.validator.addMethod("isValidName", function (value, element) {
        return IsValidName("name", value)
    }, window.Server.App.LocalizationContent.AvoidSpecialCharactors);

    $.validator.addMethod("additionalSpecialCharValidation", function (value, element) {
        if (/^[a-zA-Z_0-9`~!\$\^()=\-\.\{\} ]+$/.test(value) || value === "") {
            return true;
        }
    }, window.Server.App.LocalizationContent.AvoidSpecialCharactors);

    $("#dialog-container").validate({
        errorElement: 'span',
        onkeyup: function (element, event) {
            if (event.keyCode != 9) {
                isKeyUp = true;
                $(element).valid();
                isKeyUp = false;
            }
            else
                true;
        },
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            "email-address": {
                isRequired: true,
                isValidName: true,
                isValidEmail: true
            },
            "first-name": {
                isRequired: true,
                isValidName: true,
                additionalSpecialCharValidation: true
            },
            "last-name": {
                isValidName: true,
                additionalSpecialCharValidation: true
            },
            "user-password": {
                isRequired: true,
                isUserPasswordValid: true
            },
        },
        highlight: function (element) {
            $(element).closest('div').addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest('div').removeClass('has-error');
            $(element).closest('div').find("span").html("");
        },
        errorPlacement: function (error, element) {
            $(element).closest('div').find("span").html(error.html()).css("display", "block");
        },
        messages: {
            "email-address": {
                isRequired: window.Server.App.LocalizationContent.EmailAddressValidator
            },
            "first-name": {
                isRequired: window.Server.App.LocalizationContent.FirstNameValidator
            },
            "user-password": {
                isRequired: window.Server.App.LocalizationContent.NewPasswordValidator
            }
        }
    });

    $("#dialog-container").keyup(function (e) {
        if (e.keyCode == 13) {
            if ($("#cancel-user").is(":focus")) {
                onUserAddDialogClose();
            } else if ($("#add-user").is(":focus")) { e.preventDefault(); }
            else {
                $("input#add-user").trigger("click");
            }
        }
    });

    $("a[data-toggle='tab']").on('click', function (e) {
        if ($(this).attr("id") == "share-with") {
            $("#first-tab").addClass("active");
            $("#second-tab").removeClass("active");
            $("#users-tab").trigger("click");
        }
    });
});

function ValidateFields() {
    if (($("#user-search").val() != null || $("#group-search").val() != null) && $("#access-selection").val() != null) {
        $("#save-permission").attr("disabled", false);
    } else {
        $("#save-permission").attr("disabled", true);
    }
}

$(document).on("click", ".group-permission", function () {
    var permId = $(this).attr("data-permission-id");
    $("#groups-tab").click();
    var groupGridObj = $("#itemgrouppermissiongrid").data("ejGrid");
    groupGridObj.clearFiltering();
    groupGridObj.clearSorting();
    var i = groupGridObj._dataManager.dataSource.json.length;
    while (i--) {
        if (groupGridObj._dataManager.dataSource.json[i].PermissionId == permId)
            break;
    }
    if ($("#is-owner").val().toLowerCase() == "true") {
        var pageSize = 5;
    } else {
        var pageSize = 8;
    }
    if (i > pageSize - 1) {
        groupGridObj.gotoPage(((i - (i % pageSize)) / pageSize) + 1);
        groupGridObj.selectRows(i % pageSize);
    } else {
        groupGridObj.gotoPage(1);
        groupGridObj.selectRows(i);
    }
});

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        eDialog = parent.$("#permission-popup").data("ejDialog");
        eDialog.close();
        $("#permission-popup iframe").attr("src", "");
    }
});

$(document).on("click", ".delete-permission", function () {
    var permId = $(this).attr("data-permission-id");
    var itemId = $("#item-id-hidden").val();
    parent.messageBox("su-delete", window.Server.App.LocalizationContent.DeletePermission, window.Server.App.LocalizationContent.DeletePermissionConfirm, "error", function () {
        parent.showWaitingPopup("messageBox_wrapper");
        $.ajax({
            type: "POST",
            url: deleteuserPermissionUrl,
            data: { permissionId: permId, itemId: itemId },
            success: function (result, data) {
                if (result.toLowerCase() == "true") {
                    $("#clear-search").click();
                    refreshItemUserPermissionGrid();
                    parent.hideWaitingPopup("messageBox_wrapper");
                    parent.onCloseMessageBox();
                }
            }
        });
    }, undefined, undefined, undefined, undefined, "delete-permission");
});

$(document).on("click", ".delete-group-permission", function () {
    var permId = $(this).attr("data-permission-id");
    var itemId = $("#item-id-hidden").val();
    parent.messageBox("su-delete", window.Server.App.LocalizationContent.DeletePermission, window.Server.App.LocalizationContent.DeletePermissionConfirm, "error", function () {
        parent.showWaitingPopup("messageBox_wrapper");
        $.ajax({
            type: "POST",
            url: deleteGroupPermissionUrl,
            data: { permissionId: permId, itemId: itemId },
            success: function (result, data) {
                if (result.toLowerCase() == "true") {
                    $("#clear-group-search").click();
                    refreshItemGroupPermissionGrid();
                    refreshItemUserPermissionGrid();
                    parent.hideWaitingPopup("messageBox_wrapper");
                    parent.onCloseMessageBox();
                }
            }
        });
    }, undefined, undefined, undefined, undefined, "delete-permission");
});

function refreshItemUserPermissionGrid() {
    window.parent.$('#permission-popup_wrapper').ejWaitingPopup("show");
    var scheduleGridObj = $("#itempermissiongrid").data("ejGrid");
    var currentPage = scheduleGridObj.model.pageSettings.currentPage;
    var sortingInfo = scheduleGridObj.model.sortSettings.sortedColumns;
    var itemId = $("#item-id-hidden").val();
    $.ajax({
        type: "POST",
        url: getItemUserPermissionUrl,
        data: { itemId: itemId },
        success: function (result) {
            $("#itempermissiongrid").ejGrid("option", "model.dataSource", result);
            var currentGridObj = $("#itempermissiongrid").data("ejGrid");
            currentGridObj.gotoPage(currentPage);
            if (sortingInfo != null) {
                if (sortingInfo[0] != null) {
                    currentGridObj.sortColumn(sortingInfo[0].field, sortingInfo[0].direction);
                }
            }
        }
    });
}

function refreshItemGroupPermissionGrid() {
    window.parent.$('#permission-popup_wrapper').ejWaitingPopup("show");
    var scheduleGridObj = $("#itemgrouppermissiongrid").data("ejGrid");
    var currentPage = scheduleGridObj.model.pageSettings.currentPage;
    var sortingInfo = scheduleGridObj.model.sortSettings.sortedColumns;
    var itemId = $("#item-id-hidden").val();
    $.ajax({
        type: "POST",
        url: getItemGroupPermissionUrl,
        data: { itemId: itemId },
        success: function (result) {
            $("#itemgrouppermissiongrid").ejGrid("option", "model.dataSource", result);
            var currentGridObj = $("#itemgrouppermissiongrid").data("ejGrid");
            currentGridObj.gotoPage(currentPage);
            if (sortingInfo != null) {
                if (sortingInfo[0] != null) {
                    currentGridObj.sortColumn(sortingInfo[0].field, sortingInfo[0].direction);
                }
            }
        }
    });
}

function bindAllUsersandGroups() {
    window.parent.$('#permission-popup_wrapper').ejWaitingPopup("show");
    $("#access-selection").append(window.accessList);
    $("#user-search").append(window.userList);
    $("#group-search").append(window.groupList);
    $('#user-search').selectpicker("refresh");
    $('#group-search').selectpicker("refresh");
    window.parent.$('#permission-popup_wrapper').ejWaitingPopup("hide");
}

$(document).on("click", "#save-permission", function () {
    window.parent.$('#permission-popup_wrapper').ejWaitingPopup("show");
    var userlist = $("#user-search").val();
    var grouplist = $("#group-search").val();
    var accessMode = $("#access-selection").val();
    var itemId = $("#item-id-hidden").val();
    var itemType = $("#item-type-id-hidden").val();
    $.ajax({
        type: "POST",
        url: addnewpermissionUrl,
        data: { permissionList: JSON.stringify({ mode: accessMode, itemType: itemType, UserList: userlist, GroupList: grouplist }), itemId: itemId },
        success: function (result, data) {
            if (result.toLowerCase() == "true") {
                $('#user-search-container').find(".dropdown-toggle").click();
                $('#user-search').data("selectpicker").deselectAll();
                $('#group-search-container').find(".dropdown-toggle").click();
                $('#group-search').data("selectpicker").deselectAll();
                $('#group-search-container').find(".dropdown-toggle").click();
                ValidateFields();
                window.parent.$('#permission-popup_wrapper').ejWaitingPopup("hide");
                parent.messageBox("su-manage-permission", window.Server.App.LocalizationContent.Permission, window.Server.App.LocalizationContent.AddPermissionSuccess, "success", function () {
                    parent.onCloseMessageBox();
                    refreshItemGroupPermissionGrid();
                    refreshItemUserPermissionGrid();
                    if (parent.$("#on-board-share-dashboard").length > 0 && !parent.$("#on-board-share-dashboard").hasClass("journey-done")) {
                        parent.$("#on-board-share-dashboard").addClass("journey-done").removeAttr("id");
                        var currentPercentage = parseInt(parent.$(".progress-bar-success").attr("data-progress-percentage")) + parseInt(parent.$(".progress-bar-success").attr("data-increment"));
                        parent.$(".progress-bar-success").css("width", currentPercentage + "%").attr("data-progress-percentage", currentPercentage);;
                        parent.$(".progress-bar-percentage").text(currentPercentage + "%");
                    }
                }, undefined, undefined, undefined, undefined, "add-permission");
            } else {
                window.parent.$('#permission-popup_wrapper').ejWaitingPopup("hide");
                parent.messageBox("su-manage-permission", window.Server.App.LocalizationContent.Permission, window.Server.App.LocalizationContent.AddPermissionError, "success", function () {
                    parent.onCloseMessageBox();
                }, undefined, undefined, undefined, undefined, "add-permission");
            }
        }
    });
});

$(document).on("click", "#item-link-copy", function (e) {
    $("#item-link").select();
    if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
        $("#item-link-copy").removeClass("su su-copy");
        $("#item-link-copy").attr("data-original-title", "");
    }
    else {
        document.execCommand('copy');
        $("#item-link-copy").attr("data-original-title", window.Server.App.LocalizationContent.Copysuccess);
        $("#item-link-copy").tooltip("hide").attr("data-original-title", window.Server.App.LocalizationContent.Copysuccess).tooltip("fixTitle").tooltip("show");
        setTimeout(function () { $("#item-link-copy").attr("data-original-title", window.Server.App.LocalizationContent.LinkCopy); $("#item-link-copy").tooltip(); }, 3000);
    }
});

$(document).on("keyup", ".bs-searchbox", function (e) {
    if (isAdmin) {
        $("#user-search-container > .btn-group > .dropdown-menu > .inner .no-results-create-user").remove();
        $("#user-search-container > .btn-group > .dropdown-menu > .bs-actionsbox").css("display", "none");
        $("#user-search-container > .btn-group > .dropdown-menu > .inner").append("<li class='no-results-create-user active' onclick='onUserDialogOpen()' style='display: list-item;text-align: center;padding-top: 5px;margin-top: 10px;'>(New User) " + $(".input-block-level").val() + "</li>");
        if ($(".input-block-level").val() == "") {
            $("#user-search-container > .btn-group > .dropdown-menu > .inner .no-results-create-user").remove();
            $("#user-search-container > .btn-group > .dropdown-menu > .bs-actionsbox").css("display", "block");
        }
        if (e.which == 13) {
            $(".no-results-create-user").trigger("click");
        }
    }
});

function onUserAddDialogClose() {
    $("#user-add-dialog").ejDialog("close");
    $(".no-results-create-user").css("display", "none");
}

function onUserDialogOpen() {
    $(".dropdown").removeClass("open");
    $(".form input[type='text']").val('');
    $(".form input[type='password']").val('');
    var emailField = $(".input-block-level").val().match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    if (emailField) {
        $('#mailid').val($(".input-block-level").val());
    }
    else {
        var splitedValue = ($(".input-block-level").val()).trim().split(' ');
        $("#firstname").val(splitedValue[0]);
        $('#lastname').val(splitedValue[1]);
    }
    $("#user-add-dialog").ejDialog("open");
    $(".e-dialog-icon").attr("title", window.Server.App.LocalizationContent.Close);
    addUserDialogPosition = $("#user-add-dialog_wrapper").offset();
}

$.validator.addMethod("isUserPasswordValid", function (value, element) {
    var validateMethods = new Array();
    validateMethods.push(validateUserpassword.p_policy_uppercase);
    validateMethods.push(validateUserpassword.p_policy_lowercase);
    validateMethods.push(validateUserpassword.p_policy_number);
    validateMethods.push(validateUserpassword.p_policy_specialcharacter);
    validateMethods.push(validateUserpassword.p_policy_length);
    for (var n = 0; n < validateMethods.length; n++) {
        var currentMethodName = validateMethods[n];
        if (currentMethodName(value) != "" && currentMethodName(value) != undefined) {
            ruleName = currentMethodName(value);
            if ($('#password_policy_rules').find('li#' + ruleName + ' span').attr("class") != "su-tick") {
                $('#password_policy_rules').find('li#' + ruleName + ' span').addClass("su su-tick").removeClass("su su-close");
                $('#password_policy_rules').find('li#' + ruleName).addClass("clear-error");
                ruleName = ""
            }
        }
        else {
            ruleName = name;
            $(element).closest('div').addClass("has-error");
            if ($('#password_policy_rules').find('li#' + ruleName + ' span').attr("class") == "su-tick") {
                $('#password_policy_rules').find('li#' + ruleName + ' span').addClass("su su-close").removeClass("su-tick");
                $('#password_policy_rules').find('li#' + ruleName).removeClass("clear-error");
                ruleName = "";
            }
        }
    }
    if ($('#password_policy_rules li>span.su-tick').length == $('#password_policy_rules').find('li>span').length)
        return true;
}, "");

$(document).on("keyup", "#user-password", function () {
    createPasswordPolicyRules();
    $("#user-password").valid();
});

function createPasswordPolicyRules() {    
    if ($("#user-password").val() != '' && $("#user-password").next("ul").length == 0) {
        $("#user-password").after("<ul id='password_policy_rules' style='padding-bottom: 0px!important'></ul>");
        $("#password_policy_rules").append("<li id='p_policy_heading'><p>" + window.Server.App.LocalizationContent.PasswordRule1 + "</p></li>");
        $("#password_policy_rules").append("<li id='p_policy_length'><span class='su su-close'></span>" + window.Server.App.LocalizationContent.PasswordRule2 + "</li>");
        $("#password_policy_rules").append("<li id='p_policy_uppercase'><span class='su su-close'></span>" + window.Server.App.LocalizationContent.PasswordRule3 + "</li>");
        $("#password_policy_rules").append("<li id='p_policy_lowercase'><span class='su su-close'></span>" + window.Server.App.LocalizationContent.PasswordRule4 + "</li>");
        $("#password_policy_rules").append("<li id='p_policy_number'><span class='su su-close'></span>" + window.Server.App.LocalizationContent.PasswordRule5 + "</li>");
        $("#password_policy_rules").append("<li id='p_policy_specialcharacter'><span class='su su-close'></span>" + window.Server.App.LocalizationContent.PasswordRule6 + "</li>");
        $("#confirm-password-section").css("margin-top", "-53px")
        $(".button-section").css("margin-top", "-20px");
        $(".button-section").addClass("top-margin");
        $("#user-add-dialog_wrapper").css("top", (addUserDialogPosition.top)/2 + "px");

    }
    if ($("#user-password").val() == '' && $("#user-password").next("ul").length != 0) {
        $("#user-password").next("ul").remove();
        $("#confirm-password-section").css("margin-top", "25px")
        $(".button-section").css("margin-top", "20px");
        $("#user-add-dialog_wrapper").css("top", "2px");
        $("#user-add-dialog_wrapper").css("top", addUserDialogPosition.top + "px");
    }
}

$(document).on("click", ".no-results-create-user", function () {
    $("#add-user").removeAttr("disabled");
    $("#add-user-in-group").removeClass("show").addClass("hide");
    $(".validation").closest("div").removeClass("has-error");
    $(".useradd-validation-messages").css("display", "none");
});

$(document).on('click', 'input#add-user', function () {
    firstName = $("#firstname").val().trim();
    emailid = $('#mailid').val().trim();
    if ($("#user-password").val() !== undefined)
        password = $("#user-password").val().trim();
    var isValid = $("#dialog-container").valid();
    if (isValid) {
        $(".useradd-validation-messages").css("display", "none");

        showWaitingPopup("user-add-dialog_wrapper");

        lastName = $('#lastname').val().trim();
        var values = "&emailid=" + emailid + "&firstname=" + firstName + "&lastname=" + lastName + "&password=" + password;

        $.ajax({
            type: "POST", url: isPresentEmailId, data: { emailId: emailid.toLowerCase() },
            success: function (data) {
                if (data.toLowerCase() == "true") {
                    $('#mailid').closest('div').addClass("has-error");
                    $("#invalid-email").html(window.Server.App.LocalizationContent.IsMailExist).css("display", "block");
                    $(".useradd-validation-messages").css("display", "block");
                    hideWaitingPopup("user-add-dialog_wrapper");
                    return;
                }
                else {
                    $.ajax({
                        type: "POST", url: postactionUrl, data: values,
                        success: function (data, result) {
                            if ($.type(data) == "object") {
                                if (data.Data.result == "success") {
                                    hideWaitingPopup("user-add-dialog_wrapper");
                                    $("#add-user").attr("disabled", "disabled");
                                    $("#create-user").removeClass("hide").addClass("show");
                                    $(".form input[type='text']").val('');
                                    $(".form input[type='password']").val('');
                                    onUserAddDialogClose();
                                    if (data.AzureADUserCount > 0) {
                                        if ($("#azure-ad-indication").length) {
                                            $("#azure-ad-indication").html('<span class="su su-azure-ad"> </span> - ' + window.Server.App.LocalizationContent.AzureADUser);
                                        }
                                        else {
                                            $("#user-list-container").append('<div id="azure-ad-indication" class="ad-azure-indication col-lg-12"><span class="su su-azure-ad"> </span> - ' + window.Server.App.LocalizationContent.AzureADUser + '</div>');
                                        }
                                    }
                                    if (data.DatabaseUserCount > 0) {
                                        if ($("#database-indication").length) {
                                            $("#database-indication").html('<span class="su su-datasource"> </span> - ' + window.Server.App.LocalizationContent.DatabaseUser);
                                        }
                                        else {
                                            $("#user-list-container").append('<div id="database-indication" class="ad-azure-indication col-lg-12"><span class="su su-datasource"> </span> - ' + window.Server.App.LocalizationContent.DatabaseUser + '</div>');
                                        }
                                    }
                                    $.ajax({
                                        type: "POST",
                                        url: checkMailSettingUrl,
                                        success: function (result) {
                                            var messageText = "";
                                            if (result.activation == 0) {
                                                messageText = window.Server.App.LocalizationContent.UserAddedActivatedSuccess;
                                            }
                                            else if (result.result == "success" && result.activation == 1) {
                                                messageText = window.Server.App.LocalizationContent.UserAddedSuccess;
                                            }
                                            else if (result.result == "failure" && result.isAdmin == true && result.activation == 1) {
                                                messageText = window.Server.App.LocalizationContent.UserAddedNotActivated;
                                            }
                                            SuccessAlert(window.Server.App.LocalizationContent.AddUser, messageText, 7000);
                                            $("#user-search-container > .btn-group > .dropdown-menu > .bs-actionsbox").css("display", "block");
                                            $("#user-search").append("<option value='" + emailid + "'>" + firstName + " " + lastName + "</option>");
                                            $("#user-search").selectpicker("refresh");
                                            $("#user-search").selectpicker("val", emailid);

                                        }
                                    });
                                }
                                else if (data.IsUserLimitExceed) {
                                    hideWaitingPopup("user-add-dialog_wrapper");
                                    $("#limit-user").ejDialog("open");
                                    $("#zero-user-acc .licensed-user-count").html(data.LicenseUserCount);
                                    $("#zero-user-acc").show();
                                }
                                else {
                                    messageBox("su-user-add", window.Server.App.LocalizationContent.AddUser, "[[[Internal Server Error. please try again.]]]", "error", function () {
                                        onCloseMessageBox();
                                    });
                                }
                            }
                            else {
                            }
                        }
                    });
                }
            }
        });

    }
    else {
        $(".useradd-validation-messages").css("display", "block");
    }
});