function Interaction(){

    this.drag = function(element, index){

        element.on("pressmove",function(evt) {
            evt.currentTarget.x = evt.stageX-element.getWidth()/2;
            evt.currentTarget.y = evt.stageY-element.getHeight()/2;
            stage.update();
        });
    };

    this.editPanel = function(element) {
        element.on("dblclick", function(evt) {
            console.log('dblclick');
            editpanel = true;
        });
    }
}