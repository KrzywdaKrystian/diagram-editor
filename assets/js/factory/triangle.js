app.factory("Triangle", function(Board, Interaction) {

    var self = this;

    this.drawTriangle = function (left, top, width, height, triangle) {
        if(triangle.graphics)
            triangle.graphics.clear();

        triangle.x = left;
        triangle.y = top;
        triangle.w = width;
        triangle.h = height;

        var s = width,
            h = height,
            x = width/2,
            y = 0;
        
        triangle.graphics.beginFill(Interaction.getColor());
        triangle.graphics.moveTo(x,y).lineTo(x+s/2,y+h).lineTo(x-s/2,y+h).closePath();
        return triangle
    };

    return function() {
        var triangle = new createjs.Shape();
        triangle = self.drawTriangle(50, 50, 50, 50, triangle);
        triangle.redraw = function(x, y, w, h) {
            triangle = self.drawTriangle(x, y, w, h, triangle);
        };

        triangle.getX = function(){
            return triangle.x;
        };

        triangle.getY = function(){
            return triangle.y;
        };

        triangle.getCenterX = function(){
            return triangle.w/2;
        };

        triangle.getCenterY = function(){
            return triangle.h/2;
        };

        triangle.getWidth = function(){
            return triangle.w;
        };

        triangle.getHeight = function(){
            return triangle.h;
        };

        Interaction.drag(triangle);
        Interaction.editPanel(triangle);

        return triangle;
    };

});