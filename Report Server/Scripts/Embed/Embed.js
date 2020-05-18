﻿var windowRef;
var timer;

function checkWindowRef() {
    if (windowRef.closed) {
        clearInterval(timer);
        $("#loader").hide();
        location.reload();
        $("#loader").show();
    }
}

$(document).ready(function () {
    $("#loader").hide();
});
$(document).on("click", "#login", function (e) {
    $("#loader").show();
    $("#login").hide();
    if (windowRef != undefined) {
        clearInterval(timer);
        windowRef.close();
    }
    var winFeature = 'location=no,toolbar=no,menubar=no,scrollbars=No,resizable=No,height=1366,width=1024';
    obj = $(this);
    $(window).off('message', $.proxy(handleAuthorizeMessage, window, obj));
    $(window).on('message', $.proxy(handleAuthorizeMessage, window, obj));
    windowRef = window.open(idLogin + "/login?ReturnUrl=embed", '_blank', winFeature);
    timer = setInterval($.proxy(checkWindowRef, 500, obj));
});

function handleAuthorizeMessage(addButtonObj, evt) {
    $(window).off('message', $.proxy(handleAuthorizeMessage, window, addButtonObj));
}

$(window).load(function () {
    $('.lazyload').each(function () {
        $(this).parent().append($("<img>").attr({
            "src": $(this).attr("data-src"),
            "alt": $(this).attr("data-alt"),
            "id": $(this).attr("data-id"),
            "onerror": $(this).attr("data-default"),
            "style": $(this).attr("style")
        }));
    });
});