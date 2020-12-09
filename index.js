document.addEventListener("DOMContentLoaded", function(e){
    // loadLists()
    listSubListen()
    addFieldListener()
    
})
// function showLists(lists)
            // document.querySelector(".list-container").innerHTML = ""
            // lists.forEach(function(list)
            // {
            //     postList(makeList(lists))
            // }
        const formAdd = document.getElementById("list_form")
        const check = document.getElementById("additional")
        const addedField = document.getElementById("item-field")
        const holidayList = document.getElementById("list-container")


function listSubListen(){
    //works
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
        //works
        return {
        listTitle: event.target.querySelector('#list-title').value,
        name: event.target.querySelector('#item-name').value,
        price: event.target.querySelector('#item-price').value
        }
    }

    function makeList(list){
        //works
        return `
        <div class="list">
            <div>
                <h2>A gift for: ${list.listTitle}</h2>
                <h3>Item: ${list.name}</h3>
                <h4>Price: ${list.price}</h4>
                <br>
                <label>Gift Obtained?</label><input id="obtained" type="checkbox" name="item_obtained">
            </div>    
        </div>
        `
    }

    function postList(list){
        //works
       const set = document.querySelector("#list-container").innerHTML += list
    }

    function clearForm(){
        //works
        document.getElementById("list-title").value = ""
        document.getElementById("item-name").value = ""
        document.getElementById("item-price").value = ""
        }

}        



       



    
   
