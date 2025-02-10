const btnOpenModal = document.getElementById("btnappointment")
const modal = document.querySelector("dialog")
const btnClose = document.getElementById("btnclose")

btnOpenModal.onclick = function () {
    modal.showModal()
}

btnClose.onclick = function() {
    modal.close()
}