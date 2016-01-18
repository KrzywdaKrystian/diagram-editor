app.factory('Circle', function(Board, Interaction) {

    return function() {
        var circle = new createjs.Shape();
        circle.x = 100;
        circle.y = 100;
        circle.w = 50;
        circle.h = 50;
        circle.graphics.beginFill("red").drawCircle(0, 0, 25);

        circle.getX = function(){
            return circle.x;
        };

        circle.getY = function(){
            return circle.y;
        };

        circle.getWidth = function(){
            return 1;
        };

        circle.getHeight = function(){
            return 1;
        };

        Interaction.drag(circle);
        Interaction.editPanel(circle);

        return circle;
    }
});