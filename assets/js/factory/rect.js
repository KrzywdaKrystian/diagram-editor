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

    return function(x, y, w, h, color, alpha, visible) {
        var rect = new createjs.Shape();
        rect = self.drawRect(x ? x : 50, y ? y : 50, w ? w : 50, h ? h :50, color ? color: Interaction.getColor(), rect);
        rect.elementName = 'Rectangle';
        rect.elementType = 'Rect';

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

        rect.setVisible = function(visible){
            rect.visible = visible;
            Board.update();
        };

        rect.getColor = function() {
            return this.graphics._fill.style;
        };

        if(alpha) {
            rect.setAlpha(alpha);
        }

        if(visible) {
            rect.setVisible(visible === 'yes');
        }

        Interaction.drag(rect);
        Interaction.edit(rect);
        Interaction.editPanel(rect);

        return rect;
    }
});