app.factory('Line', function(Board, Interaction) {

    var self = this;

    this.drawLine = function (xStart, yStart, xEnd, yEnd, arrowStart, arrowEnd, color, line) {
        if(line.graphics)
            line.graphics.clear();

        line.x = 0;
        line.y = 0;
        line.xStart = xStart;
        line.yStart = yStart;
        line.xEnd = xEnd;
        line.yEnd = yEnd;
        line.color = color;

        line.graphics.setStrokeStyle(2);
        line.graphics.beginStroke(color);
        line.graphics.moveTo(xStart,yStart).lineTo(xEnd, yEnd).closePath();
        line.graphics.endStroke();
        return line
    };

    return function(xStart, yStart, xEnd, yEnd) {
        var line = new createjs.Shape();
        line = self.drawLine(xStart, yStart, xEnd, yEnd, false, false, Interaction.getColor(), line);

        line.redraw = function(x, y, w, h, color) {
            line = self.drawLine(x, y, w, h, false, false, color ? color : line.color, line);
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