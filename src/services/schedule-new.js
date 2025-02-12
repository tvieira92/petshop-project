import { apiConfig } from "./api-config.js"
import { scheduleDays } from "../modules/schedules/load.js"

const modal = document.querySelector("dialog")

export async function scheduleNew({ id, name, namePet, description, currentDate }) {
  try {

    // Faz a requisição para enviar os dados do agendamento.
    await fetch(`${apiConfig.baseURL}/schedules`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, namePet, description, currentDate }),
    })

    // Exibe mensagem de agendamento realizado.
    alert("Agendamento realizado com sucesso!")
    modal.close()
    scheduleDays()
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde.");
  }
}
