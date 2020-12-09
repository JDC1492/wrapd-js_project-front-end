document.addEventListener("DOMContentLoaded", function(e){
    loadLists()
    listSubListen()
    addFieldListen()
})
        const formAdd = document.getElementById("list_form")
        const another = document.getElementById("additional")
        const addedField = document.getElementById("item-field")

function listSubListen(){
    const subButton = document.getElementById("list_form")
    subButton.addEventListener("submit", function(event){
        event.preventDefault()
      
        const userInput = takeInput(event)
        const listInfo = makeList(userInput)
        console.log(userInput.check.value)
        postList(listInfo)
        clearForm()
    })
    
    function takeInput(event){
        return {
        receiver: event.target.querySelector('#receiver').value,
        name: event.target.querySelector('#item-name').value,
        price: event.target.querySelector('#item-price').value,
        link: event.target.querySelector('#item-link').value,
        check: event.target.querySelector('#obtained').value
        }
    }

    function makeList(list){
        return `
        <div class="list">
            <div>
                <h1>${list.receiver}'s List</h1>
                <h3>Item: ${list.name}</h3>
                <h4>Price: ${list.price}</h4>
                <a href= "${list.link}"> Item Link </a>
                <p>Obtained: ${list.check === 'on' ? "Got It!" : "There's Still Time!"}</p>
            </div>    
        </div>
        `
    }

    function postList(list){
        document.querySelector("#list-container").innerHTML += list
    }

    function clearForm(){
        document.getElementById("receiver").value = ""
        document.getElementById("item-name").value = ""
        document.getElementById("item-price").value = ""
        document.getElementById("item-link").value = ""
        document.getElementById("obtained").cheked = false
        }

    // function checkStatus(){
    //     if (list.check.checked === true) {
    //         return "Got It!";
    //       } else {
    //         return "There's Still Time!";
    //       }
    // }

}

            





function addFieldListen(){
    another.addEventListener("click", function(event){
        toggleClick()
    })
} 

// const formAdd = document.getElementById("list_form")
// const another = document.getElementById("additional")
// const addedField = document.getElementById("item-field")
        function toggleClick(){
            if(another.checked === true){
            let newItemField = document.querySelector('.new-item')
            newItemField.innerHTML += makeFields()
        } // else if(another.checked === false){
        //     console.log("I came to the JS party!")
            // const addedField = document.getElementById("item-field")
        //     let newItemField = document.querySelector('.new-item-fields')
        //     debugger
        // newItemField.remove()
        // }
    }
    
    function makeFields(){
        return `
            <div class="new-item-fields">
            <h2>_____________</h2>
            <input id="item-name" type="text" name="item_name" placeholder="Gift Name">
            <br>
            <input id="item-price" type="text" name="item_price" placeholder="Gift Price">
            <br>
            <input id="item-link" type="text" name="item_link" placeholder="Gift Link(Lets minimize returns)">
            <br>
            <p class="obtained">Gift Obtained?<input id="obtained" type="checkbox" name="item_obtained"></p>  
            </div>
            `
        }

        function loadLists(){
        }