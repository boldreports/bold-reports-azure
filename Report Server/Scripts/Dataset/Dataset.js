$(function () {
    $("#datasource-edit-popup").ejDialog({
        width: "650px",
        showOnInit: false,
        allowDraggable: false,
        enableResize: false,
        enableModal: true,
        showHeader: false,
        close: "OnEditFileDialogClose",
        closeOnEscape: true
    });
    var datasourceEditWaitingPopupTemplateId = createLoader("datasource-edit-popup_wrapper");
    $("#datasource-edit-popup_wrapper").ejWaitingPopup({ template: $("#" + datasourceEditWaitingPopupTemplateId) });
    $(window).resize(function () {
        var gridObj = $("#items").data("ejGrid");
        if (gridObj != null) {
            (window.innerWidth < 1200) ? gridObj.hideColumns("Owner") : gridObj.showColumns("Owner");
        }
    });
});

$(document).on('click', '.item-edit', function () {
    var itemId = $(this).attr("data-item-id");
    $("#addDataSetDom").ejDialog("open");
    ShowWaitingProgress("#addDataSetDom_wrapper", "show");
    $("#dataset_popup").attr("src", getDatasetDetailsUrl + "?itemId=" + itemId);
});

function OnEditFileDialogClose() {
    $("#datasource-edit-popup").ejDialog("close");
}

$(document).on("click", ".items", function () {
    $(".e-waitpopup-pane").css("display", "none");
});