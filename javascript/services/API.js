class API{
          static loadLists(){
            fetch("http://localhost:3000/lists")
                .then(function(resp){
                    return resp.json()
                })
                .then(lists => {
                    debugger
                    lists.forEach(list => {
                        const {title} = list
                        const l = new List(title)
                       showLists(l)
                    })
                })            
                .then(data => {
                    debugger
                })
        }
}