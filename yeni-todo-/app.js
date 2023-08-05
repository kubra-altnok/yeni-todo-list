let toDoListArray = [];

// ul variables
const form = document.querySelector(".form");
const input = form.querySelector(".form__input");
const ul = document.querySelector(".toDoList");

// event listeners

form.addEventListener("submit", (e) => {
  // prevent default behavior - page reload
  e.preventDefault();
  // give item a unique ID
  let itemId = String(Date.now());
  // get/assingn input value
  let toDoItem = input.value;
  // pass ID and item into functions
  addItemToDOM(itemId, toDoItem);
  addItemToArray(itemId, toDoItem);
  // clear the input box. (this is default behaviour but we got rid of that)
  input.value = "";
});

ul.addEventListener("click", (e) => {
  let id = e.target.getAttribute("data-id");
  if (!id) return; // user clicked in something else  // pass id through to functions
  removeItemFromDOM(id);
  removeItemFromArray(id);
});

// <li class="list-group-item d-flex justify-content-between">
//                             Todo 1
//                             <a href = "#" class ="delete-item">
//                                 <i class = "fa fa-remove"></i>
//                             </a>

// functions
function addItemToDOM(itemId, toDoItem) {
  // create an li
  const li = document.createElement("li");
  li.setAttribute("data-id", itemId);
  //add toDoItem text to li
  li.innerText = toDoItem;

  // create an link
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = `<i class = "fa fa-remove"> </i>`;
  console.log(li);
  // add li to the DOM
  li.appendChild(link);
  ul.appendChild(li);
}

function addItemToArray(itemId, toDoItem) {
  // add item to array as an object with an ID so we can find and delete it later
  toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
  console.log(toDoListArray);
}
console.log(ul);

// function deleteTodo(e) {
//   if (e.target.className === "fa fa-remove") {
//     e.target.parentElement.parentElement.remove();
//     deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
//     showAlert("success", "silindi");
//   }
// }
