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
            headerText: "Impresión",
            contentText: "Imprimir el informe"
        },
        exportformat: {
            headerText: "Exportar",
            contentText: "Seleccione el formato de archivo exportado",
            Pdf: "PDF",
            Excel: "Sobresalir",
            Word: "Palabra",
            Html: "html",
            PPT: 'PowerPoint',
            CSV: 'CSV',
            XML: 'XML'
        },
        first: {
            headerText: "primero",
            contentText: "Ir a la primera página del informe."
        },
        previous: {
            headerText: "Anterior",
            contentText: "Ir a la página anterior del informe."
        },
        next: {
            headerText: "Siguiente",
            contentText: "Ir a la página siguiente del informe."
        },
        last: {
            headerText: "Último",
            contentText: "Ir a la última página del informe."
        },
        documentMap: {
            headerText: "Mapa del documento",
            contentText: "Mostrar u ocultar el mapa del documento."
        },
        parameter: {
            headerText: "Parámetro",
            contentText: "Mostrar u ocultar el panel de parámetros."
        },
        zoomIn: {
            headerText: "Acercarse",
            contentText: "Agrandar el informe."
        },
        zoomOut: {
            headerText: "Disminuir el zoom",
            contentText: "Alejar del informe."
        },
        refresh: {
            headerText: "Refrescar",
            contentText: "Actualizar el informe."
        },
        find: {
            headerText: 'Encontrar',
            contentText: 'Busque texto en el informe.'
        },
        stop: {
            headerText: 'Detener',
            contentText: 'Dejar de procesar el informe.'
        },
        printLayout: {
            headerText: "Diseño de impresión",
            contentText: "Cambiar entre el diseño de impresión y los modos normales."
        },
        pageIndex: {
            headerText: "Número de página",
            contentText: "número de página actual para ver."
        },
        zoom: {
            headerText: "Enfocar",
            contentText: "Zoom para acercar o alejar el informe."
        },
        back: {
            headerText: "Espalda",
            contentText: "Volver al informe de los padres."
        },
        fittopage: {
            headerText: "Ajustar a la página",
            contentText: "Montar la página del informe al contenedor.",
            pageWidth: "Ancho de página",
            pageHeight: "Toda la pagina"
        },
        pagesetup: {
            headerText: "Configurar página",
            contentText: "Elija la opción de configuración de página para cambiar el tamaño del papel, la orientación y los márgenes."
        },
        exportsetup: {
            headerText: 'Configuración de exportación',
            contentText: 'Elija la opción de configuración de exportación para establecer la calidad de imagen,'
                + 'guardar el tipo de palabra y el documento de Excel.'
        }
    },
    pagesetupDialog: {
        close: "Cerca",
        paperSize: "Tamaño de papel",
        height: "Altura",
        width: "Anchura",
        margins: "márgenes",
        top: "Parte superior",
        bottom: "Fondo",
        right: "Derecha",
        left: "Izquierda",
        pageUnits: 'Unidades de página',
        unitin: 'en',
        unitcm: 'cm',
        inches: 'Pulgadas',
        centimeters: 'centímetros',
        orientation: "Orientación",
        portrait: "Retrato",
        landscape: "Paisaje",
        doneButton: "Hecho",
        cancelButton: "Cancelar",
        paperTypes: [{ text: "A3", value: "A3" }, { text: "A4", value: "A4" }, { text: "B4 (JIS)", value: "B4(JIS)" }, { text: "B5 (JIS)", value: "B5(JIS)" }, { text: "Sobre #10", value: "Envelope #10" }, { text: "Sobre monarca", value: "Envelope Monarch" }, { text: "Ejecutivo", value: "Executive" }, { text: "Legal", value: "Legal" }, { text: "Letra", value: "Letter" }, { text: "Tabloide", value: "Tabloid" }, { text: "Personalizado", value: "Custom" }]
    },
    exportsetupDialog: {
        close: 'Cerca',
        commonOptions: {
            header: 'Configuraciones comunes',
            imageQuality: 'La calidad de imagen',
            imageQualityTypes:
                [{ text: "Bajo", value: "2" },
                { text: "Medio", value: "5" },
                { text: "Elevado", value: "10" }]
        },
        pdfOptions: {
            header: 'Configuración de PDF',
            complexScript: 'Escritura compleja',
            conformance: 'Nivel de conformidad',
            conformanceTypes: [{ text: "Ninguno", value: 0 }, { text: "Pdf/A1B", value: 1 }, { text: "Pdf/X1A2001", value: 2 }, { text: "Pdf/A2B", value: 3 }, { text: "Pdf/A3B", value: 4 },
            { text: "Pdf/A1A", value: 5 }, { text: "Pdf/A2A", value: 6 }, { text: "Pdf/A2U", value: 7 }, { text: "Pdf/A3A", value: 8 }, { text: "Pdf/A3U", value: 9 }],
        },
        excel: 'Sobresalir',
        securityOptions: {
            header: "Configuraciones de seguridad",
            enableProtection: "Habilitar protección",
            protect: "Contraseña para proteger",
            edit: "Contraseña para editar",
        },
        wordOptions: {
            header: 'Configuración de palabras',
            protection: 'Tipo de protección',
            topSpacing: 'Espaciado superior',
            bottomSpacing: 'Espaciado inferior',
            formatList: [
                { text: "Documento de Word 97-2003 (.doc)", value: 0 },
                { text: "Plantilla de Word 97-2003 (.dot)", value: 1 },
                { text: "Documento de Word (.docx)", value: 2 },
                { text: "Documento XML abierto estricto 2007 (.docx)", value: 3 },
                { text: "Documento XML abierto estricto 2010 (.docx)", value: 4 },
                { text: "Documento XML abierto estricto 2013 (.docx)", value: 5 },
                { text: "Plantilla XML abierta estricta 2007 (.dotx)", value: 6 },
                { text: "Plantilla XML abierta estricta 2010 (.dotx)", value: 7 },
                { text: "Plantilla XML abierta estricta 2013 (.dotx)", value: 8 },
                { text: "Documento habilitado para macros de Word 2007 (.docm)", value: 9 },
                { text: "Documento habilitado para macros de Word 2010 (.docm)", value: 10 },
                { text: "Documento habilitado para macros de Word 2013 (.docm)", value: 11 },
                { text: "Plantilla habilitada para macros de Word 2007 (.dotm)", value: 12 },
                { text: "Plantilla habilitada para macros de Word 2010 (.dotm)", value: 13 },
                { text: "Plantilla habilitada para macros de Word 2013 (.dotm)", value: 14 },
                { text: "Formato de texto enriquecido (.rtf)", value: 15 },
                { text: "Texto sin formato (.txt)", value: 16 },
                { text: "Página web (.html)", value: 18 }
            ],
            layoutTypes: [{ text: "Por defecto", value: 0 }, { text: "Nivel superior", value: 1 }],
            protectionTypes: [{ text: "Sin protección", value: -1 }, { text: "Permitir solo revisiones", value: 0 }, { text: "Permitir solo comentarios", value: 1 }, { text: "Solo permitir campos de formulario", value: 2 }, { text: "Permitir solo lectura", value: 3 }],
        },
        layoutOption: 'Opción de diseño',
        saveType: 'Guardar tipo',
        unit: 'pg',
        exportFormat: 'Formato de exportación',
        pptOptions: {
            header: "Configuración de PowerPoint",
            pptTypes: [
                { text: "PowerPoint 97to2003 Presentation (.ppt)", value: 0 },
                { text: "PowerPoint 2007 Presentation (.pptx)", value: 1 },
                { text: "PowerPoint 2010 Presentation (.pptx)", value: 2 },
                { text: "PowerPoint 2013 Presentation (.pptx)", value: 3 }
            ]
        },
        dpi: 'dpi',

        doneButton: 'DE ACUERDO',
        cancelButton: 'Cancelar',
        csvOptions: {
            delimiter: 'Delimitador de campo',
            formatter: 'Valores con formato',
            header: 'Configuración de CSV',
            qualifier: 'Calificador de texto',
            customVal: 'Valor personalizado',
            qualifierList: [{ text: "Doble comillas", value: "\"" }, { text: "Comillas simples", value: "'" }, { text: "Ninguna", value: "" }, { text: "Personalizado", value: "Custom" }],
            delimiterList: [{ text: "Coma", value: "," }, { text: "Espacio", value: " " }, { text: "Pestaña", value: "   " }, { text: "Punto y coma", value: ";" }, { text: "Personalizado", value: "Custom" }]
        },
        htmlOptions: {
            header: 'Configuración HTML',
            separator: 'Separador de página'
        },
        excelOptions:
        {
            header: 'Configuración de Excel',
            sheetProtection: 'Protección de hojas',
            disableCellFormat: 'Deshabilitar formato de celda',
            readonly: 'Solo lectura',
            saveTypes: [
                { text: "Libro de Excel97to2003 (.xls)", value: 0 },
                { text: "Libro de Excel 2007 (.xlsx)", value: 1 },
                { text: "Libro de Excel 2010 (.xlsx)", value: 2 },
                { text: "Libro de Excel 2013 (.xlsx)", value: 3 },
                { text: "Libro de Excel 2016 (.xlsx) ", value: 4 }
            ],
            sheetProtectionTypes: [
                { text: "Ninguna", value: 0 },
                { text: "Objetos", value: 1 },
                { text: "Escenarios", value: 2 },
                { text: "Formateo de celdas", value: 4 },
                { text: "Columnas de formato", value: 8 },
                { text: "Formateo de filas", value: 16 },
                { text: "Insertar columnas", value: 32 },
                { text: "Insertar filas", value: 64 },
                { text: "Inserción de hipervínculos", value: 128 },
                { text: "Eliminación de columnas", value: 256 },
                { text: "Eliminación de filas", value: 512 },
                { text: "Celdas bloqueadas", value: 1024 },
                { text: "Clasificación", value: 2048 },
                { text: "Filtración", value: 4096 },
                { text: "Uso de tablas dinámicas", value: 8192 },
                { text: "Celdas desbloqueadas", value: 16384 },
                { text: "Contenido", value: 32768 },
                { text: "Todos", value: 65535 }
            ],
            disableCellFormatTypes: [
                { text: "Ninguna", value: 0 },
                { text: "Todos", value: 1 },
                { text: "Frontera", value: 2 },
                { text: "Estilo", value: 3 }
            ],
            layoutOptionTypes: [
                { text: "Por defecto", value: 0 },
                { text: "Ignorar combinación de celdas", value: 1 }
            ],
        }
    },
    findAlertMessage: {
        resultsEndReached: 'Has llegado al final de los resultados de búsqueda. Si desea continuar, cierre el cuadro de diálogo y busque de nuevo.',
        noResultsFound: 'El texto especificado no coincide con ninguno de los contenidos del informe. Cambie su palabra clave de búsqueda y vuelva a intentarlo.'
    },
    credential: {
        userName: "Nombre de usuario",
        password: "Contraseña"
    },
    waterMark: {
        selectOption: "Seleccionar opción",
        selectValue: "Seleccione un valor"
    },
    errorMessage: {
        startMessage: 'Visor de informes encontró algunos problemas al cargar este informe. Por favor',
        middleMessage: 'Haga clic aquí',
        endMessage: 'para ver los detalles del error',
        closeMessage: 'Cerrar este mensaje',
        exportAjaxFailureMsg: 'No se puede exportar el documento debido a una falla en la conexión del servicio de informes.',
        printAjaxFailureMsg: 'No se puede imprimir el documento debido a una falla en la conexión del servicio de informes.',
        reportLoadAjaxFailureMsg: 'No se puede avanzar la acción de Informe debido a una falla en la conexión del Servicio de Reportes',
        cancelReportProcessMsg: 'El procesamiento del informe fue cancelado.',
    },
    progressMessage: {
        exportLoadingMessage: 'Preparando el documento de exportación ... Por favor espere ...',
        printLoadingMessage: 'Preparando datos de impresión ... Por favor espere ...',
        printPreparationMessage: 'Preparando datos de impresión ... {0}% completado ... Por favor espere ...',
        exportPreparationMessage: 'Preparando el documento de exportación ... {0}% completado ... Por favor espere ...',
        cancelText: 'cancelar',
    },
    alertMessage: {
        close: "Cerca",
        title: "ReportViewer",
        done: "DE ACUERDO",
        showDetails: "Mostrar detalles",
        hideDetails: "Ocultar detalles",
        reportLoad: "Informe cargado:",
        RVERR0001: "Visor de informes no pudo cargar el Informe",
        RVERR0002: "Visor de informes no pudo procesar el Informe",
        RVERR0003: "Se produjo un error en la devolución de datos de ajax",
        RVERR0004: "Seleccione un valor para el parámetro",
        RVERR0005: "Al parámetro {nombre de parámetro} le falta un valor",
        RVERR0006: "Por favor ingrese la entrada del tipo de datos float",
        RVERR0007: "Ingrese la entrada de tipo de datos enteros",
        RVERR0008: "Visor de informes no pudo validar las credenciales de Datasource",
        RVERR0009: "Los márgenes están superpuestos o están fuera del papel. Ingrese un tamaño de margen diferente.",
        RVERR0010: "Ingrese un valor para el parámetro",
        RVERR0011: "El parámetro no puede estar en blanco",
        RVERR0012: "El valor proporcionado para el parámetro de informe {parameterprompt} no es válido para su tipo."
    },
    selectAll: "Seleccionar todo",
    viewButton: "Vista del informe",
    parameterProcessingMessage: 'Cargando parámetros dependientes ...'
};