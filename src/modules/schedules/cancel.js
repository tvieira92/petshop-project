import { scheduleDays } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".appointment")

// Gera evento de click para cada lista (manhã, tarde e noite)
periods.forEach((appointment) => {
    // Captura o evento de clique no elemento.
    appointment.addEventListener("click", async (event) => {
        

        if(event.target.classList.contains("remove-btn")){

            const item = event.target.closest("div")

            const { id } = item.dataset

            if (id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if (isConfirm){

                    await scheduleCancel({ id })

                    scheduleDays()
                }
            }
        }
    })
})