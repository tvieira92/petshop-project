import dayjs from "dayjs"

// Seleciona as sessões
const periodMorning = document.getElementById(".appointment-morning")
const periodAfternoon = document.getElementById(".appointment-afternoon")
const periodNight = document.getElementById(".appointment-night")

export function schedulesShow({ dailySchedules }) {
    try {
        // Limpa as listas
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        // Renderiza os agendamentos por período.
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("div")
            const time = document.createElement("span")
            const petname = document.createElement("span")
            const name = document.createElement("span")
            const service = document.createElement("div")
            

            // Adiciona o id do agendamento.
            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name
            petname.textContent = schedule.petname
            service.textContent = schedule.service

            // Cria o botão de remover agendamento.
            const btnRemove = document.createElement("button")
            btnRemove.classList.add("remove-btn")

            item.append(time, petname, name, service, btnRemove)

            // const hour = dayjs(schedule.currentDate).hour()

            if(hour <= 12){
                periodMorning.appendChild(item)
            }else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            }else {
                periodNight.appendChild(item)
            }

        })

        console.log(dailySchedules)
        
    } catch (error) {
        alert("Não foi possível exibir os agendamentos.")
        console.log(error)
    }
}