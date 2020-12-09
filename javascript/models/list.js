class List{
    constructor(name){
        this.name = name
        this.postList()
    }

    //instance
    postList(){
        debugger
        document.querySelector("#list-container").innerHTML += this    
    }

    makeList(){
        return `
        <div class="list">
            <div>
                <h1>${this.receiver}'s List</h1>
                <h3>Item: ${this.name}</h3>
                <h4>Price: ${this.price}</h4>
                <a href= "${this.link}"> Item Link </a>
                <p>Obtained: ${this.check === 'on' ? "Got It!" : "There's Still Time!"}</p>
            </div>    
        </div>
        `
    }

    // showLists()
    // // document.querySelector(".list-container").innerHTML = ""
    // // lists.forEach(function(list)
    // {
    //     postList(makeList(this))
    // }

}