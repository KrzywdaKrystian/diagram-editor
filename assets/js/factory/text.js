app.factory('Text', function($modal, Board, Interaction){

    var self = this;

    this.drawText = function (x, y, w, h, color, text) {
        text.x = x;
        text.y = y;
        text.color = color;
        text.textBaseline = "alphabetic";
        return text
    };

    this.prompt = function() {
        return window.prompt("Text:","");
    };

    return function(x, y, w, h, color, alpha, visible, value, font) {
        var text = new createjs.Text(value ? value : window.prompt("Text:",""), "20px Arial", "#000000");
        text = self.drawText(x ? x : 50, y ? y : 50, null, null, color ? color : Interaction.getColor(), text);
        text.elementName = 'Text';
        text.elementType = 'Text';

        text.redraw = function(x, y, w, h, color) {
            text = self.drawText(parseInt(x), parseInt(y), null, null, color ? color : text.color, text);
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

        text.setVisible = function(visible){
            text.visible = visible;
            Board.update();
        };

        text.getColor = function() {
            return this.color;
        };

        if(alpha) {
            text.setAlpha(alpha);
        }

        if(visible) {
            text.setVisible(visible === 'yes');
        }

        if(font) {
            console.log(font);
            text.setFontSize(font);
        }

        text.on("dblclick", function(evt) {
            text.text = window.prompt("Text:",text.text);
            Board.update();
        });

        Interaction.drag(text);
        Interaction.edit(text);
        Board.addElement(text);

    };

});