
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