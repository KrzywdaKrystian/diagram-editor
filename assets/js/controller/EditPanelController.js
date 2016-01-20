app.controller('EditPanelController', function($scope, $rootScope, Board, Line) {

    var board = Board.getBoard();


    $scope.addLine = function(){
        $rootScope.canvasCursor = 'cursor-crosshair';
        $rootScope.drawwingLine = true;

        var dragging = true;
        var element = null;

        var xStart = $scope.editPanelObj.element.getX() + $scope.editPanelObj.element.getCenterX();
        var yStart = $scope.editPanelObj.element.getY() + $scope.editPanelObj.element.getCenterX();

        if($rootScope.drawwingLine) {
            Board.addElement(Line(xStart, yStart, xStart, xStart));
            element = Board.getElement(Board.count()-1);
        }

        console.log('start');
        $('canvas').mousedown(function(evt) {
            dragging = false;
            $rootScope.drawwingLine = false;
            $('canvas').unbind('mousemove');
            $('canvas').unbind('mousedown');
        });

        $('canvas').mousemove(function(e){
            if(dragging && $rootScope.drawwingLine) {
                element.redraw(xStart, yStart, e.pageX-160, e.pageY);
            }
        });
    };

    $scope.resizeElement = function(){
        $scope.editPanelObj.visible = false;
        $rootScope.resizeMode = true;
        $rootScope.styleResizePanel = {
            left: $scope.editPanelObj.element.x+'px',
            top: $scope.editPanelObj.element.y+'px',
            width: $scope.editPanelObj.element.getWidth()+'px',
            height: $scope.editPanelObj.element.getHeight()+'px'
        };
    };

    $scope.deleteElement = function(){
        $scope.editPanelObj.visible = false;
        Board.removeElement($scope.editPanelObj.element);
    };

    $scope.$watch('editPanelObj.visible', function(newValue) {
        if(newValue) {
            $scope.styleEditPanel = {
                top: $scope.editPanelObj.element.getY()+'px',
                left: $scope.editPanelObj.element.getX()+$scope.editPanelObj.element.getWidth()+'px'
            }
        }
    });

});