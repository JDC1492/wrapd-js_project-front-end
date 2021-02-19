class ListItem{
    constructor(id, item_name, item_price, list_id){
        this.id = id
        this.item_name = item_name
        this.item_price = item_price 
        this.list_id = list_id
        // debugger    
        this.rendListItems() 
    }

        rendListItems(){
            const listItemsPlace = document.getElementById(`item_container_${this.list_id}`);
            const listItemsContainer = document.createElement('div')
            listItemsContainer.dataset.id = this.id
            listItemsContainer.id = this.id
            listItemsContainer.innerHTML += this.makeListItems() //-inside this div create the list for this object
            listItemsPlace.appendChild(listItemsContainer)
            listItemsContainer.addEventListener('change', e => {
                if(e.target.checked === true){
                    listItemsContainer.style.textDecoration = 'line-through'
                    listItemsContainer.style.color = 'red'
                }else{
                    listItemsContainer.style.textDecoration = 'none'
                    listItemsContainer.style.color = 'black'
                } 
            })
        }

        makeListItems(){// original below
            return `
               <h3>${this.item_name}</h3>
               <h3>${this.item_price}</h3> 
               <input id=${this.id} class="obtained" type="checkbox"><label>Got it?</label>  
               <br><br>          
                `
        }
        

}


          











        // newItem(){
        //     document.getElementById(`new_item_input_${this.id}`).addEventListener('change', e => {
        //         if(e.target.checked){
        //         document.getElementById(`another_form_${this.id}`).innerHTML += this.cueTheInput()
        //         }
        //     })
        // }
    
        // cueTheInput(){
        //     return `
        //     <div id="item_field_for_list_${this.id}">
        //         <form id="new_item_form">
        //             <input id="item_name" type="text" name="item_name" placeholder="Gift Name">
        //                 <br>
        //             <input id="item_price" type="text" name="item_price" placeholder="Gift Price">
        //                 <br>
        //             <input id="create_item" type="submit" value="Another for ${this.name}?">
        //         </form>
        //     </div>
        //     `  
        // }