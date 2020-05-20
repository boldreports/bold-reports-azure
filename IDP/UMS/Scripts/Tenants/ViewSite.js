﻿﻿var isUserTabLoaded = false;
var isGroupTabLoaded = false;
var isFirstRequest = false;
var isAdminTabLoaded = false;

var selectedUsers = [];
var selectedRecords = [];
var selectedUsersArrayPushPopAllowed = true;
var gridUserData = [];
var users = [];
var singleUserRemove = false;
var singleUserSelectedId;
var SelectedUserIdList = [];
var isSafari = navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1;
var needPush = true;
var isFreshLoad = true;

function fnCreate() {
    $("#checkbox-header").change(headCheckboxOnChange);
}

$(document).ready(function () {
    addPlacehoder("#add-users-dialog");
    addPlacehoder("#search-area");
    addPlacehoder("#search-app-admins");
    addPlacehoder("#add-admin-search");
    addPlacehoder("#add-user-search-area");
    $("[data-toggle='tooltip']").tooltip();

    $("#add-users-dialog").ejDialog({
        width: "900px",
        height: "539px",
        showOnInit: false,
        allowDraggable: true,
        enableResize: false,
        showHeader: false,
        enableModal: true,
        close: "onAddUsersDialogClose",
        open: "onAddUsersDialogOpen",
        closeOnEscape: true
    });
    $("#add-users-button").on("click", function () {
        var gridObj = $('#users_grid').data("ejGrid");
        gridObj.clearSelection();
        $("#remove-users-button").addClass("hide").removeClass("show");
        $("#add-users-dialog").ejDialog("open");
    });
    $("#user-remove-confirmation").ejDialog({
        width: "378px",
        showOnInit: false,
        allowDraggable: false,
        enableResize: false,
        height: "auto",
        showHeader: false,
        enableModal: true,
        close: "onUserRemoveDialogClose",
        closeOnEscape: true,
        open: "onUserRemoveDialogOpen"
    });
    $("#regenerate-client-secret-dialog").ejDialog({
        width: "400px",
        showOnInit: false,
        allowDraggable: false,
        enableResize: false,
        height: "auto",
        title: "RegenerateClientSecret",
        showHeader: false,
        enableModal: true,
        closeOnEscape: true
    });
    $("#add-admins-dialog").ejDialog({
        width: "900px",
        height: "533px",
        showOnInit: false,
        allowDraggable: true,
        enableResize: false,
        title: window.TM.App.LocalizationContent.AddAdministrators,
        showHeader: false,
        enableModal: true,
        close: "onAddAdminsDialogClose",
        open: "onAddAdminsDialogOpen",
        closeOnEscape: true
    });

    $("#add-admins-button").on("click", function () {
        var gridObj = $('#admins_grid').data("ejGrid");
        gridObj.clearSelection();
        $("#remove-admins-button").addClass("hide").removeClass("show");
        $("#add-admins-dialog").ejDialog("open");
    });

    $("#admin-remove-confirmation").ejDialog({
        width: "378px",
        showOnInit: false,
        allowDraggable: false,
        enableResize: false,
        height: "auto",
        title: window.TM.App.LocalizationContent.RemoveAdministrator,
        showHeader: false,
        enableModal: true,
        close: "onAdminRemoveDialogClose",
        closeOnEscape: true,
        open: "onAdminRemoveDialogOpen"
    });

    $("#add-tenant-popup").ejDialog({
        width: $(window).width(),
        height: $(window).height(),
        showOnInit: false,
        allowDraggable: false,
        enableResize: false,
        enableModal: true,
        showHeader: false       
    });

    if ($("#application-tab").is(":visible")) {
        var query = (window.location.search).toString();
        if (query === "?tab=general") {
            loadGeneralTab();
            $('a[href="#application-tab"]').tab("show");
        }
        else if (query === "?tab=users") {
            loadUsersTab();
            $('a[href="#users-tab"]').tab("show");
        }
        else if (query === "?tab=groups") {
            loadGroupsTab();
            $('a[href="#groups-tab"]').tab("show");
        }
        else if (query === "?tab=admins") {
            loadAdminsTab();
            $('a[href="#admins-tab"]').tab("show");
        }
        else {
            isFreshLoad = false;
            history.replaceState(null, null, window.location.href);
        }
    }

    window.addEventListener("popstate", function (e) {
        needPush = false;
        var tab = e.state;
        if (tab === "general") {
            loadGeneralTab();
            $('a[href="#application-tab"]').tab('show');
        }
        else if (tab === "users") {
            loadUsersTab();
            $('a[href="#users-tab"]').tab('show');
        }
        else if (tab === "groups") {
            loadGroupsTab();
            $('a[href="#groups-tab"]').tab('show');
        }
        else if (tab === "admins") {
            loadAdminsTab();
            $('a[href="#admins-tab"]').tab('show');
        }
        else {
            loadGeneralTab();
            $('a[href="#application-tab"]').tab('show');
        }
    });
});

