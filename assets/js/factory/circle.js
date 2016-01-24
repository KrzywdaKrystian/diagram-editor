app.factory('Circle', function(Board, Interaction) {

    var self = this;

    this.drawCircle = function (x, y, w, h, color, circle) {
        if(circle.graphics)
            circle.graphics.clear();
        circle.x = x;
        circle.y = y;
        circle.w = w;
        circle.graphics.beginFill(color).drawCircle(w/2, w/2, w/2);
        return circle
    };

    return function() {
        var circle = new createjs.Shape();
        circle = self.drawCircle(50, 50, 50, 50, Interaction.getColor(), circle);
        circle.elementName = 'Circle';
        circle.elementType = 'circle';

        circle.redraw = function(x, y, w, h, color) {
            circle = self.drawCircle(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : circle.graphics._fill.style, circle);
            Board.update();
        };

        circle.symmetrically = true;

        circle.getX = function(){
            return circle.x;
        };

        circle.getY = function(){
            return circle.y;
        };

        circle.getCenterX = function(){
            return circle.graphics.command.radius;
        };

        circle.getCenterY = function(){
            return circle.graphics.command.radius;
        };

        circle.getWidth = function(){
            return circle.graphics.command.radius*2;
        };

        circle.getHeight = function(){
            return circle.graphics.command.radius*2;
        };

        circle.setAlpha = function(x){
            circle.alpha = x;
            Board.update();
        };

        Interaction.drag(circle);
        Interaction.edit(circle);
        Interaction.editPanel(circle);

        return circle;
    }
});