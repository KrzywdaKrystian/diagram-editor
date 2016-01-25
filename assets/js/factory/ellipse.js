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

    return function(x, y, w, h, color, alpha, visible) {
        var ellipse = new createjs.Shape();
        ellipse = self.drawEllipse(x ? x : 50, y ? y : 50, w ? w : 50, h ? h :25, color ? color: Interaction.getColor(), ellipse);
        ellipse.elementName = 'Ellipse';
        ellipse.elementType = 'Ellipse';

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

        ellipse.setVisible = function(visible){
            ellipse.visible = visible;
            Board.update();
        };

        ellipse.getColor = function() {
            return this.graphics._fill.style;
        };

        if(alpha) {
            ellipse.setAlpha(alpha);
        }

        if(visible) {
            ellipse.setVisible(visible === 'yes');
        }

        Interaction.drag(ellipse);
        Interaction.edit(ellipse);
        Interaction.editPanel(ellipse);

        return ellipse;
    }
});