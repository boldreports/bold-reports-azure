
$(document).ready(function () {
        if (parameterObj.length == 0) {
            url = recurrenceType;
            enableTimeIntervalOption();
        }
        var reportParamType = window.reportParamType;
        var reportElementType = window.reportElementType;
        for (var i = 0; i < window.parameterObj.length; i++) {
            if (window.parameterObj[i].ReportParameterData == null && window.parameterObj[i].DataType == reportParamType.DateTime) {
                $("#" + window.parameterObj[i].Name).ejDatePicker({
                    value: new Date(window.parameterObj[i].Values)
                });
                if (window.parameterObj[i].Hidden) {
                    $("#" + window.parameterObj[i].Name).ejDatePicker("disable");
                }
            }

            else if (window.parameterObj[i].ReportParameterData == null && window.parameterObj[i].DataType == reportParamType.Boolean) {
                if (window.parameterObj[i].Values.length > 0 && window.parameterObj[i].Values[0].toLowerCase() == "true") {
                    $("#true-" + window.parameterObj[i].Name).ejRadioButton({ size: "medium", checked: true });
                    $("#true-" + window.parameterObj[i].Name).val("true");
                    $("#false-" + window.parameterObj[i].Name).val("false");
                    $("#false-" + window.parameterObj[i].Name).ejRadioButton({ size: "medium" });
                }
                else if (window.parameterObj[i].Values.length > 0) {
                    $("#false-" + window.parameterObj[i].Name).ejRadioButton({ size: "medium", checked: true });
                    $("#false-" + window.parameterObj[i].Name).val("true");
                    $("#true-" + window.parameterObj[i].Name).val("false");
                    $("#true-" + window.parameterObj[i].Name).ejRadioButton({ size: "medium" });
                }
                else {
                    $("#false-" + window.parameterObj[i].Name).ejRadioButton({ size: "medium" });
                    $("#true-" + window.parameterObj[i].Name).ejRadioButton({ size: "medium" });
                }
                if (window.parameterObj[i].Hidden) {
                    $("#true-" + window.parameterObj[i].Name).ejRadioButton("disable");
                    $("#false-" + window.parameterObj[i].Name).ejRadioButton("disable");
                }
            }
            else if (window.parameterObj[i].ReportParameterData != null && window.parameterObj[i].ReportParameterData.length > 0) {
                var listItems = "";
                for (var j = 0; j < window.parameterObj[i].ReportParameterData.length; j++) {
                    listItems += '<option value="' + window.parameterObj[i].ReportParameterData[j].ValueField + '">' + window.parameterObj[i].ReportParameterData[j].DisplayField + '</option>';
                }

                $("#" + window.parameterObj[i].Name).html(listItems);
                window.parameterObj[i].ReportParameterData.forEach(function (item, index) {
                    if (item.IsSelected)
                        $("#" + window.parameterObj[i].Name).val(item.ValueField);
                });

                $("#" + window.parameterObj[i].Name).selectpicker("refresh");
                if (window.parameterObj[i].MultiValue) {
                    var allListCount = $("#" + window.parameterObj[i].Name).next().find('ul.dropdown-menu li').length;

                    if (allListCount == window.parameterObj[i].Values.length) {
                        $("#" + window.parameterObj[i].Name).next().find('.bs-deselect-all').after("<div class='bs-deselect-all-custom' style='padding: 6px 0px !important';><span>[[[Clear All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                    }
                    else {
                        $("#" + window.parameterObj[i].Name).next().find('.bs-deselect-all').after("<div class='bs-select-all-custom' style='padding: 6px 0px !important';><span>[[[Select All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                    }
                }
                else {
                    if ($("#" + window.parameterObj[i].Name).next().find('div').hasClass('bs-actionsbox')) {
                        $("#" + window.parameterObj[i].Name).next().find(".bs-actionsbox").remove();
                    }
                }

                if (window.parameterObj[i].Values != null) {
                    for (var k = 0; k < window.parameterObj[i].Values.length; k++) {
                        $("#" + window.parameterObj[i].Name).selectpicker('val', window.parameterObj[i].Values);
                    }
                    if (window.parameterObj[i].Hidden) {
                        $("#" + window.parameterObj[i].Name).attr("disabled", "disabled");
                        $("#" + window.parameterObj[i].Name).selectpicker("refresh");
                    }
                }
                if (window.parameterObj[i].Values.length == 0 && window.parameterObj[i].ReportParameterData.length > 0) {
                    $("#" + window.parameterObj[i].Name).selectpicker('val', 'Select Value');
                    $("#" + window.parameterObj[i].Name).selectpicker("refresh");
                }
            }
            else if (window.parameterObj[i].ElementType == reportElementType.ComboBox || window.parameterObj[i].ElementType == reportElementType.MultiValue) {
                $("#" + window.parameterObj[i].Name).selectpicker("refresh");
            }
            else if (window.parameterObj[i].Values != null) {
                $("#" + window.parameterObj[i].Name).val(window.parameterObj[i].Values);
            }
        }
});

$(document).on("change", ".use-default", function () {
    if ($(this).is(":checked")) {
        if ($(this).attr("dataAttrType") == "RadioButton") {
            $("#true-" + $(this).attr("dataAttrId")).ejRadioButton("disable");
            $("#false-" + $(this).attr("dataAttrId")).ejRadioButton("disable");
        } else if ($(this).attr("dataAttrType") == "DateTime") {
            $("#" + $(this).attr("dataAttrId")).ejDatePicker("disable");
        } else if ($(this).attr("dataAttrType") == "Textbox") {
            $("#" + $(this).attr("dataAttrId")).parent().removeClass("has-error");
            $("#" + $(this).attr("dataAttrId")).attr("disabled", "disabled");
        } else {
            $("#" + $(this).attr("dataAttrId")).attr("disabled", "disabled");
            $("#" + $(this).attr("dataAttrId")).selectpicker("refresh");
        }
    }
    else {
        if ($(this).attr("dataAttrType") == "RadioButton") {
            $("#true-" + $(this).attr("dataAttrId")).ejRadioButton("enable");
            $("#false-" + $(this).attr("dataAttrId")).ejRadioButton("enable");
        } else if ($(this).attr("dataAttrType") == "DateTime") {
            $("#" + $(this).attr("dataAttrId")).ejDatePicker("enable");
        } else {
            $("#" + $(this).attr("dataAttrId")).removeAttr("disabled");
            $("#" + $(this).attr("dataAttrId")).selectpicker("refresh");
        }
    }
});


$(document).on("focusout", ".form-control", function () {
    if ($(this).val() === "") {
        $(this).parent().addClass("has-error");
    } else {
        $(this).parent().removeClass("has-error");
    }
});

$(document).on("click", ".hasdependent", function (e) {
    e.stopPropagation();
});


$(document).on("hide.bs.dropdown", ".hasdependent", function (e) {

    parent.$("#popup-container_wrapper").ejWaitingPopup("show");
    var param = $(this).prev().attr("id") == undefined ? $(this).attr("id") : $(this).prev().attr("id");
    var values = $(this).prev().val() == undefined ? $(this).val() : $(this).prev().val();

    $.ajax({
        type: "POST",
        url: getdependentparameter,
        async: true,
        data: { itemId: createdItemId, name: param, value: values },
        success: function (data) {
            parent.$("#popup-container_wrapper").ejWaitingPopup("hide");
            for (var i = 0; i < data.Parameters.length; i++) {
                if (data.Parameters[i].ReportParameterData !== null && data.Parameters[i].ReportParameterData.length > 0) {
                    var listItems = "";
                    for (var j = 0; j < data.Parameters[i].ReportParameterData.length; j++) {
                        listItems += '<option value="' + data.Parameters[i].ReportParameterData[j].ValueField + '">' + data.Parameters[i].ReportParameterData[j].DisplayField + ' </option>';
                    }
                    $("#" + data.Parameters[i].Name).html(listItems);
                    data.Parameters[i].ReportParameterData.forEach(function (item, index) {
                        if (item.IsSelected)
                            $("#" + data.Parameters[i].Name).val(item.ValueField);
                    });

                    if (data.Parameters[i].Values != null) {
                        for (var k = 0; k < data.Parameters[i].Values.length; k++) {
                            $("#" + data.Parameters[i].Name).selectpicker('val', data.Parameters[i].Values);
                        }
                    }
                    $("#" + data.Parameters[i].Name).selectpicker("refresh");
                    if (data.Parameters[i].Values.length == 0 && data.Parameters[i].ReportParameterData.length > 0) {
                        $("#" + data.Parameters[i].Name).selectpicker('val', 'Select Value');
                        $("#" + data.Parameters[i].Name).selectpicker("refresh");
                    }
                }

                var selectedCount = $("#" + data.Parameters[i].Name).parents(".parameter-input").find("ul.dropdown-menu li.selected").length;
                var allListCount = $("#" + data.Parameters[i].Name).parents(".parameter-input").find("ul.dropdown-menu li").length;
                if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find("ul.dropdown-menu li").length > 0) {
                    if (selectedCount == allListCount && data.Parameters[i].MultiValue) {
                        if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom') == false) {
                            if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-select-all-custom') == false) {
                                $("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').after("<div class='bs-deselect-all-custom' style='padding: 6px 0px !important';><span>[[[Clear All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                            }
                        }
                        else {
                            $($("#" + data.Parameters[i].Name).parents(".parameter-input").find("div.bs-select-all-custom").children("span")[0]).text("[[[Clear All]]]");
                            $("#" + data.Parameters[i].Name).parents(".parameter-input").find("div.bs-select-all-custom").removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
                        }

                    }
                    else {
                        if (data.Parameters[i].MultiValue) {
                            if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom') == false) {
                                if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-select-all-custom') == false) {
                                    $("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').after("<div class='bs-select-all-custom' style='padding: 6px 0px !important';><span>[[[Select All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                                }
                            }
                            else {
                                $($("#" + data.Parameters[i].Name).parents(".parameter-input").find(".bs-deselect-all-custom").children("span")[0]).text("[[[Select All]]]");
                                $("#" + data.Parameters[i].Name).parents(".parameter-input").find(".bs-deselect-all-custom").removeClass("bs-deselect-all-custom").addClass("bs-select-all-custom");
                            }
                        }
                        else {
                            if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('div').hasClass('bs-actionsbox')) {
                                $("#" + data.Parameters[i].Name).parents(".parameter-input").find(".bs-actionsbox").remove();
                            }
                        }
                    }
                }
                if (data.Parameters[i].ReportParameterData == null && data.Parameters[i].DataType == reportParamType.Boolean) {
                    if (data.Parameters[i].Values.length > 0 && data.Parameters[i].Values[0].toLowerCase() == "true") {
                        $("#true-" + data.Parameters[i].Name).ejRadioButton({ size: "medium", checked: true });
                        $("#true-" + data.Parameters[i].Name).val("true");
                        $("#false-" + data.Parameters[i].Name).val("false");
                        $("#false-" + data.Parameters[i].Name).ejRadioButton({ size: "medium" });
                    }
                    else if (data.Parameters[i].Values.length > 0) {
                        $("#false-" + data.Parameters[i].Name).ejRadioButton({ size: "medium", checked: true });
                        $("#false-" + data.Parameters[i].Name).val("true");
                        $("#true-" + data.Parameters[i].Name).val("false");
                        $("#true-" + data.Parameters[i].Name).ejRadioButton({ size: "medium" });
                    }
                    else {
                        $("#false-" + data.Parameters[i].Name).ejRadioButton({ size: "medium" });
                        $("#true-" + data.Parameters[i].Name).ejRadioButton({ size: "medium" });
                    }
                    if (data.Parameters[i].Hidden) {
                        $("#true-" + data.Parameters[i].Name).ejRadioButton("disable");
                        $("#false-" + data.Parameters[i].Name).ejRadioButton("disable");
                    }

                }
                else if (data.Parameters[i].ReportParameterData == null && data.Parameters[i].DataType == reportParamType.DateTime) {
                    $("#" + data.Parameters[i].Name).ejDatePicker({
                        value: data.Parameters[i].Values,
                        locale: dateFormat == "dd.MM.yyyy" ? "de-DE" : "en-US",
                        dateFormat: dateFormat
                    });
                    if (data.Parameters[i].Hidden) {
                        $("#" + data.Parameters[i].Name).ejDatePicker("disable");
                    }
                }
                else if (data.Parameters[i].Values != null) {
                    $("#" + data.Parameters[i].Name).val(data.Parameters[i].Values);
                }
            }
        }
    });
});

$(document).on("blur", ".hasdependentValue", function (e) {
    var param = $(this).prev().attr("id") == undefined ? $(this).attr("id") : $(this).prev().attr("id");
    var values = $(this).prev().val() == undefined ? $(this).val() : $(this).prev().val();

    $.ajax({
        type: "POST",
        url: getdependentparameter,
        async: false,
        data: { itemId: createdItemId, name: param, value: values },
        success: function (data) {
            for (var i = 0; i < data.Parameters.length; i++) {
                if (data.Parameters[i].ReportParameterData !== null && data.Parameters[i].ReportParameterData.length > 0) {
                    var listItems = "";
                    for (var j = 0; j < data.Parameters[i].ReportParameterData.length; j++) {
                        listItems += '<option value="' + data.Parameters[i].ReportParameterData[j].ValueField + '">' + data.Parameters[i].ReportParameterData[j].DisplayField + ' </option>';
                    }
                    $("#" + data.Parameters[i].Name).html(listItems);
                    data.Parameters[i].ReportParameterData.forEach(function (item, index) {
                        if (item.IsSelected)
                            $("#" + data.Parameters[i].Name).val(item.ValueField);
                    });

                    if (data.Parameters[i].Values != null) {
                        for (var k = 0; k < data.Parameters[i].Values.length; k++) {
                            $("#" + data.Parameters[i].Name).selectpicker('val', data.Parameters[i].Values);
                        }
                    }
                    $("#" + data.Parameters[i].Name).selectpicker("refresh");
                    if (data.Parameters[i].Values.length == 0 && data.Parameters[i].ReportParameterData.length > 0) {
                        $("#" + data.Parameters[i].Name).selectpicker('val', 'Select Value');
                        $("#" + data.Parameters[i].Name).selectpicker("refresh");
                    }
                }

                var selectedCount = $("#" + data.Parameters[i].Name).parents(".parameter-input").find("ul.dropdown-menu li.selected").length;
                var allListCount = $("#" + data.Parameters[i].Name).parents(".parameter-input").find("ul.dropdown-menu li").length;
                if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find("ul.dropdown-menu li").length > 0) {
                    if (selectedCount == allListCount && data.Parameters[i].MultiValue) {
                        if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom') == false) {
                            if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-select-all-custom') == false) {
                                $("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').after("<div class='bs-deselect-all-custom' style='padding: 6px 0px !important';><span>[[[Clear All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                            }
                        }
                        else {
                            $($("#" + data.Parameters[i].Name).parents(".parameter-input").find("div.bs-select-all-custom").children("span")[0]).text("[[[Clear All]]]");
                            $("#" + data.Parameters[i].Name).parents(".parameter-input").find("div.bs-select-all-custom").removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
                        }

                    }
                    else {
                        if (data.Parameters[i].MultiValue) {
                            if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom') == false) {
                                if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-select-all-custom') == false) {
                                    $("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').after("<div class='bs-select-all-custom' style='padding: 6px 0px !important';><span>[[[Select All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                                }
                            }
                            else {
                                $($("#" + data.Parameters[i].Name).parents(".parameter-input").find(".bs-deselect-all-custom").children("span")[0]).text("[[[Select All]]]");
                                $("#" + data.Parameters[i].Name).parents(".parameter-input").find(".bs-deselect-all-custom").removeClass("bs-deselect-all-custom").addClass("bs-select-all-custom");
                            }
                        }
                        else {
                            if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('div').hasClass('bs-actionsbox')) {
                                $("#" + data.Parameters[i].Name).parents(".parameter-input").find(".bs-actionsbox").remove();
                            }
                        }
                    }
                }
                if (data.Parameters[i].ReportParameterData == null && data.Parameters[i].DataType == reportParamType.Boolean) {
                    if (data.Parameters[i].Values.length > 0 && data.Parameters[i].Values[0].toLowerCase() == "true") {
                        $("#true-" + data.Parameters[i].Name).ejRadioButton({ size: "medium", checked: true });
                        $("#true-" + data.Parameters[i].Name).val("true");
                        $("#false-" + data.Parameters[i].Name).val("false");
                        $("#false-" + data.Parameters[i].Name).ejRadioButton({ size: "medium" });
                    }
                    else if (data.Parameters[i].Values.length > 0) {
                        $("#false-" + data.Parameters[i].Name).ejRadioButton({ size: "medium", checked: true });
                        $("#false-" + data.Parameters[i].Name).val("true");
                        $("#true-" + data.Parameters[i].Name).val("false");
                        $("#true-" + data.Parameters[i].Name).ejRadioButton({ size: "medium" });
                    }
                    else {
                        $("#false-" + data.Parameters[i].Name).ejRadioButton({ size: "medium" });
                        $("#true-" + data.Parameters[i].Name).ejRadioButton({ size: "medium" });
                    }
                    if (data.Parameters[i].Hidden) {
                        $("#true-" + data.Parameters[i].Name).ejRadioButton("disable");
                        $("#false-" + data.Parameters[i].Name).ejRadioButton("disable");
                    }

                }
                else if (data.Parameters[i].ReportParameterData == null && data.Parameters[i].DataType == reportParamType.DateTime) {
                    $("#" + data.Parameters[i].Name).ejDatePicker({
                        value: data.Parameters[i].Values,
                        locale: dateFormat == "dd.MM.yyyy" ? "de-DE" : "en-US",
                        dateFormat: dateFormat
                    });
                    if (data.Parameters[i].Hidden) {
                        $("#" + data.Parameters[i].Name).ejDatePicker("disable");
                    }
                }
                else if (data.Parameters[i].Values != null) {
                    $("#" + data.Parameters[i].Name).val(data.Parameters[i].Values);
                }
            }
        }
    });
});

$(document).on("click", ".hasdependentboolValue", function (e) {
    var param = $(this).prev().attr("name") == undefined ? $(this).attr("name") : $(this).prev().attr("name");
    var values = $(this).prev().val() == undefined ? $(this).val() : $(this).prev().val();

    $.ajax({
        type: "POST",
        url: getdependentparameter,
        async: false,
        data: { itemId: createdItemId, name: param, value: values },
        success: function (data) {
            for (var i = 0; i < data.Parameters.length; i++) {
                if (data.Parameters[i].ReportParameterData !== null && data.Parameters[i].ReportParameterData.length > 0) {
                    var listItems = "";
                    for (var j = 0; j < data.Parameters[i].ReportParameterData.length; j++) {
                        listItems += '<option value="' + data.Parameters[i].ReportParameterData[j].ValueField + '">' + data.Parameters[i].ReportParameterData[j].DisplayField + ' </option>';
                    }
                    $("#" + data.Parameters[i].Name).html(listItems);
                    data.Parameters[i].ReportParameterData.forEach(function (item, index) {
                        if (item.IsSelected)
                            $("#" + data.Parameters[i].Name).val(item.ValueField);
                    });

                    if (data.Parameters[i].Values != null) {
                        for (var k = 0; k < data.Parameters[i].Values.length; k++) {
                            $("#" + data.Parameters[i].Name).selectpicker('val', data.Parameters[i].Values);
                        }
                    }
                    $("#" + data.Parameters[i].Name).selectpicker("refresh");
                    if (data.Parameters[i].Values.length == 0 && data.Parameters[i].ReportParameterData.length > 0) {
                        $("#" + data.Parameters[i].Name).selectpicker('val', 'Select Value');
                        $("#" + data.Parameters[i].Name).selectpicker("refresh");
                    }
                }

                var selectedCount = $("#" + data.Parameters[i].Name).parents(".parameter-input").find("ul.dropdown-menu li.selected").length;
                var allListCount = $("#" + data.Parameters[i].Name).parents(".parameter-input").find("ul.dropdown-menu li").length;
                if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find("ul.dropdown-menu li").length > 0) {
                    if (selectedCount == allListCount && data.Parameters[i].MultiValue) {
                        if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom') == false) {
                            if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-select-all-custom') == false) {
                                $("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').after("<div class='bs-deselect-all-custom' style='padding: 6px 0px !important';><span>[[[Clear All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                            }
                        }
                        else if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom')) {
                            $($("#" + data.Parameters[i].Name).parents(".parameter-input").find("div.bs-select-all-custom").children("span")[0]).text("[[[Clear All]]]");
                            $("#" + data.Parameters[i].Name).parents(".parameter-input").find("div.bs-select-all-custom").removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
                        }

                    }
                    else {
                        if (data.Parameters[i].MultiValue) {
                            if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom') == false) {
                                if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-select-all-custom') == false) {
                                    $("#" + data.Parameters[i].Name).parents(".parameter-input").find('.bs-deselect-all').after("<div class='bs-select-all-custom' style='padding: 6px 0px !important';><span>[[[Select All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                                }
                            }
                            else {
                                $($("#" + data.Parameters[i].Name).parents(".parameter-input").find(".bs-deselect-all-custom").children("span")[0]).text("[[[Select All]]]");
                                $("#" + data.Parameters[i].Name).parents(".parameter-input").find(".bs-deselect-all-custom").removeClass("bs-deselect-all-custom").addClass("bs-select-all-custom");
                            }
                        }
                        else {
                            if ($("#" + data.Parameters[i].Name).parents(".parameter-input").find('div').hasClass('bs-actionsbox')) {
                                $("#" + data.Parameters[i].Name).parents(".parameter-input").find(".bs-actionsbox").remove();
                            }
                        }
                    }
                }
                if (data.Parameters[i].ReportParameterData == null && data.Parameters[i].DataType == reportParamType.Boolean) {
                    if (data.Parameters[i].Values.length > 0 && data.Parameters[i].Values[0].toLowerCase() == "true") {
                        $("#true-" + data.Parameters[i].Name).ejRadioButton({ size: "medium", checked: true });
                        $("#true-" + data.Parameters[i].Name).val("true");
                        $("#false-" + data.Parameters[i].Name).val("false");
                        $("#false-" + data.Parameters[i].Name).ejRadioButton({ size: "medium" });
                    }
                    else if (data.Parameters[i].Values.length > 0) {
                        $("#false-" + data.Parameters[i].Name).ejRadioButton({ size: "medium", checked: true });
                        $("#false-" + data.Parameters[i].Name).val("true");
                        $("#true-" + data.Parameters[i].Name).val("false");
                        $("#true-" + data.Parameters[i].Name).ejRadioButton({ size: "medium" });
                    }
                    else {
                        $("#false-" + data.Parameters[i].Name).ejRadioButton({ size: "medium" });
                        $("#true-" + data.Parameters[i].Name).ejRadioButton({ size: "medium" });
                    }
                    if (data.Parameters[i].Hidden) {
                        $("#true-" + data.Parameters[i].Name).ejRadioButton("disable");
                        $("#false-" + data.Parameters[i].Name).ejRadioButton("disable");
                    }

                }
                else if (data.Parameters[i].ReportParameterData == null && data.Parameters[i].DataType == reportParamType.DateTime) {
                    $("#" + data.Parameters[i].Name).ejDatePicker({
                        value: data.Parameters[i].Values,
                        locale: dateFormat == "dd.MM.yyyy" ? "de-DE" : "en-US",
                        dateFormat: dateFormat
                    });
                    if (data.Parameters[i].Hidden) {
                        $("#" + data.Parameters[i].Name).ejDatePicker("disable");
                    }
                }
                else if (data.Parameters[i].Values != null) {
                    $("#" + data.Parameters[i].Name).val(data.Parameters[i].Values);
                }
            }
        }
    });
});

$(document).on("change", ".form-control", function () {
    if ($(this).val() === "") {
        $(this).parent().addClass("has-error");
    } else {
        $(this).parent().removeClass("has-error");
    }
});
$(document).on("keyup", ".form-control", function (event) {
    if ($(this).val() != "" && $(this).val().indexOf('=') == 0) {
        $(this).parent().removeClass("has-error");
        if ($(this).parent().next().find(".material-checkbox").prop("disabled") == true) {
            $(this).parent().next().find(".material-checkbox").prop("disabled", false);
        }
        $(this).parent().next().find(".material-checkbox").prop("checked", true);
   }
    else if($(this).val() == ""){
        $(this).parent().addClass("has-error");
        $(this).parent().next().find(".material-checkbox").prop("checked", false);
        if($(this).parent().next().find(".parameter-tool-tip").length > 0)
        {
            $(this).parent().next().find(".material-checkbox").prop("disabled", true);
        }
    }
    else if ($(this).val() != "" ) {
        $(this).parent().removeClass("has-error");
    }
});

function validateParameters() {
    var validFlag = true;
    for (var par = 0; par < parameterObj.length; par++) {
        var parameterHasValue = !isEmptyOrWhitespace($("#" + parameterObj[par].Name).val());

        if (!parameterHasValue && $("#" + parameterObj[par].Name).val() == undefined) {
            if ($("#" + parameterObj[par].Name).val() == null) {
                parameterHasValue = false;
            }
            else {
                parameterHasValue = !isEmptyOrWhitespace($("#" + parameterObj[par].Values[0]));
            }
        }
        if (!parameterHasValue && $("#" + parameterObj[par].Name + "-use-default").is(":checked") === false) {
            if ($("#true-" + parameterObj[par].Name).is(':checked') === true || $("#false-" + parameterObj[par].Name).is(':checked') === true) {
                validFlag = true;
            }
            else if ($("#true-" + parameterObj[par].Name).is(':checked') === false && $("#false-" + parameterObj[par].Name).is(':checked') === false) {
                $("#" + parameterObj[par].Name).parent().addClass("has-error");
                validFlag = false;
            }
            else {
                $("#" + parameterObj[par].Name).parent().addClass("has-error");
                validFlag = false;
            }
        }
    }
    return validFlag;
}

$(document).on("click", ".parameter-name .bs-select-all-custom", function (e) {
    $($(this).parents(".parameter-input").find(".parameter-name")[0]).data("selectpicker").selectAll();
    $(this).removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
    $($(this).children("span")[0]).text("[[[Clear All]]]");
    e.stopPropagation();
});


$(document).on("click", ".parameter-name .bs-deselect-all-custom", function (e) {
    $($(this).parents(".parameter-input").find(".parameter-name")[0]).data("selectpicker").deselectAll();
    $(this).removeClass("bs-deselect-all-custom").addClass("bs-select-all-custom");
    $($(this).children("span")[0]).text("[[[Select All]]]");
    e.stopPropagation();
});

$(document).on("click", ".parameter-name", function (e) {
    var selectedCount = $(this).find("li.selected").length;
    var allListCount = $(this).find("li").length;

    if (selectedCount == allListCount) {
        $($(this).find("div.bs-select-all-custom").children("span")[0]).text("[[[Clear All]]]");
        $(this).find("div.bs-select-all-custom").removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
    }
    else {
        $($(this).find(".bs-deselect-all-custom").children("span")[0]).text("[[[Select All]]]");
        $(this).find(".bs-deselect-all-custom").removeClass("bs-deselect-all-custom").addClass("bs-select-all-custom");
    }
    $(this).parent().addClass("active");
    e.stopPropagation();
});