$(document).on("click", "#application", function () {
    loadGeneralTab();
});
$(document).on("click", "#users", function () {
    loadUsersTab();
});
$(document).on("click", "#groups", function () {
    loadGroupsTab();
});

$(document).on("click", "#admins", function () {
    loadAdminsTab();
});

$(document).on("shown.bs.tab", 'a[data-toggle="tab"]', function (e) {
    var target = $(e.target).attr("href"); // activated tab
    var data;

    if (target === "#application-tab") {
        data = "general";
    }

    else if (target === "#users-tab") {
        data = "users";
        if (!isUserTabLoaded) {
            getAppUsers();
            isUserTabLoaded = true;
        }
    }

    else if (target === "#groups-tab") {
        data = "groups";
        if (!isGroupTabLoaded) {
            getAppGroups();
            isGroupTabLoaded = true;
        }
    }

    else if (target === "#admins-tab") {
        data = "admins";
        if (!isAdminTabLoaded) {
            getAppAdmins();
            isAdminTabLoaded = true;
        }
    }
    pushUrl(data);
    needPush = true;
});

function pushUrl(data) {
    if (needPush) {
        if (isFreshLoad) {
            history.replaceState(data, null, window.location.pathname + "?tab=" + data);
            isFreshLoad = false;
        }
        else {
            history.pushState(data, null, window.location.pathname + "?tab=" + data);
        }
    }
}

function loadGeneralTab() {
    $("#application").parent().addClass("active");
    $("#users").parent().removeClass("active");
    $("#groups").parent().removeClass("active");
    $("#admins").parent().removeClass("active");
    $("#application-tab").removeClass("hidden").addClass("show");
    $("#user-tab").removeClass("show").addClass("hidden");
    $("#groups-tab").removeClass("show").addClass("hidden");
    $("#admins-tab").removeClass("show").addClass("hidden");
}

function loadUsersTab() {
    $("#application").parent().removeClass("active");
    $("#users").parent().addClass("active");
    $("#groups").parent().removeClass("active");
    $("#admins").parent().removeClass("active");
    $("#application-tab").removeClass("show").addClass("hidden");
    $("#user-tab").removeClass("hidden").addClass("show");
    $("#groups-tab").removeClass("show").addClass("hidden");
    $("#admins-tab").removeClass("show").addClass("hidden");
}

function loadGroupsTab() {
    $("#application").parent().removeClass("active");
    $("#users").parent().removeClass("active");
    $("#groups").parent().addClass("active");
    $("#admins").parent().removeClass("active");
    $("#application-tab").removeClass("show").addClass("hidden");
    $("#user-tab").removeClass("show").addClass("hidden");
    $("#groups-tab").removeClass("hidden").addClass("show");
    $("#admins-tab").removeClass("show").addClass("hidden");
}

function loadAdminsTab() {
    $("#application").parent().removeClass("active");
    $("#users").parent().removeClass("active");
    $("#groups").parent().removeClass("active");
    $("#admins").parent().addClass("active");
    $("#application-tab").removeClass("show").addClass("hidden");
    $("#user-tab").removeClass("show").addClass("hidden");
    $("#groups-tab").removeClass("show").addClass("hidden");
    $("#admins-tab").removeClass("hidden").addClass("show");
}

function fnOnApplicationGridLoad(args) {
    args.model.dataSource.adaptor = new ej.UrlAdaptor();
    args.model.enableTouch = false;
}

function fnApplicationRowSelected() {
    var applicationgrid = $("#tenants_grid").data("ejGrid");
    var selectedApplications = applicationgrid.getSelectedRecords();
}

