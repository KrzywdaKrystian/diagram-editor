app.factory('Actor', function(Board, Interaction) {

    var self = this;

    this.drawActor = function (x, y, w, h, actor) {
        if(actor.graphics)
            actor.graphics.clear();

        actor.x = x;
        actor.y = y;
        actor.w = w;
        actor.h = h;

        var stroke = h/25;
        actor.graphics.setStrokeStyle(stroke);
        actor.graphics.beginStroke(Interaction.getColor());
        actor.graphics.drawCircle(w/2, h/4, w/4);
        actor.graphics.moveTo(w/2, h/2);
        actor.graphics.lineTo(w/2, h*5/6);
        actor.graphics.lineTo(w/3, h);
        actor.graphics.moveTo(w/2, h*5/6);
        actor.graphics.lineTo(w-w/3, h);
        actor.graphics.moveTo(w/4, h/2+stroke);
        actor.graphics.lineTo(w*3/4, h/2+stroke);
        actor.graphics.endStroke();
        return actor
    };

    return function() {
        var actor = new createjs.Shape();
        actor = self.drawActor(50, 50, 50, 50, actor);

        actor.symmetrically = true;

        actor.redraw = function(x, y, w, h) {
            actor = self.drawActor(x, y, w, h, actor);
        };

        actor.getX = function(){
            return actor.x;
        };

        actor.getY = function(){
            return actor.y;
        };

        actor.getCenterX = function(){
            return actor.w/2;
        };

        actor.getCenterY = function(){
            return actor.h/2;
        };

        actor.getWidth = function(){
            return actor.w;
        };

        actor.getHeight = function(){
            return actor.h;
        };

        Interaction.drag(actor);
        Interaction.editPanel(actor);

        return actor;
    }
});