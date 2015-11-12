function Diagram(){

    var self = this;

    this.generateID = function() {
        var result = self.makeId();
        return this.checkDuplicate(result);
    };

    this.checkDuplicate = function(id) {
        var self = this;

        diagramStructure.forEach(function(element, key) {
            if(element.id === id){
                return id = self.checkDuplicate(self.makeId());
            }
        });

        return id;
    };

    this.makeId = function(){
        var id = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 5; i++ )
            id += possible.charAt(Math.floor(Math.random() * possible.length));

        return id;
    };

    this.clearDiagram = function() {
        diagramStructure = [];
        stage.removeAllChildren();
        stage.update();
    };

    this.loadDiagram = function(data){
        data.forEach(function(el) {
            try {
                var element = new window[el.type+"Element"]();
                element.init(el.x, el.y);
            }
            catch(err) {
                alert(err);
            }
        });
    };

}