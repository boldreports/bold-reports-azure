$(document).on("click", "#server-mobile-navbar .server-comment", function () {
    if (!$(this).hasClass("active")) {
        $("a.active").removeClass("active");
        $(this).addClass('active');
            var src = $("#commentModuleContainer iframe").attr("src");
            if (src === undefined || src === "") {
                $("#commentModuleContainer iframe").attr("src", commentPageUrl + "?itemId=" + $("#commentModuleContainer_iframe").attr("data-item-id") + "&userId=" + userId + "&viewer=v2");
            }
            if ($("#commentModuleContainer").hasClass("displayNone")) {
                $("#close-view").trigger("click");
                $("#comment-module-container-loader-icon").show();
                openDashboardComment(null);
            }
            else {
                closeDashboardComment();
            }
        
        if ($("#is_mobile").val() == "true" && window.innerWidth < 410) {
            $("#sync_report_viewer").hide();
        }
        $("#report-view-toogle").removeClass("report-view-toogle");
    } else {
        showRenderTab();
    }
});

$(document).on("click", "#server-mobile-navbar .su-report", function () {
    showRenderTab();
});

$(document).on("click", "#server-mobile-navbar .su-view", function (e) {
        $(this).addClass('active');
        $("#sync_report_viewer").show();
        if($("#comment_Type").attr("data-item-type") == "report"){
            closeDashboardComment();
        }
        $(this).addClass('active');
        openViews();
});

$(document).on("click", "#server-mobile-navbar .su-nav-home", function (e) {
    if (!$(this).hasClass("active")) {
        $("a.active").removeClass("active");
        $(this).addClass('active');
    }
});

function showRenderTab() {
    $("a.active").removeClass("active");
    $(".su-report").addClass('active');
    $("#report-view-toogle").removeClass("report-view-toogle");
    $("#sync_report_viewer").show();
    if ($("#comment_Type").attr("data-item-type") == "report") {
        closeDashboardComment();
    }
}

$(document).on("touchend", "[data-toggle='tooltip']", function (e) {
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
        $(this).click();
    }
});

$(document).on("click", "#close-view", function () {
    CloseReportView();
    if ($("#is_mobile").val() == "true") {
        $('#sync_report_viewer').show();
        if ($("#server-mobile-navbar .su-view").hasClass('active')) {
            $("#server-mobile-navbar a.active").removeClass("active");
            $("#server-mobile-navbar .su-nav-dashboard").addClass('active');
        }
    }
    $(".options").css("right", "0px");
    $(".options li").removeClass("active");
});