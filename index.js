document.addEventListener("DOMContentLoaded", function(e){
    // loadLists()
    listSubListen()
    addFieldListen()
})

        const formAdd = document.getElementById("list_form")
        const another = document.getElementById("additional")
        const addedField = document.getElementById("item-field")
        const holidayList = document.getElementById("list-container")


function listSubListen(){
    const subButton = document.getElementById("list_form")
    subButton.addEventListener("submit", function(event){
        event.preventDefault()
      
    const userInput = takeInput(event)
    const listInfo = makeList(userInput)
        postList(listInfo)
        clearForm()
        }
    )
    function takeInput(event){
        return {
        listTitle: event.target.querySelector('#list-title').value,
        name: event.target.querySelector('#item-name').value,
        price: event.target.querySelector('#item-price').value
        }
    }
    function makeList(list){
        return `
        <div class="list">
            <div>
                <h1>A gift for: ${list.listTitle}</h1>
                <h3>Item: ${list.name}</h3>
                <h4>Price: ${list.price}</h4>
                <label>Gift Obtained?</label><input id="obtained" type="checkbox" name="item_obtained">
                <p class="additional">Another Gift?<input id="additional" type="checkbox" name="create_another"></p>
            </div>    
        </div>
        `
    }

    function postList(list){
       const set = document.querySelector("#list-container").innerHTML += list
       
    }

    function clearForm(){
        document.getElementById("list-title").value = ""
        document.getElementById("item-name").value = ""
        document.getElementById("item-price").value = ""
        }
}        

function addFieldListen(){  
    const another = document.getElementById("additional")
    another.addEventListener("click", function(event){
        toggleClick()
    })
} 

function toggleClick(){
    if(another.checked === true){
    let newItemField = document.querySelector('.new-item')
    newItemField.innerHTML += makeFields()
} 
}
       

// function showLists(lists)
            // document.querySelector(".list-container").innerHTML = ""
            // lists.forEach(function(list)
            // {
            //     postList(makeList(lists))
            // }

    
    function makeFields(){
        return `
            <div class="new-item-fields">
            <h2>_____________</h2>
            <input id="item-name" type="text" name="item_name" placeholder="Gift Name">
            <br>
            <input id="item-price" type="text" name="item_price" placeholder="Gift Price">
            <br>
            `
        }
