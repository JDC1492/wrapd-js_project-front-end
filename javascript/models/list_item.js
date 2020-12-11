class ListItem{
    constructor(item_name, item_price){
        this.item_name = item_name
        this.item_price = item_price
        
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
