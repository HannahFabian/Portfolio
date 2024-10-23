document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const dataContainer = document.getElementById('dataContainer'); // Creo un contenedor para los datos.

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Formulario enviado.");

        const date = document.getElementById('dateInput').value;
        const startTime = document.getElementById('starttimeInput').value;
        const endTime = document.getElementById('endtimeInput').value;
        const activity = document.getElementById('activity').value;
        const place = document.getElementById('Place').value;
        const type = document.getElementById('typeSelect').value;
        const notes = document.getElementById('notesInput').value;
        const flag = document.getElementById('flag').value;
        const isFree = document.getElementById('freeCheck').checked;
        const isBusy = document.getElementById('busyCheck').checked;

        const data = {
            date,
            startTime,
            endTime,
            activity,
            place,
            type,
            notes,
            flag,
            isFree,
            isBusy,
        };

        dataContainer.innerHTML = '';

        // Esto es una lista de los datos recopilados.
        const listaDatos = document.createElement('ul');

        for (const key in data) {
            const li = document.createElement('li');
            li.textContent = `${key}: ${data[key]}`;
            listaDatos.appendChild(li);
        }

        //Al final se añade la lista en el contenedor vacío de antes.
        dataContainer.appendChild(listaDatos);
    });
});
