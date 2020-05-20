$(document).ready(function () {
    $("#permission_delete_confirmation").ejDialog({
        width: (window.innerWidth > 410) ? "400px" : (window.innerWidth - 10),
        showOnInit: false,
        allowDraggable: false,
        enableResize: false,
        height: "187px",
        showHeader: false,
        title: window.Server.App.LocalizationContent.Deleteuser,
        enableModal: true,
        close: "onPermissionDeleteDialogClose",
        closeOnEscape: true,
        open: "onPermissionDeleteDialogOpen"
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
    var permissionDeleteConformationWaitingPopupTemplateId = createLoader("permission_delete_confirmation_wrapper");
	$("#permission_delete_confirmation_wrapper").ejWaitingPopup({ template:$("#" + permissionDeleteConformationWaitingPopupTemplateId) });
    var masterContainerWaitingPopupTemplateId = createLoader("MasterContainer");
	$("#MasterContainer").ejWaitingPopup({ template:$("#" + masterContainerWaitingPopupTemplateId) });
    $(document).on("click", "#SubscribersPanel .i-selected-cancel", function (event) {
        var key = $(this).parents(".SelectedShareItems").attr("id");
        var searchType = $(this).parents(".SelectedShareItems").attr("data-searchtype");
        if (searchType == "userSearch") {
            currentElementIndex = $("#UserSearch").find("[value='" + key + "']").index();
            $("#userSearch_container .bootstrap-select li").filter("[data-original-index='" + currentElementIndex + "']").find("a").click();
        }
        else if (searchType == "groupSearch") {
            currentElementIndex = $("#GroupSearch").find("[value='" + key + "']").index();
            $("#groupSearch_container .bootstrap-select li").filter("[data-original-index='" + currentElementIndex + "']").find("a").click();
        }
    });
    $("#schedule_Submit").on('click', function() {
        var userlist = $("#UserSearch").val();
        var grouplist = $("#GroupSearch").val();
        var itemId = $("#hiddenItemId").val();
        var isPublic = $("#IsPublic").data("ejCheckBox").model.checked;
        var isPublicHiddenValue = $("#isPublicHiddenValue").val().toLowerCase();

        $("#validationMessage").css("display", "none");
        $.ajax({
            type: "POST",
            url: addItemViewPermissionUrl,
            data: { shareList: JSON.stringify({ UserList: userlist, GroupList: grouplist, itemViewId: itemId, IsPublic: isPublic }) },
            beforeSend: function () {
                $("#MasterContainer").ejWaitingPopup("show");
            },
            success: function (data) {
                $("#MasterContainer").ejWaitingPopup("hide");
                messageBox("su-share", window.Server.App.LocalizationContent.ShareView,window.Server.App.LocalizationContent.ShareViewSuccess, "success", function () {
                    $("#isPublicHiddenValue").val(isPublic);
                    refreshUserGroupList();
                    var userPermissiongrid = $('#UserGrid').data("ejGrid");
                    var groupPermissiongrid = $('#GroupGrid').data("ejGrid");
                    var selected = $(".ListItems.selected").attr("data-grid");
                    userPermissiongrid.refreshContent();
                    groupPermissiongrid.refreshContent();
                    if (selected.toLowerCase() == "usergrid") {
                        $("#GroupGrid_WaitingPopup").hide();
                    } else {
                        $("#UserGrid_WaitingPopup").hide();
                    }
                   onCloseMessageBox();
                });
            }
        });
    });

    $(".ListItems").click(function () {
        var gridId = $(this).attr("data-grid");
        $(".ListItems").removeClass("selected");
        $(".ListItems[data-grid='" + gridId + "']").addClass("selected");
        $(".itemGrid").removeClass("active");
        $("#" + gridId).parent(".itemGrid").addClass("active");
        $(".ListItems").parent("li").removeClass("active");
        $(".selected").parent("li").addClass("active");
    });
    $(".scheduleEditPopup").on('click', function () {
        var frame = parent.document.getElementById('viewShare_popup_iframe'),
        frameDoc = frame.contentDocument || frame.contentWindow.document;
        frameDoc.documentElement.innerHTML = "";
        parent.$("#viewShare_popup,.ViewShare_popup_shadow").css("display", "none");
    });
});

function fnOnUserGridActionBegin(args) {
    isFirstRequest = true;
    var searchValue = $("#userSearchKey").val();
    this.model.query._params.push({ key: "searchKey", value: searchValue });
    var filerSettings = [], i;
    var itemUserGridWaitingPopupTemplateId = createLoader("UserGrid");
    this.element.ejWaitingPopup({ template: $("#" + itemUserGridWaitingPopupTemplateId) });
    if (args.model.filterSettings.filteredColumns.length > 0) {
        for (i = 0; i < args.model.filterSettings.filteredColumns.length; i++) {
            var column = args.model.filterSettings.filteredColumns[i];
            filerSettings.push({ 'PropertyName': column.field, 'FilterType': column.operator, 'FilterKey': column.value });
        }

        this.model.query._params.push({ key: "filterCollection", value: filerSettings });
    }
}

function createLoader(element) {
    var returnId = "";
    if (typeof element === "string") {
        var selector = (element.indexOf(".") === 0) ? "." : "#";
        element = (element.indexOf(".") === 0) ? element.slice(1, element.length) : (element.indexOf("#") === 0) ? element.slice(1, element.length) : element;
        returnId = element + "-loader-icon";

        if ($("#" + returnId).length == 0 && $(selector + element).length != 0) {
            var template = $("<div class='loader-blue loader-icon' id='" + returnId + "'><svg class='circular'><circle class='path' cx='27' cy='27' r='20' fill='none' stroke-width='4' stroke-miterlimit='10'></circle></svg></div>");
            $("body").append(template);
        }
        return returnId;
    }
    else {
        element = element.selector;
        var selector = (element.indexOf(".") === 0) ? "." : "#";
        element = element.slice(1, element.length);
        returnId = element + "-loader-icon";
        if ($("#" + returnId).length == 0 && $("#" + element).length != 0) {
            var template = $("<div class='loader-blue loader-icon' id='" + returnId + "'><svg class='circular'><circle class='path' cx='27' cy='27' r='20' fill='none' stroke-width='4' stroke-miterlimit='10'></circle></svg></div>");
            $("body").append(template);
        }
    }

    return returnId;
}

function fnOnGroupGridActionBegin(args) {
    isFirstRequest = true;
    var searchValue = $("#groupSearchKey").val();
    this.model.query._params.push({ key: "searchKey", value: searchValue });
    var filerSettings = [], i;
    var itemGroupGridWaitingPopupTemplateId = createLoader("GroupGrid");
    this.element.ejWaitingPopup({ template: $("#" + itemGroupGridWaitingPopupTemplateId) });
    if (args.model.filterSettings.filteredColumns.length > 0) {
        for (i = 0; i < args.model.filterSettings.filteredColumns.length; i++) {
            var column = args.model.filterSettings.filteredColumns[i];
            filerSettings.push({ 'PropertyName': column.field, 'FilterType': column.operator, 'FilterKey': column.value });
        }

        this.model.query._params.push({ key: "filterCollection", value: filerSettings });
    }
}

function onPermissionDeleteDialogClose() {
    $("#permission_delete_confirmation").ejDialog("close");
}

function onPermissionDeleteDialogOpen() {
    $("#permission_delete_confirmation").ejDialog("open");
    $("#permission_delete_confirmation").focus();
}
function OpenDeleteDialog(t) {
    $("#permission_delete_confirmation").ejDialog("open");
    var permissionId = $(t).attr("data-itemviewid");
    var dataItem = $(t).attr("data-item");
    var deletedItem = $(t).attr("data-id");
    $("#deletedItem").html(dataItem);
    $("#delete_item_type").val(dataItem);
    $("#delete_permission_id").val(permissionId);
    $("#hiddendata-id").val(deletedItem);
}
function DeletePermission() {
    var permissionId = $("#delete_permission_id").val();
    var dataItem = $("#delete_item_type").val();
    var itemToDelete = $("#hiddendata-id").val();
    $.ajax({
        type: "POST",
        url: DeleteItemViewPermissionUrl,
        data: { permission: permissionId, deleteItem: dataItem },
        beforeSend: function () {
            $("#permission_delete_confirmation_wrapper").ejWaitingPopup("show");
        },
        success: function (data) {
            $("#permission_delete_confirmation_wrapper").ejWaitingPopup("hide");
            onPermissionDeleteDialogClose();
            messageBox("su-delete", window.Server.App.LocalizationContent.RemoveAccess, window.Server.App.LocalizationContent.RemoveAccessSuccess, "success", function () {
                if (dataItem.toLowerCase() == "group") {
                    $("#GroupSearch option[value='" + itemToDelete + "']").attr("selected", false);
                    $('#GroupSearch').selectpicker("refresh");
                } else {
                    $("#UserSearch option[value='" + itemToDelete + "']").attr("selected", false);
                    $('#UserSearch').selectpicker("refresh");
                }
                refreshUserGroupList();
                var userPermissiongrid = $('#UserGrid').data("ejGrid");
                var groupPermissiongrid = $('#GroupGrid').data("ejGrid");
                var selected = $(".ListItems.selected").attr("data-grid");
                userPermissiongrid.refreshContent();
                groupPermissiongrid.refreshContent();
                if (selected.toLowerCase() == "usergrid") {
                    $("#GroupGrid_WaitingPopup").hide();
                } else {
                    $("#UserGrid_WaitingPopup").hide();
                }
                onCloseMessageBox();
            });
        }
    });
}
function InitializeShareView() {
    $('#UserSearch').selectpicker("refresh");
    for (var i = 0; i < $("#userSearch_container .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $("#userSearch_container .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $("#userSearch_container .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
    $('#GroupSearch').selectpicker("refresh");
    for (var i = 0; i < $("#groupSearch_container .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $("#groupSearch_container .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $("#groupSearch_container .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
    $("#userSearch_container").on('click', '.bs-select-all-custom', function (e) {
        $("#userSearch_container").addClass("valueChanged");
        $('#UserSearch').data("selectpicker").selectAll();
        $(this).removeClass('bs-select-all-custom').addClass('bs-deselect-all-custom');
        $($(this).children("span")[0]).text(window.Server.App.LocalizationContent.Clear);
        e.stopPropagation();
    });

    $("#groupSearch_container").on('click', '.bs-select-all-custom', function (e) {
        $("#groupSearch_container").addClass("valueChanged");
        $('#GroupSearch').data("selectpicker").selectAll();
        $(this).removeClass('bs-select-all-custom').addClass('bs-deselect-all-custom');
        $($(this).children("span")[0]).text(window.Server.App.LocalizationContent.Clear);
        e.stopPropagation();
    });
    $("#userSearch_container").on('click', '.bs-deselect-all-custom', function (e) {
        $("#userSearch_container").addClass("valueChanged");
        $('#UserSearch').data("selectpicker").deselectAll();
        $(this).removeClass('bs-deselect-all-custom').addClass('bs-select-all-custom');
        $($(this).children("span")[0]).text(window.Server.App.LocalizationContent.Select);
        $(".SelectedShareItems[data-searchtype='userSearch']").remove();
        e.stopPropagation();
    });

    $("#groupSearch_container").on('click', '.bs-deselect-all-custom', function (e) {
        $("#groupSearch_container").addClass("valueChanged");
        $('#GroupSearch').data("selectpicker").deselectAll();
        $(this).removeClass('bs-deselect-all-custom').addClass('bs-select-all-custom');
        $($(this).children("span")[0]).text(window.Server.App.LocalizationContent.Select);
        $(".SelectedShareItems[data-searchtype='groupSearch']").remove();
        e.stopPropagation();
    });

    $("#userSearch_container").on('click', '.bootstrap-select li a', function (e) {
        $("#userSearch_container").addClass("valueChanged");;
        var selectedCount = $("#userSearch_container .bootstrap-select li.selected").length;
        var allListCount = $("#userSearch_container .bootstrap-select li").length;

        if (selectedCount == allListCount) {
            $($('#userSearch_container div.bs-select-all-custom').children("span")[0]).text(window.Server.App.LocalizationContent.Clear);
            $('#userSearch_container div.bs-select-all-custom').removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
        }
        if ($(this).parent().hasClass("selected")) {
            var selectedUser = $("#UserSearch").find("option")[parseInt($(this).parent().attr("data-original-index"))];
        } else {
            var selectedUser = $("#UserSearch").find("option")[parseInt($(this).parent().attr("data-original-index"))];
            $(".SelectedShareItems[id='" + $(selectedUser).val() + "']").remove();
            $($('#userSearch_container .bs-deselect-all-custom').children("span")[0]).text(window.Server.App.LocalizationContent.Select);
            $("#userSearch_container .bs-deselect-all-custom").removeClass('bs-deselect-all-custom').addClass('bs-select-all-custom');
        }
        e.stopPropagation();
    });

    $("#groupSearch_container").on('click', '.bootstrap-select .dropdown-menu .selectpicker li a', function (e) {
        $("#groupSearch_container").addClass("valueChanged");;
        var selectedCount = $("#groupSearch_container .bootstrap-select li.selected").length;
        var allListCount = $("#groupSearch_container .bootstrap-select li").length;
        if (selectedCount == allListCount) {
            $($('#groupSearch_container div.bs-select-all-custom').children("span")[0]).text(window.Server.App.LocalizationContent.Clear);
            $('#groupSearch_container div.bs-select-all-custom').removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
        }

        if ($(this).parent().hasClass("selected")) {
            var selectedGroup = $("#GroupSearch").find("option")[parseInt($(this).parent().attr("data-original-index"))];
        } else {
            var selectedGroup = $("#GroupSearch").find("option")[parseInt($(this).parent().attr("data-original-index"))];
            $(".SelectedShareItems").filter("[data-searchtype='groupSearch']").filter("#" + $(selectedGroup).val()).remove();
            $($('#groupSearch_container .bs-deselect-all-custom').children("span")[0]).text(window.Server.App.LocalizationContent.Select);
            $("#groupSearch_container .bs-deselect-all-custom").removeClass('bs-deselect-all-custom').addClass('bs-select-all-custom');
        }
        e.stopPropagation();
    });
    $("#groupSearch_container").click(function () {
        $("#groupSearch_container").addClass("valueChanged");;
        var selectedCount = $("#groupSearch_container .bootstrap-select li.selected").length;
        var allListCount = $("#groupSearch_container .bootstrap-select li").length;
        if (selectedCount == allListCount) {
            $($('#groupSearch_container div.bs-deselect-all-custom').children("span")[0]).text(window.Server.App.LocalizationContent.Clear);
        }
    });
    $("#userSearch_container").click(function () {
        $("#userSearch_container").addClass("valueChanged");;
        var selectedCount = $("#userSearch_container .bootstrap-select li.selected").length;
        var allListCount = $("#userSearch_container .bootstrap-select li").length;

        if (selectedCount == allListCount) {
            $($('#userSearch_container div.bs-deselect-all-custom').children("span")[0]).text(window.Server.App.LocalizationContent.Clear);
        }
    });
    if ($("#UserSearch option").length > 0)
        $(".share-popup #userSearch_container .bs-deselect-all").after("<div class='bs-select-all-custom'><span>" + window.Server.App.LocalizationContent.Select + "</span><span class='bs-select-custom-tick glyphicon glyphicon-ok'></span></div>");
    else
        $(".share-popup #userSearch_container .bs-deselect-all").after("<span class='noResult'>" + window.Server.App.LocalizationContent.NoResult + "</span>");

    if ($("#GroupSearch option").length > 0)
        $(".share-popup #groupSearch_container .bs-deselect-all").after("<div class='bs-select-all-custom'><span>" + window.Server.App.LocalizationContent.Select + "</span><span class='bs-select-custom-tick glyphicon glyphicon-ok'></span></div>");
    else
        $(".share-popup #groupSearch_container .bs-deselect-all").after("<span class='noResult'>" + window.Server.App.LocalizationContent.NoResult + "</span>");

    parent.$("#sharepopup_wrapper_WaitingPopup").css("display", "none");
}

function refreshUserGroupList() {
    var frame = parent.document.getElementById('viewShare_popup_iframe'),
       frameDoc = frame.contentDocument || frame.contentWindow.document;
    $(frameDoc).find(".share-popup #userSearch_container .bs-deselect-all-custom,.share-popup #userSearch_container .bs-select-all-custom,.share-popup #userSearch_container .noResult").remove();
    $(frameDoc).find(".share-popup #groupSearch_container .bs-deselect-all-custom,.share-popup #groupSearch_container .bs-select-all-custom,.share-popup #groupSearch_container .noResult").remove();
    for (var i = 0; i < $("#userSearch_container .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $("#userSearch_container .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $("#userSearch_container .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
    for (var i = 0; i < $("#groupSearch_container .btn-group .dropdown-menu .selectpicker li").length; i++) {
        var hoveredtext = $("#groupSearch_container .btn-group .dropdown-menu .selectpicker li").eq(i).find("a .text").text();
        $("#groupSearch_container .btn-group .dropdown-menu .selectpicker li ").eq(i).find("a").attr("title", hoveredtext);
    }
    if ($("#UserSearch option").length > 0) {
        if ($("#UserSearch option").length == $("#UserSearch option:selected").length)
            $(".share-popup #userSearch_container .bs-deselect-all").after("<div class='bs-deselect-all-custom'><span>" + window.Server.App.LocalizationContent.Clear + "</span><span class='bs-select-custom-tick glyphicon glyphicon-ok'></span></div>");
        else
            $(".share-popup #userSearch_container .bs-deselect-all").after("<div class='bs-select-all-custom'><span>" + window.Server.App.LocalizationContent.Select + "</span><span class='bs-select-custom-tick glyphicon glyphicon-ok'></span></div>");
    } else
        $(".share-popup #userSearch_container .bs-deselect-all").after("<span class='noResult'>" + window.Server.App.LocalizationContent.NoResult + "</span>");

    if ($("#GroupSearch option").length > 0)
    {
        if ($("#GroupSearch option").length == $("#GroupSearch option:selected").length)
            $(".share-popup #groupSearch_container .bs-deselect-all").after("<div class='bs-deselect-all-custom'><span>" + window.Server.App.LocalizationContent.Clear + "</span><span class='bs-select-custom-tick glyphicon glyphicon-ok'></span></div>");
        else
            $(".share-popup #groupSearch_container .bs-deselect-all").after("<div class='bs-select-all-custom'><span>" + window.Server.App.LocalizationContent.Select + "</span><span class='bs-select-custom-tick glyphicon glyphicon-ok'></span></div>");
    }
    else
        $(".share-popup #groupSearch_container .bs-deselect-all").after("<span class='noResult'>" + window.Server.App.LocalizationContent.NoResult + "</span>");
}

function onviewShareDialogClose() {
    var frame = parent.document.getElementById('viewShare_popup_iframe'),
        frameDoc = frame.contentDocument || frame.contentWindow.document;
    frameDoc.documentElement.innerHTML = "";
    parent.$("#viewShare_popup").ejDialog("close");
}

function ShareView(obj) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var popupWidth = $("#viewShare_popup").width();
    var popupHeight = $("#viewShare_popup").height();
    var leftPostition = (parseInt(windowWidth) - parseInt(popupWidth)) / 2;
    var topPostition = (parseInt(windowHeight) - parseInt(popupHeight)) / 2;
    $("#viewShare_popup").css({ "left": leftPostition, "top": topPostition });
    $("#viewShare_popup,.ViewShare_popup_shadow").css("display", "block");
    $("#sharepopup_wrapper_WaitingPopup").css("display", "block");
    $("#viewShare_popup_iframe").attr("src", itemViewShareIframeUrl + "?itemId=" + obj);
}

function ShareviewSubmitCancel() {
    var frame = parent.document.getElementById('viewShare_popup_iframe'),frameDoc = frame.contentDocument || frame.contentWindow.document;
    frameDoc.documentElement.innerHTML = "";
    parent.$("#viewShare_popup,.ViewShare_popup_shadow").css("display", "none");
}