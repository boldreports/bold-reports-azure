/**
 * Default [de-DE] localization for report viewer.
 */
//ejDatePicker
ej.DatePicker.Locale["de-DE"] = {
    watermarkText: "Datum wählen",
    buttonText: "Heute",
};

//ejReportViewer
ej.ReportViewer.Locale["de-DE"] = {
    toolbar: {
        print: {
            headerText: "Drucken",
            contentText: "Bericht ausdrücken."
        },
        exportformat: {
            headerText: "Exportieren",
            contentText: "Exportiertes Datei Format auswählen.",
            Pdf: "PDF",
            Excel: "Excel",
            Word: "Word",
            Html: "html",
            PPT: 'PowerPoint',
            CSV: 'CSV',
            XML: 'XML'
        },
        first: {
            headerText: "Erste Seite",
            contentText: "Gehe zur ersten Seite des Berichts."
        },
        previous: {
            headerText: "Vorherige Seite",
            contentText: "Gehe zur vorherigen Seite des Berichts."
        },
        next: {
            headerText: "Nächste Seite",
            contentText: "Gehe zur nächsten Seite des Berichts."
        },
        last: {
            headerText: "Letzte Seite",
            contentText: "Gehe zur letzten Seite des Berichts."
        },
        documentMap: {
            headerText: "Navigationsbereich",
            contentText: "Navigationsbereich anzeigen oder verbergen."
        },
        parameter: {
            headerText: "Parameter",
            contentText: "Parameterfeld anzeigen oder verbergen."
        },
        zoomIn: {
            headerText: "Hineinzoomen",
            contentText: "Bericht vergrößern."
        },
        zoomOut: {
            headerText: "Rauszoomen",
            contentText: "Bericht verkleinern."
        },
        refresh: {
            headerText: "auffrischen",
            contentText: "Bericht aktualisieren."
        },
        find: {
            headerText: 'Finden',
            contentText: 'Suchen Sie nach Text im Bericht.'
        },
        stop: {
            headerText: 'Halt',
            contentText: 'Beenden Sie die Verarbeitung des Berichts.'
        },
        printLayout: {
            headerText: "Layout ausdrucken",
            contentText: "Zwischen Drucklayout und Normalem Modus wechseln."
        },
        pageIndex: {
            headerText: "Seitennummer",
            contentText: "Aktuelle Seitenzahl anzuzeigen."
        },
        zoom: {
            headerText: "Zoomen",
            contentText: "Verkleinern oder Vergrößern des Berichtes."
        },
        back: {
            headerText: "Zurück",
            contentText: "Zurück zum übergeordneten Bericht."
        },
        fittopage: {
            headerText: "An Seite anpassen",
            contentText: "Die Berichtseite an den Container anpassen.",
            pageWidth: "Seitenbreite",
            pageHeight: "Ganze Seite"
        },
        pagesetup: {
            headerText: "Seiten Setup",
            contentText: "Wähle eine Seiten-Setup-Option aus um die Papierformatausrichtung und die Seitenspanne zu verändern."
        },
        exportsetup: {
            headerText: 'Setup exportieren',
            contentText: 'Wählen Sie die Option "Setup exportieren", um die Bildqualität festzulegen, den Worttyp zu speichern und das Dokument zu übertreffen.'
        },
        performance: {
            headerText: 'Leistungskennzahlen',
            contentText: 'Berichtsleistungsmetriken werden angezeigt.',
        }
    },
    PerformanceMetricsDialog: {
        title: 'Leistungskennzahlen melden',
        reportProcessing: 'Bearbeitungszeit melden',
        datasetProcessing: 'DataSet-Verarbeitungszeit',
        parse: 'Parsing-Zeit',
        evaluate: 'Zeit auswerten',
        render: 'Renderzeit',
        layout: 'Layoutzeit',
        datasetDetails: {
            rows: 'Zeilen zählen',
            dataRetrival: 'Datenabrufzeit'
        }
    },
    pagesetupDialog: {
        close: 'Schließen',
        paperSize: "Papiergröße",
        height: "Höhe",
        width: "Breite",
        margins: "Spanne",
        top: "Oben",
        bottom: "Boden",
        right: "Recht",
        left: "Links",
        pageUnits: 'Seiteneinheiten',
        unitin: 'Zoll',
        unitcm: 'cm',
        inches: 'Zoll',
        centimeters: 'Zentimeter',
        orientation: "Ausrichtung",
        portrait: "Hochformat",
        landscape: "Querformat",
        doneButton: "Erledigt",
        cancelButton: "Stornieren",
        paperTypes: [{ text: "A3", value: "A3" }, { text: "A4", value: "A4" }, { text: "B4 (JIS)", value: "B4(JIS)" }, { text: "B5 (JIS)", value: "B5(JIS)" }, { text: "Umschlag Nr. 10", value: "Envelope #10" }, { text: "Umschlag Monarch", value: "Envelope Monarch" }, { text: "Exekutive", value: "Executive" }, { text: "Gesetzlich", value: "Legal" }, { text: "Brief", value: "Letter" }, { text: "Boulevardzeitung", value: "Tabloid" }, { text: "Brauch", value: "Custom" }]
    },
    exportsetupDialog: {
        close: 'Schließen',
        commonOptions: {
            header: 'Allgemeine Einstellungen',
            imageQuality: 'Bildqualität',
            imageQualityTypes:
                [{ text: "Niedrig", value: "2" },
                { text: "Mittel", value: "5" },
                { text: "Hoch", value: "10" }],
            usePrintSizes: 'Verwenden Sie die Druckseiteneinstellungen'
        },
        pdfOptions: {
            header: 'PDF-Einstellungen',
            complexScript: 'Komplexes Skript',
            conformance: 'Konformitätsstufe',
            conformanceTypes: [{ text: "Keiner", value: 0 }, { text: "Pdf/A1B", value: 1 }, { text: "Pdf/X1A2001", value: 2 }, { text: "Pdf/A2B", value: 3 }, { text: "Pdf/A3B", value: 4 },
            { text: "Pdf/A1A", value: 5 }, { text: "Pdf/A2A", value: 6 }, { text: "Pdf/A2U", value: 7 }, { text: "Pdf/A3A", value: 8 }, { text: "Pdf/A3U", value: 9 }]
        },
        wordOptions: {
            header: 'Worteinstellungen',
            protection: 'Schutzart',
            topSpacing: 'Oberer Abstand',
            bottomSpacing: 'Unterer Abstand',
            formatList: [
                { text: "Word 97-2003-Dokument (.doc)", value: 0 },
                { text: "Word 97-2003-Vorlage (.dot)", value: 1 },
                { text: "Word-Datei (.docx)", value: 2 },
                { text: "Striktes offenes XML-Dokument 2007 (.docx)", value: 3 },
                { text: "Striktes offenes XML-Dokument 2010 (.docx)", value: 4 },
                { text: "Striktes offenes XML-Dokument 2013 (.docx)", value: 5 },
                { text: "Strikte offene XML-Vorlage 2007 (.dotx)", value: 6 },
                { text: "Strikte offene XML-Vorlage 2010 (.dotx)", value: 7 },
                { text: "Strikte offene XML-Vorlage 2013 (.dotx)", value: 8 },
                { text: "Dokument mit aktiviertem Word-Makro 2007 (.docm)", value: 9 },
                { text: "Dokument mit aktiviertem Word-Makro 2010 (.docm)", value: 10 },
                { text: "Dokument mit aktiviertem Word-Makro 2013 (.docm)", value: 11 },
                { text: "Vorlage für Word-Makros 2007 (.dotm)", value: 12 },
                { text: "Vorlage für Word-Makros 2010 (.dotm)", value: 13 },
                { text: "Vorlage für Word-Makros 2013 (.dotm)", value: 14 },
                { text: "rich-Text-Format (.rtf)", value: 15 },
                { text: "Klartext (.txt)", value: 16 },
                { text: "Website (.html)", value: 18 }
            ],
            layoutTypes: [{ text: "Standard", value: 0 }, { text: "Höchststufe", value: 1 }],
            protectionTypes: [{ text: "Kein Schutz", value: -1 }, { text: "Nur Überarbeitungen zulassen", value: 0 }, { text: "Nur Kommentare zulassen", value: 1 }, { text: "Nur Formularfelder zulassen", value: 2 }, { text: "Nur lesen zulassen", value: 3 }],
        },
        layoutOption: 'Layoutoption',
        saveType: 'Typ speichern',
        unit: 'inch',
        exportFormat: 'Format exportieren',
        pptOptions: {
            header: "PowerPoint-Einstellungen",
            pptTypes: [
                { text: "PowerPoint 97to2003 Präsentation (.ppt)", value: 0 },
                { text: "PowerPoint 2007 Präsentation (.pptx)", value: 1 },
                { text: "PowerPoint 2010 Präsentation (.pptx)", value: 2 },
                { text: "PowerPoint 2013 Präsentation (.pptx)", value: 3 }
            ]
        },
        securityOptions: {
            header: "Sicherheitseinstellungen",
            enableProtection: "Passwortschutz",
            protect: "Passwort zum Schutz",
            edit: "Kennwort zum Bearbeiten",
        },
        dpi: 'dpi',
        doneButton: 'OK',
        csvOptions: {
            delimiter: 'Feldbegrenzer',
            formatter: 'Formatierte Werte',
            header: 'CSV-Einstellungen',
            qualifier: 'Textqualifizierer',
            customVal: 'Benutzerdefinierten Wert',
            qualifierList: [{ text: "Anführungszeichen", value: "\"" }, { text: "Einzelzitate", value: "'" }, { text: "Keiner", value: "" }, { text: "Brauch", value: "Custom" }],
            delimiterList: [{ text: "Komma", value: "," }, { text: "Raum", value: " " }, { text: "Tab", value: "   " }, { text: "Semikolon", value: ";" }, { text: "Brauch", value: "Custom" }]
        },
        htmlOptions: {
            header: 'HTML-Einstellungen',
            separator: 'Seitentrenner'
        },
        excelOptions:
        {
            header: 'Excel-Einstellungen',
            sheetProtection: 'Blattschutz',
            disableCellFormat: 'Zellenformat deaktivieren',
            readonly: 'Schreibgeschützt',
            saveTypes: [
                { text: "Excel97to2003-Arbeitsmappe (.xls)", value: 0 },
                { text: "Excel2007-Arbeitsmappe (.xlsx)", value: 1 },
                { text: "Excel2010-Arbeitsmappe (.xlsx)", value: 2 },
                { text: "Excel2013-Arbeitsmappe (.xlsx)", value: 3 },
                { text: "Excel2016-Arbeitsmappe (.xlsx) ", value: 4 }
            ],
            sheetProtectionTypes: [
                { text: "Keiner", value: 0 },
                { text: "Objekte", value: 1 },
                { text: "Szenarien", value: 2 },
                { text: "Zellen formatieren", value: 4 },
                { text: "Spalten formatieren", value: 8 },
                { text: "Zeilen formatieren", value: 16 },
                { text: "Spalten einfügen", value: 32 },
                { text: "Zeilen einfügen", value: 64 },
                { text: "Einfügen von Hyperlinks", value: 128 },
                { text: "Spalten löschen", value: 256 },
                { text: "Zeilen löschen", value: 512 },
                { text: "Verschlossene Zellen", value: 1024 },
                { text: "Sortierung", value: 2048 },
                { text: "Filtern", value: 4096 },
                { text: "Verwenden von Pivot-Tabellen", value: 8192 },
                { text: "Entsperrte Zellen", value: 16384 },
                { text: "Inhalt", value: 32768 },
                { text: "Alle", value: 65535 }
            ],
            disableCellFormatTypes: [
                { text: "Keiner", value: 0 },
                { text: "Alle", value: 1 },
                { text: "Rand", value: 2 },
                { text: "Stil", value: 3 }
            ],
            layoutOptionTypes: [
                { text: "Standard", value: 0 },
                { text: "Zellenzusammenführung ignorieren", value: 1 }
            ],
        },
        layoutOption: 'Layoutoption',
        saveType: 'Typ speichern',
        unit: 'inch',
        exportFormat: 'Format exportieren',
        doneButton: 'OK',
        cancelButton: 'Stornieren',
    },
    findAlertMessage: {
        resultsEndReached: 'Sie haben das Ende der Suchergebnisse erreicht. Wenn Sie fortfahren möchten, schließen Sie das Dialogfeld und suchen Sie erneut.',
        noResultsFound: 'Der angegebene Text stimmt mit keinem Inhalt des Berichts überein. Ändern Sie Ihr Suchwort und versuchen Sie es erneut.'
    },
    credential: {
        userName: 'Nutzername',
        password: 'Passwort'
    },
    waterMark: {
        selectOption: 'Wähle eine Option',
        selectValue: 'Wähle einen Wert',
        noDataFound: 'Keine Daten gefunden'
    },
    errorMessage: {
        startMessage: 'Im Berichts Viewer sind beim Laden dieses Berichts Probleme aufgetreten. Bitte',
        middleMessage: 'Hier klicken',
        endMessage: 'um die Fehlerdetails zu sehen',
        closeMessage: 'Schließen Sie diese Nachricht',
        exportAjaxFailureMsg: 'Das Dokument kann nicht exportiert werden, weil der Berichtsdienst nicht verbunden wurde.',
        printAjaxFailureMsg: 'Das Dokument kann nicht gedruckt werden, weil der Report Service nicht verbunden wurde.',
        reportLoadAjaxFailureMsg: 'Die Berichtsaktion kann nicht ausgeführt werden, weil der Berichtsdienst nicht verbunden werden konnte.',
        cancelReportProcessMsg: 'Die Berichtsverarbeitung wurde abgebrochen.',
        htmlFailure: {
            headerMsg: 'Ressource konnte nicht geladen werden: Der Server hat mit dem Status geantwortet',
            authorizationMsg: "Bitte überprüfen Sie das bereitgestellte Autorisierungstoken.",
            detailMsg: "Geben Sie die gültigen Berichtsserverinformationen (Berichtsserver-URL, Berichtsserver-Anmeldeinformationen, Berichtspfad, Autorisierungstoken) an, um den Berichtsstream vom Server abzurufen."
        },
        serviceURL: {
            noURLFound: "Die URL des Berichtsdiensts ist nicht angegeben."
        }
    },
    progressMessage: {
        exportLoadingMessage: 'Bericht wird exportiert...',
        printLoadingMessage: 'Bericht drucken...',
        printPreparationMessage: 'Druckdaten werden vorbereitet... {0} % abgeschlossen... Bitte warten...',
        exportPreparationMessage: 'Der Export des Dokuments wird vorbereitet... {0} % abgeschlossen... Bitte warten...',
        cancelText: 'stornieren',
    },
    alertMessage: {
        close: 'Schließen',
        title: 'BerichtViewer',
        done: 'OK',
        showDetails: 'Zeige Einzelheiten',
        hideDetails: 'ausblenden Einzelheiten',
        reportLoad: 'Bericht geladen:',
        moreInformation: "Mehr Informationen",
        copied: "Kopiert",
        copyError: "Kopieren",
        RVERR0001: 'Berichts Viewer konnte den Bericht nicht laden',
        RVERR0002: 'Berichts Viewer konnte den Bericht nicht rendern',
        RVERR0003: 'Beim Ajax-Postback ist ein Fehler aufgetreten',
        RVERR0004: 'Bitte wählen Sie einen Wert für den Parameter',
        RVERR0005: 'Der Parameter {parametername} fehlt ein Wert',
        RVERR0006: 'Bitte geben Sie den Datentyp float ein',
        RVERR0007: 'Bitte geben Sie die Ganzzahl-Datentyp Eingabe',
        RVERR0008: 'Berichts Viewer konnte die Datenquellenanmeldeinformationen nicht überprüfen',
        RVERR0009: 'Die Ränder sind überlappt oder sie liegen außerhalb des Papiers. Geben Sie eine andere Randgröße ein.',
        RVERR0010: 'Bitte geben Sie einen Wert für den Parameter ein',
        RVERR0011: 'Der Parameter darf nicht leer sein',
        RVERR0012: 'Der für den Berichtsparameter {parameterprompt} angegebene Wert ist für seinen Typ nicht gültig.',
        RVERR0013: 'Der für Parameternamen erforderliche Wert',
        RVERR0014: 'Parameter dürfen nicht leer sein',
        RVERR0015: 'Der für Parameternamen erforderliche Wert',
    },
    selectAll: 'Wählen Sie Alle',
    viewButton: "Bericht sehen",
    parameterProcessingMessage: 'Abhängige Parameter werden geladen ...',
    parameterBlockTitle: 'Berichtsparameter'
};