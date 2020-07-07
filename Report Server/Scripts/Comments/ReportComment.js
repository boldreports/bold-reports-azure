$(document).ready(function () {
    var popupHeight = $("#viewShare_popup").height();
    $("#sharepopup_wrapper_WaitingPopup .loader-icon").css("top", parseInt(parseInt(popupHeight) / 2) - 30);

    if ($("#is_mobile").val() === "true") {
        var mobHeight = $(window).height() - 50;
        $("#sync_report_viewer").css("height", mobHeight);
        $(".server-dashboard-view").css("height", mobHeight);
    }
});

$(window).on("orientationchange", function () {
    if ($("#is_mobile").val() === "true") {
        var mobHeight = $(window).height() - 50;
        $("#sync_report_viewer").css("height", mobHeight);
        $(".server-dashboard-view").css("height", mobHeight);
    }
});

function ShareView(obj) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var popupWidth = $("#viewShare_popup").width();
    var popupHeight = $("#viewShare_popup").height();
    var leftPostition = (parseInt(windowWidth) - parseInt(popupWidth)) / 2;
    var topPostition = (parseInt(windowHeight) - parseInt(popupHeight)) / 2;
    if (topPostition < 0) {
        topPostition = 0;
    }
    $("#viewShare_popup").css({ "left": leftPostition, "top": topPostition });
    $("#viewShare_popup,.ViewShare_popup_shadow").css("display", "block");
    $("#sharepopup_wrapper_WaitingPopup").css("display", "block");
    $("#viewShare_popup_iframe").attr("src", itemViewShareIframeUrl + "?itemId=" + obj.viewId);
}

function ResizePopup() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var popupWidth = $("#viewShare_popup").width();
    var popupHeight = $("#viewShare_popup").height();
    var leftPostition = (parseInt(windowWidth) - parseInt(popupWidth)) / 2;
    var topPostition = (parseInt(windowHeight) - parseInt(popupHeight)) / 2;
    if (topPostition < 0) {
        topPostition = 0;
    }
    $("#viewShare_popup").css({ "left": leftPostition, "top": topPostition });
}

function openDashboardComment(obj) {
    var itemId = $("#dashboard_Comment").attr("data-item-id");
            $("#commentModuleContainer").toggleClass("displayNone");
            if ($("#commentModuleContainer").hasClass("displayNone")) {
                closeDashboardComment();
            } else {
                //closeWidgetComment();
                if (typeof (window.frames[0].GetAllComments) === 'function') {
                    window.frames[0].GetAllComments(itemId, "report", itemId, "desc");
                } else {
                    $('#commentModuleContainer_iframe').on('load', function () {
                        window.frames[0].GetAllComments(itemId, "report", itemId, "desc");
                    });
                }
            }
        }

function closeDashboardComment() {
    if ($("#commentImage_popup").data("ejDialog") !== undefined) {
        $("#commentImage_popup").ejDialog("close");
    }
            
            $("#commentModuleContainer").addClass("displayNone");
            $("#delete_popup_iframe").addClass("displayNone");
            if ($("#is_mobile").val() === "true") {
                $('#sync_report_viewer').show();
                if ($("#server-mobile-navbar .server-comment").hasClass('active')) {
                    $("#server-mobile-navbar a.active").removeClass("active");
                    $("#server-mobile-navbar .su-nav-dashboard").addClass('active');
                }
            }
        }

        function openComments() {
            
                //filterView();
                var commentId = getUrlVars(window.location.href.split('#')[0])["comment"];
                if (typeof (commentId) !== "undefined" && $("#comment_Type").attr("data-item-type").toLowerCase() === "report") {
                    if ($("#is_mobile").val() === "true") {
                        if (window.innerWidth < 410) {
                            $("#sync_report_viewer").hide();
                        }
                    } else {
                        $("#sync_report_viewer_toolbar_com").trigger("click");
                    }
                } else {
                    $("#commentModuleContainer iframe").attr("src", commentPageUrl + "?itemId=" + $("#commentModuleContainer_iframe").attr("data-item-id") + "&userId=" + userId);
                }
        }

        function getUrlVars(url) {
            var vars = {};
            var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
                vars[key] = value;
            });
            return vars;
        }

function updatefavorite() {
    var itemId = $("#favorite_Item").attr("data-item-id");
    var parentId = $("#favorite_Item").attr("data-parent-id");
    var isFavorite = $("#favorite_Item").attr("data-favorite-value").toLowerCase();
    var targetValue = isFavorite === "true" ? false : true;
    $.ajax({
        type: "POST",
        url: favoriteItemUrl,
        data: { itemId: itemId, favoriteValue: targetValue, parentId:parentId },
        success: function (data) {
            if (data.Success) {
                $("#favorite_Item").attr("data-favorite-value", targetValue);
                $('#sync_report_viewer').data("boldReportViewer").toggleFavoriteIcon();
            }
            else {
                $("#delete_popup_iframe").removeClass("displayNone");
                frames[1].messageBox("", window.Server.App.LocalizationContent.MarkFavoriteError, window.Server.App.LocalizationContent.InternalServerError, "success",function () {
                    $("#delete_popup_iframe").addClass("displayNone");
                });
            }
        }
    });
}

$(window).on("orientationchange", function () {
   closeDashboardComment();
});