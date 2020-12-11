class API{
    
        static loadLists(){
            fetch("http://localhost:3000/lists")
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

       

        static loadList(e){
            e.preventDefault()
            let data = {
                'name': e.target.name.value,
                'list_item_attributes': [{
                  'name': e.target.item_name.value,
                  'price': e.target.item_price.value
                }] 
            };
            fetch("http://localhost:3000/lists", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'    
                },
                body: JSON.stringify(data)
            })
            .then(resp => resp.json())
            .then(list =>{
                const {id, name} = list
                new List(id, name)
                document.getElementById("list_form").reset()
            })
                
        }

        
}

        
        

      
        