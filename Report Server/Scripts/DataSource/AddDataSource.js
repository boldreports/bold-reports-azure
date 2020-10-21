$(function () {
    var selectedDatasourceDetails = null;
    var inputvalue = parent.$("#update-data-source-popup-iframe").contents().find(".input-value").children().val();
    if (inputvalue != undefined) {
        parent.$("#datasource-popup-iframe").contents().find("#new_datasource_name").val(inputvalue);
    }

    $(document).on("change", "#connect_option_prompt", function () {
        onConnectionTypeChange("connect_option_prompt");
    });

    $(document).on("change", "#connect_option_store", function () {
        onConnectionTypeChange("connect_option_store");
    });

    $(document).on("change", "#connect_option_windows", function () {
        onConnectionTypeChange("connect_option_windows");
    });

    $(document).on("change", "#connect_option_none", function () {
        onConnectionTypeChange("connect_option_none");
    });

    parent.$("#datasource-popup_wrapper").ejWaitingPopup("hide");
    $(".connection-type-server").attr("disabled", "disabled");
    $("#test_connection").attr("disabled", "disabled");
    $(".connection-type-server").closest('td').removeClass("has-error");
    $(".connection-type-prompt").removeAttr("disabled");
    $("#enable_windows_prompt").prop("checked", false);
    $("#enable_impersonate").prop("checked", false);
    $("#enable_windows_stored").prop("checked", false);

    $("#datasource-type").on("change", function (e) {
        if ($("#datasource-type").val() != "XML" && $("#new_datasource_connectionstring").val() != "") {
            var connectUsing = $('input:radio[name=connect_using]:checked').val().toLowerCase();
            if (connectUsing === "store" && ($("#connection_stored_username").val() === "" || $("#connection_stored_password").val() === "")) {
                $("#test_connection").attr("disabled", "disabled");
            }
            else {
                $("#test_connection").removeAttr("disabled");
            }
        } else {
            $("#test_connection").attr("disabled", "disabled");
        }
    });

    $("#datasource_popup_module input").keypress(function (e) {
        if (e.which == 13 && $("#publish_datasource").attr("disabled") != "disabled" && e.target.Id != "publish_datasource") {
            if ($(".btn-link").is(":focus")) {
                parent.onDataSourceDialogClose();
            } else {
                addNewDataSource();
            }
        }
    });

    $.validator.addMethod("isValidName", function (value, element) {
        return IsValidName("name", value);
    }, window.Server.App.LocalizationContent.AvoidSpecialCharactors);

    $.validator.addMethod("isRequired", function (value, element) {
        return !isEmptyOrWhitespace(value);
    }, window.Server.App.LocalizationContent.ItemNameValidator);


    $.validator.addMethod("requiredConnectionString", function (value, element) {
        var connectUsing = $(element).closest('table').find('input:radio[name=connect_using]:checked').val();
        if (connectUsing != "None" && $.trim(value) == '' && $(element).closest('table').find("#datasource-type").val() != "XML")
            return false;
        else
            return true;

    }, window.Server.App.LocalizationContent.EmptyConnectionString);

    $(".showHidePassword").on("mousedown", function () {
        if ($(this).siblings("input").is(":password")) {
            $(this).siblings("input").attr('type', 'text');
        }
        else {
            $(this).siblings("input").attr('type', 'password');
        }
    });

    $(".showHidePassword").on("mouseup", function () {
        if ($(this).siblings("input").is(":password")) {
            $(this).siblings("input").attr('type', 'text');
        }
        else {
            $(this).siblings("input").attr('type', 'password');
        }
    });

    $(".showHidePassword").mouseleave(function () {
        $(this).siblings("input").attr('type', 'password');
    });

    $("#datasource_popup_module").validate({
        errorElement: 'div',
        onkeyup: function(element, event) {
            if ($(element).attr('id') == "connection_stored_password")
            {
                passwordField = true;
            } else if ($(element).attr('id') == "connection_stored_username") {
                userField = true;
            }
            if (event.keyCode != 9) {
                var validation = $(element).valid();
                if (validation) {
                    if (($("#connection_stored_username").val() != "") && ($("#connection_stored_password").val() != "") && ($("#new_datasource_connectionstring").val() != "")) {
                        if ($("#datasource-type").val() != "XML") {
                            $("#test_connection").removeAttr("disabled");
                        }
                    }

                } else {
                    if ($("#datasource-type").val() != "XML") {
                        $("#test_connection").attr("disabled", "disabled");
                    }
                }
            }
            if (event.keyCode == 8 || event.keyCode == 46 || !$(element).valid()) {
                $("#datasource_name_validation_error").parent('span').removeClass('has-error');
                $("#datasource_name_validation_error").html("");
            } else true;
        },
        onfocusout: function (element) {
            var validation = $(element).valid();
            if(validation)
            {
                if (($("#connection_stored_username").val() != "") && ($("#connection_stored_password").val() != "") && ($("#new_datasource_connectionstring").val() != "")) {
                    if ($("#datasource-type").val() != "XML") {
                            $("#test_connection").removeAttr("disabled");
                        }
                }

            } else {
                if ($("#datasource-type").val() != "XML") {
                    $("#test_connection").attr("disabled", "disabled");
                }
            }
        },
        rules: {
            "new_datasource_name": {
                isRequired: true,
                isValidName: true
            },
            "new_datasource_connectionstring": {
                isRequired: true,
                requiredConnectionString: true
            },
            "connection_stored_username": {
                isRequired: true

            },
            "connection_stored_password": {
                isRequired: true
            }
        },
        messages: {
            "new_datasource_name": {
                isRequired: window.Server.App.LocalizationContent.DatasourceValidator
            },
            "new_datasource_connectionstring": {
                isRequired: window.Server.App.LocalizationContent.EmptyConnectionString
            },
            "connection_stored_username": {
                isRequired: window.Server.App.LocalizationContent.CredentialRequired

            },
            "connection_stored_password": {
                isRequired: window.Server.App.LocalizationContent.CredentialRequired
            }

        },
        highlight: function (element) {            
            $(element).closest('td').addClass("has-error");          
        },
        unhighlight: function (element) {
            $(element).closest('td').removeClass('has-error');
            $(element).closest('td').find("div.datasource-validation-messages").html("");
            if ($(element).attr('id') == "connection_stored_username")
            {
                $(element).closest('div').find("span#datasource_credential_validation_error1").html("");
                if ($("#connection_stored_password").val() == ""&& passwordField) {
                    $(element).closest('div').find("span#datasource_credential_validation_error2").html(window.Server.App.LocalizationContent.CredentialRequired);
                }

            }                
            else if ($(element).attr('id') == "connection_stored_password")
            {
                $(element).closest('div').find("span#datasource_credential_validation_error2").html("");
                if($("#connection_stored_username").val() == "" && userField)
                {
                    $(element).closest('div').find("span#datasource_credential_validation_error1").html(window.Server.App.LocalizationContent.CredentialRequired);
                }
            }
                
        },
        errorPlacement: function (error, element) {            
            if ($(element).attr('id') == "connection_stored_username") {
                $(element).closest('div').find("span#datasource_credential_validation_error2").html("");
                $(element).closest('div').find("span#datasource_credential_validation_error1").html(error.html());
            }
            else if ($(element).attr('id') == "connection_stored_password") {
                $(element).closest('div').find("span#datasource_credential_validation_error1").html("");
                $(element).closest('div').find("span#datasource_credential_validation_error2").html(error.html());
            }
            else
                $(element).closest('td').find("div").html(error.html());
        }
    });
});

