app.factory('Line', function(Board, Interaction) {


/*
    if(arrowStart)
        console.log('arrowStart');
    if(arrowEnd)
        console.log('arrowEnd');



    var s = 20;
    var h = 10;

    var arrow = new createjs.Shape();
    arrow.graphics.beginFill(color);
    var arrowRotation = self.angle({x: xStart, y: yStart}, {x: xEnd, y: yEnd});
    console.log(arrowRotation);
    arrow.graphics.moveTo(xStart,yStart).lineTo(xStart+s/2,yStart+h).lineTo(xStart-s/2,yStart+h).closePath();
    arrow.rotation = arrowRotation;

    if(xStart > xEnd) {
        console.log('w lewo');
    }
    else {
        console.log('w prawo');
    }
    */
    var self = this;

    this.drawLine = function (xStart, yStart, xEnd, yEnd, arrowStart, arrowEnd, color, container ) {
        container.removeAllChildren();
        container.arrowStart = false;
        container.arrowEnd = false;

        //line
        var line = new createjs.Shape();
        line.x = 0;
        line.y = 0;
        line.xStart = xStart;
        line.yStart = yStart;
        line.xEnd = xEnd;
        line.yEnd = yEnd;
        line.graphics.setStrokeStyle(2);
        line.graphics.beginStroke(color);
        line.graphics.moveTo(0,0).lineTo(xEnd-xStart, yEnd-yStart).closePath();
        line.graphics.endStroke();
        container.addChild(line);

        //arrow
        var s = 10;
        var h = 10;
        var arrowRotation = self.angle({x: xStart, y: yStart}, {x: xEnd, y: yEnd});
        //arrow Start
        if(arrowStart) {
            var arrowStartShape = new createjs.Shape();
            arrowStartShape = new createjs.Shape();
            arrowStartShape.graphics.beginFill(color);
            arrowStartShape.graphics.moveTo(0,0).lineTo(h,s).lineTo(h,-s).closePath();
            arrowStartShape.rotation = arrowRotation;
            container.addChild(arrowStartShape);
            container.arrowStart = true;
        }

        //arrow End
        if(arrowEnd) {
            var arrowEndShape = new createjs.Shape();
            arrowEndShape.graphics.beginFill(color);
            arrowEndShape.graphics.moveTo(0,0).lineTo(-h,s).lineTo(-h,-s).closePath();
            arrowEndShape.x = xEnd-xStart;
            arrowEndShape.y = yEnd-yStart;
            arrowEndShape.rotation = arrowRotation;
            container.addChild(arrowEndShape);
            container.arrowEnd = true;
        }

        container.x = xStart;
        container.y = yStart;
        container.xStart = xStart;
        container.yStart = yStart;
        container.xEnd = xEnd;
        container.yEnd = yEnd;
        container.color = color;

        return container;
    };

    this.angle = function(p1, p2) {
        return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    };

    return function(xStart, yStart, xEnd, yEnd) {
        var line = new createjs.Container();
        //var line = new createjs.Shape();
        line = self.drawLine(xStart, yStart, xEnd, yEnd, false, false, Interaction.getColor(), line);

        line.redraw = function(x, y, w, h, color) {
            line = self.drawLine(x, y, w, h, false, false, color ? color : line.color, line);
            Board.update();
        };

        line.addStartArrow = function () {
            line = self.drawLine(parseInt(line.xStart), parseInt(line.yStart), parseInt(line.xEnd), parseInt(line.yEnd), line.arrowStart ? false : true, line.arrowEnd, line.color, line);
            Board.update();
        };

        line.addEndArrow = function () {
            line = self.drawLine(parseInt(line.xStart), parseInt(line.yStart), parseInt(line.xEnd), parseInt(line.yEnd), line.arrowStart, line.arrowEnd ? false : true, line.color, line);
            Board.update();
        };

        line.on("dblclick", function(evt) {
            var appElement = document.querySelector('[ng-app=app]');
            var $scope = angular.element(appElement).scope();
            $scope.$apply(function () {
                $scope.editLineObj = {
                    visible: true,
                    line: line
                }
            });
        });

        return line;
    };

});