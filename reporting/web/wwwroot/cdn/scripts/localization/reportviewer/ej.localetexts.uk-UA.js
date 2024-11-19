/**
 * Default [uk-UA] localization for report viewer.
 */
//ejDatePicker
ej.DatePicker.Locale['uk-UA'] = {
    watermarkText: "Виберіть дату",
    buttonText: 'Сьогодні'
};

//ejReportViewer
ej.ReportViewer.Locale["uk-UA"] = {
    toolbar: {
        print: {
            headerText: 'Друк',
            contentText: 'Надрукувати звіт.'
        },
        exportformat: {
            headerText: 'Експорт',
            contentText: 'Виберіть формат експортованого файлу.',
            Pdf: 'PDF',
            Excel: 'Excel',
            Word: 'Word',
            Html: 'HTML',
            PPT: 'PowerPoint',
            CSV: 'CSV',
            XML: 'XML'
        },
        first: {
            headerText: 'Перша',
            contentText: 'Перейти на першу сторінку звіту.'
        },
        previous: {
            headerText: 'Попередня',
            contentText: 'Перейти на попередню сторінку звіту.'
        },
        next: {
            headerText: 'Наступна',
            contentText: 'Перейти на наступну сторінку звіту.'
        },
        last: {
            headerText: 'Остання',
            contentText: 'Перейти на останню сторінку звіту.'
        },
        documentMap: {
            headerText: 'Карта документа',
            contentText: 'Показати або приховати карту документа.'
        },
        parameter: {
            headerText: 'Параметр',
            contentText: 'Показати або приховати панель параметрів.'
        },
        zoomIn: {
            headerText: 'Збільшити',
            contentText: 'Збільшити масштаб звіту.'
        },
        zoomOut: {
            headerText: 'Зменшити',
            contentText: 'Зменшити масштаб звіту.'
        },
        refresh: {
            headerText: 'Оновити',
            contentText: 'Оновити звіт.'
        },
        find: {
            headerText: 'Пошук',
            contentText: 'Знайти текст у звіті.'
        },
        stop: {
            headerText: 'Зупинити',
            contentText: 'Зупинити обробку звіту.'
        },
        printLayout: {
            headerText: 'Макет друку',
            contentText: 'Перемкнутися між режимами друку та звичайним.'
        },
        pageIndex: {
            headerText: 'Номер сторінки',
            contentText: 'Поточний номер сторінки для перегляду.'
        },
        zoom: {
            headerText: 'Масштаб',
            contentText: 'Збільшити або зменшити масштаб звіту.'
        },
        back: {
            headerText: 'Назад',
            contentText: 'Повернутися до батьківського звіту.'
        },
        fittopage: {
            headerText: 'Підігнати за сторінкою',
            contentText: 'Підігнати сторінку звіту до контейнера.',
            pageWidth: 'Ширина сторінки',
            pageHeight: 'Вся сторінка'
        },
        pagesetup: {
            headerText: 'Налаштування сторінки',
            contentText: 'Виберіть опцію налаштування сторінки, щоб змінити розмір паперу, орієнтацію та поля.'
        },
        exportsetup: {
            headerText: 'Налаштування експорту',
            contentText: 'Виберіть опцію налаштування експорту, щоб задати якість зображення, тип збереження документу Word та Excel.'
        },
        performance: {
            headerText: 'Метрики продуктивності',
            contentText: 'Показані метрики продуктивності звіту.',
        }        
    },
    PerformanceMetricsDialog: {
        title: 'Метрики продуктивності звіту',
        reportProcessing: 'Час обробки звіту',
        datasetProcessing: 'Час обробки набору даних',
        parse: 'Час розбору',
        evaluate: 'Час оцінки',
        render: 'Час відтворення',
        layout: 'Час макетування',
        datasetDetails: {
            rows: 'Кількість рядків',
            dataRetrival: 'Час отримання даних'
        },
    },
    pagesetupDialog: {
        close: 'Закрити',
        paperSize: 'Розмір паперу',
        height: 'Висота',
        width: 'Ширина',
        margins: 'Поля',
        top: 'Зверху',
        bottom: 'Знизу',
        right: 'Справа',
        left: 'Зліва',
        pageUnits: 'Одиниці сторінки',
        unitin: 'дюйми',
        unitcm: 'см',
        inches: 'Дюйми',
        centimeters: 'Сантиметри',
        orientation: 'Орієнтація',
        portrait: 'Портретна',
        landscape: 'Ландшафтна',
        doneButton: 'Готово',
        cancelButton: 'Скасувати',
        paperTypes: [{ text: "A3", value: "A3" }, { text: "A4", value: "A4" }, { text: "B4(JIS)", value: "B4(JIS)" }, { text: "B5(JIS)", value: "B5(JIS)" }, { text: "Конверт №10", value: "Envelope #10" }, { text: "Конверт Монарх", value: "Envelope Monarch" }, { text: "Executive", value: "Executive" }, { text: "Legal", value: "Legal" }, { text: "Лист", value: "Letter" }, { text: "Таблоїд", value: "Tabloid" }, { text: "Користувацький", value: "Custom" }]
    },
    exportsetupDialog: {
        close: 'Закрити',
        commonOptions: {
            header: 'Загальні налаштування',
            imageQuality: 'Якість зображення',
            imageQualityTypes:
                [{ text: "Низька", value: "2" },
                { text: "Середня", value: "5" },
                { text: "Висока", value: "10" }],
            usePrintSizes: 'Використовувати налаштування сторінки друку'
        },
        pdfOptions: {
            header: 'Налаштування PDF',
            complexScript: 'Складний шрифт',
            conformance: 'Рівень відповідності',
            conformanceTypes: [{ text: "Жоден", value: 0 }, { text: "Pdf/A1B", value: 1 }, { text: "Pdf/X1A2001", value: 2 }, { text: "Pdf/A2B", value: 3 }, { text: "Pdf/A3B", value: 4 },
            { text: "Pdf/A1A", value: 5 }, { text: "Pdf/A2A", value: 6 }, { text: "Pdf/A2U", value: 7 }, { text: "Pdf/A3A", value: 8 }, { text: "Pdf/A3U", value: 9 }],
        },
        excel: 'Excel',
        securityOptions: {
            header: "Налаштування безпеки",
            enableProtection: "Увімкнути захист",
            protect: "Пароль для захисту",
            edit: "Пароль для редагування"
        },
        wordOptions: {
            header: 'Налаштування Word',
            protection: 'Тип захисту',
            topSpacing: 'Відступ зверху',
            bottomSpacing: 'Відступ знизу',
            formatList: [
                { text: "Документ Word 97-2003 (.doc)", value: 0 },
                { text: "Шаблон Word 97-2003 (.dot)", value: 1 },
                { text: "Документ Word (.docx)", value: 2 },
                { text: "Строгий документ Open XML 2007 (.docx)", value: 3 },
                { text: "Строгий документ Open XML 2010 (.docx)", value: 4 },
                { text: "Строгий документ Open XML 2013 (.docx)", value: 5 },
                { text: "Строгий шаблон Open XML 2007 (.dotx)", value: 6 },
                { text: "Строгий шаблон Open XML 2010 (.dotx)", value: 7 },
                { text: "Строгий шаблон Open XML 2013 (.dotx)", value: 8 },
                { text: "Документ з підтримкою макросів Word 2007 (.docm)", value: 9 },
                { text: "Документ з підтримкою макросів Word 2010 (.docm)", value: 10 },
                { text: "Документ з підтримкою макросів Word 2013 (.docm)", value: 11 },
                { text: "Шаблон з підтримкою макросів Word 2007 (.dotm)", value: 12 },
                { text: "Шаблон з підтримкою макросів Word 2010 (.dotm)", value: 13 },
                { text: "Шаблон з підтримкою макросів Word 2013 (.dotm)", value: 14 },
                { text: "Формат Rich Text (.rtf)", value: 15 },
                { text: "Простий текст (.txt)", value: 16 },
                { text: "Веб-сторінка (.html)", value: 18 }
            ],
            layoutTypes: [{ text: "За замовчуванням", value: 0 }, { text: "На вищому рівні", value: 1 }],
            protectionTypes: [{ text: "Без захисту", value: -1 }, { text: "Дозволити тільки редакції", value: 0 }, { text: "Дозволити тільки коментарі", value: 1 }, { text: "Дозволити тільки поля форм", value: 2 }, { text: "Дозволити тільки читання", value: 3 }],
        },
        layoutOption: 'Опція макету',
        saveType: 'Тип збереження',
        unit: 'дюйми',
        exportFormat: 'Формат експорту',
        pptOptions: {
            header: "Налаштування PowerPoint",
            pptTypes: [
                { text: "Презентація PowerPoint 97-2003 (.pptx)", value: 0 },
                { text: "Презентація PowerPoint 2007 (.pptx)", value: 1 },
                { text: "Презентація PowerPoint 2010 (.pptx)", value: 2 },
                { text: "Презентація PowerPoint 2013 (.pptx)", value: 3 }
            ]
        },
        doneButton: 'Гаразд',
        cancelButton: 'Скасувати',
        csvOptions: {
            formatter: 'Форматовані значення',
            header: 'Налаштування CSV',
            delimiter: 'Роздільник полів',
            qualifier: 'Текстовий кваліфікатор',
            customVal: 'Спеціальне значення',
            qualifierList: [{ text: "Подвійні лапки", value: "\"" }, { text: "Одинарні лапки", value: "'" }, { text: "Немає", value: "" }, { text: "Спеціальне", value: "Custom" }],
            delimiterList: [{ text: "Кома", value: "," }, { text: "Пробіл", value: " " }, { text: "Табуляція", value: "   " }, { text: "Крапка з комою", value: ";" }, { text: "Спеціальне", value: "Custom" }]
        },
        htmlOptions: {
            header: 'Налаштування HTML',
            separator: 'Роздільник сторінки'
        },
        excelOptions:
        {
            header: 'Налаштування Excel',
            sheetProtection: 'Захист аркуша',
            disableCellFormat: 'Вимкнути форматування комірок',
            readonly: 'Тільки для читання',
            saveTypes: [
                { text: "Книга Excel97-2003 (.xls)", value: 0 },
                { text: "Книга Excel2007 (.xlsx)", value: 1 },
                { text: "Книга Excel2010 (.xlsx)", value: 2 },
                { text: "Книга Excel2013 (.xlsx)", value: 3 },
                { text: "Книга Excel2016 (.xlsx) ", value: 4 }
            ],
            sheetProtectionTypes: [
                { text: "Немає", value: 0 },
                { text: "Об'єкти", value: 1 },
                { text: "Сценарії", value: 2 },
                { text: "Форматування комірок", value: 4 },
                { text: "Форматування стовпців", value: 8 },
                { text: "Форматування рядків", value: 16 },
                { text: "Вставка стовпців", value: 32 },
                { text: "Вставка рядків", value: 64 },
                { text: "Вставка гіперпосилань", value: 128 },
                { text: "Видалення стовпців", value: 256 },
                { text: "Видалення рядків", value: 512 },
                { text: "Заблоковані комірки", value: 1024 },
                { text: "Сортування", value: 2048 },
                { text: "Фільтрація", value: 4096 },
                { text: "Використання зведених таблиць", value: 8192 },
                { text: "Розблоковані комірки", value: 16384 },
                { text: "Вміст", value: 32768 },
                { text: "Все", value: 65535 }
            ],
            disableCellFormatTypes: [
                { text: "Немає", value: 0 },
                { text: "Все", value: 1 },
                { text: "Межа", value: 2 },
                { text: "Стиль", value: 3 }
            ],
            layoutOptionTypes: [
                { text: "Стандартний", value: 0 },
                { text: "Ігнорувати об'єднання комірок", value: 2 }
            ],
        }
    },
    findAlertMessage: {
        resultsEndReached: 'Ви дійшли до кінця результатів пошуку. Якщо ви хочете продовжити, закрийте діалогове вікно і повторіть пошук.',
        noResultsFound: 'Вказаний текст не відповідає жодному з вмісту у звіті. Змініть ключове слово пошуку та спробуйте ще раз.'
    },
    credential: {
        userName: 'Ім\'я користувача',
        password: 'Пароль'
    },
    waterMark: {
        selectOption: 'Виберіть опцію',
        selectValue: 'Виберіть значення',
        noDataFound: 'Дані не знайдені'
    },
    errorMessage: {
        startMessage: 'Переглядач звітів зіткнувся з деякими проблемами під час завантаження цього звіту. Будь ласка,',
        middleMessage: ' Натисніть тут',
        endMessage: 'щоб переглянути деталі помилки',
        closeMessage: 'Закрити це повідомлення',
        licenseMsgWeb: 'Ліцензія Bold не зареєстрована у вашому додатку. Будь ласка, використовуйте дійсну ліцензію, щоб назавжди прибрати це повідомлення про перевірку ліцензії. Ви також можете отримати безкоштовну 30-денну оцінкову ліцензію, щоб тимчасово прибрати це повідомлення протягом періоду оцінки. Докладнішу інформацію див. у цьому довідковому матеріалі(https://help.boldreports.com/licensing/licensing-errors/#license-token-not-registered).',
        licenseMsgNetCore: 'Цей додаток побудовано за допомогою пробної версії Bold. Будь ласка, використовуйте дійсну ліцензію, щоб назавжди прибрати це повідомлення про перевірку ліцензії. Ви також можете отримати безкоштовну 30-денну оцінкову ліцензію, щоб тимчасово прибрати це повідомлення протягом періоду оцінки. Докладнішу інформацію див. у цьому довідковому матеріалі (https://help.boldreports.com/licensing/licensing-errors/#license-key-not-registered).',
        exportAjaxFailureMsg: 'Не вдалося експортувати документ через невдачу підключення до служби звітів.',
        printAjaxFailureMsg: 'Не вдалося роздрукувати документ через невдачу підключення до служби звітів.',
        reportLoadAjaxFailureMsg: 'Не вдалося продовжити дію звіту через невдачу підключення до служби звітів.',
        cancelReportProcessMsg: 'Операцію обробки звіту скасовано.',
        htmlFailure: {
            headerMsg: 'Не вдалося завантажити ресурс: Сервер відповів із статусом',
            authorizationMsg: "Будь ласка, перевірте наданий токен авторизації.",
            detailMsg: "Вкажіть дійсну інформацію про сервер звітів (URL сервера звітів, Облікові дані сервера звітів, Шлях до звіту, Токен авторизації), щоб отримати потік звіту з сервера."
        },
        serviceURL: {
            noURLFound: "URL служби звітів не вказано."
        }
    },
    progressMessage: {
        exportLoadingMessage: 'Експорт звіту...',
        printLoadingMessage: 'Друк звіту...',
        printPreparationMessage: 'Підготовка до друку даних... {0}% завершено... Будь ласка, зачекайте...',
        exportPreparationMessage: 'Підготовка до експорту документа... {0}% завершено... Будь ласка, зачекайте...',
        cancelText: 'Скасувати',
    },
    alertMessage: {
        close: 'Закрити',
        title: 'Переглядач звітів',
        done: 'OK',
        showDetails: 'Показати деталі',
        hideDetails: 'Приховати деталі',
        reportLoad: 'Звіт завантажено:',
        moreInformation: "Додаткова інформація",
        copied: "Скопійовано",
        copyError: "Копіювання",
        RVERR0001: 'Переглядач звітів не зміг завантажити звіт',
        RVERR0002: 'Переглядач звітів не зміг обробити звіт',
        RVERR0003: 'Під час повернення даних ajax виникла помилка',
        RVERR0004: 'Виберіть значення параметра',
        RVERR0005: 'Параметру {назва параметра} відсутнє значення',
        RVERR0006: 'Будь ласка, введіть вхідні дані типу дійсного числа',
        RVERR0007: 'Введіть тип даних ціле число',
        RVERR0008: 'Переглядач звітів не може перевірити облікові дані джерела даних',
        RVERR0009: 'Маржі накладаються або виходять за межі паперу. Введіть інший розмір маржі.',
        RVERR0010: 'Введіть значення для параметра',
        RVERR0011: 'Параметр не може бути порожнім',
        RVERR0012: 'Значення, надане для параметра звіту {parameterprompt}, недійсне для його типу.',
        RVERR0013: 'Будь ласка, введіть значення для параметрів',
        RVERR0014: 'Параметри не можуть бути порожніми',
        RVERR0015: 'Значення, яке потрібно для назв параметрів',
    },
    reportParameter: {
        operators: {
            equals: 'Дорівнює',
            notEqualTo: 'Не дорівнює',
            lessThan: 'Менше, ніж',
            greaterThan: 'Більше, ніж',
            lessOrEqual: 'Менше або дорівнює',
            greaterOrEqual: 'Більше або дорівнює',
            contains: 'Містить',
            doesNotContain: 'Не містить',
            startsWith: 'Починається з',
            endsWith: 'Закінчується на',
            is: 'Є',
            isNot: 'Не є',
            in: 'У',
            notIn: 'Не у',
            between: 'Між',
            relative: 'Відносно'
        }
    },
    selectAll: 'Вибрати все',
    viewButton: 'Переглянути звіт',
    parameterProcessingMessage: 'Завантаження залежних параметрів...',
    parameterBlockTitle: 'Параметри звіту'
};