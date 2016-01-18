app.service('Diagram', function(Board, Square, Circle) {

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
            if(type === 'Square')
                Board.addElement(Square());
            else if(type === 'Circle')
                Board.addElement(Circle());
             /*var element = new window[type]();
             element.init();*/
        }
        catch(err) {
            alert(err);
        }


    };
});