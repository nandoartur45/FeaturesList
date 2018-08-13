class ItemsList
{
    constructor(containerDivId, containerShadowId)
    {
        this._itemsArray = [];
        this.selectedItemsArray = [];
        this._container = $(`#${containerDivId}`);
        this._containerShadow = $(`#${containerShadowId}`);
    }

    //he will insert an item in a items vector
    addItem(item)
    {
        this.itemsArray.push(item);
        this.redraw();
    }

    //he will remove an item from a items vector
    removeItem(item)
    {
        let index = this.itemsArray.indexOf(item);
        if(index === -1)
        {
            console.error(`Item Not Found: ${item}`);
            return;
        }
        this.itemsArray.splice(index, 1);
        this.redraw();
    }
    
    show()
    {
        this._containerShadow.show();
    }

    hide()
    {
        this._containerShadow.hide();
    }

    itemsListChanged()
    {

    }

    selectedItemsChanged()
    {
        
    }

    get itemsArray()
    {
        return this._itemsArray;
    }

    redraw()
    {
        this._container.empty();
        for(let i = 0; i < itemsList.itemsArray.length; i++)
        {
            let item = itemsList.itemsArray[i];
            let newButton = this._createButton(item);
            this._container.append(newButton);
        }
    }

    _createButton(item){
        let newButton = $(document.createElement("button"));
        newButton.addClass("btn btn-outline-primary buttondiv");
        newButton.html(item);
        newButton.on("click", () => {console.log("yabadabadoo");});
        return newButton;
    }
}

console.log("Started!");

let itemsList = new ItemsList("containerAddress", "containerShadow");
itemsList.addItem("Rua X");
itemsList.addItem("Avenida Y");
itemsList.addItem("Travessa Z");




// let containerAddress = $("#containerAddress");

// let newButton = $(document.createElement("button"));
// newButton.addClass("btn btn-outline-primary buttondiv");
// newButton.html("Rua das Covas");

// containerAddress.append(newButton);

// for(let i = 0; i < itemsList.itemsArray.length; i++)
// {
//     let street = itemsList.itemsArray[i];
//     let newButton = $(document.createElement("button"));
// newButton.addClass("btn btn-outline-primary buttondiv");
// newButton.html(street);
// containerAddress.append(newButton);
// }

//<button type="button" class="btn btn-outline-primary buttondiv">Travessa Z</button>
