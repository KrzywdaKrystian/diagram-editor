app.factory('Line', function(Board, Interaction) {

    var self = this;

    this.drawLine = function (xStart, yStart, xEnd, yEnd, arrowStart, arrowEnd, color, dashed, container ) {
        container.removeAllChildren();
        container.arrowStart = false;
        container.arrowEnd = false;

        //distance and angle
        var angle = self.angle({x: xStart, y: yStart}, {x: xEnd, y: yEnd});
        var distance = self.distance({x: xStart, y: yStart}, {x: xEnd, y: yEnd});

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
        if(dashed){
            var detlaX = xEnd-xStart;
            var detlaY = yEnd-yStart;
            var dashLength = 10;
            var dashes = parseInt(distance/dashLength);

            line.graphics.moveTo(0,0);
            var i = 0;
            var x = 0;
            var y = 0;
            while( i++ < dashes ){
                x += detlaX/dashes;
                y += detlaY/dashes;
                if(i%2 == 0) {
                    line.graphics.moveTo(x, y);
                }
                else {
                    line.graphics.lineTo(x, y);
                }
            }
            line.graphics.closePath();
        }
        else{
            line.graphics.moveTo(0,0).lineTo(xEnd-xStart, yEnd-yStart).closePath();
        }
        line.graphics.endStroke();
        container.addChild(line);

        //arrow
        var s = 10;
        var h = 10;
        //arrow Start
        if(arrowStart) {
            var arrowStartShape = new createjs.Shape();
            arrowStartShape = new createjs.Shape();
            arrowStartShape.graphics.beginFill(color);
            arrowStartShape.graphics.moveTo(0,0).lineTo(h,s).lineTo(h,-s).closePath();
            arrowStartShape.rotation = angle;
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
            arrowEndShape.rotation = angle;
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
        container.dashed = dashed;

        return container;
    };

    this.angle = function(p1, p2) {
        return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    };

    this.distance = function(start, end) {
        var deltaX = start.x - end.x;
        var deltaY = start.y - end.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };

    this.dashedLineTo = function( x1 , y1 , x2 , y2 , dashLen ){
        this.moveTo( x1 , y1 );

        var dX = x2 - x1;
        var dY = y2 - y1;
        var dashes = Math.floor(Math.sqrt( dX * dX + dY * dY ) / dashLen );
        var dashX = dX / dashes;
        var dashY = dY / dashes;

        var q = 0;
        while( q++ < dashes ){
            x1 += dashX;
            y1 += dashY;
            this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x1, y1);
        }
        this[q % 2 == 0 ? 'moveTo' : 'lineTo'](x2, y2);
        return this;
    };

    return function(xStart, yStart, xEnd, yEnd) {
        var line = new createjs.Container();
        //var line = new createjs.Shape();
        line = self.drawLine(xStart, yStart, xEnd, yEnd, false, false, Interaction.getColor(), false, line);

        line.redraw = function(x, y, w, h, color) {
            line = self.drawLine(x, y, w, h, false, false, color ? color : line.color, line.dashed, line);
            Board.update();
        };

        line.addStartArrow = function () {
            line = self.drawLine(parseInt(line.xStart), parseInt(line.yStart), parseInt(line.xEnd), parseInt(line.yEnd), line.arrowStart ? false : true, line.arrowEnd, line.color, line.dashed, line);
            Board.update();
        };

        line.addEndArrow = function () {
            line = self.drawLine(parseInt(line.xStart), parseInt(line.yStart), parseInt(line.xEnd), parseInt(line.yEnd), line.arrowStart, line.arrowEnd ? false : true, line.color, line.dashed, line);
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