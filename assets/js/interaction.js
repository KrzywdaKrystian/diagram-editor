function Interaction(){

    this.drag = function(element, index){

        element.on("pressmove",function(evt) {
            evt.currentTarget.x = evt.stageX;
            evt.currentTarget.y = evt.stageY;
            diagramStructure[index].x = evt.currentTarget.x;
            diagramStructure[index].y = evt.currentTarget.y;
            stage.update();
        });
    };

    this.editPanel = function(element) {
        element.on("click", function(evt) {
            editPanel.init(element, evt.currentTarget.x, evt.currentTarget.y);
        });
    }
}