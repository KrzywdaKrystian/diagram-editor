function Interaction(){

    this.drag = function(element){
        element.on("pressmove",function(evt) {
            evt.currentTarget.x = evt.stageX-element.getWidth()/2;
            evt.currentTarget.y = evt.stageY-element.getHeight()/2;
            stage.update();
        });
    };

    this.edit = function(element) {
        element.on("click", function(evt) {
            var appElement = document.querySelector('[ng-app=app]');
            var $scope = angular.element(appElement).scope();
            $scope.$apply(function() {
                $scope.showEditPanel = {
                    visible: true,
                    element: element
                }
            });
            var edit = {
                alpha: element.alpha,
                x: element.x,
                y: element.y,
                w: element.getWidth(),
                h: element.getHeight()
            };
            console.log(element);
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