function fnApplicationRecordClick(args) {
    var checkbox = args.row.find(".application-grid-chkbx");
    checkbox.prop("checked", !checkbox.prop("checked"));
}

function fnOnApplicationGridActionBegin(args) {
    isFirstRequest = true;
    var searchValue = $("#search-tenants").val();
    this.model.query._params.push({ key: "searchKey", value: searchValue });
    var filerSettings = [], i;

    if (args.model.filterSettings.filteredColumns.length > 0) {
        for (i = 0; i < args.model.filterSettings.filteredColumns.length; i++) {
            var column = args.model.filterSettings.filteredColumns[i];
            filerSettings.push({ 'PropertyName': column.field, 'FilterType': column.operator, 'FilterKey': column.value });
        }

        this.model.query._params.push({ key: "filterCollection", value: filerSettings });
    }
}

function fnOnUserGridActionBegin(args) {
    isFirstRequest = true;
    var searchValue = $("#search-app-users").val().trim();
    this.model.query._params.push({ key: "searchKey", value: searchValue });
    var filerSettings = [], i;

    if (args.model.filterSettings.filteredColumns.length > 0) {
        for (i = 0; i < args.model.filterSettings.filteredColumns.length; i++) {
            var column = args.model.filterSettings.filteredColumns[i];
            filerSettings.push({ 'PropertyName': column.field, 'FilterType': column.operator, 'FilterKey': column.value });
        }

        this.model.query._params.push({ key: "filterCollection", value: filerSettings });
    }
}

function fnOnAddUserGridActionBegin(args) {
    isFirstRequest = true;
    var searchValue = $("#add-user-search").val();
    this.model.query._params.push({ key: "searchKey", value: searchValue });
    var filerSettings = [], i;

    if (args.model.filterSettings.filteredColumns.length > 0) {
        for (i = 0; i < args.model.filterSettings.filteredColumns.length; i++) {
            var column = args.model.filterSettings.filteredColumns[i];
            filerSettings.push({ 'PropertyName': column.field, 'FilterType': column.operator, 'FilterKey': column.value });
        }

        this.model.query._params.push({ key: "filterCollection", value: filerSettings });
    }
}

function fnOnApplicationGridActionComplete(args) {
    $('[data-toggle="tooltip"]').tooltip();
    if (args.model.pageSettings.totalRecordsCount != null) {
        $("#application-count").text(args.model.pageSettings.totalRecordsCount);
    }
    else {
        $("#application-count").text(0);
    }

    if (args.model.currentViewData.length == 0) {
        rowBound();
    }

    if ($("#application-list-container").is(":visible")) {
        query = (window.location.search).toString();
        if (query === "?action=create-new-site") {
            $("#add-tenant").trigger("click");
        }
    }
}

function fnOnUserGridActionComplete(args) {
    $('[data-toggle="tooltip"]').tooltip();
    var usergrid = $("#users_grid").data("ejGrid");

    if (args.requestType == "paging" || args.requestType == "sorting") {
        if (typeof usergrid.model.currentViewData != 'undefined') {
            for (var i = 0; i < usergrid.model.currentViewData.length; i++) {
                var record = usergrid.model.currentViewData[i];
                var index = jQuery.inArray(JSON.stringify(record.UserId), $.map(selectedUsers, JSON.stringify));
                if (index != -1) {
                    selectedUsersArrayPushPopAllowed = false; //during pagination, pushpop operation should not be done for the users selected already 
                    usergrid.selectRows(i);
                }
            }
        }
    }
    if (args.requestType == "refresh" || args.requestType == "filtering") {
        selectedUsers = [];
    }

    if (usergrid.getSelectedRecords().length != 0) {
        $("#remove-users-button").removeClass("hide").addClass("show");
    }
    else {
        $("#remove-users-button").removeClass("show").addClass("hide");
    }
}

function rowBound() {
    if (isFirstRequest) {
        isFirstRequest = false;
    }
}

$(document).on("click", ".search-application", function () {
    var gridObj = $("#tenants_grid").data("ejGrid");
    gridObj.model.pageSettings.currentPage = 1;
    gridObj.refreshContent();
});

