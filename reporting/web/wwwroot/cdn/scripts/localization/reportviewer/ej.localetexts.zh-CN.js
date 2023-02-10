/**
 * Default [zh-CN] localization for report viewer.
 */
//ejDatePicker
ej.DatePicker.Locale["zh-CN"] = {
    watermarkText: "选择日期",
    buttonText: "今天",
};

//ejReportViewer
ej.ReportViewer.Locale["zh-CN"] = {
    toolbar: {
        print: {
            headerText: "打印",
            contentText: "打印报告。"
        },
        exportformat: {
            headerText: "出口",
            contentText: "选择导出的文件格式。",
            Pdf: "PDF",
            Excel: "高强",
            Word: "字",
            Html: "HTML",
            PPT: '微軟幻燈片軟件',
            CSV: 'CSV',
            XML: 'XML'
        },
        first: {
            headerText: "第一",
            contentText: "转至报告的第一页。"
        },
        previous: {
            headerText: "以前",
            contentText: "转至报告的前一页。"
        },
        next: {
            headerText: "下一个",
            contentText: "进入报告的下一页。"
        },
        last: {
            headerText: "持续",
            contentText: "转至报告的最后一页。"
        },
        documentMap: {
            headerText: "文档结构图",
            contentText: "显示或隐藏文档结构图。"
        },
        parameter: {
            headerText: "参数",
            contentText: "显示或隐藏参数窗格。"
        },
        zoomIn: {
            headerText: "放大",
            contentText: "放大到报告中。"
        },
        zoomOut: {
            headerText: "缩小",
            contentText: "缩小的报告。"
        },
        refresh: {
            headerText: "刷新",
            contentText: "刷新报表。"
        },
        find: {
            headerText: '找',
            contentText: '在报告中查找文本。'
        },
        stop: {
            headerText: "停止",
            contentText: "停止处理报告。"
        },
        printLayout: {
            headerText: "打印布局",
            contentText: "打印布局模式和正常模式之间切换。"
        },
        pageIndex: {
            headerText: "页码",
            contentText: "当前页编号，以查看。"
        },
        zoom: {
            headerText: "放大",
            contentText: "放大或缩小在报告中。"
        },
        back: {
            headerText: "背部",
            contentText: "返回到父报告。"
        },
        fittopage: {
            headerText: "适合页面",
            contentText: "适合报表页到容器。",
            pageWidth: "页面宽度",
            pageHeight: "整页"
        },
        pagesetup: {
            headerText: "页面设置",
            contentText: "选择页面设置选项来改变纸张大小，方向和页边距。"
        },
        exportsetup: {
            headerText: '导出设置',
            contentText: '选择导出设置选项以设置图像质量、保存字类型和 Excel 文档。'
        },
    },
    pagesetupDialog: {
        close: '关',
        paperSize: '纸张大小',
        height: '高度',
        width: '宽度',
        margins: '边距',
        top: '最佳',
        bottom: '底部',
        right: '对',
        left: '剩下',
        pageUnits: '页面单位',
        unitin: '英寸',
        unitcm: '厘米',
        inches: '英寸',
        centimeters: '厘米',
        orientation: '方向',
        portrait: '肖像',
        landscape: '景观',
        doneButton: '做',
        cancelButton: '取消',
        paperTypes: [{ text: "A3", value: "A3" }, { text: "A4", value: "A4" }, { text: "B4(JIS)", value: "B4(JIS)" }, { text: "B5(JIS)", value: "B5(JIS)" }, { text: "信封 #10", value: "Envelope #10" }, { text: "信封君主", value: "Envelope Monarch" }, { text: "管理人员", value: "Executive" }, { text: "合法的", value: "Legal" }, { text: "信件", value: "Letter" }, { text: "小报", value: "Tabloid" }, { text: "风俗", value: "Custom" }]
    },
    exportsetupDialog: {
        close: '关',
        commonOptions: {
            imageQuality: '一致性等級',
            header: '常用設置',
            imageQuality: '畫面質量',
            imageQualityTypes:
                [{ text: "低的", value: "2" },
                { text: "中等的", value: "5" },
                { text: "高的", value: "10" }]
        },
        pdfOptions: {
            header: 'PDF 設置',
            complexScript: '複雜腳本',
            conformance: '一致性等級',
            conformanceTypes: [{ text: "沒有", value: 0 }, { text: "Pdf/A1B", value: 1 }, { text: "Pdf/X1A2001", value: 2 }, { text: "Pdf/A2B", value: 3 }, { text: "Pdf/A3B", value: 4 },
            { text: "Pdf/A1A", value: 5 }, { text: "Pdf/A2A", value: 6 }, { text: "Pdf/A2U", value: 7 }, { text: "Pdf/A3A", value: 8 }, { text: "Pdf/A3U", value: 9 }],
        },
        excel: '高强',
        securityOptions: {
            header: "安全设定",
            enableProtection: "啟用保護",
            protect: "密码保护",
            edit: "编辑密码",
        },
        wordOptions: {
            header: '字设置',
            protection: '保护类型',
            topSpacing: '顶部间距',
            bottomSpacing: '底部间距',
            formatList: [
                { text: "Word 97-2003 文档 (.doc)", value: 0 },
                { text: "Word 97-2003 模板 (.dot)", value: 1 },
                { text: "Word 文档 (.docx)", value: 2 },
                { text: "严格打开 XML 文档 2007 (.docx)", value: 3 },
                { text: "严格打开 XML 文档 2010 (.docx)", value: 4 },
                { text: "严格打开 XML 文档 2013 (.docx)", value: 5 },
                { text: "严格开放的 XML 模板 2007 (.dotx)", value: 6 },
                { text: "严格开放的 XML 模板 2010 (.dotx)", value: 7 },
                { text: "严格开放的 XML 模板 2013 (.dotx)", value: 8 },
                { text: "启用 Word 宏的文档 2007 (.docm)", value: 9 },
                { text: "启用 Word 宏的文档 2010 (.docm)", value: 10 },
                { text: "启用 Word 宏的文档 2013 (.docm)", value: 11 },
                { text: "Word 宏启用模板 2007 (.dotm)", value: 12 },
                { text: "Word 宏启用模板 2010 (.dotm)", value: 13 },
                { text: "Word 宏启用模板 2013 (.dotm)", value: 14 },
                { text: "富文本格式 (.rtf)", value: 15 },
                { text: "纯文本 (.txt)", value: 16 },
                { text: "网页 (.html)", value: 18 }
            ],
            layoutTypes: [{ text: "默认", value: 0 }, { text: "顶层", value: 1 }],
            protectionTypes: [{ text: "没有保护", value: -1 }, { text: "仅允许修订", value: 0 }, { text: "只允许评论", value: 1 }, { text: "只允许表单域", value: 2 }, { text: "允许只读", value: 3 }],
        },
        layoutOption: '布局选项',
        saveType: '保存类型',
        unit: '在',
        exportFormat: '汇出格式',
        pptOptions: {
            header: "微软幻灯片软件 环境",
            pptTypes: [
                { text: "微软幻灯片软件 97to2003 介绍 (.pptx)", value: 0 },
                { text: "微软幻灯片软件 2007 介绍 (.pptx)", value: 1 },
                { text: "微软幻灯片软件 2010 介绍 (.pptx)", value: 2 },
                { text: "微软幻灯片软件 2013 介绍 (.pptx)", value: 3 }
            ]
        },
        doneButton: '好',
        cancelButton: '取消',
        csvOptions: {
            delimiter: '字段分隔符',
            formatter: '格式化的值',
            header: 'CSV 设置',
            qualifier: '文本限定符',
            customVal: '自定义值',
            qualifierList: [{ text: "双引号", value: "\"" }, { text: "单引号", value: "'" }, { text: "没有", value: "" }, { text: "风俗", value: "Custom" }],
            delimiterList: [{ text: "逗号", value: "," }, { text: "空间", value: " " }, { text: "标签", value: "   " }, { text: "分号", value: ";" }, { text: "风俗", value: "Custom" }]
        },
        htmlOptions: {
            header: 'HTML 设置',
            separator: '页面分隔符'
        },
        excelOptions:
        {
            header: "Excel 设置",
            sheetProtection: '片材保護',
            disableCellFormat: '禁用單元格格式',
            readonly: '只讀',
            saveTypes: [
                { text: "Excel97to2003 工作簿(.xls)", value: 0 },
                { text: "Excel2007 工作簿(.xlsx)", value: 1 },
                { text: "Excel2010 工作簿 (.xlsx)", value: 2 },
                { text: "Excel2013 工作簿 (.xlsx)", value: 3 },
                { text: "Excel2016 工作簿(.xlsx)", value: 4 }],
            sheetProtectionTypes: [
                { text: "没有", value: 0 },
                { text: "对象", value: 1 },
                { text: "场景", value: 2 },
                { text: "格式化单元格", value: 4 },
                { text: "格式化列", value: 8 },
                { text: "格式化行", value: 16 },
                { text: "插入列", value: 32 },
                { text: "插入行", value: 64 },
                { text: "插入超链接", value: 128 },
                { text: "删除列", value: 256 },
                { text: "删除行", value: 512 },
                { text: "锁定单元格", value: 1024 },
                { text: "排序", value: 2048 },
                { text: "过滤", value: 4096 },
                { text: "使用数据透视表", value: 8192 },
                { text: "解锁单元格", value: 16384 },
                { text: "内容", value: 32768 },
                { text: "全部", value: 65535 }
            ],
            disableCellFormatTypes: [
                { text: "没有", value: 0 },
                { text: "全部", value: 1 },
                { text: "边境", value: 2 },
                { text: "风格", value: 3 }
            ],
            layoutOptionTypes: [
                { text: "默认", value: 0 },
                { text: "忽略单元格合并", value: 1 }
            ],
        }
    },
    findAlertMessage: {
        resultsEndReached: '您已到達搜索結果的末尾。 如果您想繼續，請關閉對話框並再次搜索。',
        noResultsFound: '指定的文本與報告中的任何內容都不匹配。 更改您的搜索關鍵字，然後重試。'
    },
    credential: {
        userName: '用户名',
        password: '密码'
    },
    waterMark: {
        selectOption: '选择选项',
        selectValue: '选择一个值'
    },
    errorMessage: {
        startMessage: '报告查看器遇到一些加载此报告的问题。请',
        middleMessage: ' 点击这里',
        endMessage: '查看错误的详细信息',
        closeMessage: '关闭此消息',
        exportAjaxFailureMsg: '由于连接报告服务失败，无法导出文档。',
        printAjaxFailureMsg: '由于连接报告服务失败，无法打印文档。',
        reportLoadAjaxFailureMsg: '由于连接报告服务失败，无法推进报告操作。',
        cancelReportProcessMsg: '报表处理被取消。',
    },
    progressMessage: {
        exportLoadingMessage: '准备出口文件......请稍候......',
        printLoadingMessage: '准备打印数据......请稍候......',
        printPreparationMessage: '准备打印数据... {0}已完成...请稍候...',
        exportPreparationMessage: '准备导出文档... {0}％已完成...请稍候...',
        cancelText: '取消',
    },
    alertMessage: {
        close: '关',
        title: '的ReportViewer',
        done: '好',
        showDetails: '显示详细资料',
        hideDetails: '隐藏细节',
        reportLoad: '已加载报告:',
        RVERR0001: 'ReportViewer无法加载报告',
        RVERR0002: 'ReportViewer无法呈现报告',
        RVERR0003: 'ajax回发中发生错误',
        RVERR0004: '请为参数选择一个值',
        RVERR0005: '{参数名称}参数缺少一个值',
        RVERR0006: '请给出浮点数据类型输入',
        RVERR0007: '请给出整数数据类型输入',
        RVERR0008: 'ReportViewer无法验证数据源凭据',
        RVERR0009: '他的利润率是重叠的或者他们不在报纸上。输入不同的保证金大小.',
        RVERR0010: '请为参数输入一个值',
        RVERR0011: '该参数不能为空',
        RVERR0012: '为报告参数{parameterprompt}提供的值对其类型无效.'
    },
    selectAll: '全选',
    viewButton: "查看报告",
    parameterProcessingMessage: '加载相关参数......',
};