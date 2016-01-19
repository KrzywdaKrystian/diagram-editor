app.factory('Circle', function(Board, Interaction) {

    return function() {
        var circle = new createjs.Shape();
        circle.x = 50;
        circle.y = 50;
        circle.graphics.beginFill(Interaction.getColor()).drawCircle(25, 25, 25);

        circle.getX = function(){
            return circle.x;
        };

        circle.getY = function(){
            return circle.y;
        };

        circle.getCenterX = function(){
            return circle.graphics.command.radius;
        };

        circle.getCenterY = function(){
            return circle.graphics.command.radius;
        };

        circle.getWidth = function(){
            return circle.graphics.command.radius*2;
        };

        circle.getHeight = function(){
            return circle.graphics.command.radius*2;
        };

        Interaction.drag(circle);
        Interaction.editPanel(circle);

        return circle;
    }
});