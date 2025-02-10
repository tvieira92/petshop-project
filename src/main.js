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
import "./modules/form/modal.js"




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

// --------------------------------------------


// In a real HTML file, you would have this structure:
// <input type="time" id="timeInput">
// <p id="selectedTime"></p>

// Simulating the DOM elements
// const timeInput = { value: '', addEventListener: (event, callback) => callback({ target: timeInput }) };
// const selectedTimeDisplay = { textContent: '' };

// // Function to handle time change
// function handleTimeChange(event) {
//   const selectedTime = event.target.value;
//   console.log('Selected time:', selectedTime);
  
//   // In a browser, this would update the text of the <p> element
//   selectedTimeDisplay.textContent = `Selected time: ${selectedTime}`;
// }

// // Add event listener to the time input
// timeInput.addEventListener('change', handleTimeChange);

// // Simulate user input
// console.log("Simulating user selecting 14:30");
// timeInput.value = '14:30';
// handleTimeChange({ target: timeInput });

// console.log("Simulating user selecting 09:45");
// timeInput.value = '09:45';
// handleTimeChange({ target: timeInput });