function getAppUsers() {
    var requestUrl = $("meta[name='ump-app-users-link']").attr("content") + $("#application-id").val();
    $("#users_grid").ejGrid({
        dataSource: ej.DataManager({ url: requestUrl, adaptor: "UrlAdaptor" }),
        gridLines: ej.Grid.GridLines.None,
        allowPaging: true,
        allowSorting: true,
        enableAltRow: false,
        allowSearching: true,
        allowSelection: true,
        allowFiltering: true,
        pageSettings: { pageSize: 20 },
        filterSettings: { filterType: "menu" },
        selectionType: ej.Grid.SelectionType.Multiple,
        allowKeyboardNavigation: false,
        selectionSettings: { selectionMode: ["row"] },
        rowSelecting: function () {
            this.multiSelectCtrlRequest = true;
        },
        enableRowHover: true,
        rowSelected: "onUserRecordSelect",
        actionBegin: "fnOnUserGridActionBegin",
        actionComplete: "fnOnUserGridActionComplete",
        rowDataBound: function () {
            var height = $(".e-gridcontent").height();
            if (height != null) {
                rowBound();
            }
        },
        dataBound: function () {
            $('[data-toggle="tooltip"]').tooltip();
        },
        columns: [
             {
                 template: true,
                 templateID: "#user-profile-template",
                 width: 115,
                 headerTemplateID: "#username-header",
                 field: "DisplayName",
                 type: "string"
             },
             {
                 field: "Email",
                 templateID: "#user-email-template",
                 headerTemplateID: "#email-header",
                 type: "string",
                 width: 155
             },
            {
                field: "IsActive",
                templateID: "#user-status-template",
                headerTemplateID: "#status-header",
                type: "string",
                width: 50
            },
             {
                 template: true,
                 allowSorting: false,
                 templateID: "#commandstemplate",
                 headerTemplateID: "#actionsheader",
                 width: (window.innerWidth > 1024) ? 40 : 80
             }
        ]
    });
}

function getUsersWithoutAccess() {
    var requestUrl = $("meta[name='add-ump-app-users-link']").attr("content") + $("#application-id").val();
    $("#add_users_grid")
        .ejGrid({
            dataSource: ej.DataManager({ url: requestUrl, adaptor: "UrlAdaptor" }),
            gridLines: ej.Grid.GridLines.None,
            allowPaging: true,
            allowSorting: true,
            enableAltRow: false,
            allowSearching: true,
            allowSelection: true,
            allowFiltering: true,
            pageSettings: { pageSize: 20 },
            filterSettings: { filterType: "menu" },
            selectionType: ej.Grid.SelectionType.Multiple,
            selectionSettings: { selectionMode: ["row"] },
            enableRowHover: true,
            create: "fnCreate",
            recordClick: "recordClick",
            templateRefresh: "refreshTemplate",
            actionBegin: "fnOnAddUserGridActionBegin",
            actionComplete: "fnOnAddUserGridActionComplete",
            rowDataBound: function () {
                var height = $(".e-gridcontent").height();
                if (height != null) {
                    rowBound();
                }
            },
            dataBound: function () {
                $('[data-toggle="tooltip"]').tooltip();
            },
            columns: [
                {
                    headerTemplateID: "#checkbox-header-template",
                    template: true,
                    templateID: "#checkbox-row-template",
                    textAlign: ej.TextAlign.Center,
                    width: 15,
                    allowFiltering: false
                },
                {
                    template: true,
                    templateID: "#user-name-template",
                    width: 115,
                    headerTemplateID: "#user-name-header",
                    field: "DisplayName",
                    type: "string"
                },
                {
                    template: true,
                    field: "Email",
                    templateID: "#email-template",
                    headerTemplateID: "#user-email-header",
                    type: "string",
                    width: 155
                }
            ]
        });
}

function enableAccessButton() {
    $("#provide-access-button").attr("disabled", selectedUsers.length == 0);
}

