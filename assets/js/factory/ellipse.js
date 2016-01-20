app.factory('Ellipse', function(Board, Interaction) {

    var self = this;

    this.drawEllipse = function (x, y, w, h, ellipse) {
        if(ellipse.graphics)
            ellipse.graphics.clear();
        ellipse.x = x;
        ellipse.y = y;
        ellipse.graphics.beginFill(Interaction.getColor()).drawEllipse(0, 0, w, h);
        return ellipse;
    };

    return function() {
        var ellipse = new createjs.Shape();
        ellipse = self.drawEllipse(50, 50, 50, 25, ellipse);

        ellipse.redraw = function(x, y, w, h) {
            ellipse = self.drawEllipse(x, y, w, h, ellipse);
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

        Interaction.drag(ellipse);
        Interaction.editPanel(ellipse);

        return ellipse;
    }
});