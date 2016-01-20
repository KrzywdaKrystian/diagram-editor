app.factory('Rect', function(Board, Interaction) {

    var self = this;

    this.drawRect = function (x, y, w, h, rect) {
        if(rect.graphics)
            rect.graphics.clear();
        rect.x = x;
        rect.y = y;
        rect.w = w;
        rect.h = h;
        rect.graphics.beginFill(Interaction.getColor()).drawRect(0, 0, w, h);
        return rect
    };

    return function() {
        var rect = new createjs.Shape();
        rect = self.drawRect(50, 50, 50, 50, rect);

        rect.redraw = function(x, y, w, h) {
            console.log('redraw');
            rect = self.drawRect(parseInt(x), parseInt(y), parseInt(w), parseInt(h), rect);
            Board.update();
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

        rect.getWidth = function(){
            return rect.graphics.command.w;
        };

        rect.getHeight = function(){
            return rect.graphics.command.h;
        };

        Interaction.drag(rect);
        Interaction.edit(rect);
        Interaction.editPanel(rect);

        return rect;
    }
});