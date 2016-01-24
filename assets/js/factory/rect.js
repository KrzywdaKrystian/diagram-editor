app.factory('Rect', function(Board, Interaction) {

    var self = this;

    this.drawRect = function (x, y, w, h, color, rect) {
        if(rect.graphics){
            rect.graphics.clear();
        }
        rect.x = x;
        rect.y = y;
        rect.w = w;
        rect.h = h;
        rect.graphics.beginFill(color).drawRect(0, 0, w, h);
        return rect
    };

    return function() {
        var rect = new createjs.Shape();
        rect = self.drawRect(50, 50, 50, 50, Interaction.getColor(), rect);
        rect.elementName = 'Rectangle';
        rect.elementType = 'rect';

        rect.redraw = function(x, y, w, h, color) {
            rect = self.drawRect(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : rect.graphics._fill.style, rect);
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

        rect.setAlpha = function(x){
            rect.alpha = x;
            Board.update();
        };

        Interaction.drag(rect);
        Interaction.edit(rect);
        Interaction.editPanel(rect);

        return rect;
    }
});