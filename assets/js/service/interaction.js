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
            var edit = {};

            if(element.alpha)
                edit.alpha = element.alpha;
            if(element.x)
                edit.x = element.x;
            if(element.y)
                edit.y = element.y;
            if(element.w)
                edit.w = element.getWidth();
            if(element.h)
                edit.h = element.getHeight();

            var appElement = document.querySelector('[ng-app=app]');
            var $scope = angular.element(appElement).scope();
            $scope.$apply(function() {
                $scope.editElementObj = {
                    visible: true,
                    properties: edit,
                    element: element
                };
            });
        });
    };

    this.editPanel = function(element) {
        element.on("dblclick", function(evt) {
            var appElement = document.querySelector('[ng-app=app]');
            var $scope = angular.element(appElement).scope();
            $scope.$apply(function() {
                $scope.editPanelObj = {
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