function ActivationElement(){

    this.type = 'Activation';
    this.defaultX = 100;
    this.defaultY = 100;

    this.init = function(x, y) {
        var id = new Diagram().generateID();
        diagramStructure.push({
            id: id,
            type: this.type,
            x: x ? x : this.defaultX,
            y: y ? y : this.defaultY
        });
        var index = diagramStructure.length-1;

        stage.cursor = 'pointer';
        // this lets our drag continue to track the mouse even when it leaves the canvas:
        // play with commenting this out to see the difference.
        stage.mouseMoveOutside = true;

        var circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0, 0, 50);

        var label = new createjs.Text(id, "bold 14px Arial", "#FFFFFF");
        label.textAlign = "center";
        label.y = -7;

        var dragger = new createjs.Container();
        dragger.x = diagramStructure[index].x;
        dragger.y = diagramStructure[index].y;
        dragger.addChild(circle, label);
        stage.addChild(dragger);

        dragger.on("pressmove",function(evt) {
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