function fnOnAddUserGridActionComplete(args) {
    var gridObj = $("#add_users_grid").data("ejGrid");
    var checkboxHeader = $("#checkbox-header");
    checkboxHeader.prop("disabled", true).change(headCheckboxOnChange);
    gridObj.multiSelectCtrlRequest = true;
    gridObj.clearSelection();
    if (args.requestType === "paging" || args.requestType === "sorting") {
        if (typeof gridObj.model.currentViewData != 'undefined') {
            for (var i = 0; i < gridObj.model.currentViewData.length; i++) {
                var record = gridObj.model.currentViewData[i];
                var rowUniId = record.UserId;
                var index = jQuery.inArray(JSON.stringify(record.UserId), $.map(selectedUsers, JSON.stringify));
                if (index != -1) {
                    var rowIndex = $($("#add_users_grid .checkbox-row[data-checked-id='" + rowUniId + "']").closest("td").parent()).index();
                    $("#add_users_grid .checkbox-row#row-check" + rowUniId).prop("checked", true);
                    gridObj.selectRows(rowIndex);
                }
            }
        }
        checkboxHeader.attr("disabled", gridObj.model.currentViewData.length == 0);
    }
    if (args.requestType == "refresh" || args.requestType == "filtering") {
        selectedUsers = [];
        checkboxHeader.attr("disabled", gridObj.model.currentViewData.length == 0);
    }

    if (args.requestType === "paging" || args.requestType === "sorting" || args.requestType === "refresh" || args.requestType === "filtering") {
        if ((gridObj.model.selectedRecords.length) == gridObj.model.currentViewData.length) {
            checkboxHeader.prop("checked", true);
        } else {
            checkboxHeader.prop("checked", false);
        }
    }

    enableAccessButton();
    $('[data-toggle="tooltip"]').tooltip();
}

function recordClick(args) {
    var gridObj = $("#add_users_grid").data("ejGrid");
    var checkboxHeader = $("#checkbox-header");
    var isChecked = args.row.find(".checkbox-row").is(":checked");
    if (isChecked) {
        gridObj.multiSelectCtrlRequest = true;

        if (jQuery.inArray(JSON.stringify(args.data.UserId), $.map(selectedUsers, JSON.stringify)) == -1) {
            selectedUsers.push(args.data.UserId);
        } else {
            gridObj.selectRows(args.row.index());
        }
    }
    else {
        gridObj.multiSelectCtrlRequest = true;
        gridObj.selectRows(args.row.index());
        var index = jQuery.inArray(JSON.stringify(args.data.UserId), $.map(selectedUsers, JSON.stringify));
        if (index != -1) {
            selectedUsers.splice(index, 1);
            gridObj.selectRows(args.row.index());
        }
    }
    gridUserData = gridObj.model.currentViewData;
    var userRowCheckedCount = 0;
    for (i = 0; i <= gridUserData.length - 1; i++) {
        if ($($("#add_users_grid .checkbox-row")[i]).is(":checked") == true) {
            userRowCheckedCount = userRowCheckedCount + 1;
        }
    }
    if (gridObj.getRows() != null) {
        if ((gridUserData.length) === userRowCheckedCount)
            checkboxHeader.prop("checked", true);
        else
            checkboxHeader.prop("checked", false);
    }
    enableAccessButton();
}

function onAddUsersDialogClose() {
    var gridObj = $("#add_users_grid").data("ejGrid");
    gridObj.clearSelection();
    selectedUsers = [];
    $("#add-user-search").val("");
    $("#add-user-clear-search").css("display", "none");
    $(".search-icon").css("display", "block");
    $(".checkbox-header").prop("checked", false);
    $(".checkbox-row").prop("checked", false);
    gridObj.model.filterSettings.filteredColumns = [];
    gridObj.model.pageSettings.currentPage = 1;
    gridObj.refreshContent();
    $("#add-users-dialog").ejDialog("close");
}

function onAddUsersDialogOpen() {
    selectedUsers = [];
    getUsersWithoutAccess();
}

function refreshTemplate() {
    $("#checkbox-header").change(headCheckboxOnChange);
}

