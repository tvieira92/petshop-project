import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form")

const clientName = document.getElementById("client")
const petName = document.getElementById("petname")

const serviceDescription = document.getElementById("service-description")

const selectedDate = document.getElementById("date_hour")
const selectedHours = document.getElementById("hour")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Data atual para o input
selectedDate.value = inputToday

// Define a data mínima como sendo a data atual
selectedDate.min = inputToday


form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        // Recuperando o nome do cliente
        const name = clientName.value.trim()
        const namePet = petName.value.trim()
        

        if(!name, !namePet){
            return alert("Informe o nome do Client e do Pet.")
        }

        const description = serviceDescription.value.trim()

        if(!description){
            return alert("Descreva o tipo de serviço.")
        }

        // Recuperando o horário selecionado.
        const hourSelected = document.querySelector(".hour")
        
        if(!hourSelected){
            return alert("Selecione o horário de agendamento.")
        }

        const [date] = selectedDate.value.split(':')
        
        // Insere a hora na data.
        const currentDate = dayjs(date + ' ' + selectedHours.value)
        // const when = date.add(, "hour")
    
        // Gera um ID.
        const id = new Date().getTime().toString()

        await scheduleNew({
            id,
            name,
            namePet,
            description,
            currentDate,
        })
        
    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }

}