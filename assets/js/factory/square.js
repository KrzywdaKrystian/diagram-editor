app.factory('Square', function(Board, Interaction) {

    return function() {
        var rect = new createjs.Shape();
        rect.x = 100;
        rect.y = 100;
        rect.w = 50;
        rect.h = 50;
        var color = Interaction.getColor();
        rect.graphics.beginFill(color).setStrokeStyle(0).beginStroke("rgba(0,0,0,0)").drawRect(0, 0, rect.w, rect.h);

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