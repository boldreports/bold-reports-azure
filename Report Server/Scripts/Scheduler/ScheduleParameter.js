$(document).ready(function () {
    if (parameterObj.length === 0) {
        url = recurrenceType;
        enableTimeIntervalOption();
    }
    var reportParamType = window.reportParamType;
    var reportElementType = window.reportElementType;
    window.parameterObj.forEach(function (paramObj) {
        if (paramObj.ReportParameterData === null && paramObj.DataType === reportParamType.DateTime) {
            $("#" + paramObj.Name).ejDatePicker({
                value: paramObj.Values,
                locale: dateFormat === "dd.MM.yyyy" ? "de-DE" : "en-US",
                dateFormat: dateFormat
            });
            if (paramObj.Hidden) {
                $("#" + paramObj.Name).ejDatePicker("disable");
            }
        }

        else if (paramObj.ReportParameterData === null && paramObj.DataType === reportParamType.Boolean) {
            if (paramObj.Values.length > 0 && paramObj.Values[0].toLowerCase() === "true") {
                $("#true-" + paramObj.Name).ejRadioButton({ size: "medium", checked: true });
                $("#true-" + paramObj.Name).val("true");
                $("#false-" + paramObj.Name).val("false");
                $("#false-" + paramObj.Name).ejRadioButton({ size: "medium" });
            }
            else if (paramObj.Values.length > 0) {
                $("#false-" + paramObj.Name).ejRadioButton({ size: "medium", checked: true });
                $("#false-" + paramObj.Name).val("true");
                $("#true-" + paramObj.Name).val("false");
                $("#true-" + paramObj.Name).ejRadioButton({ size: "medium" });
            }
            else {
                $("#false-" + paramObj.Name).ejRadioButton({ size: "medium" });
                $("#true-" + paramObj.Name).ejRadioButton({ size: "medium" });
            }
            if (paramObj.Hidden) {
                $("#true-" + paramObj.Name).ejRadioButton("disable");
                $("#false-" + paramObj.Name).ejRadioButton("disable");
            }
        }
        else if (paramObj.ReportParameterData !== null && paramObj.ReportParameterData.length > 0) {

            $("#" + paramObj.Name).selectpicker("refresh");
            if (paramObj.MultiValue) {
                var allListCount = $("#" + paramObj.Name).next().find('ul.dropdown-menu li').length;

                if (allListCount === paramObj.Values.length) {
                    $("#" + paramObj.Name).next().find('.bs-deselect-all').after("<div class='bs-deselect-all-custom' style='padding: 6px 0px !important';><span>[[[Clear All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                }
                else {
                    $("#" + paramObj.Name).next().find('.bs-deselect-all').after("<div class='bs-select-all-custom' style='padding: 6px 0px !important';><span>[[[Select All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                }
            }
            else {
                if ($("#" + paramObj.Name).next().find('div').hasClass('bs-actionsbox')) {
                    $("#" + paramObj.Name).next().find(".bs-actionsbox").remove();
                }
            }

            if (paramObj.Values !== null && paramObj.Values.length > 0) {
                $("#" + paramObj.Name).selectpicker('val', paramObj.Values);

                if (paramObj.Hidden) {
                    $("#" + paramObj.Name).attr("disabled", "disabled");
                    $("#" + paramObj.Name).selectpicker("refresh");
                }
            }
            if (paramObj.Values.length === 0 && paramObj.ReportParameterData.length > 0) {
                $("#" + paramObj.Name).selectpicker('val', 'Select Value');
                $("#" + paramObj.Name).selectpicker("refresh");
            }
        }
        else if (paramObj.ElementType === reportElementType.ComboBox || paramObj.ElementType === reportElementType.MultiValue) {
            $("#" + paramObj.Name).selectpicker("refresh");
        }
        else if (paramObj.Values !== null) {
            $("#" + paramObj.Name).val(paramObj.Values);
        }
    });
    parent.$("#editpopup-container_wrapper").ejWaitingPopup("hide");
    parent.$("#popup-container_wrapper").ejWaitingPopup("hide");
});

$(document).on("change", ".use-default", function () {
    if ($(this).is(":checked")) {
        if ($(this).attr("dataAttrType") === "RadioButton") {
            $("#true-" + $(this).attr("dataAttrId")).ejRadioButton("disable");
            $("#false-" + $(this).attr("dataAttrId")).ejRadioButton("disable");
        } else if ($(this).attr("dataAttrType") === "DateTime") {
            $("#" + $(this).attr("dataAttrId")).ejDatePicker("disable");
        } else if ($(this).attr("dataAttrType") === "Textbox") {
            $("#" + $(this).attr("dataAttrId")).parent().removeClass("has-error");
            $("#" + $(this).attr("dataAttrId")).attr("disabled", "disabled");
        } else {
            $("#" + $(this).attr("dataAttrId")).attr("disabled", "disabled");
            $("#" + $(this).attr("dataAttrId")).selectpicker("refresh");
        }
    }
    else {
        if ($(this).attr("dataAttrType") === "RadioButton") {
            $("#true-" + $(this).attr("dataAttrId")).ejRadioButton("enable");
            $("#false-" + $(this).attr("dataAttrId")).ejRadioButton("enable");
        } else if ($(this).attr("dataAttrType") === "DateTime") {
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
    var param = $(this).prev().attr("id") === undefined ? $(this).attr("id") : $(this).prev().attr("id");
    var values = $(this).prev().val() === undefined ? $(this).val() : $(this).prev().val();

    $.ajax({
        type: "POST",
        url: getdependentparameter,
        async: true,
        data: { itemId: createdItemId, name: param, value: values },
        success: function (data) {
            parent.$("#popup-container_wrapper").ejWaitingPopup("hide");
            dependentOptionValues = JSON.parse(data.OptionVaues);
            data.Parameters.forEach(function (dataParameter) {
                if (dataParameter.ReportParameterData !== null && dataParameter.ReportParameterData.length > 0) {

                    $("#" + dataParameter.Name).html(dependentOptionValues[dataParameter.Name]);
                    if (dataParameter.Values !== null && dataParameter.Values.length > 0) {
                        $("#" + dataParameter.Name).selectpicker('val', dataParameter.Values);
                    }
                    $("#" + dataParameter.Name).selectpicker("refresh");
                    if (dataParameter.Values.length === 0 && dataParameter.ReportParameterData.length > 0) {
                        $("#" + dataParameter.Name).selectpicker('val', 'Select Value');
                        $("#" + dataParameter.Name).selectpicker("refresh");
                    }
                }

                var selectedCount = $("#" + dataParameter.Name).parents(".parameter-input").find("ul.dropdown-menu li.selected").length;
                var allListCount = $("#" + dataParameter.Name).parents(".parameter-input").find("ul.dropdown-menu li").length;
                if ($("#" + dataParameter.Name).parents(".parameter-input").find("ul.dropdown-menu li").length > 0) {
                    if (selectedCount === allListCount && dataParameter.MultiValue) {
                        if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom') === false) {
                            if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-select-all-custom') === false) {
                                $("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').after("<div class='bs-deselect-all-custom' style='padding: 6px 0px !important';><span>[[[Clear All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                            }
                        }
                        else {
                            $($("#" + dataParameter.Name).parents(".parameter-input").find("div.bs-select-all-custom").children("span")[0]).text("[[[Clear All]]]");
                            $("#" + dataParameter.Name).parents(".parameter-input").find("div.bs-select-all-custom").removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
                        }

                    }
                    else {
                        if (dataParameter.MultiValue) {
                            if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom') === false) {
                                if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-select-all-custom') === false) {
                                    $("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').after("<div class='bs-select-all-custom' style='padding: 6px 0px !important';><span>[[[Select All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                                }
                            }
                            else {
                                $($("#" + dataParameter.Name).parents(".parameter-input").find(".bs-deselect-all-custom").children("span")[0]).text("[[[Select All]]]");
                                $("#" + dataParameter.Name).parents(".parameter-input").find(".bs-deselect-all-custom").removeClass("bs-deselect-all-custom").addClass("bs-select-all-custom");
                            }
                        }
                        else {
                            if ($("#" + dataParameter.Name).parents(".parameter-input").find('div').hasClass('bs-actionsbox')) {
                                $("#" + dataParameter.Name).parents(".parameter-input").find(".bs-actionsbox").remove();
                            }
                        }
                    }
                }
                if (dataParameter.ReportParameterData === null && dataParameter.DataType === reportParamType.Boolean) {
                    if (dataParameter.Values.length > 0 && dataParameter.Values[0].toLowerCase() === "true") {
                        $("#true-" + dataParameter.Name).ejRadioButton({ size: "medium", checked: true });
                        $("#true-" + dataParameter.Name).val("true");
                        $("#false-" + dataParameter.Name).val("false");
                        $("#false-" + dataParameter.Name).ejRadioButton({ size: "medium" });
                    }
                    else if (dataParameter.Values.length > 0) {
                        $("#false-" + dataParameter.Name).ejRadioButton({ size: "medium", checked: true });
                        $("#false-" + dataParameter.Name).val("true");
                        $("#true-" + dataParameter.Name).val("false");
                        $("#true-" + dataParameter.Name).ejRadioButton({ size: "medium" });
                    }
                    else {
                        $("#false-" + dataParameter.Name).ejRadioButton({ size: "medium" });
                        $("#true-" + dataParameter.Name).ejRadioButton({ size: "medium" });
                    }
                    if (dataParameter.Hidden) {
                        $("#true-" + dataParameter.Name).ejRadioButton("disable");
                        $("#false-" + dataParameter.Name).ejRadioButton("disable");
                    }

                }
                else if (dataParameter.ReportParameterData === null && dataParameter.DataType === reportParamType.DateTime) {
                    $("#" + dataParameter.Name).ejDatePicker({
                        value: dataParameter.Values,
                        locale: dateFormat === "dd.MM.yyyy" ? "de-DE" : "en-US",
                        dateFormat: dateFormat
                    });
                    if (dataParameter.Hidden) {
                        $("#" + dataParameter.Name).ejDatePicker("disable");
                    }
                }
                else if (dataParameter.Values !== null) {
                    $("#" + dataParameter.Name).val(dataParameter.Values);
                }
            });
        }
    });
});

$(document).on("blur", ".hasdependentValue", function (e) {
    var param = $(this).prev().attr("id") === undefined ? $(this).attr("id") : $(this).prev().attr("id");
    var values = $(this).prev().val() === undefined ? $(this).val() : $(this).prev().val();

    $.ajax({
        type: "POST",
        url: getdependentparameter,
        async: false,
        data: { itemId: createdItemId, name: param, value: values },
        success: function (data) {
            dependentOptionValues = JSON.parse(data.OptionVaues);
            data.Parameters.forEach(function (dataParameter) {
                if (dataParameter.ReportParameterData !== null && dataParameter.ReportParameterData.length > 0) {
                    $("#" + dataParameter.Name).html(dependentOptionValues[dataParameter.Name]);

                    if (dataParameter.Values !== null && dataParameter.Values.length > 0) {
                        $("#" + dataParameter.Name).selectpicker('val', dataParameter.Values);
                    }
                    $("#" + dataParameter.Name).selectpicker("refresh");
                    if (dataParameter.Values.length === 0 && dataParameter.ReportParameterData.length > 0) {
                        $("#" + dataParameter.Name).selectpicker('val', 'Select Value');
                        $("#" + dataParameter.Name).selectpicker("refresh");
                    }
                }

                var selectedCount = $("#" + dataParameter.Name).parents(".parameter-input").find("ul.dropdown-menu li.selected").length;
                var allListCount = $("#" + dataParameter.Name).parents(".parameter-input").find("ul.dropdown-menu li").length;
                if ($("#" + dataParameter.Name).parents(".parameter-input").find("ul.dropdown-menu li").length > 0) {
                    if (selectedCount === allListCount && dataParameter.MultiValue) {
                        if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom') === false) {
                            if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-select-all-custom') === false) {
                                $("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').after("<div class='bs-deselect-all-custom' style='padding: 6px 0px !important';><span>[[[Clear All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                            }
                        }
                        else {
                            $($("#" + dataParameter.Name).parents(".parameter-input").find("div.bs-select-all-custom").children("span")[0]).text("[[[Clear All]]]");
                            $("#" + dataParameter.Name).parents(".parameter-input").find("div.bs-select-all-custom").removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
                        }

                    }
                    else {
                        if (dataParameter.MultiValue) {
                            if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom') === false) {
                                if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-select-all-custom') === false) {
                                    $("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').after("<div class='bs-select-all-custom' style='padding: 6px 0px !important';><span>[[[Select All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                                }
                            }
                            else {
                                $($("#" + dataParameter.Name).parents(".parameter-input").find(".bs-deselect-all-custom").children("span")[0]).text("[[[Select All]]]");
                                $("#" + dataParameter.Name).parents(".parameter-input").find(".bs-deselect-all-custom").removeClass("bs-deselect-all-custom").addClass("bs-select-all-custom");
                            }
                        }
                        else {
                            if ($("#" + dataParameter.Name).parents(".parameter-input").find('div').hasClass('bs-actionsbox')) {
                                $("#" + dataParameter.Name).parents(".parameter-input").find(".bs-actionsbox").remove();
                            }
                        }
                    }
                }
                if (dataParameter.ReportParameterData === null && dataParameter.DataType === reportParamType.Boolean) {
                    if (dataParameter.Values.length > 0 && dataParameter.Values[0].toLowerCase() === "true") {
                        $("#true-" + dataParameter.Name).ejRadioButton({ size: "medium", checked: true });
                        $("#true-" + dataParameter.Name).val("true");
                        $("#false-" + dataParameter.Name).val("false");
                        $("#false-" + dataParameter.Name).ejRadioButton({ size: "medium" });
                    }
                    else if (dataParameter.Values.length > 0) {
                        $("#false-" + dataParameter.Name).ejRadioButton({ size: "medium", checked: true });
                        $("#false-" + dataParameter.Name).val("true");
                        $("#true-" + dataParameter.Name).val("false");
                        $("#true-" + dataParameter.Name).ejRadioButton({ size: "medium" });
                    }
                    else {
                        $("#false-" + dataParameter.Name).ejRadioButton({ size: "medium" });
                        $("#true-" + dataParameter.Name).ejRadioButton({ size: "medium" });
                    }
                    if (dataParameter.Hidden) {
                        $("#true-" + dataParameter.Name).ejRadioButton("disable");
                        $("#false-" + dataParameter.Name).ejRadioButton("disable");
                    }

                }
                else if (dataParameter.ReportParameterData === null && dataParameter.DataType === reportParamType.DateTime) {
                    $("#" + dataParameter.Name).ejDatePicker({
                        value: dataParameter.Values,
                        locale: dateFormat === "dd.MM.yyyy" ? "de-DE" : "en-US",
                        dateFormat: dateFormat
                    });
                    if (dataParameter.Hidden) {
                        $("#" + dataParameter.Name).ejDatePicker("disable");
                    }
                }
                else if (dataParameter.Values !== null) {
                    $("#" + dataParameter.Name).val(dataParameter.Values);
                }
            });
        }
    });
});

$(document).on("click", ".hasdependentboolValue", function (e) {
    var param = $(this).prev().attr("name") === undefined ? $(this).attr("name") : $(this).prev().attr("name");
    var values = $(this).prev().val() === undefined ? $(this).val() : $(this).prev().val();

    $.ajax({
        type: "POST",
        url: getdependentparameter,
        async: false,
        data: { itemId: createdItemId, name: param, value: values },
        success: function (data) {
            dependentOptionValues = JSON.parse(data.OptionVaues);
            data.Parameters.forEach(function (dataParameter) {
                if (dataParameter.ReportParameterData !== null && dataParameter.ReportParameterData.length > 0) {

                    $("#" + dataParameter.Name).html(dependentOptionValues[dataParameter.Name]);

                    if (dataParameter.Values !== null && dataParameter.Values.length > 0) {
                        $("#" + dataParameter.Name).selectpicker('val', dataParameter.Values);
                    }
                    $("#" + dataParameter.Name).selectpicker("refresh");
                    if (dataParameter.Values.length === 0 && dataParameter.ReportParameterData.length > 0) {
                        $("#" + dataParameter.Name).selectpicker('val', 'Select Value');
                        $("#" + dataParameter.Name).selectpicker("refresh");
                    }
                }

                var selectedCount = $("#" + dataParameter.Name).parents(".parameter-input").find("ul.dropdown-menu li.selected").length;
                var allListCount = $("#" + dataParameter.Name).parents(".parameter-input").find("ul.dropdown-menu li").length;
                if ($("#" + dataParameter.Name).parents(".parameter-input").find("ul.dropdown-menu li").length > 0) {
                    if (selectedCount === allListCount && dataParameter.MultiValue) {
                        if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom') === false) {
                            if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-select-all-custom') === false) {
                                $("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').after("<div class='bs-deselect-all-custom' style='padding: 6px 0px !important';><span>[[[Clear All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                            }
                        }
                        else if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom')) {
                            $($("#" + dataParameter.Name).parents(".parameter-input").find("div.bs-select-all-custom").children("span")[0]).text("[[[Clear All]]]");
                            $("#" + dataParameter.Name).parents(".parameter-input").find("div.bs-select-all-custom").removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
                        }

                    }
                    else {
                        if (dataParameter.MultiValue) {
                            if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-deselect-all-custom') === false) {
                                if ($("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').next().hasClass('bs-select-all-custom') === false) {
                                    $("#" + dataParameter.Name).parents(".parameter-input").find('.bs-deselect-all').after("<div class='bs-select-all-custom' style='padding: 6px 0px !important';><span>[[[Select All]]]</span><span class='bs-select-custom-tick glyphicon glyphicon-ok' style='margin-right:35px !important';></span></div>");
                                }
                            }
                            else {
                                $($("#" + dataParameter.Name).parents(".parameter-input").find(".bs-deselect-all-custom").children("span")[0]).text("[[[Select All]]]");
                                $("#" + dataParameter.Name).parents(".parameter-input").find(".bs-deselect-all-custom").removeClass("bs-deselect-all-custom").addClass("bs-select-all-custom");
                            }
                        }
                        else {
                            if ($("#" + dataParameter.Name).parents(".parameter-input").find('div').hasClass('bs-actionsbox')) {
                                $("#" + dataParameter.Name).parents(".parameter-input").find(".bs-actionsbox").remove();
                            }
                        }
                    }
                }
                if (dataParameter.ReportParameterData === null && dataParameter.DataType === reportParamType.Boolean) {
                    if (dataParameter.Values.length > 0 && dataParameter.Values[0].toLowerCase() === "true") {
                        $("#true-" + dataParameter.Name).ejRadioButton({ size: "medium", checked: true });
                        $("#true-" + dataParameter.Name).val("true");
                        $("#false-" + dataParameter.Name).val("false");
                        $("#false-" + dataParameter.Name).ejRadioButton({ size: "medium" });
                    }
                    else if (dataParameter.Values.length > 0) {
                        $("#false-" + dataParameter.Name).ejRadioButton({ size: "medium", checked: true });
                        $("#false-" + dataParameter.Name).val("true");
                        $("#true-" + dataParameter.Name).val("false");
                        $("#true-" + dataParameter.Name).ejRadioButton({ size: "medium" });
                    }
                    else {
                        $("#false-" + dataParameter.Name).ejRadioButton({ size: "medium" });
                        $("#true-" + dataParameter.Name).ejRadioButton({ size: "medium" });
                    }
                    if (dataParameter.Hidden) {
                        $("#true-" + dataParameter.Name).ejRadioButton("disable");
                        $("#false-" + dataParameter.Name).ejRadioButton("disable");
                    }

                }
                else if (dataParameter.ReportParameterData === null && dataParameter.DataType === reportParamType.DateTime) {
                    $("#" + dataParameter.Name).ejDatePicker({
                        value: dataParameter.Values,
                        locale: dateFormat === "dd.MM.yyyy" ? "de-DE" : "en-US",
                        dateFormat: dateFormat
                    });
                    if (dataParameter.Hidden) {
                        $("#" + dataParameter.Name).ejDatePicker("disable");
                    }
                }
                else if (dataParameter.Values !== null) {
                    $("#" + dataParameter.Name).val(dataParameter.Values);
                }
            });
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
    if ($(this).val() !== "" && $(this).val().indexOf('=') === 0) {
        $(this).parent().removeClass("has-error");
        if ($(this).parent().next().find(".material-checkbox").prop("disabled") === true) {
            $(this).parent().next().find(".material-checkbox").prop("disabled", false);
        }
        $(this).parent().next().find(".material-checkbox").prop("checked", true);
    }
    else if ($(this).val() === "") {
        $(this).parent().addClass("has-error");
        $(this).parent().next().find(".material-checkbox").prop("checked", false);
        if ($(this).parent().next().find(".parameter-tool-tip").length > 0) {
            $(this).parent().next().find(".material-checkbox").prop("disabled", true);
        }
    }
    else if ($(this).val() !== "") {
        $(this).parent().removeClass("has-error");
    }
});

function validateParameters() {
    var validFlag = true;
    parameterObj.forEach(function (parameterObject) {
        var parameterHasValue = !isEmptyOrWhitespace($("#" + parameterObject.Name).val());

        if (!parameterHasValue && $("#" + parameterObject.Name).val() === undefined) {
            if ($("#" + parameterObject.Name).val() === null) {
                parameterHasValue = false;
            }
            else {
                parameterHasValue = !isEmptyOrWhitespace($("#" + parameterObject.Values[0]));
            }
        }
        if (!parameterHasValue && $("#" + parameterObject.Name + "-use-default").is(":checked") === false) {
            if ($("#true-" + parameterObject.Name).is(':checked') === true || $("#false-" + parameterObject.Name).is(':checked') === true) {
                validFlag = true;
            }
            else if ($("#true-" + parameterObject.Name).is(':checked') === false && $("#false-" + parameterObject.Name).is(':checked') === false) {
                $("#" + parameterObject.Name).parent().addClass("has-error");
                validFlag = false;
            }
            else {
                $("#" + parameterObject.Name).parent().addClass("has-error");
                validFlag = false;
            }
        }
    });
    return validFlag;
}

$(document).on("click", ".parameter-name .bs-select-all-custom", function (e) {
    $($(this).parents(".parameter-input").find(".parameter-name")[0]).data("selectpicker").selectAll();
    $(this).removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
    $($(this).children("span")[0]).text(window.Server.App.LocalizationContent.Clear);
    e.stopPropagation();
});


$(document).on("click", ".parameter-name .bs-deselect-all-custom", function (e) {
    $($(this).parents(".parameter-input").find(".parameter-name")[0]).data("selectpicker").deselectAll();
    $(this).removeClass("bs-deselect-all-custom").addClass("bs-select-all-custom");
    $($(this).children("span")[0]).text(window.Server.App.LocalizationContent.Select);
    e.stopPropagation();
});

$(document).on("click", ".parameter-name", function (e) {
    var selectedCount = $(this).find("li.selected").length;
    var allListCount = $(this).find("li").length;

    if (selectedCount === allListCount) {
        $($(this).find("div.bs-select-all-custom").children("span")[0]).text(window.Server.App.LocalizationContent.Clear);
        $(this).find("div.bs-select-all-custom").removeClass("bs-select-all-custom").addClass("bs-deselect-all-custom");
    }
    else {
        $($(this).find(".bs-deselect-all-custom").children("span")[0]).text(window.Server.App.LocalizationContent.Select);
        $(this).find(".bs-deselect-all-custom").removeClass("bs-deselect-all-custom").addClass("bs-select-all-custom");
    }
    $(this).parent().addClass("active");
    e.stopPropagation();
});
