function Arrow(){

    this.type = 'Arrow';
    this.strokeStyle = 3;
    this.strokeColor = 'black';
    this.drawing = false;
    this.detalis = {};
    var self = this;

    this.init = function(details){
        var line = null;
        if(details) {
            diagramStructure.push(details);

            line = new createjs.Shape();
            line.graphics.setStrokeStyle(self.strokeStyle);
            line.graphics.beginStroke(self.strokeColor);
            line.graphics.moveTo(details.xStart, details.yStart);
            line.graphics.lineTo(details.xEnd, details.yEnd);
            line.graphics.endStroke();
            stage.addChild(line);
            stage.update();
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
    };

    this.start = function(x, y) {
        var prev = null;
        var line = null;

        var listenerMousMmove = stage.on("stagemousemove", function(evt) {
            self.drawing = true;
            if(prev){
                if(line) {
                    line.removeAllEventListeners();
                    stage.removeChild(line);
                    stage.update();
                }
            }
            if(self.drawing){
                line = new createjs.Shape();
                line.graphics.setStrokeStyle(self.strokeStyle);
                line.graphics.beginStroke(self.strokeColor);
                line.graphics.moveTo(x, y);
                line.graphics.lineTo(evt.stageX, evt.stageY);
                line.graphics.endStroke();
                stage.addChild(line);
                stage.update();
                self.detalis = {
                    xStart: x,
                    yStart: y,
                    xEnd: evt.stageX,
                    yEnd: evt.stageY
                };
                prev = true;
            }
            //console.log("the canvas was clicked at "+evt.stageX+","+evt.stageY);
        });

        stage.on('click', function(evt){
            if(self.drawing){
                stage.off("stagemousemove", listenerMousMmove);
                var id = new Diagram().generateID();
                diagramStructure.push({
                    id: id,
                    type: self.type,
                    xStart: self.detalis.xStart,
                    yStart: self.detalis.yStart,
                    xEnd: self.detalis.xEnd,
                    yEnd: self.detalis.yEnd
                });

            }
            console.log('klik na stage');
        });

    };
}