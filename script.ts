//********************* SELECTORS *********************
var addItemButton    = document.querySelector(".userinput-button")!;
var itemToAddTxt     = document.querySelector<HTMLInputElement>(".userinput")!;
var shoppingList     = document.querySelector(".shopping-list")!;
var doneCheckboxList = shoppingList.querySelectorAll(".todo-check");
var deleteButtonList = document.querySelectorAll(".delete");
//process adding a item
function addItemHandler(): void {
   if(itemToAddTxt.value.length > 0) {
       //main <li> element - will add children under it
       let newListItem = document.createElement("li");

       //<label class="todo">Rice</label> - will cross this out
       let todoLabel = document.createElement("label");
       todoLabel.appendChild(document.createTextNode(itemToAddTxt.value));
       todoLabel.className = "todo";
       newListItem.appendChild(todoLabel);

       //<button class="delete">delete</button>
       let newDeleteButton = document.createElement("button");
       newDeleteButton.appendChild(document.createTextNode("delete"));
       newDeleteButton.className = "delete";
       newDeleteButton.addEventListener("click", deleteHandler);
       newListItem.appendChild(newDeleteButton);

       //<input class="todo-check" type="checkbox">
       let checkbox = document.createElement("input");
       checkbox.type = "checkbox";
       checkbox.className = "todo-check";
       checkbox.addEventListener("click", checkboxDoneHandler);
       newListItem.appendChild(checkbox);

       //<label>Done</label>
       let doneLabel = document.createElement("label");
       doneLabel.appendChild(document.createTextNode("Done"));
       newListItem.appendChild(doneLabel);
      

       shoppingList.appendChild(newListItem);
       itemToAddTxt.value = "";
   }
}

//process adding to do when press Enter
function addItemEnterHandler(event: KeyboardEvent): void {
    //button: HTMLButtonElement, event: Event
   if(event.which === 13) {
       addItemHandler();
   }
}

//cross off the done item
function checkboxDoneHandler(event: Event): void {
   //change an elements class with toggling:
   //https://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript/196038

   let checkboxElement = event.srcElement!;
   let parent = (<HTMLInputElement>checkboxElement).parentElement!;
   parent!.querySelector(".todo")!.classList.toggle("done");
}

//delete a to do item
function deleteHandler(event: Event): void {
   (<HTMLInputElement>event.srcElement!).parentElement!.remove();
}

for(let i=0; i<doneCheckboxList.length; i++) {
   doneCheckboxList[i].addEventListener("click", checkboxDoneHandler);
}

for(let i=0; i<deleteButtonList.length; i++) {
   deleteButtonList[i].addEventListener("click", deleteHandler);
}

itemToAddTxt.addEventListener("keypress", addItemEnterHandler);
addItemButton.addEventListener("click",   addItemHandler);
