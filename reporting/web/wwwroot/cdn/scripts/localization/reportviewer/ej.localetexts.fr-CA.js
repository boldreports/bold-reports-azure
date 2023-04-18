/**
 * Default [fr-CA] localization for report viewer.
 */
//ejDatePicker
ej.DatePicker.Locale["fr-CA"] = {
    watermarkText: "Sélectionner une date",
    buttonText: "Aujourd'hui",
};

//ejReportViewer
ej.ReportViewer.Locale["fr-CA"] = {
    toolbar: {
        print: {
            headerText: "Impression",
            contentText: "Imprimer le rapport."
        },
        exportformat: {
            headerText: "Exportation",
            contentText: "Sélectionnez le format de fichier exporté.",
            Pdf: "PDF",
            Excel: "Excel",
            Word: "Mot",
            Html: "Html",
            PPT: 'PowerPoint',
            CSV: 'CSV',
            XML: 'XML'
        },
        first: {
            headerText: "Premier",
            contentText: "Aller à la première page du rapport."
        },
        previous: {
            headerText: "précédent",
            contentText: "Aller à la page précédente du rapport."
        },
        next: {
            headerText: "Prochain",
            contentText: "Aller à la page suivante du rapport."
        },
        last: {
            headerText: "Dernier",
            contentText: "Aller à la dernière page du rapport."
        },
        documentMap: {
            headerText: "document Carte",
            contentText: "Afficher ou masquer la carte du document."
        },
        parameter: {
            headerText: "Paramètre",
            contentText: "Afficher ou masquer le volet des paramètres."
        },
        zoomIn: {
            headerText: "Agrandir",
            contentText: "Zoom au rapport."
        },
        zoomOut: {
            headerText: "Dézoomer",
            contentText: "Zoom sur le rapport."
        },
        refresh: {
            headerText: "Rafraîchir",
            contentText: "Actualiser le rapport."
        },
        find: {
            headerText: 'Trouve',
            contentText: 'Rechercher du texte dans le rapport.'
        },
        stop: {
            headerText: 'Arrêtez',
            contentText: 'Arrêter le traitement du rapport.'
        },
        printLayout: {
            headerText: "mise en page d'impression",
            contentText: "Changement entre la mise en page d'impression et les modes normaux."
        },
        pageIndex: {
            headerText: "Numéro de page",
            contentText: "Actuel numéro de page pour afficher."
        },
        zoom: {
            headerText: "Zoom",
            contentText: "Zoom avant ou arrière sur le rapport."
        },
        back: {
            headerText: "Arrière",
            contentText: "Retour au rapport de parent."
        },
        fittopage: {
            headerText: "Ajuster à la page",
            contentText: "Monter la page du rapport au récipient.",
            pageWidth: "Largeur de page",
            pageHeight: "Page entière"
        },
        pagesetup: {
            headerText: "Mise en page",
            contentText: "Choisissez la page option de configuration pour modifier la taille du papier, l'orientation et les marges."
        },
        exportsetup: {
            headerText: 'Exporter la configuration',
            contentText: 'Choisissez l’option d’installation d’exportation pour définir la qualité de l’image, enregistrer le type de mot et excel document.'
        },
        performance: {
            headerText: 'Indicateurs de performance',
            contentText: 'Les mesures de performances des rapports sont affichées.',
        }
    },
    PerformanceMetricsDialog: {
        title: 'Rapporter les mesures de performance',
        reportProcessing: 'Délai de traitement du rapport',
        datasetProcessing: "Temps de traitement de l'ensemble de données",
        parse: "Temps d'analyse",
        evaluate: 'Évaluer le temps',
        render: 'Temps de rendu',
        layout: 'Temps de mise en page',
        datasetDetails: {
            rows: 'Nombre de lignes',
            dataRetrival: 'Temps de récupération des données'
        },
    },
    pagesetupDialog: {
        close: "Fermer",
        paperSize: "Taille de papier",
        height: "la taille",
        width: "Largeur",
        margins: "marges",
        top: "Sommet",
        bottom: "Bas",
        right: "Droite",
        left: "La gauche",
        pageUnits: 'Unités de page',
        unitin: 'po',
        unitcm: 'cm',
        inches: 'pouces',
        centimeters: 'Centimètres',
        orientation: "Orientation",
        portrait: "Portrait",
        landscape: "Paysage",
        doneButton: "Terminé",
        cancelButton: "Annuler",
        paperTypes: [{ text: "A3", value: "A3" }, { text: "A4", value: "A4" }, { text: "B4(JIS)", value: "B4(JIS)" }, { text: "B5(JIS)", value: "B5(JIS)" }, { text: "Enveloppe #10", value: "Envelope #10" }, { text: "Enveloppe monarque", value: "Envelope Monarch" }, { text: "Exécutif", value: "Executive" }, { text: "Légal", value: "Legal" }, { text: "Lettre", value: "Letter" }, { text: "Tabloïde", value: "Tabloid" }, { text: "Personnalisé", value: "Custom" }]
    },
    exportsetupDialog: {
        close: 'Fermer',
        commonOptions: {
            header: 'Paramètres communs',
            imageQuality: 'Qualité d\'image',
            imageQualityTypes:
                [{ text: "Meugler", value: "2" },
                { text: "Moyen", value: "5" },
                { text: "Haut", value: "10" }],
            usePrintSizes: 'Utiliser les paramètres d`impression de page'
        },
        pdfOptions: {
            header: 'Paramètres PDF',
            complexScript: 'Complex Script',
            conformance: 'Niveau de conformité',
            conformanceTypes: [{ text: "Aucun", value: 0 }, { text: "Pdf/A1B", value: 1 }, { text: "Pdf/X1A2001", value: 2 }, { text: "Pdf/A2B", value: 3 }, { text: "Pdf/A3B", value: 4 },
            { text: "Pdf/A1A", value: 5 }, { text: "Pdf/A2A", value: 6 }, { text: "Pdf/A2U", value: 7 }, { text: "Pdf/A3A", value: 8 }, { text: "Pdf/A3U", value: 9 }],
        },
        excel: 'Excel',
        securityOptions: {
            header: "Les paramètres de sécurité",
            enableProtection: "Activer la protection",
            protect: "Mot de passe Pour protéger",
            edit: "Mot de passe à modifier",
        },
        wordOptions: {
            header: 'Paramètres de mots',
            protection: 'Type de protection',
            topSpacing: 'espacement supérieur',
            bottomSpacing: 'espacement inférieur',
            formatList: [
                { text: "Document Word 97-2003 (.doc)", value: 0 },
                { text: "Modèle Word 97-2003 (.dot)", value: 1 },
                { text: "Document Word (.docx)", value: 2 },
                { text: "Document XML ouvert strict 2007 (.docx)", value: 3 },
                { text: "Document XML ouvert strict 2010 (.docx)", value: 4 },
                { text: "Document XML ouvert strict 2013 (.docx)", value: 5 },
                { text: "Modèle XML ouvert strict 2007 (.dotx)", value: 6 },
                { text: "Modèle XML ouvert strict 2010 (.dotx)", value: 7 },
                { text: "Modèle XML ouvert strict 2013 (.dotx)", value: 8 },
                { text: "Document activé par macro WORD 2007 (.docm)", value: 9 },
                { text: "Document activé par macro WORD 2010 (.docm)", value: 10 },
                { text: "Document activé par macro WORD 2013 (.docm)", value: 11 },
                { text: "Modèle compatible avec les macros WORD 2007 (.dotm)", value: 12 },
                { text: "Modèle compatible avec les macros WORD 2010 (.dotm)", value: 13 },
                { text: "Modèle compatible avec les macros WORD 2013 (.dotm)", value: 14 },
                { text: "Format texte enrichi (.rtf)", value: 15 },
                { text: "Texte brut (.txt)", value: 16 },
                { text: "page Web (.html)", value: 18 }
            ],
            layoutTypes: [{ text: "Défaut", value: 0 }, { text: "Haut niveau", value: 1 }],
            protectionTypes: [{ text: "Pas de protection", value: -1 }, { text: "Autoriser les révisions uniquement", value: 0 }, { text: "Autoriser les commentaires uniquement", value: 1 }, { text: "Autoriser uniquement les champs de formulaire", value: 2 }, { text: "Autoriser la lecture seule", value: 3 }],
        },
        layoutOption: 'Option de mise en page',
        saveType: 'enregistrer le type',
        unit: 'po',
        pptOptions: {
            header: " Paramètres PowerPoint",
            pptTypes: [
                { text: "PowerPoint 97to2003 Présentation (.ppt)", value: 0 },
                { text: "PowerPoint 2007 Présentation (.pptx)", value: 1 },
                { text: "PowerPoint2010 Présentation (.pptx)", value: 2 },
                { text: "PowerPoint 2013 Présentation (.pptx)", value: 3 }
            ]
        },
        doneButton: 'D\'accord',
        cancelButton: 'Annuler',
        csvOptions: {
            delimiter: 'Délimiteur de champ',
            formatter: 'Valeurs formatées',
            header: 'Paramètres CSV',
            qualifier: 'Qualificateur de texte',
            customVal: 'Valeur personnalisée',
            qualifierList: [{ text: "Double citation", value: "\"" }, { text: "Guillemets simples", value: "'" }, { text: "Rien", value: "" }, { text: "Personnalisé", value: "Custom" }],
            delimiterList: [{ text: "Virgule", value: "," }, { text: "Espacer", value: " " }, { text: "Languette", value: "   " }, { text: "Point-virgule", value: ";" }, { text: "Personnalisé", value: "Custom" }]
        },
        htmlOptions: {
            header: 'Paramètres HTML',
            separator: 'Séparateur de pages'
        },
        excelOptions:
        {
            header: 'Paramètres Excel',
            sheetProtection: 'Feuille de protection',
            disableCellFormat: 'Désactiver le format de cellule',
            readonly: 'Lecture seulement',
            saveTypes: [
                { text: "Classeur Excel97to2003 (.xls)", value: 0 },
                { text: "Classeur Excel2007 (.xlsx)", value: 1 },
                { text: "Classeur Excel2010 (.xlsx)", value: 2 },
                { text: "Classeur Excel2013 (.xlsx)", value: 3 },
                { text: "Classeur Excel2016 (.xlsx) ", value: 4 }],
            sheetProtectionTypes: [
                { text: "Aucune", value: 0 },
                { text: "Objets", value: 1 },
                { text: "Scénarios", value: 2 },
                { text: "Formatage des cellules", value: 4 },
                { text: "Formatage des colonnes", value: 8 },
                { text: "Mise en forme des lignes", value: 16 },
                { text: "Insertion de colonnes", value: 32 },
                { text: "Insertion de lignes", value: 64 },
                { text: "Insertion d'hyperliens", value: 128 },
                { text: "Suppression de colonnes", value: 256 },
                { text: "Suppression de lignes", value: 512 },
                { text: "Cellules verrouillées", value: 1024 },
                { text: "Tri", value: 2048 },
                { text: "Filtration", value: 4096 },
                { text: "Utilisation des tableaux croisés dynamiques", value: 8192 },
                { text: "Cellules déverrouillées", value: 16384 },
                { text: "Contenu", value: 32768 },
                { text: "Toute", value: 65535 }
            ],
            disableCellFormatTypes: [
                { text: "Aucune", value: 0 },
                { text: "Toute", value: 1 },
                { text: "Frontière", value: 2 },
                { text: "Style", value: 3 }
            ],
            layoutOptionTypes: [
                { text: "Défaut", value: 0 },
                { text: "Ignorer la fusion de cellules", value: 1 }
            ],
        }
    },
    findAlertMessage: {
        resultsEndReached: "Vous avez atteint la fin des résultats de recherche. Si vous souhaitez continuer, fermez la boîte de dialogue et relancez la recherche.",
        noResultsFound: "Vous avez atteint la fin des résultats de recherche. Si vous souhaitez continuer, fermez la boîte de dialogue et relancez la recherche."
    },
    credential: {
        userName: "Nom d'utilisateur",
        password: "Mot de passe"
    },
    waterMark: {
        selectOption: "S閘ectionnez l'option",
        selectValue: "S閘ectionnez une valeur",
        noDataFound: "Aucune donnée disponible"
    },
    errorMessage: {
        startMessage: "Visionneuse de rapports a rencontré des problèmes lors du chargement de ce rapport. S'il vous plaît",
        middleMessage: " Cliquez ici",
        endMessage: "pour voir les détails de l'erreur",
        closeMessage: "Fermer ce message",
        exportAjaxFailureMsg: "Impossible d'exporter le document car la connexion au service de rapport a échoué.",
        printAjaxFailureMsg: "Impossible d'imprimer le document en raison de l'échec de la connexion à Report Service.",
        reportLoadAjaxFailureMsg: "Impossible de faire avancer l'action Report en raison de l'échec de la connexion du service de rapport.",
        cancelReportProcessMsg: 'Le traitement du rapport a été annulé.',
    },
    progressMessage: {
        exportLoadingMessage: "Préparation du document d'exportation ... Veuillez patienter ...",
        printLoadingMessage: "Préparation des données d'impression... Veuillez patienter…",
        printPreparationMessage: "Préparation des données d'impression ... {0}% terminé ... Veuillez patienter ...",
        exportPreparationMessage: "Préparation du document d'exportation ... {0}% terminé ... Veuillez patienter ...",
        cancelText: 'Annuler',
    },
    alertMessage: {
        close: 'Fermer',
        title: 'Rapport spectateur',
        done: 'D\'accord',
        showDetails: 'Afficher les d閠ails',
        hideDetails: 'Cacher les d閠ails',
        reportLoad: 'Rapport charg?',
        RVERR0001: 'La visionneuse de rapports n\'a pas pu charger le rapport',
        RVERR0002: 'La visionneuse de rapports n\'a pas r閡ssi ?afficher le rapport',
        RVERR0003: 'Une erreur s\'est produite dans la publication ajax',
        RVERR0004: 'Veuillez s閘ectionner une valeur pour le param鑤re',
        RVERR0005: 'le {le nom du param鑤re} param鑤re est manquant une valeur',
        RVERR0006: 'Veuillez donner l\'entr閑 de type de donn閑s floatt',
        RVERR0007: 'Veuillez indiquer l\'entr閑 du type de donn閑s entier',
        RVERR0008: 'La visionneuse de rapports n\'a pas r閡ssi ?valider les informations d\'identification de la source de donn閑s',
        RVERR0009: 'Les marges se chevauchent ou se trouvent sur le papier. Entrez une taille de marge diff閞ente.',
        RVERR0010: 'Veuillez entrer une valeur pour le param鑤re',
        RVERR0011: 'Le param鑤re ne peut pas 阾re vide',
        RVERR0012: 'La valeur fournie pour le param鑤re de rapport {invite de param鑤re} n\'est pas valide pour son type.'
    },
    selectAll: "Tout s閘ectionner",
    viewButton: "Voir le rapport",
    parameterProcessingMessage: 'Chargement des paramètres dépendants ...',
    parameterBlockTitle: 'Paramètres du rapport'
};