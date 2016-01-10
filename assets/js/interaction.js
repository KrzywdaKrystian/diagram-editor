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
            var appElement = document.querySelector('[ng-app=app]');
            var $scope = angular.element(appElement).scope();
            $scope.$apply(function() {
                $scope.showEditPanel = {
                    visible: true,
                    element: element
                }
            });
        });
    };

    this.getColor = function(){
        var appElement = document.querySelector('[ng-app=app]');
        var $scope = angular.element(appElement).scope();
        return $scope.color;
    };
}