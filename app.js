// const addButton = document.querySelector("#addBtn");
// const input = document.querySelector(".inputArea");
// const list = document.querySelector(".list");
// let listArray = [];

// addButton.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (!(input.value.trim() === "")) {
//     if (!listArray.includes(input.value)) {
//       listArray.push(input.value);
//       const toDos = document.createElement("li");
//       toDos.innerHTML = `${input.value} <button class="btn"></button>`;
//       list.appendChild(toDos);
//       console.log(listArray);

//       input.value = "";
//       input.focus();
//       getResult();
//     } else {
//       Swal.fire({
//         title: "Same Value!",
//         text: "You entered this value before,Please enter a new Value",
//         icon: "error",
//       });
//     }
//   } else {
//     Swal.fire({
//       title: "Oh No!",
//       text: "Please Enter a Value at Input Box",
//       icon: "error",
//     });
//   }
// });

// list.addEventListener("click", (e) => {
//   if (e.target.tagName === "LI") {
//     e.target.classList.toggle("checked");
//     getResult();
//     addLocal();
//   } else if ((e.target.className = "btn")) {
//     e.target.parentElement.remove();
//     addLocal();
//     getResult();
//   }
// });

// input.addEventListener("keyup", (e) => {
//   if (e.key == "Enter") {
//     addButton.click();
//   }
// });

// const addLocal = () => {
//   localStorage.setItem("values", list.innerHTML);
//   //   localStorage.setItem("array", listArray);
// };

// const getValues = () => {
//   list.innerHTML = localStorage.getItem("values");
//   //   listArray = localStorage.getItem("array");
// };
// getValues();

// function getResult() {
//   document.querySelector(".completed").textContent =
//     document.querySelectorAll(".checked").length;

//   document.querySelector(".total").textContent =
//     document.querySelectorAll("li").length;
// }
// getResult();


const addButton = document.querySelector("#addBtn");
const input = document.querySelector(".inputArea");
const list = document.querySelector(".list");
let listArray = [];

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (!(input.value.trim() === "")) {
    if (!listArray.includes(input.value)) {
      listArray.push(input.value);
      const toDos = document.createElement("li");
      toDos.innerHTML = `${input.value} <button class="btn"></button>`;
      list.appendChild(toDos);
      console.log(listArray);
      input.value = "";
      input.focus();
      getResult();
      addLocal();
    } else {
      Swal.fire({
        title: "Same Value!",
        text: "You entered this value before,Please enter a new Value",
        icon: "error",
      });
    }
  } else {
    Swal.fire({
      title: "Oh No!",
      text: "Please Enter a Value at Input Box",
      icon: "error",
    });
  }
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    getResult();
    addLocal();
  } else if ((e.target.className = "btn")) {
    e.target.parentElement.remove();
    addLocal();
    getResult();
  }
});

input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    addButton.click();
  }
});

const addLocal = () => {
  localStorage.setItem("values", list.innerHTML);
  localStorage.setItem("array", JSON.stringify(listArray));
};

const getValues = () => {
  list.innerHTML = localStorage.getItem("values");
  listArray = JSON.parse(localStorage.getItem("array")) || [];
};
getValues();

function getResult() {
  document.querySelector(".completed").textContent =
    document.querySelectorAll(".checked").length;

  document.querySelector(".total").textContent =
    document.querySelectorAll("li").length;
}
getResult();
