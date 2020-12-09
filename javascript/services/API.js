class API{
          static loadLists(){
            fetch("http://localhost:3000/lists")
                .then(function(resp){
                    return resp.json()
                })
                .then(lists => {
                    debugger
                    lists.forEach(list => {
                        const {name} = list
                        const l = new List(name)
                       showLists(l)
                    })
                })            
                .then(data => {
                    debugger
                })
                }

        // function showLists(lists)
            // document.querySelector(".list-container").innerHTML = ""
            // lists.forEach(function(list)
            // {
            //     postList(makeList(lists))
            // }
}