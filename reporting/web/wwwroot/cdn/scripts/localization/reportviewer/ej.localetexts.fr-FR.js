/**
 * Default [fr-FR] localization for report viewer.
 */
//ejDatePicker
ej.DatePicker.Locale["fr-FR"] = {
    watermarkText: "Sélectionner une date",
    buttonText: "Aujourd'hui",
};

//ejReportViewer
ej.ReportViewer.Locale["fr-FR"] = {
    toolbar: {
        print: {
            headerText: "Impression",
            contentText: "Imprimer le rapport."
        },
        exportformat: {
            headerText: "Exportation",
            contentText: "Sélectionnez le format de fichier exporté.",
            Pdf: "PDF",
            Excel: "Exceller",
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
        }
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
        unit: "po",
        orientation: "Orientation",
        portrait: "Portrait",
        landscape: "Paysage",
        doneButton: "Terminé",
        cancelButton: "Annuler"
    },
    exportsetupDialog: {
        close: 'Fermer',
        excel: 'Exceller',
        word: 'Mot',
        imageQuality: 'Qualité de l’image',
        exportFormat: 'Format d’exportation',
        dpi: 'dpi',
        doneButton: 'D\'accord',
        cancelButton: 'Annuler'
    },
    credential: {
        userName: "Nom d'utilisateur",
        password: "Mot de passe"
    },
    waterMark: {
        selectOption: "S閘ectionnez l'option",
        selectValue: "S閘ectionnez une valeur"
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
    parameterProcessingMessage: 'Chargement des paramètres dépendants ...'
};