app.factory('Text', function($modal, Board, Interaction){

    var self = this;

    this.drawText = function (x, y, w, h, color, text) {
        text.x = x;
        text.y = y;
        text.color = color;
        text.textBaseline = "alphabetic";
        return text
    };

    this.prompt = function(textElement) {
        return window.prompt("Text:","");
    };

    return function() {
        var text = new createjs.Text(window.prompt("Text:",""), "20px Arial", "#000000");
        text = self.drawText(50, 50, null, null, Interaction.getColor(), text);

        text.redraw = function(x, y, w, h, color) {
            text = self.drawText(x, y, null, null, color ? color : text.color, text);
            Board.update();
        };

        text.getX = function(){
            return text.x;
        };

        text.getY = function(){
            return text.y;
        };

        text.getCenterX = function(){
            return 1;
        };

        text.getCenterY = function(){
            return 1;
        };

        text.getWidth = function(){
            return 1;
        };

        text.getHeight = function(){
            return 1;
        };

        text.editText = function(text) {
            text.text = self.prompt(text);
            Board.update();
        };

        text.setFontSize = function(fontSize) {
            text.font = fontSize;
            Board.update();
        };

        text.setAlpha = function(x){
            text.alpha = x;
            Board.update();
        };

        text.on("dblclick", function(evt) {
            text.text = window.prompt("Text:",text.text);
            Board.update();
        });

        Interaction.drag(text);
        Interaction.edit(text);
        Board.addElement(text);

    };

});