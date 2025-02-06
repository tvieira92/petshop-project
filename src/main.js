"use strict"

// Configuração do dayjs
import "./libs/dayjs.js"

// CSS
import "./styles/global.css"
import "./styles/style.css"
import "./styles/schedule.css"


// JS
import "./modules/form/submit.js"
import "./modules/page-load.js"




/* Function to open the modal
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    Get form values
    const tutorName = document.getElementById('tutorName').value;
    const petName = document.getElementById('petName').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    Here you can add your logic to handle the form data
    console.log({
        tutorName,
        petName,
        phone,
        service,
        date,
        time
    });

    Close the modal after submission
    closeModal();
    
    Optional: Reset form
    event.target.reset();
}

Optional: Add phone mask
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d{1})(\d{4})(\d{4}).*-/, '($1) $2 $3-$4');
    }                                                  remove this tracer
    e.target.value = value;
});*/