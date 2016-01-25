app.factory('RoundRect', function(Board, Interaction) {

    var self = this;

    this.drawRoundRect = function (x, y, w, h, color, roundRect) {
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
        roundRect.w = w;
        roundRect.h = h;
        roundRect.graphics.beginFill(color).drawRoundRect(0, 0, w, h, radiusTL, radiusTR, radiusBR, radiusBL);
        return roundRect
    };

    return function(x, y, w, h, color, alpha, visible) {
        var roundRect = new createjs.Shape();
        roundRect = self.drawRoundRect(x ? x : 50, y ? y : 50, w ? w : 50, h ? h :50, color ? color: Interaction.getColor(), roundRect);
        roundRect.elementName = 'Rounded Rectangle';
        roundRect.elementType = 'RoundRect';

        roundRect.redraw = function(x, y, w, h, color) {
            roundRect = self.drawRoundRect(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : roundRect.graphics._fill.style, roundRect);
            Board.update();
        };

        roundRect.redrawRadius = function(radiusTL, radiusTR, radiusBR, radiusBL) {
            if(roundRect.h/2 >= radiusTL && roundRect.w/2 >= radiusTL)
                roundRect.graphics.command.radiusTL = radiusTL;

            if(roundRect.h/2 >= radiusTR && roundRect.w/2 >= radiusTR)
                roundRect.graphics.command.radiusTR = radiusTR;

            if(roundRect.h/2 >= radiusBR && roundRect.w/2 >= radiusBR)
                roundRect.graphics.command.radiusBR = radiusBR;

            if(roundRect.h/2 >= radiusBL && roundRect.w/2 >= radiusBL)
                roundRect.graphics.command.radiusBL = radiusBL;
            Board.update();
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

        roundRect.setAlpha = function(x){
            roundRect.alpha = x;
            Board.update();
        };

        roundRect.setVisible = function(visible){
            roundRect.visible = visible;
            Board.update();
        };

        roundRect.getColor = function() {
            return this.graphics._fill.style;
        };

        if(alpha) {
            roundRect.setAlpha(alpha);
        }

        if(visible) {
            roundRect.setVisible(visible === 'yes');
        }

        Interaction.drag(roundRect);
        Interaction.edit(roundRect);
        Interaction.editPanel(roundRect);

        return roundRect;
    }
});