function Arrow(){

    this.draw = false;
    var self = this;

    this.start = function(x, y) {
        var prev = null;
        var line = null;
        var listenerMousMmove = stage.on("stagemousemove", function(evt) {
            self.draw = true;
            if(prev){
                if(line) {
                    line.removeAllEventListeners();
                    stage.removeChild(line);
                    stage.update();
                }
            }
            if(self.draw){
                line = new createjs.Shape();
                line.graphics.setStrokeStyle(3);
                line.graphics.beginStroke('black');
                line.graphics.moveTo(x, y);
                line.graphics.lineTo(evt.stageX, evt.stageY);
                line.graphics.endStroke();
                stage.addChild(line);
                stage.update();
                prev = true;
            }
            //console.log("the canvas was clicked at "+evt.stageX+","+evt.stageY);
        });

        stage.on('click', function(evt){
            if(self.draw)
                stage.off("stagemousemove", listenerMousMmove);
            console.log('klik na stage');
        });

    };
}