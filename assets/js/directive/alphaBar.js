app.directive('alphaBar', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            bindModel: '=ngModel',
            id: '@',
            defaultValue: '@'
        },
        template: '<div class="alpha-bar">'+
                    '<div class="value" data-drag-bar></div>' +
                    '<input type="hidden" ng-model="bindModel"/>'+
                  '</div>',
        link: function (scope, el) {
            var dataDragBar = el.find('div');
            var dragging = false;
            var parent = {
                width: null,
                offset: null
            };

            scope.$watch('id', function(newValue) {
                if(newValue) {
                    dataDragBar.css({
                        left: (parseFloat(scope.defaultValue)*100)+'%'
                    });
                }
            });

            $('[data-drag-bar]').mousedown(function(){
                dragging = $(this);
                parent.width = $(this).parent().width();
                parent.offset = $(this).parent().offset();
            });
            $(document).mouseup(function(e){
                dragging = false;
                parent = {
                    width: null,
                    offset: null
                };
            }).mousemove(function(e){
                if(dragging) {
                    var left;
                    if(e.pageX < parent.offset.left)
                        left = 0;
                    else if (e.pageX > parent.offset.left + parent.width)
                        left = parent.width;
                    else
                        left = e.pageX-parent.offset.left;
                    dragging.css({
                        left: left+'px'
                    });
                    scope.$apply(function() {
                        scope.bindModel = parseFloat(left/parent.width).toFixed(2);
                    });
                }
            })
        }
    };
});