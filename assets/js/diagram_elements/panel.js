function Panel(){

    this.type = 'Panel';
    this.panel = null;
    //Flaga, jeśli klikamy na element diagramu to blokujemy kasowanie
    this.draw = false;
    //Flaga, jeśli klikamy na wyświetlony panel
    this.currentPanel = false;

    var self= this;

    this.init = function(element){
        self.draw = true;

        console.log(self.currentPanel);
        //Jeśli jest już panel wyswietlony to kasujemy go i tworzymy nowy
        if(self.panel && !self.currentPanel) {
            self.remove();
            self.currentPanel = false;
        }

        self.panel = new createjs.Shape();
        if(self.panel) {
            self.panel.graphics.beginFill("blue").drawRect(element.x+10, element.y, 50, 100);

            self.panel.on("click", function(evt) {
                self.currentPanel = true;
                console.log('click na panel');
            });

            stage.addChild(self.panel);
            stage.update();
        }
    };

    this.remove = function() {
        if(self.panel) {
            self.panel.removeAllEventListeners();
            stage.removeChild(self.panel);
            stage.update();
        }
    };

    document.getElementById("DiagramApp").onclick = function(){
        if(!self.draw && !self.currentPanel)
            self.remove();
        self.currentPanel = false;
        self.draw = false;
    }
}