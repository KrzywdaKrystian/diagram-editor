app.factory('Ellipse', function(Board, Interaction) {

    var self = this;

    this.drawEllipse = function (x, y, w, h, color, ellipse) {
        if(ellipse.graphics){
            ellipse.graphics.clear();
        }
        ellipse.x = x;
        ellipse.y = y;
        ellipse.w = w;
        ellipse.h = h;
        ellipse.graphics.beginFill(color).drawEllipse(0, 0, w, h);
        return ellipse;
    };

    return function() {
        var ellipse = new createjs.Shape();
        ellipse = self.drawEllipse(50, 50, 50, 25, Interaction.getColor(), ellipse);
        ellipse.elementName = 'Ellipse';
        ellipse.elementType = 'ellipse';

        ellipse.redraw = function(x, y, w, h, color) {
            ellipse = self.drawEllipse(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : ellipse.graphics._fill.style, ellipse);
            Board.update();
        };

        ellipse.getX = function(){
            return ellipse.x;
        };

        ellipse.getY = function(){
            return ellipse.y;
        };

        ellipse.getCenterX = function(){
            return ellipse.graphics.command.w/2;
        };

        ellipse.getCenterY = function(){
            return ellipse.graphics.command.h/2;
        };

        ellipse.getWidth = function(){
            return ellipse.graphics.command.w;
        };

        ellipse.getHeight = function(){
            return ellipse.graphics.command.h;
        };

        ellipse.setAlpha = function(x){
            ellipse.alpha = x;
            Board.update();
        };

        Interaction.drag(ellipse);
        Interaction.edit(ellipse);
        Interaction.editPanel(ellipse);

        return ellipse;
    }
});