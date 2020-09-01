var waitingPopUpElement = "";
var datasourceContentHeight = "";
var currentDatasourceTypeSelection = "new-datasource";

$(document).ready(function () {
    GridLocalization();
    datasourceContentHeight = window.innerHeight - ($(".dialog-body-div").outerHeight(true) - $(".dialog-body-div").outerHeight()) - $(".modal-header").outerHeight() - $(".modal-footer").outerHeight() - $(".datasource-options").outerHeight();
    $("#new-datasource-dialog-content, #existing-datasource-dialog-content").css("height", datasourceContentHeight);
    waitingPopUpElement = parent.$("#create-dataset-popup");
    hideWaitingPopup(waitingPopUpElement);

    if ((userPermission == "false" || userPermission == "False") && itemtype == "Dataset") {
        currentDatasourceTypeSelection = "existing-datasource";
        $("#existing-datasource").attr("checked", true);
        $("#new-datasource-dialog-content").hide();
        $("#existing-datasource-dialog-content").show();
        listExistingDatasources();
    }

    $(document).on("click", "#add-dataset-close", function () {
        closeDatasetCreationPopup();
    });

    $(document).on("click", "#dataset-connect", function () {
        addNewDataSource();
    });

    $(document).on("click", "#datasource-create", function () {
        createNewDataSource();
    });

    $(document).on("click", "#details-back", function () {
        moveStepper("back", 1);
        $(".modal-dataset-body-creation").hide();
        $(".modal-dataset-body").show();
        $("#details-back, #move-to-next").hide();
        $("#dataset-connect").show();
        $("#addItemForm #file_name, #addItemForm #file-description").val("");
    });

    $("input[name='datasourceType']").on("change", function () {
        showWaitingPopup(waitingPopUpElement);
        $("#move-to-next").removeClass("connect-button-style");
        selectedDatasourceDetails = null;
        currentDatasourceTypeSelection = $(this).val();
        if (currentDatasourceTypeSelection === "new-datasource") {
            $("#existing-datasource-dialog-content").hide();
            $("#new-datasource-dialog-content").show();
        }
        else {
            $("#new-datasource-dialog-content").hide();
            $("#existing-datasource-dialog-content").show();
            listExistingDatasources();
        }
        hideWaitingPopup(waitingPopUpElement);
    });

    $(document).on("keydown", "#search-datasource-grid", function (e) {
        $("#validation-user-error").hide();
        $.xhrPool.abortAll();
        var currentKeyCode = parseInt(e.which);
        var element = "#" + this.id;
        if (timeOut != null) {
            clearTimeout(timeOut);
            timeOut = null;
        }
        if (currentKeyCode === keyCode.Enter) {
            PerformSearch(element);
        }
        else if (excludedSearchKeys.indexOf(currentKeyCode) === -1) {
            timeOut = setTimeout(function () {
                PerformSearch(element);
            }, 900);
        }
    });

    $(document).on("click", ".su-search", function () {
        $("#validation-user-error").hide();
        $("#search-datasource-grid").addClass("search-width");
        $(".close-icon").css("display", "block");
        $(".su-search").css("display", "none");
        $(".placeholder").removeClass("hide").addClass("show");
    });
});

function moveStepper(direction, stepToMove) {
    if (direction != undefined) {
        if (direction.toLowerCase() === "front") {
            $(".selector-icons .selector-panel:nth-child(" + stepToMove + ")").prev().addClass("selectedOval");
            $(".selector-icons .selector-panel:nth-child(" + stepToMove + ")").find(".circle").addClass("selectedClass");
        }
        else if (direction.toLowerCase() === "back") {
            $(".selector-icons .selector-panel:nth-child(" + (stepToMove + 1) + ")").find(".circle").removeClass("selectedClass");
            $(".selector-icons .selector-panel:nth-child(" + stepToMove + ")").removeClass("selectedOval");
        }
    }
}

function listExistingDatasources() {
    $("#add_datasource_grid").ejGrid({
        dataSource: ej.DataManager({ url: getExistingDatasourcesUrl, adaptor: "UrlAdaptor" }),
        gridLines: ej.Grid.GridLines.None,
        allowSorting: true,
        allowSelection: true,
        enableAltRow: false,
        allowScrolling: true,
        scrollSettings: { height: datasourceContentHeight - 100, allowVirtualScrolling: true },
        selectionSettings: { selectionMode: ["row"] },
        enableRowHover: true,
        create: "fnCreateForAdmin",
        recordClick: "onAddAdminRecordClick",
        templateRefresh: "refreshTemplateForAdmin",
        actionBegin: "fnOnAddAdminGridActionBegin",
        actionComplete: "fnOnAddAdminGridActionComplete",
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
                headerTemplateID: "#admin-checkbox-header-template",
                template: true,
                templateID: "#admin-checkbox-row-template",
                textAlign: ej.TextAlign.Center,
                width: 15,
                height: 60,
                allowFiltering: false
            },
            {
                template: true,
                templateID: "#admin-template",
                headerText: window.Server.App.LocalizationContent.DatasetNameLabel,
                width: 115,
                height: 60,
                headerTemplateID: "#admin-header",
                field: "DisplayName",
                type: "string"
            }
        ]
    });
}

function fnOnAddAdminGridActionBegin(args) {
    isFirstRequest = true;
    var searchValue = $("#search-datasource-grid").val();
    this.model.query._params.push({ key: "searchKey", value: searchValue });
    var filerSettings = [], i;

    if (args.model.filterSettings.filteredColumns.length > 0) {
        for (i = 0; i < args.model.filterSettings.filteredColumns.length; i++) {
            var column = args.model.filterSettings.filteredColumns[i];
            filerSettings.push({ "PropertyName": column.field, "FilterType": column.operator, "FilterKey": column.value });
        }

        this.model.query._params.push({ key: "filterCollection", value: filerSettings });
    }
}

function rowBound() {
    if (isFirstRequest) {
        isFirstRequest = false;
    }
}

function onAddAdminRecordClick(args) {
    $("#validation-user-error, #validation-datasource-select-error").hide();
    $("#add_datasource_grid .e-table .e-row .e-rowcell span.selected-row-indicator").removeClass("su-tick");
    args.row.find(".selected-row-indicator").addClass("su-tick");
}

function closeDatasetCreationPopup() {
    parent.$("#create-dataset-popup").ejDialog("close");
}