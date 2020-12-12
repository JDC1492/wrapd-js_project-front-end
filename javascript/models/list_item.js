class ListItem{
    constructor(item_name, item_price, list_id){
        // this.listItemsFetch()
        this.item_name = item_name
        this.item_price = item_price 
        this.list_id = list_id
        this.rendListItems()
    }

    rendListItems(){
        const listItemsPlace = document.getElementById(`item_container_${this.list_id}`);
        const listItemsContainer = document.createElement('div')
        listItemsContainer.dataset.id = this.id
        listItemsContainer.id = this.id
        listItemsContainer.innerHTML += this.makeListItems() //-inside this div create the list for this object
        listItemsPlace.appendChild(listItemsContainer)
        debugger
        // listItemsContainer.addEventListener('click', e => {
        //     if (e.target.className === 'delete')this.deleteList(e)
        // })
    }
    makeListItems(){// original below
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
