import dayjs from "dayjs"

// Seleciona as sessões
const periodMorning = document.getElementById("appointment-morning")
const periodAfternoon = document.getElementById("appointment-afternoon")
const periodNight = document.getElementById("appointment-night")


export function schedulesShow({ dailySchedules }) {
    try {
        
        // Limpa as listas
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""
        

        // Renderiza os agendamentos por período.
        dailySchedules.forEach((schedule) => {
            const content = document.createElement("div")
            const contentHeader = document.createElement("div")
            const time = document.createElement("span")
            const petName = document.createElement("span")
            const name = document.createElement("span")
            const service = document.createElement("span")
            const btnRemove = document.createElement("button")
            

            // Adiciona o id do agendamento.
            content.setAttribute("data-id", schedule.id)
            content.classList.add("appointment-content")
            contentHeader.classList.add("appointment-header")

            
            time.classList.add("time")
            petName.classList.add("pet-name")
            name.classList.add("owner")
            service.classList.add("service")
            btnRemove.classList.add("remove-btn")
            
            time.textContent = dayjs(schedule.currentDate).format("HH:mm")
            name.textContent = schedule.name
            petName.textContent = schedule.namePet
            service.textContent = schedule.description
            btnRemove.textContent = 'Remover agendamento'
            
            contentHeader.append(time, petName, name)

            content.append(contentHeader, service, btnRemove)
            // Cria o botão de remover agendamento.

            const hour = dayjs(schedule.currentDate).hour()

            if(hour <= 12){
                periodMorning.appendChild(content)
            }else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(content)
            }else {
                periodNight.appendChild(content)
            }
            
        })

        
        
    } catch (error) {
        alert("Não foi possível exibir os agendamentos.")
        console.log(error)
    }
}