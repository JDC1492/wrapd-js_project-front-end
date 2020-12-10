class List{
    constructor(name){
        // this.id = id
        this.name = name
        this.rendList()
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
                <h3>Item: ${this.name}</h3>
                <h4>Price: ${this.price}</h4>
                <label>Gift Obtained?</label><input id="obtained" type="checkbox" name="item_obtained">
                <p>__________________________</p>
                <br>           
            </div>    
        </div>
        `
    }
    
   
}
    
//  postList(){
//        const set = document.querySelector("#list-container").innerHTML += this
  
//     }
    // showLists()
    // document.querySelector(".list-container").innerHTML = ""
    // lists.forEach(function(list)
    // {
    //     postList(makeList(this))
    // }

