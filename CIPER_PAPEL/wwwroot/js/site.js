//const panel = document.getElementById('options-menu');
//panel.addEventListener('click', () => {
//    panel.style.gridColumn = '1 / span 2'; // Esto hará que la columna ocupe dos fracciones
//    console.log('asdas')
//});

var wi = '0.2'

const elementContainer = document.querySelector('.element-container');
elementContainer.style.border = '0px solid black';
elementContainer.style.height = '100%';
elementContainer.style.width = '100%';
elementContainer.style.borderRadius = '4px';
elementContainer.style.display = 'grid';
elementContainer.style.gridTemplateColumns = `${wi}fr repeat(5, 1fr)`;
elementContainer.style.gridTemplateRows = '0.3fr 1fr 1fr 1fr 1fr 1fr';

const optionsMenu = document.getElementById('options-menu');



optionsMenu.addEventListener('mouseover', () => {
    elementContainer.style.gridTemplateColumns = `0.5fr repeat(5, 1fr)`;
})

optionsMenu.addEventListener('mouseleave', () => {
    elementContainer.style.gridTemplateColumns = `0.2fr repeat(5, 1fr)`;
})

