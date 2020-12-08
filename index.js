document.addEventListener("DOMContentLoaded", function(e){
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
                <h3>Name: ${list.name}</h3>
                <h4>Price: ${list.price}</h4>
                <a href= "${list.link}"> Item Link </a>
                <p>Obtained: ${list.check}</p>
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
        document.getElementById("obtained").disabled = true
        }
}

            
function addFieldListen(){
    another.addEventListener("click", function(event){
        toggleClick()
    })
} 
        function toggleClick(){
            if(another.checked === true){
            // console.log("I came to the JS party!")
            let newItemField = document.querySelector('.new-item-fields')
            newItemField.innerHTML += makeFields()
            } else if(another.checked === false){
            // const addedField = document.getElementById("item-field")
            let newItemField = document.querySelector('.new-item-fields')
            newItemField.removeChild('div')
            }
        }

        function makeFields(){
            return `
            <div id="new-item">
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

        function removeFields(){
        }