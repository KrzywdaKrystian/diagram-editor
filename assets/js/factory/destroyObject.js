app.factory('DestroyObject', function(Board, Interaction) {

    var self = this;

    this.drawDestroyObject = function (x, y, w, h, color, destroyObject) {
        destroyObject.elementColor = color;
        if(destroyObject.graphics)
            destroyObject.graphics.clear();

        destroyObject.x = x;
        destroyObject.y = y;
        destroyObject.w = w;
        h = w;
        destroyObject.h = h;

        var stroke = h/25;
        destroyObject.graphics.setStrokeStyle(stroke);
        destroyObject.graphics.beginStroke(destroyObject.elementColor);
        destroyObject.graphics.moveTo(0, 0);
        destroyObject.graphics.lineTo(w, h);
        destroyObject.graphics.moveTo(w, 0);
        destroyObject.graphics.lineTo(0, h);
        destroyObject.graphics.endStroke();
        return destroyObject
    };

    return function(x, y, w, h, color, alpha, visible) {
        var destroyObject = new createjs.Shape();
        destroyObject.elementColor = color ? color : Interaction.getColor();
        destroyObject = self.drawDestroyObject(x ? x : 50, y ? y : 50, w ? w : 50, h ? h :50, destroyObject.elementColor, destroyObject);
        destroyObject.elementName = 'Destroy Object';
        destroyObject.elementType = 'DestroyObject';

        destroyObject.symmetrically = true;

        destroyObject.redraw = function(x, y, w, h, color) {
            destroyObject = self.drawDestroyObject(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : destroyObject.elementColor, destroyObject);
            Board.update();
        };

        destroyObject.getX = function(){
            return destroyObject.x;
        };

        destroyObject.getY = function(){
            return destroyObject.y;
        };

        destroyObject.getCenterX = function(){
            return destroyObject.w/2;
        };

        destroyObject.getCenterY = function(){
            return destroyObject.h/2;
        };

        destroyObject.getWidth = function(){
            return destroyObject.w;
        };

        destroyObject.getHeight = function(){
            return destroyObject.h;
        };

        destroyObject.setAlpha = function(x){
            destroyObject.alpha = x;
            Board.update();
        };

        destroyObject.setVisible = function(visible){
            destroyObject.visible = visible;
            Board.update();
        };

        destroyObject.getColor = function() {
            return this.elementColor;
        };

        if(alpha) {
            destroyObject.setAlpha(alpha);
        }

        if(visible) {
            destroyObject.setVisible(visible === 'yes');
        }

        Interaction.drag(destroyObject);
        Interaction.edit(destroyObject);
        Interaction.editPanel(destroyObject);

        return destroyObject;
    }
});