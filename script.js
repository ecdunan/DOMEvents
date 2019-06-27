var button = document.getElementById("enter");
var input  = document.getElementById("userinput");
var ul     = document.querySelector("ul");
var li     = document.querySelectorAll("li");

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(function(item) {
	addListActions(item);
});