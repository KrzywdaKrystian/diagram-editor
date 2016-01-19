app.factory('Rect', function(Board, Interaction) {

    var self = this;

    this.drawRect = function (x, y, w, h) {
        var rect = new createjs.Shape();
        rect.x = x;
        rect.y = y;
        rect.graphics.beginFill(Interaction.getColor()).drawRect(0, 0, w, h);
        return rect
    };

    return function() {

        var rect = null;
        rect = self.drawRect(50, 50, 50, 50);

        rect.redraw = function(x, y, w, h) {
            self.drawRect(x, y, w, h);
        };

        rect.getX = function(){
            return rect.x;
        };

        rect.getY = function(){
            return rect.y;
        };

        rect.getCenterX = function(){
            return rect.graphics.command.w/2;
        };

        rect.getCenterY = function(){
            return rect.graphics.command.h/2;
        };

        Interaction.drag(rect);
        Interaction.editPanel(rect);

        return rect;
    }
});