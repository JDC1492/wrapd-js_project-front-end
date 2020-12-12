class API{
    
        static loadLists(){
            fetch("http://localhost:3000/lists")
                .then(resp => resp.json())
                .then(lists => {
                    // debugger
                    lists.forEach(list => {
                        const id = list.id
                        const name = list.name
                        new List(id, name)
                    })
                })
        }

        // static listItemsFetch(){
        // fetch(`http://localhost:3000/lists/${this.id}/list_items`)
        //     .then(resp => resp.json())
        //     .then(liIt => {
        //         liIt.forEach(liIt => {
        //             const{item_name, item_price} = liIt
        //             new ListItem(liIt)
        //         })
        //     })
        // }

       
            //takes an event, used as callback for the submit of the 'list-form'
        static loadList(e){
            e.preventDefault()
            let data = {
                'name': e.target.name.value,
                'list_item_attributes': [{
                  'item_name': e.target.item_name.value,
                  'item_price': e.target.item_price.value
                }] 
            };
            fetch("http://localhost:3000/lists", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'     
                },
                body: JSON.stringify(data)
                //how info travels across the net.
            })
            .then(resp => resp.json())
                .then(list =>{
                    debugger
                    //ask about maybe putting the nested attr here vv for items, since were taking the form data and JSONing it.
                    const {id, name} = list
                    new List(id, name)
                    document.getElementById("list_form").reset()
                })
        }

        
}

        
        

      
        