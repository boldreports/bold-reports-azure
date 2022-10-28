/**
 * Default [tr-TR] localization for report viewer.
 */
//ejDatePicker
ej.DatePicker.Locale["tr-TR"] = {
    watermarkText: "seçin tarih",
    buttonText: "Bugün"
};

//ejReportViewer
ej.ReportViewer.Locale["tr-TR"] = {
    toolbar: {
        print: {
            headerText: "baskı",
            contentText: "raporu yazdırın."
        },
        exportformat: {
            headerText: "İhracat",
            contentText: "Verilen dosya biçimini seçin.",
            Pdf: "PDF",
            Excel: "Excel",
            Word: "sözcük",
            Html: "HTML",
            PPT: "Priz",
            CSV: "CSV",
            XML: "XML"
        },
        first: {
            headerText: "İlk",
            contentText: "Raporun ilk sayfaya gidin."
        },
        previous: {
            headerText: "Önceki",
            contentText: "Raporun önceki sayfaya gidin."
        },
        next: {
            headerText: "Sonraki",
            contentText: "Raporun bir sonraki sayfaya gidin."
        },
        last: {
            headerText: "Son",
            contentText: "Raporun son sayfasına gidin."
        },
        documentMap: {
            headerText: "Belge Haritası",
            contentText: "Göster veya belge haritası gizlemek."
        },
        parameter: {
            headerText: "Parametre",
            contentText: "Göster veya parametreler bölmesini gizlemek."
        },
        zoomIn: {
            headerText: "Yakınlaştır",
            contentText: "Rapora yakınlaştırmak."
        },
        zoomOut: {
            headerText: "Uzaklaştır",
            contentText: "Raporun uzaklaştır."
        },
        refresh: {
            headerText: "Yenile",
            contentText: "raporu yenileyin."
        },
        stop: {
            headerText: "durdurmak",
            contentText: "Raporu işlemeyi bırak."
        },
        printLayout: {
            headerText: "Baskı düzeni",
            contentText: "Baskı düzeni ve normal modları arasında geçiş."
        },
            pageIndex: {
            headerText: "Sayfa numarası",
            contentText: "Şu anki sayfa numarası görüntülemek için."
        },
        zoom: {
            headerText: "yakınlaştırma",
            contentText: "Raporda Yakınlaştırma veya uzaklaştırma."
        },
        back: {
            headerText: "geri",
            contentText: "geri ana rapora gidin."
        },
        fittopage: {
            headerText: "Sayfaya sığdır",
            contentText: "kaba rapor sayfasına sığdırmak.",
            pageWidth: "Sayfa Genişliği",
            pageHeight: "Tüm sayfa"
        },
        pagesetup: {
            headerText: "Sayfa ayarı",
            contentText: "Kağıt boyutunu, yönünü ve kenar boşluklarını değiştirmek için sayfa ayarları seçeneğini seçin."
        },
       exportsetup: {
                headerText: 'Dışa Aktarma Kurulumu',
           contentText: "Görüntü kalitesini ayarlamak, sözcük türünü kaydetmek ve belgeyi excel'de ayarlamak için dışa aktarma kurulumu seçeneğini seçin."
            }
    },
        pagesetupDialog: {
            close: 'Kapat',
            paperSize: 'Kağıt boyutu',
            height: 'Yükseklik',
            width: 'genişlik',
            margins: 'Kenar boşlukları',
            top: 'Üst',
            bottom: 'Alt',
            right: 'Sağ',
            left: 'Sol',
            unit: 'içinde',
            orientation: 'Oryantasyon',
            portrait: 'Portre',
            landscape: 'peyzaj',
            doneButton: 'tamam',
            cancelButton: 'İptal etmek'
        },
       exportsetupDialog: {
            close: 'Kapat',
            excel: 'Excel',
            word: 'Kelime',
            imageQuality: 'Görüntü kalitesi',
            exportFormat: 'Dışa Aktarma Formatı',
            dpi: 'dpi',
            doneButton: 'tamam',
            cancelButton: 'İptal etmek'
        },
        credential: {
            userName: 'Kullanıcı adı',
            password: 'Parola'
        },
        waterMark: {
            selectOption: 'Seçeneği Seç',
            selectValue: 'Bir değer seçin'
        },
        errorMessage: {
            startMessage: 'Rapor Görüntüleyici bu raporu yükleyen bazı sorunlarla karşılaştı. Lütfen',
            middleMessage: ' Buraya TIKLAYIN',
            endMessage: 'hata ayrıntılarını görmek için',
            closeMessage: 'Bu mesajı kapat',
            exportAjaxFailureMsg: 'Det gick inte att exportera dokumentet på grund av att det inte gick att ansluta Report Service.',
            printAjaxFailureMsg: 'Det gick inte att skriva ut dokumentet på grund av att det inte gick att ansluta Report Service.',
            reportLoadAjaxFailureMsg: 'Det gick inte att göra rapporteringsåtgärden på grund av misslyckande att ansluta Report Service.',
            cancelReportProcessMsg: 'Rapor işleme iptal edildi.',
        },
        progressMessage: {
            exportLoadingMessage: 'Förbereder exporterande dokument ... Vänligen vänta ...',
            printLoadingMessage: 'Preparing print data… Please wait...',
            printPreparationMessage: 'Preparing print data... {0}% completed... Please wait...',
            exportPreparationMessage: 'Preparing exporting document... {0}% completed... Please wait...',
            cancelText: 'iptal etmek',
        },
        alertMessage: {
            close: 'Kapat',
            title: 'ReportViewer',
            done: 'tamam',
            showDetails: 'Detayları göster',
            hideDetails: 'Detayları gizle',
            reportLoad: 'Raporu Yüklendi:',
            RVERR0001: 'ReportViewer Raporu yüklenemedi',
            RVERR0002: 'ReportViewer Raporu oluşturmayı başaramadı',
            RVERR0003: 'Ajax geri dönüşünde bir hata oluştu',
            RVERR0004: 'Lütfen parametre için bir değer seçin',
            RVERR0005: '{Parameterername} parametresinin bir değeri eksik',
            RVERR0006: 'Lütfen şamandıra veri tipi girişi verin',
            RVERR0007: 'Lütfen tamsayı veri tipi girişi verin',
            RVERR0008: 'ReportViewer Veri kaynağı kimlik bilgilerini doğrulayamadı',
            RVERR0009: 'Kenar boşlukları çakışıyor veya kağıttan çıkıyorlar. Farklı bir kenar boşluğu boyutu girin.',
            RVERR0010: 'Lütfen parametre için bir değer girin',
            RVERR0011: 'Parametre boş bırakılamaz',
            RVERR0012: 'Rapor parametresi {parameterprompt} için verilen değer, türü için geçerli değil.'
        },
        selectAll: 'Hepsini seç',
        viewButton: "Raporu görüntüle",
        parameterProcessingMessage: 'Laddar beroende parametrar ...'
};