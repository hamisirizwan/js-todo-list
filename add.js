const num1InputEl = document.getElementById("num1")
const num2InputEl = document.getElementById("num2")
const buttonEl = document.getElementById("btn")
const resultEl = document.getElementById("result")


buttonEl.addEventListener("click", function(){
    const result = parseInt(num1InputEl.value) + parseInt(num2InputEl.value)

    // const resultEl = document.createElement("h1")

    resultEl.innerHTML = result

    // attaching it to the dom

    // document.querySelector("body").appendChild(resultEl)
})

// dataType conversion
