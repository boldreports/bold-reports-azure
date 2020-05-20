$(document).ready(function () {
    $.validator.addMethod("isValidName", function (value, element) {
            return IsValidName("name", value);
    },  window.Server.App.LocalizationContent.AvoidSpecialCharactors);

    $.validator.addMethod("isRequired", function (value, element) {
        return !isEmptyOrWhitespace(value);
    },  window.Server.App.LocalizationContent.ItemNameValidator);

    $("#item_action_form").validate({
        errorElement: 'span',
        onkeyup: function (element, event) { if (event.keyCode != 9) $(element).valid(); else true; },
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            "itemName": {
                isRequired: true,
                isValidName: true
            }
        },
        messages: {
            "itemName": {
                isRequired: window.Server.App.LocalizationContent.ReportValidator
            }
        },
        highlight: function (element) {
            $(element).closest('div').addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest('div').removeClass('has-error');
            $(element).closest('div').find("span.validation-error").html("");
        },
        errorPlacement: function (error, element) {
            $(element).closest('div').find("span.validation-error").html(error.html());
        }
    });

    $("#move_report_form").validate({
        errorElement: 'span',
        onkeyup: function (element, event) { if (event.keyCode != 9) $(element).valid(); else true; },
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            "itemName": {
                isRequired: true,
                isValidName: true
            }
        },
        messages: {
            "itemName": {
                isRequired: window.Server.App.LocalizationContent.ReportValidator
            }
        },
        highlight: function (element) {
            $(element).closest('div').addClass("has-error");
        },
        unhighlight: function (element) {
            $(element).closest('div').removeClass('has-error');
            $(element).closest('div').find("span.validation-error").html("");
        },
        errorPlacement: function (error, element) {
            $(element).closest('div').find("span.validation-error").html(error.html());
        }
    });

    $(document).on('keyup', '.bootstrap-select.open input', function () {
        if (canCreateCategory.toLowerCase() === "true") {
            var availableCategory = [];
            $('.bootstrap-select.open ul .add-new-category').remove();
            var enteredValue = $(this).val();
            var compareValue = enteredValue.toLowerCase();
            if (enteredValue == "") {
                $(".divider").show();
            }
            else {
                parent.window.CategoryName = enteredValue;
                $(".divider").hide();
            }
            $(".bootstrap-select.open").find("ul li").each(function () {

                if ($(this).children("a").children("span.text").text() != "") {
                    availableCategory.push($(this).children("a").children("span.text").text().toLowerCase());
                }

            });
            var isValueEqual = $.inArray(compareValue, availableCategory);
            if (compareValue != "") {
                if (isValueEqual == -1) {
                    $('.bootstrap-select.open ul').prepend('<li class="add-new-category" data-original-index="-1"><a class="" tabindex="-1"><span class="text">' + enteredValue + " " + window.Server.App.LocalizationContent.NewCategory + '</span><span class="glyphicon glyphicon-ok check-mark"></span></li>');
                    if ($(".bootstrap-select.open").find("li:not('.hide')").length > 2) {
                        $('.bootstrap-select.open ul .divider').show();
                        if ($('.bootstrap-select.open ul li').hasClass("no-results")) {
                            $('.bootstrap-select.open ul li.no-results').hide();
                            $('.bootstrap-select.open ul .divider').hide();
                        }
                    }
                    else {
                        $('.bootstrap-select.open ul .divider').show();
                    }
                }
                else {
                    $('.bootstrap-select.open ul .add-new-category').remove();
                    $('.bootstrap-select.open ul .divider').hide();
                }
            }
        }
    });
    $(document).on('click', '.bootstrap-select ul li.add-new-category, #add-new-category', function (e) {

        if (e.target.className !== null && e.target.className.toLowerCase() === 'btn btn-default') {
            parent.window.CategoryName = "";
        }       
        parent.window.IsCopyOrMoveDashboard = true;
        parent.$("#AddCategoryPopup").ejDialog("open");        
    });

    $(document).on('click', '.dropdown-toggle', function (e) {
        $('.bootstrap-select.open ul .add-new-category').remove();
        $('.bootstrap-select.open ul .divider').hide();
    });

    $(document).on('click', '#add-new-category, .selectpicker', function () {
        $(".category-validation-error").html("");
    });
});