var userField = false;
var passwordField = false;

function onConnectionTypeChange(args) {
    $("#connect_prop .datasource-validation-messages").html("");
    switch (args) {
        case "connect_option_prompt":
            $(".connection-type-server").attr("disabled", "disabled");
            $(".connection-type-server").closest('td').removeClass("has-error");
            $(".connection-type-prompt").removeAttr("disabled");
            $("#enable_windows_prompt").prop("checked", false);
            $("#enable_impersonate").prop("checked", false);
            $("#enable_windows_stored").prop("checked", false);
            if ($("#datasource-type").val() != "XML" && $("#new_datasource_connectionstring").val() === "") {
                $("#test_connection").attr("disabled", "disabled");
            }
            else {
                $("#test_connection").removeAttr("disabled");
            }
            $("#datasource_credential_validation_error").html("");
            break;
        case "connect_option_store":
            userField = false;
            passwordField = false;
            $(".connection-type-server").removeAttr("disabled");
            $(".connection-type-prompt").attr("disabled", "disabled");
            $("#enable_windows_prompt").prop("checked", false);
            $("#enable_impersonate").prop("checked", false);
            $("#enable_windows_stored").prop("checked", false);
            if (($("#connection_stored_username").val() != "") && ($("#connection_stored_password").val() != "") && ($("#new_datasource_connectionstring").val() != "")) {
                if ($("#datasource-type").val() != "XML") {
                    $("#test_connection").removeAttr("disabled");
                }
            } else if ($("#datasource-type").val() != "XML") {
                $("#test_connection").attr("disabled", "disabled");
            }
            break;
        case "connect_option_windows":
            $(".connection-type-server").attr("disabled", "disabled");
            $(".connection-type-server").closest('td').removeClass("has-error");
            $(".connection-type-prompt").attr("disabled", "disabled");
            $("#enable_windows_prompt").prop("checked", false);
            $("#enable_impersonate").prop("checked", false);
            $("#enable_windows_stored").prop("checked", false);
            if ($("#datasource-type").val() != "XML" && $("#new_datasource_connectionstring").val() != "") {
                $("#test_connection").removeAttr("disabled");
            }
            $("#datasource_credential_validation_error").html("");
            break;
        case "connect_option_none":
            $(".connection-type-server").attr("disabled", "disabled");
            $(".connection-type-server").closest('td').removeClass("has-error");
            $(".connection-type-prompt").attr("disabled", "disabled");
            $("#enable_windows_prompt").prop("checked", false);
            $("#enable_impersonate").prop("checked", false);
            $("#enable_windows_stored").prop("checked", false);
            if ($("#datasource-type").val() != "XML" && $("#new_datasource_connectionstring").val() != "") {
                $("#test_connection").removeAttr("disabled");
            }
            $("#datasource_credential_validation_error").html("");
            break;
    }
}

