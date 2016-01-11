app.controller('ResizeController', function($scope, $rootScope) {
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
            var width = null;
            var height = null;
            var left = null;
            var top = null;

            $('#resize-panel').addClass('draggable').parents().on('mousemove', function(e) {


                if(e.pageX-160 > 0 && $rootScope.resizeing) {
                    if(direction === 'w' && startX-e.pageX+startWidth > 20) {
                        width = startX-e.pageX+startWidth;
                        left = e.pageX-160;
                        $('.draggable').css({
                            width: width+'px',
                            left: left
                        });
                        $scope.showEditPanel.element.graphics.command.w = width;
                        $scope.showEditPanel.element.x = left;
                    }
                    else if(direction === 'e' && e.pageX-startX+startWidth > 20) {
                        width = e.pageX-startX+startWidth;
                        left = startX-startWidth-160;
                        $('.draggable').css({
                            width: e.pageX-startX+startWidth,
                            left: startX-startWidth-160
                        });
                        $scope.showEditPanel.element.graphics.command.w = width;
                        $scope.showEditPanel.element.x = left;
                    }
                    else if(direction === 'n' && startY-e.pageY+startHeight > 20) {
                        height = startY-e.pageY+startHeight;
                        top = e.pageY;
                        $('.draggable').css({
                            height: startY-e.pageY+startHeight,
                            top: e.pageY
                        });
                        $scope.showEditPanel.element.graphics.command.h = height;
                        $scope.showEditPanel.element.y = top;
                    }
                    else if(direction === 's' && e.pageY-startY+startHeight > 20) {
                        height = e.pageY-startY+startHeight;
                        top = startY-startHeight;
                        $('.draggable').css({
                            height: e.pageY-startY+startHeight,
                            top: startY-startHeight
                        });
                        $scope.showEditPanel.element.graphics.command.h = height;
                        $scope.showEditPanel.element.y = top;
                    }
                }
                $('.draggable').on('mouseup', function() {
                    $(this).removeClass('draggable');
                    $rootScope.resizeing = false;
                });
            });
            e.preventDefault();
        }).on('mouseup', function() {
            $('.draggable').removeClass('draggable');
        });
    });

});