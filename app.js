const addButton = document.querySelector("#addBtn");
const input = document.querySelector(".inputArea");
const list = document.querySelector(".list");
const listArray = [];

addButton.addEventListener("click", (e) => {
  if (!(input.value.trim() === "")) {
    if (!listArray.includes(input.value)) {
      listArray.push(input.value);
      const toDos = document.createElement("li");
      toDos.innerHTML = `${input.value} <button class="btn"></button>`;
      list.appendChild(toDos);

      addLocal();
      input.value = "";
      input.focus();
      getResult();
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
};

const getValues = () => {
  list.innerHTML = localStorage.getItem("values");
};
getValues();

function getResult() {
  document.querySelector(".completed").textContent =
    document.querySelectorAll(".checked").length;

  console.log(
    (document.querySelector(".total").textContent =
      document.querySelectorAll("li").length)
  );
}
getResult();
