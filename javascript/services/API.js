class API {
  static loadLists() {
    //read fetch
    fetch("http://localhost:3000/lists")
      .then((resp) => resp.json())
      .then((lists) => {
        // debugger
        lists.forEach((list) => {
          const id = list.id;
          const name = list.name;
          new List(id, name);
        });
      });
  }
  //takes an event, used as callback for the submit of the 'list-form'
  static loadList(e) {
    e.preventDefault();
    let data = {
      name: e.target.name.value,
      list_items_attributes: [
        {
          item_name: e.target.item_name.value,
          item_price: e.target.item_price.value,
        },
      ],
    };
    fetch("http://localhost:3000/lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      //how info travels across the net.resp => resp.json()
    })
      .then((resp) => resp.json())
      .then((list) => {
        const { id, name } = list;
        new List(id, name);
        document.getElementById("list-form").reset();
      });
  }
}
