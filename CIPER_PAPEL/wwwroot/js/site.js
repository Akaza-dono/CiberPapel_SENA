var wi = '0.2'

const elementContainer = document.querySelector('.element-container');
elementContainer.style.border = '0px solid black';
elementContainer.style.height = '100%';
elementContainer.style.width = '100%';
elementContainer.style.borderRadius = '4px';
elementContainer.style.display = 'grid';
elementContainer.style.gridTemplateColumns = `${wi}fr repeat(5, 1fr)`;

elementContainer.style.gridTemplateRows = '0.3fr repeat(5, 1fr)';


const optionsMenu = document.getElementById('options-menu');



optionsMenu.addEventListener('mouseover', () => {
    
    elementContainer.style.gridTemplateColumns = `0.7fr repeat(5, 1fr)`;
    elementContainer.style.animationDuration = '3s';
})

optionsMenu.addEventListener('mouseleave', () => {
    elementContainer.style.gridTemplateColumns = `0.2fr repeat(5, 1fr)`;
})

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
    document.getElementById('total').value = total
});
 