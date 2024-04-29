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
  const btnComEl = document.createElement("button");
  const pEl = document.createElement("p");

  divEl.className = "task_card";
  pEl.className = "task_name";
  divBtnEl.className = "btn_group";
  btnCompleteEl.className = "comp_btn";
  btnCompletEl.className = "comp_bt";
  btnCompleEl.className = "comp_b";
  btnComplEl.className = "comp_";
  btnCompEl.className = "comp";
  btnComEl.className = "com";

  btnCompleteEl.innerHTML = `  uchirish`;
  btnCompletEl.innerHTML = `  belgilash`;
  btnCompleEl.innerHTML = `  nimadir`;
  btnComplEl.innerHTML = `  Complite`;
  btnCompEl.innerHTML = `  `;
  btnComEl.innerHTML = ` `;

  pEl.innerHTML = inputEl.value;
  divEl.appendChild(pEl);
  divBtnEl.appendChild(btnCompleteEl);
  divBtnEl.appendChild(btnCompletEl);
  divBtnEl.appendChild(btnCompleEl);
  divBtnEl.appendChild(btnComplEl);
  divBtnEl.appendChild(btnCompEl);
  divBtnEl.appendChild(btnComEl);

  divEl.appendChild(divBtnEl);
  taskEl.prepend(divEl);

  inputEl.value = "";
});





allDeleteEl.addEventListener("click", () => {
  let con = confirm("Hammasini o'chirishga rozimisiz!");
  if (con) {
    taskEl.innerHTML = "";
  }
});
