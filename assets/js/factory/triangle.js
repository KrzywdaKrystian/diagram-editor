app.factory("Triangle", function(Board, Interaction) {

    var self = this;

    this.drawTriangle = function (left, top, width, height, color, triangle) {
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
        
        triangle.graphics.beginFill(color);
        triangle.graphics.moveTo(x,y).lineTo(x+s/2,y+h).lineTo(x-s/2,y+h).closePath();
        return triangle
    };

    return function(x, y, w, h, color, alpha, visible) {
        var triangle = new createjs.Shape();
        triangle = self.drawTriangle(x ? x : 50, y ? y : 50, w ? w : 50, h ? h :50, color ? color: Interaction.getColor(), triangle);
        triangle.elementName = 'Triangle';
        triangle.elementType = 'Triangle';

        triangle.redraw = function(x, y, w, h, color) {
            triangle = self.drawTriangle(parseInt(x), parseInt(y), parseInt(w), parseInt(h), color ? color : triangle.graphics._fill.style, triangle);
            Board.update();
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

        triangle.setAlpha = function(x){
            triangle.alpha = x;
            Board.update();
        };

        triangle.setVisible = function(visible){
            triangle.visible = visible;
            Board.update();
        };

        triangle.getColor = function() {
            return this.graphics._fill.style;
        };

        if(alpha) {
            triangle.setAlpha(alpha);
        }

        if(visible) {
            triangle.setVisible(visible === 'yes');
        }

        Interaction.drag(triangle);
        Interaction.edit(triangle);
        Interaction.editPanel(triangle);

        return triangle;
    };

});