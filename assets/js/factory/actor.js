app.factory('Actor', function(Board, Interaction) {

    return function() {
        var actor = new createjs.Shape();
        actor.x = 100;
        actor.y = 100;
        actor.w = 50;
        actor.h = 50;

        actor.graphics.setStrokeStyle(3);
        actor.graphics.beginStroke(color);
        actor.graphics.moveTo(0, 0);
        actor.graphics.lineTo(200, 200);
        actor.graphics.endStroke();

        actor.getX = function(){
            return actor.x;
        };

        actor.getY = function(){
            return actor.y;
        };

        actor.getCenterX = function(){
            return 1;
        };

        actor.getCenterY = function(){
            return 1;
        };

        actor.getWidth = function(){
            return 1;
        };

        actor.getHeight = function(){
            return 1;
        };

        Interaction.drag(actor);
        Interaction.editPanel(actor);

        return actor;
    }
});