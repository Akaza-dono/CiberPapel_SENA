import { Solicitudes } from "./solicitudes.js";

const solicitud = new Solicitudes('https://localhost:44317/Data/GetProductos');
let select = document.getElementById('productos')
let dataFetch = []
let totalVenta = 0;
let ventas = [];
async function fetchData() {
    try {
        const data = await solicitud.solicitud();
        dataFetch = data;
        return dataFetch;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData().then(data => {
    let option = data.reduce((a, e) => {
        a += `<option value="${e.idProducto}" precio-producto="${e.precio}" cantidad-producto="${e.cantidad}">${e.nombre}</option>`
        return a
    }, '');
    select.innerHTML = option
});

select.addEventListener('change', (e) => {
    document.getElementById('cantidadTotal').value = e.target.options[e.target.selectedIndex].getAttribute('cantidad-producto');
    document.getElementById('cantidad').max = e.target.options[e.target.selectedIndex].getAttribute('cantidad-producto');
    let precio = e.target.options[e.target.selectedIndex].getAttribute('precio-producto');
    document.getElementById('precio').value = precio
})


document.getElementById('boton').addEventListener('click', () => {

    ventas.push({
        Cantidad: document.getElementById('cantidad').value,
        IdUsuario: document.getElementById("user").value,
        IdProducto: select.value
    })

    let opcionSeleccionada = select.options[select.selectedIndex];
    let textoSeleccionado = opcionSeleccionada.textContent;
    let table = document.getElementById('bodyTable');
    table.innerHTML += `<tr>
                <th scope="col">${textoSeleccionado}</th>
                <th scope="col">${document.getElementById("cantidad").value}</th>
                <th scope="col">${document.getElementById('precio').value * document.getElementById("cantidad").value}</th>
             </tr>`

    totalVenta += document.getElementById('precio').value * document.getElementById("cantidad").value;
})

document.getElementById('crear').addEventListener('click', async () => {
    const req = await fetch(`https://localhost:44317/api/RealTimeData`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ventas)
    });
    const response = await req.text();
})