$("#MoveButton").on("click", function () {
    var toCategory = $("#CategoryList").val();
    var itemId = $("#ItemIdHidden").val();
    var itemName = $("#item_name").val().trim();
    if (toCategory != null && $("#move_report_form").valid()) {
        parent.$("#ItemAction_wrapper").ejWaitingPopup("show");
        doAjaxPost("POST", moveItemUrl,
            {
                itemid: itemId,
                tocategoryId: toCategory,
                itemname: itemName
            },
            function (data, result) {
                parent.$("#ItemAction_wrapper").ejWaitingPopup("hide");
                if (data.status) {
                    window.parent.$("#ItemAction").ejDialog("close");
                    parent.messageBox("su-move", window.Server.App.LocalizationContent.MoveDashboard, window.Server.App.LocalizationContent.MoveDasshboardSuccess, "success", function () {
                        parent.RefreshCategorySection(toCategory);
                        parent.onCloseMessageBox();
                    });
                } else {
                    if (data.isNameExist) {
                        $(".validation-error").closest('div').addClass("has-error");
                        $(".validation-error").html(window.Server.App.LocalizationContent.IsReportExist);
                    }
                    else if (data.isException) {
                        $(".ErrorMessage").html(window.Server.App.LocalizationContent.MoveDashboardError);
                    }
                    else if (typeof (data.isInvalidCategory) != "undefined" && data.isInvalidCategory) {
                        $(".category-validation-error").html(window.Server.App.LocalizationContent.InvalidCategory);
                    }
                }
            }
        );
    }
});
$("#CopyButton").on("click", function () {   
    var toCategory = $("#CategoryList").val();
    var itemId = $("#ItemIdHidden").val();
    var userId = $("#userIdHidden").val();
    var itemName = $("#item_name").val().trim();
    var tenantName = $('#tenantList').val();
    var currentSite = $('#tenantHidden').val();
    if (toCategory != null && $("#item_action_form").valid() && ((isSelfHosted && tenantName == currentSite) || (!isSelfHosted))) {
        parent.$("#ItemAction_wrapper").ejWaitingPopup("show");
        doAjaxPost("POST", copyItemUrl,
            {
                itemid: itemId,
                tocategoryId: toCategory,
                itemname: itemName,
                userid: userId
            },
            function (data, result) {
                parent.$("#ItemAction_wrapper").ejWaitingPopup("hide");
                if (data.status) {
                    window.parent.$("#ItemAction").ejDialog("close");
                    parent.messageBox("su-copy", window.Server.App.LocalizationContent.CopyDashboard, window.Server.App.LocalizationContent.CopyDashboardSuccess, "success", function () {
                        parent.RefreshCategorySection(toCategory);
                        parent.onCloseMessageBox();
                    });
                } else {
                    if (data.isNameExist) {
                        $(".validation-error").closest('div').addClass("has-error");
                        $(".validation-error").html(window.Server.App.LocalizationContent.IsReportExist);
                    }
                    else if (data.isException) {
                        $(".ErrorMessage").html(window.Server.App.LocalizationContent.CopyDashboardError);
                    }
                    else if (typeof (data.isInvalidCategory) != "undefined" && data.isInvalidCategory) {
                        $(".category-validation-error").html(window.Server.App.LocalizationContent.InvalidCategory);
                    }
                }
            }
        );
    }
    else {
        if ($("#CategoryList").val() == null || $("#CategoryList").val() == "") {
            $(".category-validation-error").html(window.Server.App.LocalizationContent.SelectCategoryMessage);
        }
        else {
            parent.$("#ItemAction_wrapper").ejWaitingPopup("show");
            doAjaxPost("POST", tenantCopyItemUrl,
                {
                    itemid: itemId,
                    tocategoryId: toCategory,
                    itemname: itemName,
                    tenantname: tenantName,
                },
                function (data) {
                    parent.$("#ItemAction_wrapper").ejWaitingPopup("hide");
                    if (data.status) {
                        window.parent.$("#ItemAction").ejDialog("close");
                        parent.messageBox("su-copy", window.Server.App.LocalizationContent.CopyDashboard, window.Server.App.LocalizationContent.CopyDashboardSuccess, "success", function () {
                            parent.RefreshCategorySection(toCategory);
                            parent.onCloseMessageBox();
                        });
                    }
                    else if (data == "") {
                        $(".validation-error").closest('div').addClass("has-error");
                        $(".validation-error").html(window.Server.App.LocalizationContent.InvalidReport);
                    }
                    else if (!data.status) {
                        $(".validation-error").closest('div').addClass("has-error");
                        $(".validation-error").html(window.Server.App.LocalizationContent.IsReportExist);
                    }

                });
        }
    }
});

