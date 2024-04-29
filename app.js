const inputEl = document.querySelector(".input");
const closeIconEl = document.querySelector(".bi-x");
const formEl = document.querySelector(".form");
const taskEl = document.querySelector(".task");
const allDeleteEl = document.querySelector(".all_delete_btn");



formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const divEl = document.createElement("div");
  const divBtnEl = document.createElement("div");
  const btnCompleteEl = document.createElement("button");
  const btnCompletEl = document.createElement("button");
  const btnCompleEl = document.createElement("button");
  const btnComplEl = document.createElement("button");
  const btnCompEl = document.createElement("button");

  const pEl = document.createElement("p");

  divEl.className = "task_card";
  pEl.className = "task_name";
  divBtnEl.className = "btn_group";
  btnCompleteEl.className = "comp_btn";
  btnCompletEl.className = "comp_bt";
  btnCompleEl.className = "comp_b";
  btnComplEl.className = "comp_";
  btnCompEl.className = "comp";


  btnCompleteEl.innerHTML = `<i class="bi bi-check2-circle"></i><br>  bajarildi`;
  btnCompletEl.innerHTML = `<i class="bi bi-pencil-square"></i><br>  uzgartirish`;
  btnCompleEl.innerHTML = `<i class="bi bi-slash-circle"></i><br>  14:22`;
  btnComplEl.innerHTML = `<i class="bi bi-trash3-fill"></i><br>  uchirish`;
  btnCompEl.innerHTML = `  `;

  pEl.innerHTML = inputEl.value;
  divEl.appendChild(pEl);
  divBtnEl.appendChild(btnCompleteEl);
  divBtnEl.appendChild(btnCompletEl);
  divBtnEl.appendChild(btnCompleEl);
  divBtnEl.appendChild(btnComplEl);
  divBtnEl.appendChild(btnCompEl);


  divEl.appendChild(divBtnEl);
  taskEl.prepend(divEl);

  inputEl.value = "";

  btnCompleteEl.addEventListener("click", () => {
    pElBtnEl.className.toggle("active")
  });

});

allDeleteEl.addEventListener("click", () => {
  let con = confirm("Hammasini o'chirishga rozimisiz!");
  if (con) {
    taskEl.innerHTML = "";
  }
});


