import { Solicitudes } from "./solicitudes.js";

const solicitud = new Solicitudes('https://localhost:44317/Data/GetProveedores');

async function fetchData() {
    try {
        const data = await solicitud.solicitud();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData().then(data => {

    const url = '/home/'
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            dataSource: data,
            columnResizingMode: 'nextColumn',
            columnMinWidth: 50,
            columnAutoWidth: true,
            columns: [
                { dataField: "idProveedor", caption: "ID" },
                { dataField: "nombre", caption: "Nombre" },
                { dataField: "rut", caption: "Rut" },
                {
                    type: "buttons",
                    buttons: ["edit", "delete"]
                }
            ],
            scrolling: {
                rowRenderingMode: 'virtual',
            },
            showBorders: true,
            rowAlternationEnabled: true,
            showColumnLines: false,
            showRowLines: true,
            searchPanel: {
                visible: true,
            },
            paging: {
                pageSize: 15,
            },
            pager: {
                visible: true,
                allowedPageSizes: [10, 15, 20, 'all'],
                showPageSizeSelector: true,
                showInfo: true,
                showNavigationButtons: true,
            },
            export: {
                enabled: true
            },
            onExporting: function (e) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Main sheet');

                DevExpress.excelExporter.exportDataGrid({
                    worksheet: worksheet,
                    component: e.component
                }).then(function () {
                    workbook.xlsx.writeBuffer().then(function (buffer) {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
                    });
                });
            },
            editing: {
                mode: "row",
                allowUpdating: true,
                allowDeleting: true,
                allowAdding: false
            },
            onRowUpdating: e => {
                let { oldData, newData } = e;
                let User = {
                    IdProveedor: oldData.idProveedor,
                    Nombre: newData.nombre != undefined ? newData.nombre : oldData.nombre,
                    Rut: newData.rut != undefined ? newData.rut : oldData.rut
                };

                fetch(`${url}EditProveedor`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(User)
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Respuesta exitosa:', data);
                    })
                    .catch(error => {
                        console.error('Error en la solicitud:', error);
                    });
            },
            onRowRemoving: function (e) {
                console.log(e)
                fetch(`${url}DeleteProveedor?UserId=${e.data.idProveedor}`);
            }
        });
    });
});
