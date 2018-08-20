class ItemsList extends Subject {
    constructor(containerDivId, containerShadowId) {
        super();

        this._itemsArray = [];
        this.selectedItemsArray = [];
        this._container = $(`#${containerDivId}`);
        this._containerShadow = $(`#${containerShadowId}`);

        ItemsList.on("selecteditemschanged", function () {
            this.redraw();
        }.bind(this));
        ItemsList.on("itemsarraychanged", function () {
            let trigger = false;
            for (let i = this.selectedItemsArray.length - 1; i >= 0; i--) {
                let item = this.selectedItemsArray[i];
                if (this.itemsArray.indexOf(item) === -1) {
                    this.selectedItemsArray.splice(i, 1);
                    trigger = true;
                }
            }
            this.redraw();

            if (trigger = true) {
                ItemsList.notify("selecteditemschanged", this);
            }
        }.bind(this));
    }

    //he will insert an item in a items vector
    addItem(item) {
        this.itemsArray.push(item);
        ItemsList.notify('itemsarraychanged', this);
    }

    //he will remove an item from a items vector
    removeItem(item) {
        let index = this.itemsArray.indexOf(item);
        if (index === -1) {
            console.error(`Item Not Found: ${item}`);
            return;
        }
        this.itemsArray.splice(index, 1);
        ItemsList.notify('itemsarraychanged', this);
    }

    show() {
        this._containerShadow.show();
    }

    hide() {
        this._containerShadow.hide();
    }

    get itemsArray() {
        return this._itemsArray;
    }

    redraw() {
        this._container.empty();
        for (let i = 0; i < this.itemsArray.length; i++) {
            let item = this.itemsArray[i];
            let newButton = this._createButton(item);
            if(this.selectedItemsArray.indexOf(item) !== -1)
            {
                newButton.addClass("active");
            }
            this._container.append(newButton);
        }
    }

    _createButton(item) {
        let newButton = $(document.createElement("button"));
        newButton.addClass("btn btn-outline-primary buttondiv");
        newButton.html(item);
        newButton.on("click", function()  {this.toggleItemActive(item);}.bind(this));
        return newButton;
    }

    setItemActive(item) {
        let index = this.itemsArray.indexOf(item)
        if (index === -1) {
            console.log(`Item Not Found: ${item}`);
            return;
        }

        let indexSelected = this.selectedItemsArray.indexOf(item)
        if (indexSelected !== -1) {
            console.log(`Item Already Selected: ${item}`);
        }
        this.selectedItemsArray.push(item);
        ItemsList.notify('selecteditemschanged', this);
    }

    setItemInactive(item) {
        let index = this.itemsArray.indexOf(item);
        if (index === -1) {
            console.log(`Item Not Found: ${item}`);
            return;
        }

        let indexSelected = this.selectedItemsArray.indexOf(item);
        if (indexSelected === -1) {
            console.log(`Item Not Found: ${item}`);
        }
        this.selectedItemsArray.splice(indexSelected, 1);
        ItemsList.notify('selecteditemschanged', this);
    }

    toggleItemActive(item) {
        let index = this.itemsArray.indexOf(item);
        if (index === -1) {
            console.log(`Item Not Found: ${item}`);
            return;
        }

        let indexSelected = this.selectedItemsArray.indexOf(item);
        if (indexSelected === -1) {
            this.selectedItemsArray.push(item);
        }
        else {
            this.selectedItemsArray.splice(indexSelected, 1);
        }
        ItemsList.notify('selecteditemschanged', this);
    }
}

if (!ItemsList.init) {
    ItemsList.init = true;
    ItemsList.registerEventNames([
        'itemsarraychanged',
        'selecteditemschanged',
    ]);
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
