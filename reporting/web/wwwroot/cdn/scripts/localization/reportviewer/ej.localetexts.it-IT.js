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
		unit: 'in',
		orientation: 'Orientamento',
		portrait: 'Ritratto',
		landscape: 'Paesaggio',
		doneButton: 'Fatto',
		cancelButton: 'Annulla'
    },
   exportsetupDialog: {
        close: 'Vicino',
        excel: 'Eccellere',
        word: 'parola',
        imageQuality: "Qualità dell'immagine",
        exportFormat: 'Formato di esportazione',
        dpi: 'dpi',
        doneButton: 'Fatto',
        cancelButton: 'Annulla'
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