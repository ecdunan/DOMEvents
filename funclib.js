function addListActions(item){
    //Add toggle function to list items
    item.addEventListener("click", toggleItem);

    //Add Delete Button
    createListDeleteButton(item);
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    //Add marking as done and delete functionality for newly created list items
    addListActions(li);

    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function toggleItem() {
    this.classList.toggle("done");
}

function deleteListOnClick() {
    var li = this.parentElement;
    var ul = li.parentElement;

    ul.removeChild(li);
}

function createListDeleteButton(item) {
    var deleteBtn   = document.createElement("button");
    var buttonText  = document.createTextNode("Delete");

    deleteBtn.appendChild(buttonText)

    //add event listener to delete button
    deleteBtn.addEventListener("click",deleteListOnClick);

    item.appendChild(deleteBtn);
}