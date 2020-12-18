var MySQLDataSource = (function () {
    function MySQLDataSource() {
        this.locale = 'en-US';
        this.controlWidth = 428;
        this.id = 'mysqlData';
        this.connectClick = $.proxy(this.connectDataSource, this);
    }
    MySQLDataSource.prototype.renderConfig = function (targetTag, dataSource, isEdit) {
        this.renderConfiguration(targetTag);
        this.updateDataSource(dataSource);
    };
    MySQLDataSource.prototype.renderConfiguration = function (targetTag) {
        if (targetTag.find('#' + this.id + '_mysql_datasource').length > 0) {
            this.resetInputFields();
        }
        else {
            this.mysqlConfig = ej.buildTag('div', '', {
                'width': '100%', 'height': '100%', 'display': 'table-row'
            }, { 'id': this.id + '_mysql_datasource' });
            targetTag.append(this.mysqlConfig);
            this.renderMysqlPanel();
            this.renderErrorToolTip(this.mysqlPanel);
            this.changedAuthentication({ 'value': 'authentication' });
        }
        this.showConfiguration(true);
    };
    MySQLDataSource.prototype.renderMysqlPanel = function () {
        this.mysqlPanel = ej.buildTag('div', '', {
            'width': '100%', 'height': '100%', 'display': 'table-row'
        }, { 'id': this.id + '_mysql_panel' });
        var mysqlConfigTable = ej.buildTag('table.e-designer-dsconfig-table', '', {
            'width': '100%'
        }, {
            'unselectable': 'on', 'id': this.id + '_mysql_config'
        });
        var field = { id: 'id', text: 'text', value: 'value' };
        this.mysqlConfig.append(this.mysqlPanel);
        this.mysqlPanel.append(mysqlConfigTable);
        this.renderTextArea(this.getLocale('connectionString'), this.id + '_mysql_conStr', mysqlConfigTable);
        this.renderDropDownItem(this.getLocale('authenticationType'), this.id + '_mysql_authtype', mysqlConfigTable, this.getDropdownValues(), field, '0');
        this.renderTextBoxItem(this.getLocale('promptLabel'), this.id + '_mysql_prompt', false, mysqlConfigTable, this.controlWidth);
        this.renderTextBoxItem(this.getLocale('userName'), this.id + '_mysql_usr', false, mysqlConfigTable, this.controlWidth);
        this.renderTextBoxItem(this.getLocale('password'), this.id + '_mysql_pswd', true, mysqlConfigTable, this.controlWidth);
        this.renderCheckboxItem(this.getLocale('savePassword'), this.id + '_mysql_save_password', mysqlConfigTable, null, this, 'right');
        if ($('#' + this.id + '_mysql_authtype')) {
            this.authType = $('#' + this.id + '_mysql_authtype');
            this.ejAuthDrpdwn = this.authType.data('ejDropDownList');
            this.ejAuthDrpdwn.model.change = $.proxy(this.changedAuthentication, this);
        }
        this.promptTag = $('#' + this.id + '_mysql_prompt_tr');
        this.connString = $('#' + this.id + '_mysql_conStr');
        this.promptCont = $('#' + this.id + '_mysql_prompt');
        this.userName = $('#' + this.id + '_mysql_usr');
        this.passWord = $('#' + this.id + '_mysql_pswd');
        this.userNameTag = $('#' + this.id + '_mysql_usr_tr');
        this.passWordTag = $('#' + this.id + '_mysql_pswd_tr');
        this.savePasswrdTag = this.mysqlPanel.find('#' + this.id + '_mysql_save_password_tr');
        this.ejMysqlSavePasswrd = this.mysqlPanel.find('#' + this.id + '_mysql_save_password').data('ejCheckBox');
    };
    MySQLDataSource.prototype.changedAuthentication = function (args) {
        var value = (args.value) ? args.value : this.ejAuthDrpdwn.getSelectedValue();
        this.hideValidationMsg();
        this.promptTag.css('display', 'none');
        this.userNameTag.css('display', 'none');
        this.passWordTag.css('display', 'none');
        this.savePasswrdTag.css('display', 'none');
        if (value === 'authentication') {
            this.userNameTag.css('display', 'table-row');
            this.passWordTag.css('display', 'table-row');
            this.savePasswrdTag.css('display', 'table-row');
        }
        if (value === 'prompt') {
            this.userNameTag.css('display', 'table-row');
            this.passWordTag.css('display', 'table-row');
            this.promptTag.css('display', 'table-row');
        }
        this.updateEJComponentSize();
        this.scrollerRefresh();
    };
    MySQLDataSource.prototype.updateDataSource = function (dataSource) {
        if (!ej.isNullOrUndefined(dataSource)) {
            var connectionProperties = dataSource.ConnectionProperties;
            this.connString.val(connectionProperties.ConnectString);
            this.userName.val(connectionProperties.UserName);
            this.passWord.val(connectionProperties.PassWord);
            this.promptCont.val(connectionProperties.Prompt);
            this.ejMysqlSavePasswrd.option('checked', dataSource.ConnectionProperties.EmbedCredentials);
            if (!dataSource.ConnectionProperties.IntegratedSecurity &&
                (dataSource.SecurityType.toString() === '0' || dataSource.SecurityType === 'None')) {
                this.ejAuthDrpdwn.setModel({ 'text': this.getLocale('none') });
            }
            else if (!dataSource.ConnectionProperties.IntegratedSecurity &&
                ((!ej.isNullOrUndefined(dataSource.ConnectionProperties.UserName)
                    && dataSource.ConnectionProperties.UserName.length > 0) ||
                    (!ej.isNullOrUndefined(dataSource.ConnectionProperties.PassWord)
                        && dataSource.ConnectionProperties.PassWord.length > 0))) {
                this.ejAuthDrpdwn.setModel({ 'text': this.getLocale('authentication') });
                this.ejMysqlSavePasswrd.option('checked', dataSource.ConnectionProperties.EmbedCredentials);
            }
            else if (!dataSource.ConnectionProperties.IntegratedSecurity &&
                (ej.isNullOrUndefined(dataSource.ConnectionProperties.Prompt) ||
                    (!ej.isNullOrUndefined(dataSource.ConnectionProperties.Prompt) &&
                        dataSource.ConnectionProperties.Prompt.length === 0)) && dataSource.SecurityType.toString() === '2') {
                this.ejAuthDrpdwn.setModel({ 'text': this.getLocale('authentication') });
                this.ejMysqlSavePasswrd.option('checked', false);
            }
            else if (!dataSource.ConnectionProperties.IntegratedSecurity) {
                this.ejAuthDrpdwn.setModel({ 'text': this.getLocale('prompt') });
                this.promptCont.val((!ej.isNullOrUndefined(dataSource.ConnectionProperties.Prompt)
                    && dataSource.ConnectionProperties.Prompt.length > 0)
                    ? dataSource.ConnectionProperties.Prompt : 'Specify the Username and Password for DataSource: ' + dataSource.Name);
                this.ejMysqlSavePasswrd.option('checked', false);
            }
        }
    };
    MySQLDataSource.prototype.connectDataSource = function (args) {
        if (!args[0].isCancel) {
            args[0].data = this.getDatasourceInfo(args[0].name);
        }
    };
    MySQLDataSource.prototype.showConfiguration = function (isShow) {
        this.mysqlConfig.css('display', isShow ? 'table-row' : 'none');
    };
    MySQLDataSource.prototype.resetInputFields = function () {
        this.connString.val('');
        this.promptCont.val('');
        this.userName.val('');
        this.passWord.val('');
        this.hideValidationMsg();
        this.ejAuthDrpdwn.selectItemByValue('authentication');
        this.ejMysqlSavePasswrd.setModel({ 'checked': false });
    };
    MySQLDataSource.prototype.getDatasourceInfo = function (dataSourceName, dataSource) {
        var isValidCon = true;
        var usrName = '';
        var password = '';
        var prompt = '';
        var securityType = 'None';
        var connString = this.connString.val();
        this.hideValidationMsg();
        if (connString.length === 0) {
            this.showValidationMsg(this.connString.attr('id'), true, this.getLocale('alertConnectionString'));
            isValidCon = false;
        }
        if (this.ejAuthDrpdwn.getSelectedValue() === 'prompt' || this.ejAuthDrpdwn.getSelectedValue() === 'authentication') {
            usrName = this.userName.val();
            password = this.passWord.val();
            prompt = this.promptCont.val();
            if (usrName.length === 0) {
                this.showValidationMsg(this.userName.attr('id'), true, this.getLocale('alertUserName'));
                isValidCon = false;
            }
            if (password.length === 0) {
                this.showValidationMsg(this.passWord.attr('id'), true, this.getLocale('alertPassword'));
                isValidCon = false;
            }
            if (this.ejAuthDrpdwn.getSelectedValue() === 'prompt' && prompt.length === 0) {
                this.showValidationMsg(this.promptCont.attr('id'), true, this.getLocale('alertPrompt'));
                isValidCon = false;
            }
            securityType = 'DataBase';
        }
        if (isValidCon) {
            var reportData = this.createDataSource();
            reportData.Name = dataSourceName;
            reportData.SecurityType = securityType;
            reportData.ConnectionProperties.UserName = null;
            reportData.ConnectionProperties.PassWord = null;
            reportData.ConnectionProperties.Prompt = prompt;
            reportData.ConnectionProperties.DataProvider = 'MySQL';
            reportData.ConnectionProperties.ConnectString = connString;
            reportData.ConnectionProperties.EmbedCredentials = false;
            if (this.ejAuthDrpdwn.getSelectedValue() === 'authentication' && this.ejMysqlSavePasswrd.model.checked) {
                reportData.ConnectionProperties.UserName = usrName;
                reportData.ConnectionProperties.PassWord = password;
                reportData.ConnectionProperties.EmbedCredentials = true;
            }
            else if (this.ejAuthDrpdwn.getSelectedValue() === 'authentication' && !this.ejMysqlSavePasswrd.model.checked) {
                reportData.ConnectionProperties.UserName = usrName;
                reportData.ConnectionProperties.PassWord = password;
            }
            return reportData;
        }
        return null;
    };
    MySQLDataSource.prototype.createDataSource = function () {
        var dataSource = {
            __type: 'BoldReports.RDL.DOM.DataSource',
            Name: '',
            Transaction: false,
            DataSourceReference: null,
            SecurityType: 'none',
            ConnectionProperties: {
                __type: 'BoldReports.RDL.DOM.ConnectionProperties',
                ConnectString: '',
                EmbedCredentials: false,
                DataProvider: '',
                IsDesignState: false,
                IntegratedSecurity: false,
                UserName: '',
                PassWord: '',
                Prompt: '',
                CustomProperties: []
            }
        };
        return dataSource;
    };
    MySQLDataSource.prototype.getLocale = function (text) {
        var mySQLLocale;
        var defaultLocale = MySQLDataSource.Locale['en-US'];
        if (!ej.isNullOrUndefined(MySQLDataSource.Locale[this.locale])) {
            mySQLLocale = MySQLDataSource.Locale[this.locale];
        }
        switch (text.toLowerCase()) {
            case 'connectionstring':
                if (mySQLLocale && mySQLLocale.connectionString) {
                    return mySQLLocale.connectionString;
                }
                return defaultLocale.connectionString;
            case 'authenticationtype':
                if (mySQLLocale && mySQLLocale.authenticationType) {
                    return mySQLLocale.authenticationType;
                }
                return defaultLocale.authenticationType;
            case 'authentication':
                if (mySQLLocale && mySQLLocale.authentication) {
                    return mySQLLocale.authentication;
                }
                return defaultLocale.authentication;
            case 'prompt':
                if (mySQLLocale && mySQLLocale.prompt) {
                    return mySQLLocale.prompt;
                }
                return defaultLocale.prompt;
            case 'none':
                if (mySQLLocale && mySQLLocale.none) {
                    return mySQLLocale.none;
                }
                return defaultLocale.none;
            case 'username':
                if (mySQLLocale && mySQLLocale.userName) {
                    return mySQLLocale.userName;
                }
                return defaultLocale.userName;
            case 'password':
                if (mySQLLocale && mySQLLocale.password) {
                    return mySQLLocale.password;
                }
                return defaultLocale.password;
            case 'savepassword':
                if (mySQLLocale && mySQLLocale.savePassword) {
                    return mySQLLocale.savePassword;
                }
                return defaultLocale.savePassword;
            case 'promptlabel':
                if (mySQLLocale && mySQLLocale.promptLabel) {
                    return mySQLLocale.promptLabel;
                }
                return defaultLocale.promptLabel;
            case 'alertconnectionstring':
                if (mySQLLocale && mySQLLocale.alertMessage && mySQLLocale.alertMessage.alertConnectionString) {
                    return mySQLLocale.alertMessage.alertConnectionString;
                }
                return defaultLocale.alertMessage.alertConnectionString;
            case 'alertprompt':
                if (mySQLLocale && mySQLLocale.alertMessage && mySQLLocale.alertMessage.alertPrompt) {
                    return mySQLLocale.alertMessage.alertPrompt;
                }
                return defaultLocale.alertMessage.alertPrompt;
            case 'alertusername':
                if (mySQLLocale && mySQLLocale.alertMessage && mySQLLocale.alertMessage.alertUserName) {
                    return mySQLLocale.alertMessage.alertUserName;
                }
                return defaultLocale.alertMessage.alertUserName;
            case 'alertpassword':
                if (mySQLLocale && mySQLLocale.alertMessage && mySQLLocale.alertMessage.alertPassword) {
                    return mySQLLocale.alertMessage.alertPassword;
                }
                return defaultLocale.alertMessage.alertPassword;
        }
        return text;
    };
    MySQLDataSource.prototype.updateCulture = function (culture) {
        this.locale = culture;
        var savePassword = this.mysqlConfig.find('#' + this.id + '_mysql_save_password');
        if (this.connString) {
            this.updateRow(this.mysqlConfig, this.connString.attr('id'), this.getLocale('connectionString'));
            this.updateValidationMsg(this.mysqlConfig, this.connString.attr('id'), this.getLocale('alertConnectionString'));
        }
        if (this.authType) {
            this.updateRow(this.mysqlConfig, this.authType.attr('id'), this.getLocale('authenticationType'));
            this.ejAuthDrpdwn.setModel({ 'dataSource': this.getDropdownValues(), 'selectedIndex': '0' });
        }
        if (this.promptCont) {
            this.updateRow(this.mysqlConfig, this.promptCont.attr('id'), this.getLocale('promptLabel'));
            this.updateValidationMsg(this.mysqlConfig, this.promptCont.attr('id'), this.getLocale('alertPrompt'));
        }
        if (this.userName) {
            this.updateRow(this.mysqlConfig, this.userName.attr('id'), this.getLocale('userName'));
            this.updateValidationMsg(this.mysqlConfig, this.userName.attr('id'), this.getLocale('alertUserName'));
        }
        if (this.passWord) {
            this.updateRow(this.mysqlConfig, this.passWord.attr('id'), this.getLocale('password'));
            this.updateValidationMsg(this.mysqlConfig, this.passWord.attr('id'), this.getLocale('alertPassword'));
        }
        if (savePassword) {
            this.updateRow(this.mysqlConfig, savePassword.attr('id'), this.getLocale('savepassword'));
        }
    };
    MySQLDataSource.prototype.getDropdownValues = function () {
        var authText = 'authentication';
        var promptText = 'prompt';
        var noneText = 'none';
        var authTypeJson = [{ id: authText.toLowerCase(), text: this.getLocale('authentication'), value: authText },
            { id: promptText.toLowerCase(), text: this.getLocale('prompt'), value: promptText },
            { id: noneText.toLowerCase(), text: this.getLocale('none'), value: noneText }];
        return authTypeJson;
    };
    MySQLDataSource.prototype.renderTextArea = function (name, id, target, value) {
        var row = $('<tr id=' + id + '_tr' + '></tr>');
        var col = $('<td unselectable=\'on\'></td>');
        row.append(col);
        target.append(row);
        var bodyTable = $('<table unselectable=\'on\'></table>');
        col.append(bodyTable);
        bodyTable.append(this.getRowCaption(name, id));
        var rowtxt = $('<tr></tr>');
        var coltxt = ej.buildTag('td', '', {}, { 'colspan': '2', 'id': id + '_td' });
        bodyTable.append(rowtxt);
        rowtxt.append(coltxt);
        var txtbox = ej.buildTag('textarea.e-textarea e-ejinputtext e-designer-content-label e-designer-constr-textarea', value, {
            'height': '65px', 'width': this.controlWidth, 'resize': 'none', 'text-indent': '0px', 'overflow': 'hidden'
        }, {
            'id': id, 'type': 'textarea', 'spellcheck': 'false',
            'aria-multiline': 'true', 'aria-label': name
        });
        coltxt.append(txtbox);
    };
    MySQLDataSource.prototype.renderTextBoxItem = function (name, id, isPasswd, target, width, value) {
        var row = $('<tr id=' + id + '_tr' + '></tr>');
        var col = $('<td unselectable=\'on\'></td>');
        row.append(col);
        target.append(row);
        var bodyTable = $('<table unselectable=\'on\'></table>');
        col.append(bodyTable);
        bodyTable.append(this.getRowCaption(name, id));
        var rowtxt = $('<tr></tr>');
        var coltxt = ej.buildTag('td', '', {}, { 'colspan': '2', 'id': id + '_td' });
        bodyTable.append(rowtxt);
        rowtxt.append(coltxt);
        var txtbox = ej.buildTag('input.e-textbox e-designer-content-label', '', {
            'height': '24px', 'width': width + 'px'
        }, {
            'id': id, 'type': isPasswd ? 'password' : 'text',
            'value': value, 'spellcheck': 'false', 'aria-label': name
        });
        coltxt.append(txtbox);
    };
    MySQLDataSource.prototype.renderCheckboxItem = function (name, id, target, fnction, context, align) {
        if (align === void 0) { align = 'Left'; }
        var row = $('<tr id=' + id + '_tr' + '></tr>');
        var col = $('<td unselectable=\'on\' style=\'padding-right:7px\' align=' + align + '></td>');
        row.append(col);
        target.append(row);
        var chkBox = ej.buildTag('input', '', {}, { 'type': 'checkbox', 'id': id });
        col.append(chkBox);
        chkBox.ejCheckBox({ change: $.proxy(fnction, context), text: name });
        chkBox.siblings('.e-text').addClass('editLabel e-designer-title-label');
    };
    MySQLDataSource.prototype.renderDropDownItem = function (name, id, target, datasource, fields, selectedIndex, fnction, context) {
        var row = $('<tr id=' + id + '_tr></tr>');
        var col = $('<td unselectable=\'on\'></td>');
        row.append(col);
        target.append(row);
        var bodyTable = $('<table unselectable=\'on\'></table>');
        col.append(bodyTable);
        bodyTable.append(this.getRowCaption(name, id));
        var rowtxt = $('<tr></tr>');
        var coltxt = ej.buildTag('td', '', {}, { 'colspan': '2', 'id': id + '_td' });
        bodyTable.append(rowtxt);
        rowtxt.append(coltxt);
        var dropdown = ej.buildTag('input', '', {}, { 'id': id, 'value': '', 'spellcheck': 'false' });
        coltxt.append(dropdown);
        dropdown.ejDropDownList({
            width: this.controlWidth, dataSource: datasource, fields: fields, change: $.proxy(fnction, context),
            cssClass: 'e-designer-ejwidgets e-designer-content-label', showRoundedCorner: true
        });
        if (selectedIndex) {
            dropdown.data('ejDropDownList').selectItemsByIndices(selectedIndex);
        }
    };
    MySQLDataSource.prototype.getRowCaption = function (caption, id) {
        var row = ej.buildTag('tr', '', {});
        var labelCell = ej.buildTag('td', '', {});
        var label = ej.buildTag('label.editLabel e-designer-title-label', caption, { 'max-width': '200px' }, {});
        labelCell.append(label);
        row.append(labelCell);
        var errorCell = ej.buildTag('td', '', {}, { 'id': id + '_error_icon_td' });
        this.renderErrIndictor(errorCell, this.mysqlPanel.attr('id'));
        row.append(errorCell);
        return row;
    };
    MySQLDataSource.prototype.updateRow = function (target, id, text) {
        target.find('#' + id + '_tr .e-designer-title-label').html(text);
        target.find('#' + id).attr('aria-label', text);
    };
    MySQLDataSource.prototype.updateEJComponentSize = function () {
        var panel = $('#' + this.id + '_basicPanel');
        var textBox = panel.find('.e-textbox');
        var textArea = panel.find('.e-textarea');
        var ejObjs = panel.find('.e-js');
        var isOverflow = this.isOverflow();
        if (ejObjs && ejObjs.length > 0) {
            for (var index = 0; index < ejObjs.length; index++) {
                var ejEle = $(ejObjs[index]);
                var ejName = ejEle.data('ejWidgets');
                if (ejName) {
                    var ejObj = ejEle.data(ejName[0]);
                    switch (ejName[0]) {
                        case 'ejDropDownList':
                            ejObj.option('width', (isOverflow ? (ejEle.hasClass('e-dropdownUpload') ? this.controlWidth + 4 : this.controlWidth + 8) :
                                (ejEle.hasClass('e-dropdownUpload') ? this.controlWidth + 10 : this.controlWidth + 12)) + 'px');
                            break;
                        case 'ejAutocomplete':
                            ejObj.option('width', isOverflow ? this.controlWidth + 7 : this.controlWidth + 12 + 'px');
                            break;
                    }
                }
            }
        }
        textArea.width((isOverflow ? this.controlWidth - 8 : this.controlWidth - 4) + 'px');
        textBox.width((isOverflow ? this.controlWidth - 5 : this.controlWidth) + 'px');
    };
    MySQLDataSource.prototype.renderErrIndictor = function (target, tooltipId, errMsg) {
        var errorIcon = ej.buildTag('span.e-rptdesigner-error-icon e-rptdesigner-errorinfo e-error-tip', '', {
            'float': 'right',
            'display': 'none',
            'padding-right': '2px'
        }, {
            'e-errormsg': errMsg,
            'e-tooltipId': tooltipId
        });
        target.append(errorIcon);
    };
    MySQLDataSource.prototype.showErrIndictor = function (target, isEnable, errMsg) {
        var errorIcon = target.find('.e-error-tip');
        errorIcon.css('display', isEnable ? 'block' : 'none');
        if (errMsg) {
            errorIcon.attr('e-errormsg', errMsg);
        }
        if (isEnable) {
            var tooltipId = errorIcon.attr('e-tooltipId');
            var ejTooltip = $('#' + tooltipId).data('ejTooltip');
            ejTooltip.setModel({
                target: '.e-rptdesigner-error-icon',
            });
        }
    };
    MySQLDataSource.prototype.renderErrorToolTip = function (target) {
        if (target && target.length !== 0 && !target.data('ejTooltip')) {
            target.ejTooltip({
                target: '.e-designer-tooltip',
                position: {
                    target: { horizontal: 'bottom', vertical: 'bottom' },
                    stem: { horizontal: 'right', vertical: 'top' }
                },
                tip: {
                    adjust: {
                        xValue: 10,
                        yValue: 100
                    }
                },
                animation: {
                    effect: 'Fade',
                    speed: 500
                },
                isBalloon: false,
                showShadow: true,
                showRoundedCorner: true,
                content: 'Exception Message is not configured',
                beforeOpen: $.proxy(this.beforeOpenTooltip, this)
            });
        }
    };
    MySQLDataSource.prototype.beforeOpenTooltip = function (args) {
        if (args.event && args.event.target) {
            args.cancel = !ej.isNullOrUndefined(args.event.buttons) && args.event.buttons !== 0;
            var target = args.event.target;
            if (target) {
                var tooltipId = $(target).attr('e-tooltipId');
                var errMsg = $(target).attr('e-errormsg');
                var ejTooltip = $('#' + tooltipId).data('ejTooltip');
                ejTooltip.setModel({
                    content: errMsg ? errMsg : ''
                });
            }
        }
    };
    MySQLDataSource.prototype.showValidationMsg = function (id, isShow, msg) {
        var target = $('#' + id + '_error_icon_td');
        var errContainer = $('#' + id + '_td').find('.e-designer-content-label');
        if (isShow) {
            this.showErrIndictor(target, true, msg);
            errContainer.addClass('e-rptdesigner-error');
        }
        else {
            this.showErrIndictor(target, false);
            errContainer.removeClass('e-rptdesigner-error');
        }
    };
    MySQLDataSource.prototype.hideValidationMsg = function () {
        this.showValidationMsg(this.connString.attr('id'), false);
        this.showValidationMsg(this.promptCont.attr('id'), false);
        this.showValidationMsg(this.userName.attr('id'), false);
        this.showValidationMsg(this.passWord.attr('id'), false);
    };
    MySQLDataSource.prototype.updateValidationMsg = function (target, id, msg) {
        var toolTipCont = target.find('#' + id + '_error_icon_td .e-error-tip');
        toolTipCont.removeAttr('e-errormsg');
        toolTipCont.attr('e-errormsg', msg);
    };
    MySQLDataSource.prototype.scrollerRefresh = function () {
        var container = $('#' + this.id + '_dsConfigBodyContainer');
        if (container.length > 0 && !ej.isNullOrUndefined(container.data('ejScroller'))) {
            container.data('ejScroller').refresh();
        }
    };
    MySQLDataSource.prototype.isOverflow = function () {
        if ($('#' + this.id + '_dsConfigContainer').height() > $('#' + this.id + '_dsConfigBodyContainer').height()) {
            return true;
        }
        return false;
    };
    MySQLDataSource.prototype.dispose = function () {
        if (!ej.isNullOrUndefined(this.mysqlConfig) && this.mysqlConfig.length > 0) {
            this.destroyEjObjects(this.mysqlConfig);
            this.mysqlConfig.remove();
        }
    };
    MySQLDataSource.prototype.destroyEjObjects = function (ejObjects, isRootEle) {
        var elements = isRootEle ? $(ejObjects) : $(ejObjects).find('.e-js');
        for (var i = 0; i < elements.length; i++) {
            var data = elements.eq(i).data();
            var wds = data['ejWidgets'];
            if (wds && wds.length) {
                for (var j = wds.length - 1; j >= 0; j--) {
                    if (data[wds[j]] && data[wds[j]].destroy) {
                        data[wds[j]].destroy();
                    }
                }
            }
        }
    };
    return MySQLDataSource;
}());
MySQLDataSource.Locale = {};
MySQLDataSource.Locale['en-US'] = {
    connectionString: 'Connection String',
    authenticationType: 'Authentication Type',
    authentication: 'Authentication',
    prompt: 'Prompt',
    none: 'None',
    userName: 'Username',
    password: 'Password',
    promptLabel: 'Prompt Text',
    savePassword: 'Save Password',
    alertMessage: {
        alertConnectionString: 'Specify the Connection string',
        alertPrompt: 'Specify the Prompt Text',
        alertUserName: 'Specify the User Name',
        alertPassword: 'Specify the Password'
    }
};
MySQLDataSource.Locale['fr-FR'] = {
    connectionString: 'Chaîne de connexion',
    authenticationType: 'type d\'identification',
    authentication: 'Authentification',
    prompt: 'Rapide',
    none: 'Aucun',
    userName: 'Nom d\'utilisateur',
    password: 'Mot de passe',
    promptLabel: 'Texte d\'invite',
    savePassword: 'Sauvegarder le mot de passe',
    alertMessage: {
        alertConnectionString: 'Spécifiez la chaîne de connexion',
        alertPrompt: 'Spécifiez le texte d\'invite',
        alertUserName: 'Précisez le nom d\'utilisateur',
        alertPassword: 'Spécifiez le mot de passe',
    }
};
