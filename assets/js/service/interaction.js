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
            console.log('edit');

            if(element.alpha)
                edit.alpha = element.alpha;

            if(element.x)
                edit.x = element.x;

            if(element.y)
                edit.y = element.y;

            if(element.w)
                edit.w = element.getWidth();

            if(element.h && !element.symmetrically)
                edit.h = element.getHeight();

            if(element.graphics && element.graphics._fill)
                edit.color = element.graphics._fill;

            else if(element.color)
                edit.color = element.color;

            if(element.graphics && element.graphics.command && element.graphics.command.radiusTL)
                edit.radiusTL = element.graphics.command.radiusTL;

            if(element.graphics && element.graphics.command && element.graphics.command.radiusTR)
                edit.radiusTR = element.graphics.command.radiusTR;

            if(element.graphics && element.graphics.command && element.graphics.command.radiusBR)
                edit.radiusBR = element.graphics.command.radiusBR;

            if(element.graphics && element.graphics.command && element.graphics.command.radiusBL)
                edit.radiusBL = element.graphics.command.radiusBL;

            if(element.font)
                edit.font = element.font;

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