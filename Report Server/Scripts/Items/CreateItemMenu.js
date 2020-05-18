﻿////Create Item Button
var createItemButton = "";

////Menu Container
var createItemMenuContainer = "";
var createMenu = "";

////Create Menu Backdrop
var createMenuBackdrop = "";

////Save Draft Dialog
var saveDraftInputobj = "";
var saveDraftInputEle = "";
var draftDialogobj = "";

$(document).ready(function () {
    $.extend(ej, Syncfusion);

    ////Create Item Button
    createItemButton = $("[data-action=create-items]");

    ////Menu Container
    createItemMenuContainer = $("#create-item-container");
    createMenu = $(".create-menu");

    ////Create Menu Backdrop
    createMenuBackdrop = $("#create-menu-backdrop");

    ////Save Draft Dialog
    saveDraftInputobj = new ejs.inputs.TextBox({
        placeholder: window.Server.App.LocalizationContent.UntitledReport,
        floatLabelType: 'Never'
    });

    saveDraftInputEle = $("#save-draft-input");
    saveDraftInputobj.appendTo('#save-draft-input');

    draftDialogobj = new ejs.popups.Dialog({
        //header: 'Lets Start with a Name for your Report.',
        showCloseIcon: false,
        isModal: true,
        closeOnEscape: true,
        visible: false,
        buttons: [
            {
                click: saveDraftBtnClick,
                buttonModel: { content: window.Server.App.LocalizationContent.AddDesignButton, isPrimary: true }
            },
            {
                click: dlgCloseBtnClick,
                buttonModel: { content: window.Server.App.LocalizationContent.CancelButton, isPrimary: false }
            }],
        width: '500px',
        animationSettings: { effect: 'Zoom' },
        beforeOpen: saveDraftDialogOpen,
        beforeClose: saveDraftDialogBeforeClose
    });

    draftDialogobj.appendTo('#save-draft-container');
    draftDialogobj.hide();

    //Intialize waiting popup
    ejs.popups.createSpinner({
        target: document.getElementById('save-draft-container')
    });

    ejs.popups.setSpinner({ type: 'Material' });

    createItemButton.on("click", function (e) {
        createItemMenuContainer.toggleClass("create-menu-effect").toggleClass("create-menu-open");
        setCreateMenuBackDrop();
        createMenuBackdrop.show();
        blurServerAppContainer();
    });

    $('body').click(function (e) {
        if (e.target.id == "create-menu-backdrop") {
            collapseCreateMenu();
        }
    });

    $('#save-draft-form').submit(function (e) {
        e.preventDefault();
        var draftname = saveDraftInputEle.val();
        if ($("#save-draft-form").valid()) {
            showSpinner();
            $.ajax({
                type: "POST",
                url: isDraftExistUrl,
                data: { reportName: draftname },
                success: function (result) {
                    if (result.Data) {
                        $('.save-draft-input-segment').find('.e-input-group').addClass('e-error');
                        $("#validate-dashboard-name").text(window.Server.App.LocalizationContent.IsReportExist);
                        $("#validate-dashboard-name").css("display", "block");
                        hideSpinner();
                    }
                    else {
                        hideSpinner();
                        draftDialogobj.hide();
                        setTimeout(function () {
                            showLoaderForIntializing();
                            window.location.href = result.RedirectUrl;
                        }, 500);
                    }
                },
                error: function () {
                    $('.save-draft-input-segment').find('.e-input-group').addClass('e-error');
                    $("#validate-dashboard-name").text(window.Server.App.LocalizationContent.InternalServerError);
                    $("#validate-dashboard-name").css("display", "block");
                    hideSpinner();
                }
            });
        }
    });

    $(window).resize(function () {
        setCreateMenuBackDrop();
    });


    //Save Draft Validator
    $.validator.addMethod("isRequired", function (value, element) {
        return !parent.isEmptyOrWhitespace(value);
    }, window.Server.App.LocalizationContent.ItemNameValidator);

    $.validator.addMethod("isValidName", function (value, element) {
        return parent.IsValidName("name", value);
    }, window.Server.App.LocalizationContent.AvoidSpecialCharactors);

    $("#save-draft-form").validate({
        errorElement: 'div',
        onkeyup: function (element, event) {
            if (event.keyCode != 9) {
                $(element).valid();
            }
            if (event.keyCode == 8 || event.keyCode == 46 || !$(element).valid()) {
                $("#validate-dashboard-name").text("");
            } else true;
        },
        onfocusout: function (element) { $(element).valid(); },
        rules: {
            "dashboardName": {
                isRequired: true,
                isValidName: true
            }
        },
        messages: {
            "dashboardName": {
                isRequired: window.Server.App.LocalizationContent.ReportValidator
            }
        },
        highlight: function (element) {
            $(element).closest('.e-input-group').addClass("e-error");
        },
        unhighlight: function (element) {
            if ($(element).attr('id') == 'save-draft-input') {
                $(element).closest('.e-input-group').removeClass('e-error');
                $(element).closest('.save-draft-input-segment').find("div").html("");
                $(element).closest('.save-draft-input-segment').find("#validate-dashboard-name").text("");
            }
        },
        errorPlacement: function (error, element) {
            $(element).closest('.save-draft-input-segment').find("div").html(error.html());
        }
    });

    saveDraftInputEle.bind("keypress", function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    $("#create-dataset-popup").ejDialog({
        width: $(window).width(),
        height: $(window).height(),
        showOnInit: false,
        allowDraggable: false,
        enableResize: false,
        enableModal: true,
        showHeader: false
    });

    $("#report_popup").ejDialog({
        width: "800px",
        showOnInit: false,
        allowDraggable: true,
        enableResize: false,
        showHeader: false,
        enableModal: true,
        closeOnEscape: true,
        open: "onReportDialogOpen",
        close: "onReportDialogClose"
    });

    $("#report_popup_wrapper").ejWaitingPopup();

    $("#addDataSetDom").ejDialog({
        width: "650px",
        showOnInit: false,
        allowDraggable: false,
        enableResize: false,
        title: window.Server.App.LocalizationContent.AddDatasetButton,
        enableModal: true,
        showHeader: false,
        close: "onNewDataSetDialogClose"
    });

    $("#addDataSetDom_wrapper").ejWaitingPopup();

    $("#select_datasource_popup").ejDialog({
        width: "800px",
        showOnInit: false,
        allowDraggable: true,
        enableResize: false,
        showHeader: false,
        enableModal: true,
        closeOnEscape: true,
        close: 'closeNewDataSourcePopup'
    });

    $("#select_datasource_popup_wrapper").ejWaitingPopup();

    $(document).on("click", "#create-dataset-connection", function () {
        $("#create-dataset-iframe").attr("src", createDatasetUrl);
        $("#create-dataset-popup").ejDialog("open");
        showWaitingPopup("create-dataset-popup");
    });

    $(document).on("click", "#create-New-datasource-connection", function () {
        $("#create-dataset-iframe").attr("src", createNewDatasourceUrl);
        $("#create-dataset-popup").ejDialog("open");
        showWaitingPopup("create-dataset-popup");
    });

    $(document).on("click", "#upload-report", function () {
        var itemAction = $(this).attr("data-action");
        $("#report_popup").ejDialog("open");
        $("#report_popup_wrapper").ejWaitingPopup("show");
        $("#report_iframe").attr("src", addReportIframeUrl + "?itemAction=" + itemAction);
    });

    $(document).on("click", "#upload-dataset-connection", function () {
        var itemAction = $(this).attr("data-action");
        $("#addDataSetDom").ejDialog("open");
        $("#dataset_popup").attr("src", addDatasetUrl + "?itemAction=" + itemAction);
        $("#addDataSetDom_wrapper").ejWaitingPopup("show");
    });
});

$(document).on("click", ".create-dashboard-scratch", function (e) {
      draftDialogobj.show();
});

$(document).on("click", ".create-item-list-section", function (e) {
      collapseCreateMenu();
});

////Functions

function setCreateMenuBackDrop() {
    createMenuBackdrop.css("width", ($(window).width() - createMenu.width()) + "px");
}

function saveDraftBtnClick() {
    $('#save-draft-form').submit();
}

function dlgCloseBtnClick() {
    draftDialogobj.hide();
}

function collapseCreateMenu() {
    createItemMenuContainer.toggleClass("create-menu-effect").toggleClass("create-menu-open");
    createMenuBackdrop.hide();
    unblurServerAppContainer();
}

function saveDraftDialogOpen() {
    saveDraftInputobj.value = "";
    blurServerAppContainer();
}

function saveDraftDialogBeforeClose() {
    clearInputValueAndError();
    unblurServerAppContainer();
}

function clearInputValueAndError() {
    saveDraftInputobj.value = "";
    saveDraftInputobj.refresh();
    $('.save-draft-input-segment').find("div").html("");
    $('.save-draft-input-segment').find("#validate-dashboard-name").text("");
}

////Spinner

function showSpinner() {
    ejs.popups.showSpinner(document.getElementById('save-draft-container'));
}

function hideSpinner() {
    ejs.popups.hideSpinner(document.getElementById('save-draft-container'));
}

////Show loader for creating dashboard

function showLoaderForIntializing() {
    $("#server-app-container").hide();
    $(".preloader-wrap").show();
    $("#loader_text").text(window.Server.App.LocalizationContent.CreatingReport);
}