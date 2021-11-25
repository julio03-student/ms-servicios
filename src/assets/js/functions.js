function OpenGeneralMessage(message) {
    document.querySelector('#pMessageText').innerHTML = message
    let modalGeneral = document.querySelector('#modal-general-message')
    let instanceModal = M.Modal.getInstance(modalGeneral)
    instanceModal.open()
}