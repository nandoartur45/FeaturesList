class FeaturesList extends ItemsList {
    constructor() {
        let addressesDiv = $(document.createElement("div"));
        super(addressesDiv);

        this._outerContainer = $(document.createElement("div"));
        this._outerContainer.addClass("containerAddress");
        
        this._containerMenu = $(document.createElement("div"));
        this._containerMenu.addClass("containerMenu");
        this._outerContainer.append(this._containerMenu);
        
        let pinbutton = $(document.createElement("button"));
        this._containerMenu.append(pinbutton);
        pinbutton.addClass("pinbutton");
        pinbutton.html("<i class='far fa-thumbtack'></i>");
        let trashbutton = $(document.createElement("button")); 
        trashbutton.addClass("trashbutton");
        trashbutton.html("<i class='far fa-trash'></i>");
        this._containerMenu.append(trashbutton);

        
        // this._border = $(document.createElement("border"));
        // this._border.addClass("borderDiv");
        // this._border.append(this._outerContainer);
        this._container.addClass("containerDiv btn-group-vertical btn-group-toggle");
        this._container.attr("data-toggle","buttons");
        this._outerContainer.append(this._container);
    }
}

let featuresList = new FeaturesList();
// $("body").append(featuresList._border);
$("body").append(featuresList._outerContainer);
featuresList.addItem({id:1, label:"Rua X"});
featuresList.addItem({id:2, label:"Avenida Conorel José Pires de Andrade"});
featuresList.addItem({id:3, label:"Rua X"});
featuresList.addItem({id:4, label:"Rua X"});
featuresList.addItem({id:5, label:"Rua X"});
featuresList.addItem({id:6, label:"Rua X"});
featuresList.addItem({id:7, label:"Rua X"});
featuresList.addItem({id:8, label:"Rua X"});
featuresList.addItem({id:9, label:"Rua X"});
featuresList.addItem({id:10, label:"Rua X"});
featuresList.addItem({id:11, label:"Rua X"});
featuresList.addItem({id:12, label:"Rua X"});
featuresList.addItem({id:13, label:"Rua X"});
featuresList.addItem({id:14, label:"Rua X"});
featuresList.addItem({id:15, label:"Rua X"});
featuresList.addItem({id:16, label:"Rua X"});
featuresList.addItem({id:17, label:"Rua X"});
featuresList.addItem({id:18, label:"Rua X"});
featuresList.addItem({id:19, label:"Rua X"});
featuresList.addItem({id:20, label:"Rua X"});