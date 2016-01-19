app.factory('Rect', function(Board, Interaction) {

    return function() {
        var rect = new createjs.Shape();
        rect.x = 50;
        rect.y = 50;
        rect.graphics.beginFill(Interaction.getColor()).drawRect(0, 0, 50, 50);

        rect.getX = function(){
            return rect.x;
        };

        rect.getY = function(){
            return rect.y;
        };

        rect.getWidth = function(){
            return rect.graphics.command.w;
        };

        rect.getHeight = function(){
            return rect.graphics.command.h;
        };

        Interaction.drag(rect);
        Interaction.editPanel(rect);

        return rect;
    }
});