function headCheckboxOnChange() {
    var gridObj = $("#add_users_grid").data("ejGrid");
    gridUserData = gridObj.model.currentViewData;
    if ($("#checkbox-header").prop("checked") == true) {
        $(".checkbox-row").prop("checked", true);
        gridObj.multiSelectCtrlRequest = true;
        gridObj.selectRows(0, $(".checkbox-row").length);
        for (var i = 0; i < gridUserData.length; i++) {
            var index = jQuery.inArray(JSON.stringify(gridUserData[i].UserId), $.map(selectedUsers, JSON.stringify));
            if (index == -1) {
                selectedUsers.push(gridUserData[i].UserId);
            }
        }
        if (isSafari) {
            $(".checkbox-header-label").addClass("check");
        }
    }
    else {
        $(".checkbox-row").prop("checked", false);
        gridObj.clearSelection();
        for (var i = 0; i < gridUserData.length; i++) {
            var index = jQuery.inArray(JSON.stringify(gridUserData[i].UserId), $.map(selectedUsers, JSON.stringify));
            if (index != -1) {
                selectedUsers.splice(index, 1);
            }
        }
        if (isSafari) {
            $(".checkbox-header-label").removeClass("check");
        }
    }
    enableAccessButton();
}

function provideAccesstoUsers() {
    var requestUrl = $("meta[name='provide-app-access-link']").attr("content") + $("#application-id").val();
    if (selectedUsers.length > 0) {
        showWaitingPopup("add_users_grid");
        $.ajax({
            type: "POST",
            data: { selectedUsers: selectedUsers },
            url: requestUrl,
            success: function (result) {
                hideWaitingPopup("add_users_grid");
                $("#provide-access-button").attr("disabled", "disabled");
                var userGridObj = $("#users_grid").data("ejGrid");
                userGridObj.refreshContent();
                onAddUsersDialogClose();
                if (result.status) {
                    var content = window.TM.App.LocalizationContent.GrantedAccessTo + " " + result.count + " " + window.TM.App.LocalizationContent.UsersSuccessfully;
                    SuccessAlert(window.TM.App.LocalizationContent.GrantSiteAccess, content, 7000);
                } else {
                    WarningAlert(window.TM.App.LocalizationContent.GrantSiteAccess, window.TM.App.LocalizationContent.GrantSiteAccessError, 7000);
                }
            }
        });
    }
}

////Remove user Access
$(document).on("click", ".delete-permission", function () {
    singleUserSelectedId = $(this).attr("data-user-id");
    $("#user-remove-confirmation").ejDialog("open");
    singleUserRemove = true;
});

function onUserRemoveDialogClose() {
    $("#user-remove-confirmation").ejDialog("close");
}

$(document).on("click", ".remove-confirm-button", function () {
    if (singleUserRemove) {
        users = singleUserSelectedId;
    } else {
        users = selectedUsers;
    }
    removeUserAccess(users);
});

function removeUserAccess(users) {
    var requestUrl = $("meta[name='remove-app-access-link']").attr("content") + $("#application-id").val();
    if (users.length > 0) {
        showWaitingPopup("user-remove-confirmation");
        $.ajax({
            type: "POST",
            data: { selectedUsers: users },
            url: requestUrl,
            success: function (result) {
                hideWaitingPopup("user-remove-confirmation");
                var userGridObj = $("#users_grid").data("ejGrid");
                userGridObj.clearSelection();
                userGridObj.model.pageSettings.currentPage = getCurrentPageNumber(userGridObj.model.pageSettings.pageSize, selectedUsers.length, userGridObj.model.pageSettings.totalRecordsCount, userGridObj.model.pageSettings.currentPage);
                selectedUsers = [];
                userGridObj.refreshContent();
                $("#remove-users-button").removeClass("show").addClass("hide");
                $("#user-remove-confirmation").ejDialog("close");
                if (result.status) {
                    var content = window.TM.App.LocalizationContent.RevokedAccessFor + " " + result.count + " " + window.TM.App.LocalizationContent.UsersSuccessfully;
                    SuccessAlert(window.TM.App.LocalizationContent.RevokeSiteAccess, content, 7000);
                } else {
                    WarningAlert(window.TM.App.LocalizationContent.RevokeSiteAccess, window.TM.App.LocalizationContent.RevokeSiteAccessError, 7000);
                }
                singleUserRemove = false;
                users = [];
            }
        });
    }
}

$(document).on("click", "#remove-users-button", function () {
    $("#user-remove-confirmation").ejDialog("open");
});

