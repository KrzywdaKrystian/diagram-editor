app.factory('Ellipse', function(Board, Interaction) {

    return function() {
        var ellipse = new createjs.Shape();
        ellipse.x = 50;
        ellipse.y = 50;
        ellipse.graphics.beginFill(Interaction.getColor()).drawEllipse(0, 0, 50, 25);

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

        Interaction.drag(ellipse);
        Interaction.editPanel(ellipse);

        return ellipse;
    }
});