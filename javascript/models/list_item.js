class ListItem{
    constructor(item_name, item_price){
        this.item_name = item_name
        this.item_price = item_price
        
    }
    static loadListItems(){
        fetch("http://localhost:3000/list_items")
            .then(resp => resp.json())
            .then(lists => {
                debugger
                lists.forEach(list => {
                    const id = list.id
                    const name = list.name
                    new List(id, name)
                })
            })
    }

}
