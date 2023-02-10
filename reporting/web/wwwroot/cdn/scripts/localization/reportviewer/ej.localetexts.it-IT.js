/**
 * Default [it-IT] localization for report viewer.
 */
//ejDatePicker
ej.DatePicker.Locale["it-IT"] = {
	watermarkText: "Seleziona la data",
	buttonText: "Oggi"
};

//ejReportViewer
ej.ReportViewer.Locale["it-IT"] = {
	toolbar: {
		print: {
			headerText: "Stampare",
			contentText: "Stampare il report."
		},
		exportformat: {
			headerText: "Esportare",
			contentText: "Selezionare il formato di file esportato.",
			Pdf: "PDF",
			Excel: "Eccellere",
			Word: "parola",
			Html: "HTML",
			PPT: "Presa della corrente",
			CSV: "CSV",
			XML: "XML"
		},
		first: {
			headerText: "Primo",
			contentText: "Vai alla prima pagina del report."
		},
		previous: {
			headerText: "Precedente",
			contentText: "Vai alla pagina precedente del report."
		},
		next: {
			headerText: "Il prossimo",
			contentText: "Vai alla pagina successiva del report."
		},
		last: {
			headerText: "Ultimo",
			contentText: "Vai all'ultima pagina del report."
		},
		documentMap: {
			headerText: "Mappa documento",
			contentText: "Mostrare o nascondere la mappa documento."
		},
		parameter: {
			headerText: "Parametro",
			contentText: "Mostrare o nascondere il riquadro dei parametri."
		},
		zoomIn: {
			headerText: "Ingrandire",
			contentText: "Zoom in alla relazione."
		},
		zoomOut: {
			headerText: "Zoom-Out",
			contentText: "Diminuire del rapporto."
		},
		refresh: {
			headerText: "ricaricare",
			contentText: "Aggiornare il report."
		},
		find: {
			headerText: 'Trova',
			contentText: 'Trova il testo nel rapporto.'
		},
		stop: {
			headerText: "Fermare",
			contentText: "Interrompere l'elaborazione del rapporto."
		},
		printLayout: {
			headerText: "Stampa il layout",
			contentText: "Cambiare tra il layout di stampa e modi normali."
		},
		pageIndex: {
			headerText: "Numero di pagina",
			contentText: "numero di pagina corrente per visualizzare."
		},
		zoom: {
			headerText: "ingrandimento",
			contentText: "Zoom avanti o indietro sulla relazione."
		},
		back: {
			headerText: "Indietro",
			contentText: "Torna alla relazione genitore."
		},
		fittopage: {
			headerText: "Adatta alla pagina",
			contentText: "Montare la pagina del report al contenitore.",
			pageWidth: "Larghezza pagina",
			pageHeight: "Pagina intera"
		},
		pagesetup: {
			headerText: "Impostazione della pagina",
			contentText: "Scegliere l'opzione di impostazione pagina per modificare la carta di formato, l'orientamento ei margini."
		},
		exportsetup: {
			headerText: "Esporta impostazione",
			contentText: "Scegli l'opzione di configurazione dell'esportazione per impostare la qualità dell'immagine, salvare il tipo di parola e il documento Excel."
		},
	},
	pagesetupDialog: {
		close: 'Vicino',
		paperSize: 'Misura del foglio',
		height: 'Altezza',
		width: 'Larghezza',
		margins: 'margini',
		top: 'Superiore',
		bottom: 'Parte inferiore',
		right: 'Destra',
		left: 'Sinistra',
		pageUnits: 'Unità di pagina',
		unitin: 'pollici',
		unitcm: 'cm',
		inches: 'pollici',
		centimeters: 'Centimetri',
		orientation: 'Orientamento',
		portrait: 'Ritratto',
		landscape: 'Paesaggio',
		doneButton: 'Fatto',
		cancelButton: 'Annulla',
		paperTypes: [{ text: "A3", value: "A3" }, { text: "A4", value: "A4" }, { text: "B4(JIS)", value: "B4(JIS)" }, { text: "B5(JIS)", value: "B5(JIS)" }, { text: "Busta n. 10", value: "Envelope #10" }, { text: "Busta Monarca", value: "Envelope Monarch" }, { text: "Esecutivo", value: "Executive" }, { text: "Legale", value: "Legal" }, { text: "Lettera", value: "Letter" }, { text: "Tabloid", value: "Tabloid" }, { text: "Costume", value: "Custom" }]
	},
	exportsetupDialog: {
		close: 'Vicino',
		commonOptions: {
			header: 'Impostazioni comuni',
			imageQuality: 'Qualità dell\'immagine',
			imageQualityTypes:
				[{ text: "Basso", value: "2" },
				{ text: "medio", value: "5" },
				{ text: "Alto", value: "10" }]
		},
		pdfOptions: {
			header: 'Impostazioni PDF',
			complexScript: 'Sceneggiatura complessa',
			conformance: 'Livello di conformità',
			conformanceTypes: [{ text: "Nessuno", value: 0 }, { text: "Pdf/A1B", value: 1 }, { text: "Pdf/X1A2001", value: 2 }, { text: "Pdf/A2B", value: 3 }, { text: "Pdf/A3B", value: 4 },
			{ text: "Pdf/A1A", value: 5 }, { text: "Pdf/A2A", value: 6 }, { text: "Pdf/A2U", value: 7 }, { text: "Pdf/A3A", value: 8 }, { text: "Pdf/A3U", value: 9 }],
		},
		securityOptions: {
			header: "Impostazioni di sicurezza",
			enableProtection: "Abilita protezione",
			protect: "Password Per proteggere",
			edit: "Password da modificare",
		},
		wordOptions: {
			header: 'Impostazioni di parole',
			protection: 'Tipo di protezione',
			topSpacing: 'Spaziatura superiore',
			bottomSpacing: 'spaziatura dal basso',
			formatList: [
				{ text: "Documento Word 97-2003 (.doc)", value: 0 },
				{ text: "Modello Word 97-2003 (.dot)", value: 1 },
				{ text: "Documento Word (.docx)", value: 2 },
				{ text: "Documento XML aperto rigoroso 2007 (.docx)", value: 3 },
				{ text: "Documento XML aperto rigoroso 2010 (.docx)", value: 4 },
				{ text: "Documento XML aperto rigoroso 2013 (.docx)", value: 5 },
				{ text: "Modello XML aperto rigoroso 2007 (.dotx)", value: 6 },
				{ text: "Modello XML aperto rigoroso 2010 (.dotx)", value: 7 },
				{ text: "Modello XML aperto rigoroso 2013 (.dotx)", value: 8 },
				{ text: "Documento abilitato alle macro di Word 2007 (.docm)", value: 9 },
				{ text: "Documento abilitato alle macro di Word 2010 (.docm)", value: 10 },
				{ text: "Documento abilitato alle macro di Word 2013 (.docm)", value: 11 },
				{ text: "Modello 2007 abilitato per macro di Word (.dotm)", value: 12 },
				{ text: "Modello 2010 abilitato per macro di Word (.dotm)", value: 13 },
				{ text: "Modello 2013 abilitato per macro di Word (.dotm)", value: 14 },
				{ text: "Formato testo ricco (.rtf)", value: 15 },
				{ text: "Testo normale (.txt)", value: 16 },
				{ text: "pagina web (.html)", value: 18 }
			],
			layoutTypes: [{ text: "Predefinito", value: 0 }, { text: "Livello superiore", value: 1 }],
			protectionTypes: [{ text: "Nessuna protezione", value: -1 }, { text: "Consenti solo revisioni", value: 0 }, { text: "Consenti solo commenti", value: 1 }, { text: "Consenti solo campi modulo", value: 2 }, { text: "Consenti sola lettura", value: 3 }],
		},
		layoutOption: 'Opzione layout',
		saveType: 'salva tipo',
		unit: 'in',
		exportFormat: 'Formato di esportazione',
		doneButton: 'Fatto',
		cancelButton: 'Annulla',
		csvOptions: {
			delimiter: 'Delimitatore di campo',
			formatter: 'Valori formattati',
			header: 'Impostazioni CSV',
			qualifier: 'Qualificatore di testo',
			customVal: 'Valore personalizzato',
			qualifierList: [{ text: "Virgolette", value: "\"" }, { text: "Citazioni singole", value: "'" }, { text: "Nessuno", value: "" }, { text: "Costume", value: "Custom" }],
			delimiterList: [{ text: "Virgola", value: "," }, { text: "Spazio", value: " " }, { text: "Tab", value: "   " }, { text: "Punto e virgola", value: ";" }, { text: "Costume", value: "Custom" }]
		},
		htmlOptions: {
			header: 'Impostazioni HTML',
			separator: 'Separatore di pagine'
		},
		pptOptions: {
			header: "Impostazioni PowerPoint",
			pptTypes: [
				{ text: "PowerPoint 97to2003 Presentazione (.ppt)", value: 0 },
				{ text: "PowerPoint 2007 Presentazione (.pptx)", value: 1 },
				{ text: "PowerPoint 2010 Presentazione (.pptx)", value: 2 },
				{ text: "PowerPoint 2013 Presentazione (.pptx)", value: 3 }
			]
		},
		excelOptions:
		{
			header: 'Impostazioni di Excel',
			sheetProtection: 'Protezione del foglio',
			disableCellFormat: 'Disabilita il formato cella',
			readonly: 'Sola lettura',
			saveTypes: [
				{ text: "Cartella di lavoro da Excel97 a 2003 (.xls)", value: 0 },
				{ text: "Cartella di lavoro Excel2007 (.xlsx)", value: 1 },
				{ text: "Cartella di lavoro di Excel2010 (.xlsx)", value: 2 },
				{ text: "Cartella di lavoro Excel2013 (.xlsx)", value: 3 },
				{ text: "Cartella di lavoro Excel2016 (.xlsx)", value: 4 }],
			sheetProtectionTypes: [
				{ text: "Nessuno", value: 0 },
				{ text: "Oggetti", value: 1 },
				{ text: "Scenarios", value: 2 },
				{ text: "Formattazione delle celle", value: 4 },
				{ text: "Colonne di formattazione", value: 8 },
				{ text: "Righe di formattazione", value: 16 },
				{ text: "Inserimento di colonne", value: 32 },
				{ text: "Inserimento di righe", value: 64 },
				{ text: "Inserimento di collegamenti ipertestuali", value: 128 },
				{ text: "Eliminazione di colonne", value: 256 },
				{ text: "Eliminazione di righe", value: 512 },
				{ text: "Celle bloccate", value: 1024 },
				{ text: "Ordinamento", value: 2048 },
				{ text: "Filtraggio", value: 4096 },
				{ text: "Utilizzo delle tabelle pivot", value: 8192 },
				{ text: "Celle sbloccate", value: 16384 },
				{ text: "Contenuto", value: 32768 },
				{ text: "Tutte", value: 65535 }
			],
			disableCellFormatTypes: [
				{ text: "Nessuno", value: 0 },
				{ text: "Tutte", value: 1 },
				{ text: "Frontiera", value: 2 },
				{ text: "Stile", value: 3 }
			],
			layoutOptionTypes: [
				{ text: "Predefinita", value: 0 },
				{ text: "Ignora unione celle", value: 1 }
			],
		}
	},
	credential: {
		userName: 'Nome utente',
    },

    findAlertMessage: {
        resultsEndReached: 'Hai raggiunto la fine dei risultati della ricerca. Se desideri continuare, chiudi la finestra di dialogo e cerca di nuovo.',
        noResultsFound: 'Il testo specificato non corrisponde a nessuno dei contenuti del report. Modifica la parola chiave di ricerca e riprova.'
    },
    credential: {
        userName: 'Nome utente',
		password: "Parola d'ordine"
	},
	waterMark: {
		selectOption: "Selezionare l'opzione",
		selectValue: 'Selezionare un valore'
	},
	errorMessage: {
		startMessage: 'Report Viewer ha riscontrato alcuni problemi durante il caricamento di questo report. per favore',
		middleMessage: ' Clicca qui',
		endMessage: "per vedere i dettagli dell'errore",
		closeMessage: 'Chiudi questo messaggio',
		exportAjaxFailureMsg: 'Impossibile esportare il documento a causa di un errore nel collegamento del servizio report.',
		printAjaxFailureMsg: 'Impossibile stampare il documento a causa di un errore nel collegamento del servizio report.',
		reportLoadAjaxFailureMsg: "Impossibile eseguire l'azione di report a causa di un errore nel collegamento del servizio report.",
		cancelReportProcessMsg: "L'elaborazione del rapporto è stata annullata.",
	},
	progressMessage: {
		exportLoadingMessage: 'Preparazione del documento di esportazione ... attendere ...',
		printLoadingMessage: 'Preparazione dei dati di stampa ... attendere ...',
		printPreparationMessage: 'Preparazione dei dati di stampa ... {0}% completato ... Attendere ...',
		exportPreparationMessage: 'Preparazione del documento di esportazione ... {0}% completato ... Attendere ...',
		cancelText: 'Annulla',
	},
	alertMessage: {
		close: 'Vicino',
		title: 'ReportViewer',
		done: 'OK',
		showDetails: 'Mostra dettagli',
		hideDetails: 'Nascondere dettagli',
		reportLoad: 'Rapporto caricato:',
		RVERR0001: 'ReportViewer non è riuscito a caricare il report',
		RVERR0002: 'ReportViewer non è riuscito a rendere il report',
		RVERR0003: 'Si è verificato un errore nel postback ajax',
		RVERR0004: 'Si prega di selezionare un valore per il parametro',
		RVERR0005: 'Il parametro {parametername} non ha un valore',
		RVERR0006: 'Si prega di fornire il tipo di dati float di input',
		RVERR0007: 'Si prega di dare il tipo di dati interi di input',
		RVERR0008: "ReportViewer non è riuscito a convalidare le credenziali dell'origine dati",
		RVERR0009: 'I margini sono sovrapposti o sono fuori carta. Inserisci una dimensione di margine diversa.',
		RVERR0010: 'Si prega di inserire un valore per il parametro',
		RVERR0011: 'Il parametro non può essere vuoto',
		RVERR0012: 'Il valore fornito per il parametro del report {parameterprompt} non è valido per il suo tipo.'
	},
	selectAll: 'Seleziona tutto',
	viewButton: "Visualizza rapporto",
	parameterProcessingMessage: 'Caricamento dei parametri dipendenti ...',
};