function addNewDataSource() {
    if (currentDatasourceTypeSelection === "new-datasource") {

        if (!$("#datasource_popup_module").valid()) {
            return;
        }
        else {
            showWaitingPopup(waitingPopUpElement);
            var postData = getNewDataSourceFields();
            $.ajax({
                type: "POST",
                url: addDatasourceUrl,
                data: postData,
                success: function (data) {
                    if (data.result.IsNameExist) {
                        $("#datasource_name_validation_error").parent('span').addClass("has-error");
                        $("#datasource_name_validation_error").html(window.Server.App.LocalizationContent.IsDataSourceExist);
                    }
                    else {
                        if (data.result.ConnectionStringStatus) {
                            if (data.result.Status) {
                                selectedDatasourceDetails = { Name: postData.Name, Id: data.result.PublishedDataSourceId };
                                $("#datasource_name_validation_error").parent('span').removeClass("has-error");
                                $("#datasource_name_validation_error").html("");
                                updateDatasetCreationHeader(postData.Name, postData.DataSourceType);
                                $("#move-to-next").addClass("connect-button-style").show();
                            }
                            else {
                                $("#connection_test_validation_error").html(window.Server.App.LocalizationContent.ErrorCreatingdatasource);
                            }
                        }
                        else {
                            $("#datasource_connstring_validation_error").closest('td').addClass("has-error");
                            $("#datasource_connstring_validation_error").html(data.result.Message);
                        }
                    }

                    hideWaitingPopup(waitingPopUpElement);
                }
            });
        }
    }
    else if (currentDatasourceTypeSelection === "existing-datasource") {
        showWaitingPopup(waitingPopUpElement);
        var gridObj = $("#add_datasource_grid").data("ejGrid");
        if (gridObj.model.selectedRecords.length <= 0) {
            $("#validation-datasource-select-error").show();
        }
        else {
            selectedDatasourceDetails = { Name: gridObj.model.selectedRecords[0].Name, Id: gridObj.model.selectedRecords[0].Id };
            updateDatasetCreationHeader(gridObj.model.selectedRecords[0].Name, "");
            $("#details-back, #move-to-next").show();
        }

        hideWaitingPopup(waitingPopUpElement);
    }
}

