document.addEventListener("DOMContentLoaded", function(e){
 listSubListen()
})
// debugger

function listSubListen(){
    const subButton = document.getElementById("list_form")
    subButton.addEventListener("submit", function(event){
        const userInput = takeInput(event)
        const listInfo = makeList(userInput)
        postList(listInfo)
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
    <div>
        <div>
            <h1>${list.receiver}</h1>
            <h3>${list.name}</h3>
            <h4>${list.price}</h4>
            <p>${list.link}</p>
            <p>${list.check}</p>
        </div>    
    </div>
    `
    debugger
}

function postList(list){
    document.querySelector("#list-container").innerHTML += list
}

}