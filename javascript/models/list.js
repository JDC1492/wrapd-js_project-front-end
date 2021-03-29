class List {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.rendList();
    this.newItem();
  }

  //placed in this class so lists can handle the fetching of thier own items.
  listItemsFetch() {
    fetch(`http://localhost:3000/lists/${this.id}/list_items`)
      .then((resp) => resp.json())
      .then((listItem) => {
        listItem.forEach((listItem) => {
          const { id, item_name, item_price, list_id } = listItem;
          new ListItem(id, item_name, item_price, list_id);
        });
      });
  }

  deleteList(e) {
    const id = parseInt(e.target.parentElement.id);
    fetch(`http://localhost:3000/lists/${id}`, {
      method: "DELETE",
    }).then(() => {
      //removing the child of the parent div,
      // by its numbered ID corressponding with whats in the DB.
      document
        .getElementById("list-container")
        .removeChild(document.getElementById(id));
    });
  }
  //list to page.
  rendList() {
    const listPlace = document.getElementById("list-container");
    const listContainer = document.createElement("div");
    listContainer.classList.add("indiList");
    listContainer.dataset.id = this.id;
    listContainer.id = this.id;
    listContainer.innerHTML += this.makeList(); //-inside this div create the list for this object
    this.listItemsFetch();
    listPlace.appendChild(listContainer);
    listContainer.addEventListener("click", (e) => {
      if (e.target.className === "delete") this.deleteList(e);
    });
  }

  //list HTML formed with appropriate information.
  makeList() {
    // original below
    return `
                    <h2>${this.name}'s List</h2>
                    <input id="new_item_input_${this.id}" type="checkbox" class="another"><label>Something extra?</label>
                    <div id="another_form_${this.id}">
                    </div>
          
                    <div id="item_container_${this.id}">
                    </div>
                    <button class="delete">Delete List</button>
            `;
  }

  newItem() {
    document
      .getElementById(`new_item_input_${this.id}`)
      .addEventListener("change", (e) => {
        if (e.target.checked) {
          document.getElementById(
            `another_form_${this.id}`
          ).innerHTML += this.cueTheInput();
          this.createNewItem();
        } else if (!e.target.checked) {
          document
            .getElementById(`another_form_${this.id}`)
            .removeChild(
              document.getElementById(`another_form_${this.id}`).childNodes[1]
            );
        }
      });
  }

  cueTheInput() {
    return `
        <div id="item_field_for_list_${this.id}">
            <form id="new_item_form">
                <input id="item_name" type="text" name="item_name" placeholder="Gift Name">
                    <br>
                <input id="item_price" type="text" name="item_price" placeholder="Gift Price">
                    <br>
                <button id="create_item" class="submit" >Another for ${this.name}?</button>
                <!--<input id="create_item" type="submit" value="Another for ${this.name}?">-->
            </form>
        </div>
        `;
  }

  createNewItem(e) {
    document.getElementById("new_item_form").addEventListener("submit", (e) => {
      e.preventDefault();
      let addIt = {
        item_name: e.target.item_name.value,
        item_price: e.target.item_price.value,
        list_id: e.target.parentElement.parentElement.parentElement.id,
      };
      fetch("http://localhost:3000/list_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addIt),
        //how info travels across the net.resp => resp.json()
      })
        .then((resp) => resp.json())
        .then((listItem) => {
          // listItem.forEach(listItem => {
          const { id, item_name, item_price, list_id } = listItem;
          new ListItem(id, item_name, item_price, list_id);
          // })
        });
      this.clearIt();
    });
  }

  // addNewItem(){

  // }

  clearIt() {
    document.getElementById("new_item_form").reset();
  }
}
