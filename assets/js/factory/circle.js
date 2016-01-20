app.factory('Circle', function(Board, Interaction) {

    var self = this;

    this.drawCircle = function (x, y, w, h, circle) {
        if(circle.graphics)
            circle.graphics.clear();
        circle.x = x;
        circle.y = y;
        circle.graphics.beginFill(Interaction.getColor()).drawCircle(w/2, w/2, w/2);
        return circle
    };

    return function() {
        var circle = new createjs.Shape();
        circle = self.drawCircle(50, 50, 50, 50, circle);
        circle.redraw = function(x, y, w, h) {
            circle = self.drawCircle(x, y, w, h, circle);
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

        Interaction.drag(circle);
        Interaction.editPanel(circle);

        return circle;
    }
});