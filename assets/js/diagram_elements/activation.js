function ActivationElement(){

    this.type = 'Activation';
    this.defaultX = 100;
    this.defaultY = 100;
    this.defaultW = 10;
    this.defaultH = 200;

    var self = this;

    this.init = function(x, y, w, h) {
        var id = new Diagram().generateID();
        //Dodanie diagramu do tablicy z wszystkimi elementami
        diagramStructure.push({
            id: id,
            type: this.type,
            x: x ? x : this.defaultX,
            y: y ? y : this.defaultY,
            w: w ? w : this.defaultW,
            h: h ? h : this.defaultH
        });
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