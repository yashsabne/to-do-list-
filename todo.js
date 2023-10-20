const todoArray = [
];

renderTodoList();

function renderTodoList() {

    let todoListArray = '';

    //for my personal only //

    for (let index = 0; index <= (todoArray.length); index++) {

        const getHereBaby = index;
        document.getElementById('yash1').innerHTML = 'You have total works to do : ' + `${getHereBaby}`;
    }

    //My personal only above code

    for (let i = 0; i < todoArray.length; i++) {
        const todoObject = todoArray[i];

        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        
        const {name,dueDate} = todoObject;

        const htmlHere = `<div id='script-html'> <p id="your-works" > <span id='name-js-css'><li>  ${name} </li></span> <span id='date-css'><i> ${dueDate }</i></span> <button
            onclick = "
            todoArray.splice(${i},1);
            renderTodoList();  " class ="button-31" > Delete </button>  </p> <br><br><br></div>`;
        todoListArray += htmlHere;

        document.querySelector('.work').style.color = 'darkblue';

    }
    document.querySelector('.work').innerHTML = todoListArray;

}

function inputTaker() {
    const inputTakingHere = document.querySelector('.input-here');
    const name = inputTakingHere.value;

    const dateInputElement = document.querySelector('.js-date');
    const dueDate = dateInputElement.value;

    todoArray.push({
        name: name,
        dueDate: dueDate
    });


    console.log(todoArray);
    inputTakingHere.value = '';

    renderTodoList();


}
