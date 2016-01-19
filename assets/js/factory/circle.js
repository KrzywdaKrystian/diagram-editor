app.factory('Circle', function(Board, Interaction) {

    return function() {
        var circle = new createjs.Shape();
        circle.x = 50;
        circle.y = 50;
        circle.graphics.beginFill(Interaction.getColor()).drawCircle(25, 25, 25);

        circle.getX = function(){
            return circle.x;
        };

        circle.getY = function(){
            return circle.y;
        };

        circle.getWidth = function(){
            return circle.graphics.command.radius*2;
        };

        circle.getHeight = function(){
            return circle.graphics.command.radius*2;
        };

        Interaction.drag(circle);
        Interaction.editPanel(circle);

        circle = new createjs.Text("Hello World", "20px Arial", "#000000");
        circle.textBaseline = "alphabetic";
        console.log(circle);

        return circle;
    }
});