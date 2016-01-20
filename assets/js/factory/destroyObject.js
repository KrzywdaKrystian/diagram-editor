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

    return function() {
        var destroyObject = new createjs.Shape();
        destroyObject.elementColor = Interaction.getColor();
        destroyObject = self.drawDestroyObject(50, 50, 50, 50, destroyObject.elementColor, destroyObject);

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

        Interaction.drag(destroyObject);
        Interaction.edit(destroyObject);
        Interaction.editPanel(destroyObject);

        return destroyObject;
    }
});