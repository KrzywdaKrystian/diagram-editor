function ActivationElement(){

    this.type = 'Activation';
    this.defaultX = 100;
    this.defaultY = 100;

    var self = this;

    this.init = function(x, y) {
        var id = new Diagram().generateID();

        diagramStructure.push({
            id: id,
            type: this.type,
            x: x ? x : this.defaultX,
            y: y ? y : this.defaultY
        });
        var index = diagramStructure.length-1;

        //Rysowanie elementu
        var rect = new createjs.Shape();
        rect.graphics.beginFill("red").drawRect(0, 0, 10, 200);
        rect.x = 200;
        rect.y = 200;
        stage.addChild(rect);

        //Dodawanie eventów
        /*document.getElementById("DiagramApp").onclick = function(){
            self.panel.remove(rect);

            if(!rect['_listeners'] || !rect['_listeners'].click){
                rect.on("click", function(evt) {
                    console.log('pojawia się panel');
                    setTimeout(function(){
                        self.panel.init(rect);
                    },100);
                });
            }
        };*/

        rect.on("click", function(evt) {
            HelpPanel.init(rect);
        });


        /*rect.on("mousedown",function(evt) {
            if(self.panel.element)
                self.panel.remove();
            self.panel.init(rect);
        });*/

        rect.on("pressmove",function(evt) {
            //self.panel.remove();
            // currentTarget will be the container that the event listener was added to:
            evt.currentTarget.x = evt.stageX;
            evt.currentTarget.y = evt.stageY;
            // make sure to redraw the stage to show the change:
            diagramStructure[index].x = evt.currentTarget.x;
            diagramStructure[index].y = evt.currentTarget.y;
            stage.update();
        });

        stage.update();

    };

}