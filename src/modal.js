(() => {
    const refs = {
      openModalBtn: document.querySelector("img"),
      closeModalBtn: document.querySelector("[data-modal-about-close]"),
      modal: document.querySelector("[data-modal-about]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();