function onUserRecordSelect(args) {
    var usergrid = $("#users_grid").data("ejGrid");
    selectedRecords = usergrid.getSelectedRecords();

    if (selectedUsersArrayPushPopAllowed) {
        var index = jQuery.inArray(JSON.stringify(args.data.UserId), $.map(selectedUsers, JSON.stringify));
        if (index == -1) {
            selectedUsers.push(args.data.UserId);
        } else {
            selectedUsers.splice(index, 1);
        }
    }
    selectedUsersArrayPushPopAllowed = true;
    if (selectedUsers.length >= 1) {
        $("#remove-users-button").removeClass("hide").addClass("show");
    }
    else {
        $("#remove-users-button").addClass("hide").removeClass("show");
    }
}

$(document).on("click", "#application-clientid", function () {
    $("#application-clientid").select();
});

$(document).on("click", "#application-accesstoken", function () {
    $("#application-accesstoken").select();
});

$(document).on("click", "#add-tenant", function () {  
    var tenantId = "";
    $("#add-tenant-iframe").attr("src", addTenantUrl + "?actionType=create" + "&tenantId=" + tenantId);
    $("#add-tenant-popup").ejDialog("open");
    showWaitingPopup("add-tenant-popup");
});

$(document).on("click", ".tenant-action", function (e) {
    var action = $(this).attr("data-action").trim();
    var tenantId = $(this).attr("data-tenant-id").trim();
    var tenantName = $(this).attr("data-tenant-name").trim();
    var messageContent = "Are you sure you want " + action + " site - <span class='tenant-name'>" + tenantName + "</span> ?";
    $("#messageBox").ejWaitingPopup();
    if (action === "activate") {
        headerIcon = "tick";
        headerText = window.TM.App.LocalizationContent.Activate;
        actionUrl = activateTenantUrl;
    }
    else if (action === "suspend") {
        headerIcon = "suspend";
        headerText = window.TM.App.LocalizationContent.Suspend;
        actionUrl = suspendTenantUrl;
    }
    else if (action === "edit") {
        $("#add-tenant-iframe").attr("src", addTenantUrl + "?actionType=" + action + "&tenantId=" + tenantId);
        $("#add-tenant-popup").ejDialog("open");
        showWaitingPopup("add-tenant-popup");
    }
    else if (action === "delete") {
        headerIcon = "delete";
        headerText = window.TM.App.LocalizationContent.Delete;
        actionUrl = deleteTenantUrl;
        messageContent += "<br/><br/><div class='tenant-delete-warning'> <span>" + window.TM.App.LocalizationContent.WarningColon + "</span><div> " + window.TM.App.LocalizationContent.DeleteAllResource + "</div></div>";
    }
    if (action !== "edit") {
        messageBox("su-" + headerIcon, headerText + " " + window.TM.App.LocalizationContent.SiteLetter, messageContent, "error", function () {
            updateTenantStatus(actionUrl, tenantId, action);
        });
    }
});

function updateTenantStatus(actionUrl, tenantId, action) {
    $("#messageBox").ejWaitingPopup("show");
    var actionName = action === "suspend" ? window.TM.App.LocalizationContent.Suspend : action === "delete" ? window.TM.App.LocalizationContent.Delete : window.TM.App.LocalizationContent.Activate;
    $.ajax({
        type: "POST",
        url: actionUrl,
        data: { tenantId: tenantId },
        success: function (data) {
            if (data.Success) {
                if (action === "suspend") {
                    SuccessAlert(actionName + " " + window.TM.App.LocalizationContent.SiteLetter, window.TM.App.LocalizationContent.SiteSuspendSuccess, 7000);
                }
                else if (action === "delete") {
                    SuccessAlert(actionName + " " + window.TM.App.LocalizationContent.SiteLetter, window.TM.App.LocalizationContent.SiteDeleteSuccess, 7000);
                }
                else if (action === "activate") {
                    SuccessAlert(actionName + " " + window.TM.App.LocalizationContent.SiteLetter, window.TM.App.LocalizationContent.SiteActivatedSuccess, 7000);
                }

                var tenantGridObj = $("#tenants_grid").data("ejGrid");
                tenantGridObj.refreshContent();
            }
            else {
                WarningAlert(actionName + " " + window.TM.App.LocalizationContent.SiteLetter, window.TM.App.LocalizationContent.InternalServerErrorTryAgain, 7000);
            }
        },
        complete: function () {
            $("#messageBox").ejWaitingPopup("hide");
            onCloseMessageBox();
        }
    });
}