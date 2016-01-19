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