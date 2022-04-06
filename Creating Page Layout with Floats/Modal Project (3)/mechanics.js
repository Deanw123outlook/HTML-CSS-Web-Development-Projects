//                                      FLOAT-MODAL-DEVELOPMENT

/*-----------------------------------------------------------------------------------------------*/
//                                         BUTTON ONE
const btnOpenModal = document.querySelector(".SHOW-MODAL-1");
const modal = document.querySelector(".MODAL");
const overlay = document.querySelector(".OVERLAY");
const btnCloseModal = document.querySelector(".CLOSE-MODAL");

//Testing - Developer Console Analysis
console.log(btnOpenModal.textContent);

//Handling Click Event Listener ('click') & Event Handler (function of the event!)
btnOpenModal.addEventListener("click", function () {
  console.log("Button-Clicked");
  modal.classList.remove("HIDDEN");
  overlay.classList.remove("HIDDEN");
});
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("HIDDEN");
  overlay.classList.add("HIDDEN");
});
/*-----------------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------------*/
//                                           BUTTON TWO
const btnOpenModal2 = document.querySelector(".SHOW-MODAL-2");
const modal2 = document.querySelector(".MODAL2");
const overlay2 = document.querySelector(".OVERLAY2");
const btnCloseModal2 = document.querySelector(".CLOSE-MODAL2");

//Testing - Developer Console Analysis
console.log(btnOpenModal2.textContent);

//Handling Click Event Listener ('click') & Event Handler (function of the event!)
btnOpenModal2.addEventListener("click", function () {
  console.log("Button-Clicked");
  modal2.classList.remove("HIDDEN2");
  overlay2.classList.remove("HIDDEN2");
});
btnCloseModal2.addEventListener("click", function () {
  modal2.classList.add("HIDDEN2");
  overlay2.classList.add("HIDDEN2");
});
/*-----------------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------------*/
//                                           BUTTON THREE
const btnOpenModal3 = document.querySelector(".SHOW-MODAL-3");
const modal3 = document.querySelector(".MODAL3");
const overlay3 = document.querySelector(".OVERLAY3");
const btnCloseModal3 = document.querySelector(".CLOSE-MODAL3");

//Testing - Developer Console Analysis
console.log(btnOpenModal3.textContent);

//Handling Click Event Listener ('click') & Event Handler (function of the event!)
btnOpenModal3.addEventListener("click", function () {
  console.log("Button-Clicked");
  modal3.classList.remove("HIDDEN3");
  overlay3.classList.remove("HIDDEN3");
});
btnCloseModal3.addEventListener("click", function () {
  modal3.classList.add("HIDDEN3");
  overlay3.classList.add("HIDDEN3");
});
/*-----------------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------------*/
