class List{
    constructor(id, name){
        this.id = id
        this.name = name
        this.rendList()
        this.listItemsFetch()
    }


    rendList(){
        const listPlace = document.getElementById("list-container");
        const listContainer = document.createElement("div")
        listContainer.dataset.id = this.id
        listContainer.id = this.id
        listContainer.innerHTML += this.makeList()
        listPlace.appendChild(listContainer)
    }

    //instance
  makeList(){//works
        return `
        <div class="list">
            <div class="strike">
                <h2>A gift for: ${this.name}</h2>
                <h3>Item: ${this.item_name}</h3>
                <h4>Price: ${this.item_price}</h4>
                <p>__________________________</p>
                <button class="delete">DELETE</button>
                <p>__________________________</p>
                <br>           
            </div>    
        </div>
        `
    }

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
    
   



