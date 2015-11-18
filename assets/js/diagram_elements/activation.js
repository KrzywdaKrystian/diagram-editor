function Activation(){

    this.type = 'Activation';
    this.defaultX = 100;
    this.defaultY = 100;
    this.defaultW = 10;
    this.defaultH = 200;

    var self = this;

    this.init = function(details) {
        var id = new Diagram().generateID();

        if(details) {
            diagramStructure.push(details);
        }
        else {
            diagramStructure.push({
                id: id,
                type: this.type,
                x: this.defaultX,
                y: this.defaultY,
                w: this.defaultW,
                h: this.defaultH
            });
        }
        //Dodanie diagramu do tablicy z wszystkimi elementami
        var index = diagramStructure.length-1;

        //Rysowanie elementu
        var rect = new createjs.Shape();
        rect.name = id;
        rect.diagramElementType = 'solid';
        rect.graphics.beginFill("red").drawRect(0, 0, diagramStructure[index].w, diagramStructure[index].h);
        rect.x = diagramStructure[index].x;
        rect.y = diagramStructure[index].y;
        stage.addChild(rect);

        //Dodanie interakcji do elementu
        this.addInteractionToElement(rect, index);

        stage.update();

    };

    this.addInteractionToElement = function(rect, index){
        interaction.editPanel(rect);
        interaction.drag(rect, index);
    };

}