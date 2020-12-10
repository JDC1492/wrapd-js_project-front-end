class API{
          static loadLists(){
            fetch("http://localhost:3000/lists")
                .then(resp => resp.json())
                .then(lists => {
                    lists.forEach(list => {
                        const{name} = list
                        new List(name)

                    })
                })
          }
        }
        


        //  showLists(lists)
        //     document.querySelector(".list-container").innerHTML = ""
        //     lists.forEach(function(list)
        //     {
        //         postList(makeList(lists))
        //     }
