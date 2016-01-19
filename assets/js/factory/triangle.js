app.factory("Triangle", function(Board, Interaction) {

    return function() {
        var triangle = new createjs.Shape();
        triangle.x = 50;
        triangle.y = 50;
        triangle.s = 50;
        triangle.h = 50;

        var s = triangle.s,
            h = triangle.h,
            x = triangle.x/2,
            y = 0;

        triangle.graphics.beginFill(Interaction.getColor());
        triangle.graphics.moveTo(x,y).lineTo(x+s/2,y+h).lineTo(x-s/2,y+h).closePath();

        triangle.getX = function(){
            return triangle.x;
        };

        triangle.getY = function(){
            return triangle.y;
        };

        triangle.getWidth = function(){
            return triangle.s;
        };

        triangle.getHeight = function(){
            return triangle.h;
        };

        Interaction.drag(triangle);
        Interaction.editPanel(triangle);

        return triangle;
    };

});