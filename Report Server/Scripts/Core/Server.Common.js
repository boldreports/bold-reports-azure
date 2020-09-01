
function ajaxPostCall(type, apiUrl, requestData, beforeSendCallback, successCallback, errorCallback, completeCallback) {
    if (embedConfig.IsEmbedCode) {
        if (type == "GET") {
            var itemRequestQuerString = jQuery.param(requestData);
            apiUrl["api"] = apiUrl["api"] + "?" + itemRequestQuerString;
            requestData = null;
        }
        return $.ajax({
            type: type,
            url: reportServerApiUrl + apiUrl["api"],
            headers: {
                "Content-type": "application/json",
                "Authorization": token,
            },
            data: JSON.stringify(requestData),
            beforeSend: function (req) {
                if (!isNullOrWhitespace(beforeSendCallback)) {
                    beforeSendCallback(req);
                }
            },
            success: function (data, result) {
                if (!isNullOrWhitespace(successCallback)) {
                    successCallback(data);
                }
            },
            error: function (data) {
                if (!isNullOrWhitespace(errorCallback)) {
                    errorCallback();
                }
            },
            complete: function (data) {
                if (!isNullOrWhitespace(completeCallback)) {
                    completeCallback(data);
                }
            }
        });
    } else {
        return $.ajax({
            type: type,
            url: apiUrl["web"],
            data: requestData,
            beforeSend: function (req) {
                if (!isNullOrWhitespace(beforeSendCallback)) {
                    beforeSendCallback(req);
                }
            },
            success: function (data, result) {
                if (!isNullOrWhitespace(successCallback)) {
                    successCallback(data);
                }
            },
            error: function (data) {
                if (!isNullOrWhitespace(errorCallback)) {
                    errorCallback();
                }
            },
            complete: function (data) {
                if (!isNullOrWhitespace(completeCallback)) {
                    completeCallback(data);
                }
            }
        });
    }
}

function isNullOrWhitespace(value) {
    return (value == null || value == undefined || $.trim(value) == "");
}

function generateProfileAvatar() {
    $(".profile-pic-tag").each(function () {
        var id = $(this).attr("data-id");
        var imageSize = $(this).attr("data-image-size");
        var fontSize = imageSize / 3;
        var displayName = $(this).attr("data-display-name");
        var type = $(this).attr("data-type");
        $(this).html("");
        if (id != 0) {
            var colors = ["#b7fbff", "#a9eec2", "#ffe0a3", "#ffa1ac", "#8ed6ff", "#bf9fee", "#ffa0d2", "#32dbc6", "#d2c8c8", "#e3e7f1"];
            if (type == "user") {
                var stringArray = id.match(/(\d+)/g);
                var i = 0;
                for (i = 0; i < stringArray.length; i++) {
                    var number = stringArray[0][0];
                }
                $(this).css("background-color", colors[number]);
                var imageUrl = idpUrl + "/User/Avatar?id=" + id;
                var image = $('<img id="default-profile-image">');
                image.attr("src", imageUrl);
                image.attr("width", imageSize);
                image.attr("height", imageSize);
                image.css("position", "absolute");
                image.css("top", "0px");
                image.css("left", "0px");
                image.css("border-radius", "50%");
                image.appendTo($(this));
            }
            else {
                var userIdLastNumber = id % 10;
                $(this).css("background-color", colors[userIdLastNumber]);
            }
            $(this).css("width", imageSize);
            $(this).css("height", imageSize);
            $(this).css("line-height", imageSize + "px");
            var nameLetters = displayName.trim().toUpperCase().split(/ /);
            var firstCharacter = $('<span id="first-letter">');
            if (nameLetters[1] == null) {
                firstCharacter.text(nameLetters[0][0]);
            } else {
                firstCharacter.text(nameLetters[0][0] + nameLetters[nameLetters.length - 1][0]);
            }
            firstCharacter.css("font-size", fontSize + "px");
            firstCharacter.css("margin-left", "2px");
            firstCharacter.appendTo($(this));
        }
    });
}
