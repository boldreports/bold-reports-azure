var cookieName = "syncfusion.reports.designer.tour";
var filterContent = '';
var saveContent = '';
var tour = new Tour({
    name: "designerTour",
    steps: [
        {
            element: "#container_scrollContentItemPanel",
            content: $("#tour-div-2").html()
        },
        {
            element: "#container_design_header_publish_btn",
            content: $("#tour-div-6").html(),
            placement: 'bottom',
            onShow: function (tour) {
                saveContent = $("#container_design_header_publish_btn").attr("data-content");
                $("#container_design_header_publish_btn").removeAttr("data-content");
            },
            onHide: function (tour) {
                $("#container_design_header_publish_btn").attr("data-content", saveContent);
            }
        },
        {
            element: "#container_design_header_preview",
            content: $("#tour-div-5").html(),
            placement: 'bottom',
            backdropPadding: { top: 2, left: 2, right: 4, bottom: 4 }
        },
        {
            element: "#container_Parameters_wrapper",
            content: $("#tour-div-7").html(),
            placement: 'left'
        },
        {
            element: "#container_ImageManager_wrapper",
            content: $("#tour-div-8").html(),
            placement: 'left'
        },
        {
            element: "#container_Properties_wrapper",
            content: $("#tour-div-3").html(),
            placement: 'left'
        },
        {
            element: "#container_Dataset_wrapper",
            content: $("#tour-div-1").html(),
            placement: 'left'
        }, 
    ],
    container: "body",
    smartPlacement: true,
    keyboard: true,
    storage: window.localStorage,
    backdrop: true,
    backdropContainer: 'body',
    duration: false,
    delay: false,
    autoscroll: false,
    template: "<div class='popover tour'><div class='popover-content'></div>",
    onEnd: function (tour) {
        $("#backdropFallback").addClass("hide");
    },
    onShown: function (tour) {
        onTourStepShown(tour);
        $(".popover.tour, .tour-backdrop, .tour-step-backdrop-parent").css("z-index", ej.getMaxZindex() + 1);
    },
    onHidden: function (tour) {
        onTourStepHidden(tour);
    }
});
