//This code challenge is to move a todo item to the completed list
//this function is taking the input and creating a list item on the page
function addItem() {
    var newItemText = document.getElementsByTagName('input')[0].value;
    document.getElementsByTagName('input')[0].value = ''; //this clears the field for new items to be added

    // Step 1 - Create list item 
    var newItem = document.createElement('li');

    // add user's todo as content to li 
    newItem.innerHTML = newItemText;

    // add li node to ul node 
    document.getElementById('todoList').appendChild(newItem);
    //add an event listener and handler to each to do list item after it's created and then    call the complete Item function
    newItem.addEventListener('click', completeItem);
}

//this function happens when a user clicks on an item under the 'todo list', which will move the item to the 'completed list'
function completeItem() {
	removeItemFromTodos(this);
  	addItemToCompleted(this);
};
//this function removes the item the user clicks on from the unordered list -- the .removeChild method removes the item the user clicked on from the unordered list
function removeItemFromTodos(itemElement){
	document.getElementById('todoList').removeChild(itemElement);
};
//this function adds the item to the 'completed list"
function addItemToCompleted(itemElement){
	document.getElementById('completedList').appendChild(itemElement);
};


document.getElementsByTagName('button')[0].addEventListener('click', addItem);
