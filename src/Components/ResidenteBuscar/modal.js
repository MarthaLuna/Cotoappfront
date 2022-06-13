const deleteModal = document.getElementById("deleteModal");
  deleteModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;

    const recipient = button.getAttribute("data-bs-id");

    console.log(recipient);

    // const modalTitle = deleteModal.querySelector(".modal-title");
    const modalBodyInput = deleteModal.querySelector("#deleteForm");

    // modalTitle.textContent = `New message to ${recipient}`;
    modalBodyInput.value = recipient;
  });