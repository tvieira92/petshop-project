import { scheduleDays } from "../schedules/load.js"
import { schedulesShow } from "../schedules/show.js"

const dateInput = document.getElementById("date")

dateInput.valueAsDate = new Date()

dateInput.onchange = () => scheduleDays()




