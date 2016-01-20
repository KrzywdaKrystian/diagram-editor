app.service('Diagram', function(Board, $injector) {

    this.setResize = function(resize, stage){
        stage.canvas.width = window.innerWidth-217;
        stage.canvas.height = window.innerHeight;
        if(resize){
            window.addEventListener('resize', function(){
                stage.canvas.width = window.innerWidth-217;
                stage.canvas.height = window.innerHeight;
            }, false);
        }
    };

    this.saveDiagram = function () {
        Board.getBoardElements();
    };

    this.addElement = function (type) {
        try {
            Board.addElement($injector.get(type)());
        }
        catch(err) {
            alert(err);
        }
    };
});