function createNewDataSource() {
        if (!$("#datasource_popup_module").valid()) {
           return;
     }
        else {
            showWaitingPopup(waitingPopUpElement);
            var postData = getNewDataSourceFields();
            $.ajax({
                type: "POST",
                url: addDatasourceUrl,
                data: postData,
                success: function (data) {
                    if (data.result.IsNameExist) {
                        $("#datasource_name_validation_error").parent('span').addClass("has-error");
                        $("#datasource_name_validation_error").html(window.Server.App.LocalizationContent.IsDataSourceExist);
                   }
                    else {
                        if (data.result.ConnectionStringStatus) {
                            if (data.result.Status) {
                                selectedDatasourceDetails = { Name: postData.Name, Id: data.result.PublishedDataSourceId };
                                $("#datasource_name_validation_error").parent('span').removeClass("has-error");
                                $("#datasource_name_validation_error").html("");
                                parent.messageBox("su-datasource", window.Server.App.LocalizationContent.AddDatasourceLabel, window.Server.App.LocalizationContent.AddDataSourceSuccess, "success", function () {
                                    $("#add-dataset-close").trigger("click");
                                    var gridName = window.parent.$('#item-grid-container').attr("data-grid-name");
                                    if ($(".default-pages").find("#create-dataset-connection")) {
                                        var Itemtype = parent.$("#create-dataset-connection").val();
                                        if (Itemtype == "datasource-but") {
                                            refreshScheduleGrid();
                                    }
                                  }
                                  if (gridName == "datasources") {
                                      parent.ResetGrid();
                                  }
                                  parent.onCloseMessageBox();

                              });
                             SuccessAlert(window.Server.App.LocalizationContent.CreateDatasource, window.Server.App.LocalizationContent.CreateDatasourceSuccess, 7000);
                        }
                        else {
                             $("#connection_test_validation_error").html(window.Server.App.LocalizationContent.ErrorCreatingdatasource);
                             parent.messageBox("su-datasource", window.Server.App.LocalizationContent.AddDatasourceLabel, window.Server.App.LocalizationContent.FailedCreateDatasource, "success");
                        }
                    }
                      else {
                          $("#datasource_connstring_validation_error").closest('td').addClass("has-error");
                          $("#datasource_connstring_validation_error").html(data.result.Message);
                     }
                  }

                    hideWaitingPopup(waitingPopUpElement);
             }
            });
      }
}

function refreshScheduleGrid() {
    if (parent.$(".default-pages").length === 1) {
        parent.location.reload();
    }
}
function updateDatasetCreationHeader(datasetName, datasetType) {
    moveStepper("front", 2);
    $(".modal-dataset-body").hide();
    $(".modal-dataset-body-creation").show();
    $("#created-dataset-name").text(datasetName);
    $("#created-dataset-type").text(datasetType);
    $("#dataset-connect").hide();
}


