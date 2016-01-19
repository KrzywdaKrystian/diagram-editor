app.service('Interaction', function(Board) {

    this.drag = function(element){
        element.on("pressmove",function(evt) {
            evt.currentTarget.x = evt.stageX-element.getCenterX();
            evt.currentTarget.y = evt.stageY-element.getCenterY();
            Board.update();
        });
    };

    this.edit = function(element) {
        element.on("click", function(evt) {

            var edit = {
                alpha: element.alpha,
                x: element.x,
                y: element.y,
                w: element.getWidth(),
                h: element.getHeight()
            };
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

});