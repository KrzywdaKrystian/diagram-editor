app.factory('RoundRect', function(Board, Interaction) {

    var self = this;

    this.drawRoundRect = function (x, y, w, h, roundRect) {
        var radiusTL = 15,
            radiusTR = 15,
            radiusBR = 15,
            radiusBL = 15;
        if(roundRect.graphics) {
            if(roundRect.graphics.command) {
                radiusTL = roundRect.graphics.command.radiusTL;
                radiusTR = roundRect.graphics.command.radiusTR;
                radiusBR = roundRect.graphics.command.radiusBR;
                radiusBL = roundRect.graphics.command.radiusBL;
            }
            roundRect.graphics.clear();
        }
        roundRect.x = x;
        roundRect.y = y;
        roundRect.graphics.beginFill(Interaction.getColor()).drawRoundRect(0, 0, w, h, radiusTL, radiusTR, radiusBR, radiusBL);
        return roundRect
    };

    return function() {
        var roundRect = new createjs.Shape();
        roundRect = self.drawRoundRect(50, 50, 50, 50, roundRect);

        roundRect.redraw = function(x, y, w, h) {
            roundRect = self.drawRoundRect(x, y, w, h, roundRect);
        };

        roundRect.getX = function(){
            return roundRect.x;
        };

        roundRect.getY = function(){
            return roundRect.y;
        };

        roundRect.getCenterX = function(){
            return roundRect.graphics.command.w/2;
        };

        roundRect.getCenterY = function(){
            return roundRect.graphics.command.h/2;
        };

        roundRect.getWidth = function(){
            return roundRect.graphics.command.w;
        };

        roundRect.getHeight = function(){
            return roundRect.graphics.command.h;
        };

        Interaction.drag(roundRect);
        Interaction.editPanel(roundRect);

        return roundRect;
    }
});