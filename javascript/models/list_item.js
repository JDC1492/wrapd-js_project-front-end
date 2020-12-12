class ListItem{
    constructor(id, item_name, item_price, list_id){
        this.id = id
        this.item_name = item_name
        this.item_price = item_price 
        this.list_id = list_id
        debugger
        this.rendListItems()
    }

    rendListItems(){
        const listItemsPlace = document.getElementById(`item_container_${this.list_id}`);
        const listItemsContainer = document.createElement('div')
        listItemsContainer.dataset.id = this.id
        listItemsContainer.id = this.id
        listItemsContainer.innerHTML += this.makeListItems() //-inside this div create the list for this object
        debugger
        listItemsPlace.appendChild(listItemsContainer)
        // listItemsContainer.addEventListener('click', e => {
        //     if (e.target.className === 'delete')this.deleteList(e)
        // })
    }
    makeListItems(){// original below
        debugger
        return `
               <h3>${this.item_name}</h3>
               <h3>${this.item_price}</h3>                 
        `
    }
    
    //   listItemsFetch(){
    //         fetch(`http://localhost:3000/lists/${this.id}/list_items`)
    //             .then(resp => resp.json())
    //             .then(liIt => {
    //                 debugger
    //                 liIt.forEach(liIt => {
    //                     const{item_name, item_price} = liIt
    //                     new ListItem(liIt)
                        
    //                 })
    //             })
    //     }
}
