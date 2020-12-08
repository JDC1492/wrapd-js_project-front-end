document.addEventListener("DOMContentLoaded", function(e){
 listSubListen()
})
// debugger

function listSubListen(){
    const subButton = document.getElementById("list_form")
    subButton.addEventListener("submit", function(event){
        takeInput(event)
        
    })
    
}

function takeInput(event){
    return {
    receiver: event.target.querySelector('#receiver').value,
    name: event.target.querySelector('#item-name').value,
    price: event.target.querySelector('#item-price').value,
    link: event.target.querySelector('#item-link').value,
    check: event.target.querySelector('#obtained').value
    }
}

