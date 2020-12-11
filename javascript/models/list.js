class List{
    constructor(id, name){
        this.id = id
        this.name = name
        this.rendList()
        // this.listItemsFetch()
    }

   

    deleteList(e){
        const id = parseInt(e.target.parentElement.id)
        fetch(`http://localhost:3000/lists/${id}`,{
            method: 'DELETE'
        })
        .then(() => { //removing the child of the parent div, by its numbered ID corressponding with whats in the DB.
            document.getElementById('list_container').removeChild(document.getElementById(id))
        })
    }

    rendList(){
        const listPlace = document.getElementById("list-container");
        const listContainer = document.createElement('div')
        listContainer.dataset.id = this.id
        listContainer.id = this.id
        listContainer.innerHTML += this.makeList() //-inside this div create the list for this object
        listPlace.appendChild(listContainer)
        listContainer.addEventListener('click', e => {
            if (e.target.className === 'delete')this.deleteList(e)
        })
    }
    makeList(){// original below
        return `
                <h2>A gift for: ${this.name}</h2>
                <div class="items-container">
                </div>
                <p>__________________________</p>
                <button class="delete">Delete Gift Idea</button>
                <p>__________________________</p>             
        `
    }
    //instance
  

    listItemsFetch(){
        fetch(`http://localhost:3000/lists/${this.id}/list_items`)
            .then(resp => resp.json())
            .then(liIt => {
                debugger
                liIt.forEach(liIt => {
                    const{item_name, item_price} = liIt
                    new ListItem(liIt)
                    
                })
            })
    }

    
}
    
   



//  makeList(){//works
    // return `
    // <h2>A gift for: ${this.name}</h2>
    // <h3>Item: ${this.item_name}</h3>
    // <h4>Price: ${this.item_price}</h4>
    // <p>__________________________</p>
    // <button class="delete">Delete Gift?</button>
    // <p>__________________________</p>             
    // `
    // }