function getNewDataSourceFields() {
    var dataSourceName = $("#new_datasource_name").val();
    var connectionString = $("#new_datasource_connectionstring").val();
    var connectUsing = $('input:radio[name=connect_using]:checked').val();
    var storedUserName = $("#connection_stored_username").val();
    var storedPassword = $("#connection_stored_password").val();
    var promptText = $("#prompt_text").val();
    var promptWindowsEnabled = $("#enable_windows_prompt").prop("checked");
    var storedWindowsEnabled = $("#enable_windows_stored").prop("checked");
    var userImpersonate = $("#enable_impersonate").prop("checked");
    var dataSourceType = $("#datasource-type").val();
    var dataSourceDescription = $("#new_datasource_description").val();
    var postData = {
        Name: dataSourceName,
        Description: dataSourceDescription,
        DataSourceType: dataSourceType,
        ConnectionString: connectionString,
        ConnectUsing: connectUsing,
        UserName: storedUserName,
        Password: storedPassword,
        PromptText: promptText,
        EnablePromptWindowsAuth: promptWindowsEnabled,
        EnableStoredWindowsAuth: storedWindowsEnabled,
        ImpersonateUser: userImpersonate,
    }
    return postData;
}

function onTestDataSourceConnection() {
    $("#connection_test_validation_error").html("");
    parent.$("#datasource-popup_wrapper").ejWaitingPopup("show");
    if ($("#datasource_popup_module").valid()) {
        var postData = getNewDataSourceFields();

        $.ajax({
            type: "POST",
            url: testdatasourceconnectionUrl,
            data: postData,
            success: function (data) {
                parent.$("#datasource-popup_wrapper").ejWaitingPopup("hide");
                if (data.result.ConnectionStringStatus) {
                    if (data.result.Status) {
                        $("#connection_test_validation_error").html("<span style='color:green'>" + data.result.Message + "</span>");
                    }
                    else {
                        $("#connection_test_validation_error").html("<span style='color:red'>" + data.result.Message + "</span>");
                    }
                }
                else {
                    $("#datasource_connstring_validation_error").html(data.result.Message);
                }
            }
        });
    }
    else {
        parent.$("#datasource-popup_wrapper").ejWaitingPopup("hide");
    }
}
$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        $('.PopupClose').click();
        window.parent.$("#createButton").focus();
    }
});

$(document).on('click', '#datasource-dropdown .bootstrap-select ul.dropdown-menu li', function () {
    var dataSourceType = $("#datasource-type").val();

    if (dataSourceType === "XML") {
        $(".disable_connections").css('display', 'none');
    } else {
        $(".disable_connections").removeAttr("style");
    }

    if (dataSourceType === "SQLCE" || dataSourceType === "OLEDB" || dataSourceType === "Oracle" || dataSourceType === "ODBC" || dataSourceType === "OData" || dataSourceType === "PostgreSQL") {
        $(".disable_impersonate").css('display', 'none');
    } else {
        $(".disable_impersonate").css('display', 'block');
    }
});

$(document).on('keyup', '#new_datasource_connectionstring', function () {
    if ($("#datasource-type").val() != "XML" && $("#new_datasource_connectionstring").val() != "") {
        var connectUsing = $('input:radio[name=connect_using]:checked').val().toLowerCase();
        if (connectUsing === "store" && ($("#connection_stored_username").val() === "" || $("#connection_stored_password").val() === "")) {
            $("#test_connection").attr("disabled", "disabled");
        }
        else {
            $("#test_connection").removeAttr("disabled");
        }
    } else {
        $("#test_connection").attr("disabled", "disabled");
    }
});

$(document).on("click", ".css-radio", function () {
    $(this).siblings("label").removeClass("notransition");
});

function updateContents(itemId, name) {
    window.parent.ShowWaitingProgress("#update-data-source-popup_wrapper", "show");
    var selectContents = parent.$("#update-data-source-popup-iframe").contents().find("select");
    $(selectContents).each(function () {
        $(this).find("option:eq(1)").after("<option value = '" + itemId + "'>" + name + "</option>");
        $(this).find(".select-data-source").show();
    });
    parent.$("#update-data-source-popup-iframe").contents().find("select.update-datasource.current-select").val(itemId);
    parent.document.getElementById('update-data-source-popup-iframe').contentWindow.refreshSelectPicker();
}