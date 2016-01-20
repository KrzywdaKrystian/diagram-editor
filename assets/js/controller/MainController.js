app.controller('MainController', function($scope, $rootScope, Diagram, Board, Line) {

    var board = Board.getBoard();
    $scope.alpha = 0;

    board.on("stagemousedown", function(evt) {
        if($scope.editPanelObj)
            $scope.editPanelObj.visible = false;

        if($scope.editLineObj)
            $scope.editLineObj.visible = false;

        if($scope.editElementObj)
            $scope.editElementObj.visible = false;

        $scope.editElementObj.properties = {};
        $rootScope.resizeMode = false;
    });

    $scope.$watch('editElementObj.properties.alpha', function(newValue) {
        if(newValue) {
            $scope.editElementObj.element.setAlpha(newValue);
            $scope.alpha = newValue;
        }
    });

    Diagram.setResize(true, board);

    $scope.fileForm = null;
    $scope.editPanelObj = {};
    $scope.editElementObj = {};
    $scope.styleEditPanel = {};
    $scope.color = '#000000';

    $scope.addElement = function(type) {
        $scope.canvasCursor = '';
        Diagram.addElement(type);
    };

    $scope.drawLine = function(e, type, solid) {
        $scope.canvasCursor = 'cursor-crosshair';
        $rootScope.drawwingLine = true;

        var dragging,
            xStart,
            yStart;
        var element = null;

        $('canvas').mousedown(function(e){
            xStart = e.pageX-160;
            yStart = e.pageY;
            dragging = true;
            if($rootScope.drawwingLine) {
                Board.addElement(Line(xStart, yStart, xStart, xStart));
                element = Board.getElement(Board.count()-1);
            }

        });
        $('canvas').mouseup(function(e){
            dragging = false;
            $rootScope.drawwingLine = false;
            $scope.canvasCursor = '';
            $('canvas').unbind('mousemove');
            $('canvas').unbind('mouseup');
            $('canvas').unbind('mousedown');
        }).mousemove(function(e){
            if(dragging && $rootScope.drawwingLine) {
                element.redraw(xStart, yStart, e.pageX-160, e.pageY);
            }
        });


    };

    $scope.loadDiagram = function () {
        document.getElementById('load-diagram').click();
    };

    $scope.saveDiagram = function () {
        Diagram.saveDiagram();
    };

    window.addEventListener("keypress", dealWithKeyboard, false);

    function dealWithKeyboard(e) {
        if(e.which == 0){
            $rootScope.drawwingLine = false;
            console.log('esc');
            $scope.canvasCursor = '';
            $scope.$apply();
        }
    }

});
