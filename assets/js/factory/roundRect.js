app.factory('RoundRect', function(Board, Interaction) {

    return function() {
        var roundRect = new createjs.Shape();
        roundRect.x = 50;
        roundRect.y = 50;
        roundRect.graphics.beginFill(Interaction.getColor()).drawRoundRect(0, 0, 50, 50, 15, 15, 15, 15);

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

        Interaction.drag(roundRect);
        Interaction.editPanel(roundRect);

        return roundRect;
    }
});