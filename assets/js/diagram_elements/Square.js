function Square(){

    this.type = 'Activation';
    this.defaultX = 100;
    this.defaultY = 100;
    this.defaultW = 10;
    this.defaultH = 200;

    var self = this;
    var element = null;

    this.init = function(details) {

        //Rysowanie elementu
        var rect = new createjs.Shape();
        rect.x = 20;
        rect.y = 50;
        rect.w = 50;
        rect.h = 50;
        var color = new Interaction().getColor();
        rect.graphics.beginFill(color).setStrokeStyle(0).beginStroke("rgba(0,0,0,0)").drawRect(0, 0, rect.w, rect.h);

        //shape - Does not currently support automatic bounds calculations. Use setBounds() to manually define bounds. - Dlatego dodaje te metody
        rect.getX = function(){
            return element.x;
        };

        rect.getY = function(){
            return element.y;
        };

        rect.getWidth = function(){
            return element.graphics.command.w;
        };

        rect.getHeight = function(){
            return element.graphics.command.h;
        };

        element = rect;

        //Dodanie interakcji do elementu
        element.alpha = 1;
        element.on("mouseover", handleInteraction);
        element.on("mouseout", handleInteraction);

        this.addInteractionToElement(element);
        stage.addChild(element);
        stage.update();
        //potrzebne
        createjs.Ticker.addEventListener("tick", stage);

        console.log(stage.children);

    };

    this.addInteractionToElement = function(rect){
        interaction.editPanel(rect);
        interaction.drag(rect);
    };


    function handleInteraction(event) {
        event.target.alpha = (event.type == "mouseout") ? 1 : 0.5;
    }




}