$("#tenantList").on('change', function () {
    var tenantName = $(this).find("option:selected").val();
    parent.$("#ItemAction_wrapper").ejWaitingPopup("show");
    doAjaxPost("POST", tenantItemUrl,
        {
            tenantname: tenantName,
        },
       function (data) {
           var categories = data.CategoryList;
           var options = "";
           for (var t = 0; t < categories.length; t++) {
               options += '<option value=' + categories[t].Id + '>' + categories[t].Name + '</option>';
           }
           $("#CategoryList").html(options);
           $("#CategoryList").selectpicker("refresh");
           $("#CopyButton").show(); 
           if (!categories.length && data.CanCreateCategory == "False") {
                   $("#CopyButton").hide();
           }
           if (data.CanCreateCategory == "False") {
               if (canCreateCategory.toLowerCase() == "true") {
                   $("#add-new-category").remove();
                   $(".tenant-parent .first-block:first").removeClass("col-xs-6").addClass("col-xs-7");
                   
               }
               if (canCreateCategory.toLowerCase() == "false") {
                   $("#add-new-category").remove();
                   $(".tenant-parent .third-block:first").removeClass("col-xs-6").addClass("col-xs-7");
               }
           }
           if (data.CanCreateCategory == "True") {
               $("#add-new-category").remove();
               $(".tenant-parent .first-block:first").removeClass("col-xs-7").addClass("col-xs-6");
               $(".tenant-parent .second-block:first").append(addButton);
               if (canCreateCategory.toLowerCase() == "false") {
                   $(".tenant-parent .third-block:first").removeClass("col-xs-7").addClass("col-xs-6"); 
                   $(".tenant-parent .fourth-block:first").append(addButton);
               }
           }
           parent.$("#ItemAction_wrapper").ejWaitingPopup("hide");
        }
    );
        });
$("#CloneButton").on("click", function () {
    var toCategory = $("#CategoryList").val();
    var itemId = $("#ItemIdHidden").val();
    var userId = $("#userIdHidden").val();
    var itemName = $("#item_name").val().trim();
    if (toCategory != null && $("#item_action_form").valid()) {
        parent.$("#ItemAction_wrapper").ejWaitingPopup("show");
        doAjaxPost("POST", cloneItemUrl,
            {
                itemid: itemId,
                tocategoryId: toCategory,
                itemname: itemName,
                inputUserId: userId
            },
            function (data, result) {
                parent.$("#ItemAction_wrapper").ejWaitingPopup("hide");
                if (data.status) {
                    window.parent.$("#ItemAction").ejDialog("close");
                    parent.messageBox("su-clone", window.Server.App.LocalizationContent.CloneDashboard, window.Server.App.LocalizationContent.CloneDasshboardSuccess, "success", function () {
                        parent.RefreshCategorySection(toCategory);
                        parent.onCloseMessageBox();
                    });
                } else {
                    if (data.isNameExist) {
                        $(".validation-error").closest('div').addClass("has-error");
                        $(".validation-error").html(window.Server.App.LocalizationContent.IsReportExist);
                    }
                    else if (data.isException) {
                        $(".ErrorMessage").html( window.Server.App.LocalizationContent.CloneDashboardError);
                    }
                    else if (typeof(data.isInvalidCategory) != "undefined" && data.isInvalidCategory) {
                        $(".category-validation-error").html(window.Server.App.LocalizationContent.InvalidCategory);
                    }
                }
            }
        );
    }
});

$(document).on("click", "#CancelButton", function () {
    window.parent.$("#ItemAction").ejDialog("close");
});
$(document).on("click", ".close-dialog", function () {
    if ($("#CancelButton").val() == "Close") {
        parent.$("#ItemAction iframe").attr("src", "");
        parent.RefreshCategorySection($("#CancelButton").attr("data-target-id"));
    }
    window.parent.$("#ItemAction").ejDialog("close");
});

function ResetGrid(gridObj) {
    gridObj.refreshContent();
    gridObj.model.sortSettings.sortedColumns = [];
    gridObj.model.filterSettings.filteredColumns = [];
    parent.$("#searchItems").find("input[type=text]").val('');
}

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        window.parent.$("#ItemAction").ejDialog("close");
    }
});

function refreshSelectPicker() {
    $("#CategoryList").selectpicker("refresh");
    window.parent.$('#ItemAction_wrapper').ejWaitingPopup("hide");
}