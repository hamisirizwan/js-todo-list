// console.log("hello world")

// we need the html elements
//   - input
//    - button
//     - ul -li s

// get all your element in js



const userInputEl = document.getElementById("userInput")
const buttonEl = document.getElementById("btn")
const taskListEl = document.getElementById("taskList")

const taskList = []

// 

buttonEl.addEventListener("click", function(){

    const whatUserHasEntered = userInputEl.value

    // validation
    if(whatUserHasEntered === ""){
        return alert("please enter something")
    }

  taskList.push(whatUserHasEntered)

  renderItems()
  userInputEl.value = "" // clear the input

})


function renderItems(){
    taskListEl.innerHTML = ""
    for(let i = 0 ; i < taskList.length; i++){
        //    assess to an individual task
        // console.log(taskList[i])
        // create an li element
        const newLiEl = document.createElement("li")
        
        newLiEl.innerHTML = taskList[i]
        
        // const deleteButton = document.createElement("button")
        // deleteButton.innerHTML = "delete"

        // deleteButton.style.marginLeft = "20px"

        // deleteButton.addEventListener("click", function(){
        //     taskList.splice(i , 1)
        //     renderItems()  // recursive function - a function being able to call itself 
        // })
        // newLiEl.appendChild(deleteButton)
        taskListEl.appendChild(newLiEl)
        }
}

// hoisting
// garbage collection 
// recursion