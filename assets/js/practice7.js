const $ = document.querySelector.bind(document);
const openModalBtn = $("#open-modal-btn");
const closeModalBtn = $(".close-modal-btn");
const modal = $(".modal");
const modalClose = $(".modal-close");

console.log(openModalBtn);





openModalBtn.addEventListener("click", (e)=> {

    modal.classList.add("show");
  })
modalClose.onclick = function () {
    modal.classList.remove("show");
  };
  
  closeModalBtn.onclick = function () {
    modal.classList.remove("show");
  };
  window.addEventListener("click", function (e) {
    if (!modal.contains(e.target) && !e.target.matches("#open-modal-btn"))  {
      modal.classList.remove("show");
    }
  });