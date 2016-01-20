app.controller('ResizeController', function($scope, $rootScope, Board) {
    var direction = null;
    var startX = null;
    var startY = null;
    var startWidth = null;
    var startHeight = null;

    $scope.Resize = function(event, dragDirection) {
        direction = dragDirection;
    };

    $(document).ready(function(){
        $(document).on('mousedown', '.dot', function(e) {
            startX = e.pageX;
            startY = e.pageY;
            startWidth = $('#resize-panel').width();
            startHeight = $('#resize-panel').height();
            $rootScope.resizeing = true;
            var width = startWidth;
            var height = startHeight;
            var left = startX;
            var top = startY;

            $('#resize-panel').addClass('draggable').parents().on('mousemove', function(e) {


                if(e.pageX-160 > 0 && $rootScope.resizeing) {
                    if(direction === 'w' && startX-e.pageX+startWidth > 20) {
                        width = startX-e.pageX+startWidth;
                        left = e.pageX-160;
                        $('.draggable').css({
                            width: width+'px',
                            left: left
                        });
                        if($scope.editPanelObj.element.symmetrically) {
                            height = width;
                            $('.draggable').css({
                                height: height+'px'
                            });
                            $scope.editPanelObj.element.redraw(left, $scope.editPanelObj.element.y, width, height);
                        }
                        else {
                            $scope.editPanelObj.element.redraw(left, $scope.editPanelObj.element.y, width, $scope.editPanelObj.element.getHeight());
                        }
                    }
                    else if(direction === 'e' && e.pageX-startX+startWidth > 20) {
                        width = e.pageX-startX+startWidth;
                        left = startX-startWidth-160;
                        $('.draggable').css({
                            width: width+'px',
                            left: left
                        });
                        if($scope.editPanelObj.element.symmetrically) {
                            height = width;
                            $('.draggable').css({
                                height: height+'px'
                            });
                            $scope.editPanelObj.element.redraw(left, $scope.editPanelObj.element.y, width, height);
                        }
                        else {
                            $scope.editPanelObj.element.redraw(left, $scope.editPanelObj.element.y, width, $scope.editPanelObj.element.getHeight());
                        }
                    }
                    else if(direction === 'n' && startY-e.pageY+startHeight > 20) {
                        height = startY-e.pageY+startHeight;
                        top = e.pageY;
                        $('.draggable').css({
                            height: height,
                            top: top
                        });
                        if($scope.editPanelObj.element.symmetrically) {
                            width = height;
                            $('.draggable').css({
                                width: width+'px'
                            });
                            $scope.editPanelObj.element.redraw($scope.editPanelObj.element.x, top, width, height);
                        }
                        else {
                            $scope.editPanelObj.element.redraw($scope.editPanelObj.element.x, top, $scope.editPanelObj.element.getWidth(), height);
                        }
                    }
                    else if(direction === 's' && e.pageY-startY+startHeight > 20) {
                        height = e.pageY-startY+startHeight;
                        top = startY-startHeight;
                        $('.draggable').css({
                            height: height,
                            top: top
                        });
                        if($scope.editPanelObj.element.symmetrically) {
                            width = height;
                            $('.draggable').css({
                                width: width+'px'
                            });
                            $scope.editPanelObj.element.redraw($scope.editPanelObj.element.x, top, width, height);
                        }
                        else {
                            $scope.editPanelObj.element.redraw($scope.editPanelObj.element.x, top, $scope.editPanelObj.element.getWidth(), height);
                        }
                    }
                    Board.update();
                }
            });
            e.preventDefault();
        }).on('mouseup', function() {
            $rootScope.resizeing = false;
            $('.draggable').removeClass('draggable');
            $('draggable').parents().unbind( "mousemove" );
            direction = null;
        });
    });

});