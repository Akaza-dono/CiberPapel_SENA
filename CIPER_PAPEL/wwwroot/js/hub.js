//HUB CONNECTION

let hubConnectionBuilder = new signalR.HubConnectionBuilder();
hubConnectionBuilder.withUrl("/RealData");
let connection = hubConnectionBuilder.build();

connection.start()
    .then(() => {
        console.log('Conexión establecida correctamente');
    })
    .catch(error => {
        console.error('Error al establecer la conexión:', error);
    });

connection.on("SendMessage", (total) => {
    document.getElementById('total').innerHTML = `${total}`
});
