/**
 * Default [es-ES] localization for report viewer.
 */
//ejDatePicker
ej.DatePicker.Locale["es-ES"] = {
    watermarkText: "Seleccione fecha",
    buttonText: "Hoy",
};

//ejReportViewer
ej.ReportViewer.Locale["es-ES"] = {
    toolbar: {
        print: {
            headerText: "Imprimir",
            contentText: "Imprimir informe"
        },
        exportformat: {
            headerText: "Exportar",
            contentText: "Seleccionar formato de archivo exportado",
            Pdf: "PDF",
            Excel: "Excel",
            Word: "Word",
            Html: "HTML",
            PPT: "PowerPoint",
            CSV: "CSV",
            XML: "XML"
        },
        first: {
            headerText: "Ir a la primera",
            contentText: "Ir a la primera página del informe"
        },
        last: {
            headerText: "Ir a la última",
            contentText: "Ir a la última página del informe"
        },
        next: {
            headerText: "Ir a la siguiente",
            contentText: "Ir a la siguiente página del informe"
        },
        previous: {
            headerText: "Ir a la anterior",
            contentText: "Ir a la página anterior del informe"
        },
        back: {
            headerText: "Ir al padre",
            contentText: "Ir al informe padre"
        },
        documentMap: {
            headerText: "Mapa de documento",
            contentText: "Mostrar u ocultar el mapa del documento"
        },
        parameter: {
            headerText: "Parámetro",
            contentText: "Mostrar u ocultar el panel de parámetros"
        },
        zoomIn: {
            headerText: "Acercar",
            contentText: "Hacer zoom al informe"
        },
        zoomOut: {
            headerText: "Alejar",
            contentText: "Alejar el informe"
        },
        refresh: {
            headerText: "Actualizar",
            contentText: "Actualizar informe"
        },
        stop: {
            headerText: "Detener",
            contentText: "Detener el procesamiento del informe"
        },
        printLayout: {
            headerText: "Imprimir diseño",
            contentText: "Cambiar entre imprimir diseño y los modos normales"
        },
        pageIndex: {
            headerText: "Número de página",
            contentText: "Ver número de página actual"
        },
        zoom: {
            headerText: "Zoom",
            contentText: "Hacer zoom o alejar el informe"
        },
        fittopage: {
            headerText: "Ajustar a página",
            contentText: "Ajustar página de reporte al contenedor",
            pageWidth: "Ancho de página",
            pageHeight: "Página completa"
        },
        pagesetup: {
            headerText: "Ajustes de página",
            contentText: "Seleccionar la opción de ajustes de página para cambiar el tamaño, la orientación y los márgenes"
        },
        exportsetup: {
            headerText: "Ajustes de exportación",
            contentText: "Seleccionar la opción de ajustes de exportación para establecer la calidad de la imagen"
                + "guardar tipo de documento word y excel"
        },
        find: {
            headerText: "Encontrar",
            contentText: "Encontrar texto en el informe"
        },
        performance: {
            headerText: 'Métricas de rendimiento',
            contentText: 'Se muestran las métricas de rendimiento del informe.',
        }
    },
    PerformanceMetricsDialog: {
        title: 'Métricas de rendimiento de informes',
        reportProcessing: 'Tiempo de procesamiento del informe',
        datasetProcessing: 'Tiempo de procesamiento del conjunto de datos',
        parse: 'Tiempo de análisis',
        evaluate: 'evaluar el tiempo',
        render: 'Tiempo de renderizado',
        layout: 'Tiempo de diseño',
        datasetDetails: {
            rows: 'Recuento de filas',
            dataRetrival: 'Tiempo de recuperación de datos'
        },
    },
    pagesetupDialog: {
        close: "Cerrar",
        paperSize: "Tamaño de papel",
        height: "Alto",
        width: "Ancho",
        margins: "Márgenes",
        top: "Superior",
        bottom: "Inferior",
        right: "Derecha",
        left: "Izquierda",
        pageUnits: "Unidades de página",
        unitin: "In",
        unitcm: "cm",
        inches: "Pulgadas",
        centimeters: "Centímetros",
        paperTypes: [
            { text: "A3", value: "A3" },
            { text: "A4", value: "A4" },
            { text: "B4(JIS)", value: "B4(JIS)" },
            { text: "B5(JIS)", value: "B5(JIS)" },
            { text: "Sobre #10", value: "Sobre #10" },
            { text: "Sobre monarca", value: "Sobre monarca" },
            { text: "Ejecutivo", value: "Ejecutivo" },
            { text: "Legal", value: "Legal" },
            { text: "Carta", value: "Carta" },
            { text: "Tabloide", value: "Tabloide" },
            { text: "Personalizado", value: "Personalizado" }
        ],
        orientation: "Orientación",
        portrait: "Vertical",
        landscape: "Horizontal",
        doneButton: "OK",
        cancelButton: "Cancelar"
    },
    exportsetupDialog: {
        close: "Cerrar",
        commonOptions: {
            header: "Ajustes comunes",
            imageQuality: "Calidad de imagen",
            imageQualityTypes: [{ text: "Bajo", value: "2" },
                { text: "Medio", value: "5" },
                { text: "Alto", value: "10" }],
            usePrintSizes: "Ajustes para el uso de la página de impresión"
        },
        pdfOptions: {
            header: "Ajustes PDF",
            complexScript: "Guión complejo",
            conformance: "Nivel de conformidad",
            conformanceTypes: [
                { text: "Ninguno", value: 0 },
                { text: "Pdf/A1B", value: 1 },
                { text: "Pdf/X1A2001", value: 2 },
                { text: "Pdf/A2B", value: 3 },
                { text: "Pdf/A3B", value: 4 },
                { text: "Pdf/A1A", value: 5 },
                { text: "Pdf/A2A", value: 6 },
                { text: "Pdf/A2U", value: 7 },
                { text: "Pdf/A3A", value: 8 },
                { text: "Pdf/A3U", value: 9 }
            ],
        },
        excel: "Sobresalir",
        securityOptions: {
            header: "Ajustes de seguridad",
            enableProtection: "Habilitar protección",
            protect: "Contraseña para proteger",
            edit: "Contraseña para editar"
        },
        wordOptions: {
            header: "Ajustes de word",
            protection: "Tipo de protección",
            topSpacing: "Espaciado superior",
            bottomSpacing: "Espaciado inferior",
            formatList: [
                { text: "Documento Word 97-2003 (.doc)", value: 0 },
                { text: "Plantilla Word 97-2003 (.dot)", value: 1 },
                { text: "Documento Word (.docx)", value: 2 },
                { text: "Documento Strict Open XML 2007 (.docx)", value: 3 },
                { text: "Documento Strict Open XML 2010 (.docx)", value: 4 },
                { text: "Documento Strict Open XML 2013 (.docx)", value: 5 },
                { text: "Plantilla Strict Open XML 2007 (.dotx)", value: 6 },
                { text: "Plantilla Strict Open XML 2010 (.dotx)", value: 7 },
                { text: "Plantilla Strict Open XML 2013 (.dotx)", value: 8 },
                { text: "Documento Word habilitado para macros 2007 (.docm)", value: 9 },
                { text: "Documento Word habilitado para macros 2010 (.docm)", value: 10 },
                { text: "Documento Word habilitado para macros 2013 (.docm)", value: 11 },
                { text: "Plantilla Word habilitada para macros 2007 (.dotm)", value: 12 },
                { text: "Plantilla Word habilitada para macros 2010 (.dotm)", value: 13 },
                { text: "Plantilla Word habilitada para macros 2013 (.dotm)", value: 14 },
                { text: "Rich text format (.rtf)", value: 15 },
                { text: "Plain text (.txt)", value: 16 },
                { text: "Web page (.html)", value: 18 }
            ],
            layoutTypes: [
                { text: "Predeterminado", value: 0 },
                { text: "Nivel superior", value: 1 }
            ],
            protectionTypes: [
                { text: "No protection", value: -1 },
                { text: "Permitir solo revisiones", value: 0 },
                { text: "Permitir solo comentarios", value: 1 },
                { text: "Permitir solo campos de forma", value: 2 },
                { text: "Permitir solo lectura", value: 3 }
            ],
        },
        layoutOption: "Opciones de diseño",
        saveType: "Guardar tipo",
        unit: "pg",
        exportFormat: "Formato de exportación",
        pptOptions: {
            header: "Ajustes de PowerPoint",
            pptTypes: [
                { text: "Presentación PowerPoint 97 a 2003 (.pptx)", value: 0 },
                { text: "Presentación PowerPoint 2007 (.pptx)", value: 1 },
                { text: "Presentación PowerPoint 2010 (.pptx)", value: 2 },
                { text: "Presentación PowerPoint 2013 (.pptx)", value: 3 }
            ]
        },
        dpi: "dpi",
        doneButton: "OK",
        cancelButton: "Cancelar",
        csvOptions: {
            formatter: "Valores formateados",
            header: "Ajustes CSV",
            delimiter: "Delimitador de campo",
            qualifier: "Calificador de texto",
            customVal: "Valor personalizado",
            qualifierList: [
                { text: "Comillas dobles", value: """ },
                { text: "Comillas sencillas", value: "\"" },
                { text: "Ninguno", value: "" },
                { text: "Personalizado", value: "Personalizado" }
            ],
            delimiterList: [
                { text: "Coma", value: "," },
                { text: "Espacio", value: " " },
                { text: "Tabulación", value: "   " },
                { text: "Punto y coma", value: ";" },
                { text: "Personalizado", value: "Personalizado" }
            ]
        },
        htmlOptions: {
            header: "Ajustes HTML",
            separator: "Separador de página"
        },
        excelOptions: {
            header: "Ajustes de Excel",
            sheetProtection: "Protección de hoja",
            disableCellFormat: "Deshabilitar formato de celda",
            readonly: "Solo lectura",
            saveTypes: [
                { text: "Libro de Excel 97 a 2003 (.xls)", value: 0 },
                { text: "Libro de Excel 2007 (.xlsx)", value: 1 },
                { text: "Libro de Excel 2010  (.xlsx)", value: 2 },
                { text: "Libro de Excel 2013  (.xlsx)", value: 3 },
                { text: "Libro de Excel 2016 (.xlsx) ", value: 4 }
            ],
            sheetProtectionTypes: [
                { text: "Ninguno", value: 0 },
                { text: "Objetos", value: 1 },
                { text: "Escenario", value: 2 },
                { text: "Formato de celdas", value: 4 },
                { text: "Formato de columnas", value: 8 },
                { text: "Formato de filas", value: 16 },
                { text: "Insertar columnas", value: 32 },
                { text: "Insertar filas", value: 64 },
                { text: "Insertar hipervínculos", value: 128 },
                { text: "Eliminar columnas", value: 256 },
                { text: "Eliminar filas", value: 512 },
                { text: "Celdas bloqueadas", value: 1024 },
                { text: "Ordenar", value: 2048 },
                { text: "Filtros", value: 4096 },
                { text: "Uso de tablas dinámicas", value: 8192 },
                { text: "Celdas desbloqueadas", value: 16384 },
                { text: "Contenido", value: 32768 },
                { text: "Todo", value: 65535 }
            ],
            disableCellFormatTypes: [
                { text: "Ninguno", value: 0 },
                { text: "Todo", value: 1 },
                { text: "Borde", value: 2 },
                { text: "Estilo", value: 3 }
            ],
            layoutOptionTypes: [
                { text: "Predeterminado", value: 0 },
                { text: "Ignorar combinar celda", value: 2 }
            ],
        }
    },
    findAlertMessage: {
        resultsEndReached: "Has llegado al final de los resultados de la búsqueda. Para continuar, cierra el cuadro de diálogo y vuelve a buscar.",
        noResultsFound: "El texto especificado no coincide con ninguno de los contenidos en el informe. Cambia la palabra clave de búsqueda y vuelve a intentarlo."
    },
    credential: {
        userName: "Nombre de usuario",
        password: "Contraseña"
    },
    waterMark: {
        selectOption: "Seleccionar opción",
        selectValue: "Seleccionar un valor",
        noDataFound: "Datos no encontrados"
    },
    errorMessage: {
        startMessage: "El visualizador de informes ha tenido problemas al cargar este informe. Por favor ",
        middleMessage: "Haz clic aquí",
        endMessage: "para ver los detalles del error",
        closeMessage: "Cerrar este mensaje",
        exportAjaxFailureMsg: "No se ha podido exportar el documento debido a un fallo en la conexión del servicio de informes.",
        printAjaxFailureMsg: "No se ha podido imprimir el documento debido a un fallo en la conexión del Servicio de informes.",
        reportLoadAjaxFailureMsg: "No se ha podido avanzar en la acción del Informe debido a un fallo en la conexión del servicio de informes.",
        cancelReportProcessMsg: "El procesamiento de informe fue cancelado"
    },
    progressMessage: {
        exportLoadingMessage: "Preparando la exportación del documento... Por favor, espera...",
        printLoadingMessage: "Preparando datos de impresión... Por favor espera...",
        printPreparationMessage: "Preparando datos de impresión... {0}% completado... Por favor espera...",
        exportPreparationMessage: "Preparando la exportación del documento... {0}% completado... Por favor espera...",
        cancelText: "Cancelar",
    },
    alertMessage: {
        close: "Cerrar",
        title: "Visualizador de informes",
        done: "OK",
        showDetails: "Mostrar detalles",
        hideDetails: "Ocultar detalles",
        reportLoad: "Informe cargado:",
        RVERR0001: "El visualizador de informes no pudo cargar el informe",
        RVERR0002: "El visualizador de informes no pudo procesar el informe",
        RVERR0003: "Se ha producido un error en la transmisión de datos ajax",
        RVERR0004: "Seleccionar un valor para el parámetro",
        RVERR0005: "Al parámetro {parameter name} le falta un valor",
        RVERR0006: "Por favor, introducir la entrada del tipo de datos flotantes",
        RVERR0007: "Ingresar la entrada del tipo de datos entero",
        RVERR0008: "El visualizador de informes no pudo validar las credenciales de la fuente de datos",
        RVERR0009: "Los márgenes están superpuestos o fuera del papel. Introduce un tamaño de margen diferente.",
        RVERR0010: "Indicar un valor para el parámetro",
        RVERR0011: "El parámetro no puede estar vacío",
        RVERR0012: "El valor proporcionado para el parámetro de informe {parameterprompt} no es válido para su tipo."
    },
    selectAll: "Seleccionar todo",
    viewButton: "Vista del informe",
    parameterProcessingMessage: 'Cargando parámetros dependientes ...',
    parameterBlockTitle: 'Parámetros de informe'
};