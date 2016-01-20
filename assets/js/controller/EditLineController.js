app.controller('EditLineController', function($scope, $rootScope, Board) {

    $scope.deleteElement = function(){
        $scope.editLineObj.visible = false;
        Board.removeElement($scope.editLineObj.line);
    };

    $scope.$watch('editLineObj.visible', function(newValue) {
        if(newValue) {

            var centerY = 0;
            var centerX = 0;

            if($scope.editLineObj.line.xStart < $scope.editLineObj.line.xEnd) {
                centerX = ($scope.editLineObj.line.xStart + $scope.editLineObj.line.xEnd)/2
            }
            else {
                centerX = ($scope.editLineObj.line.xEnd + $scope.editLineObj.line.xStart)/2
            }

            if($scope.editLineObj.line.yStart < $scope.editLineObj.line.yEnd) {
                centerY = ($scope.editLineObj.line.yStart + $scope.editLineObj.line.yEnd)/2
            }
            else {
                centerY = ($scope.editLineObj.line.yEnd + $scope.editLineObj.line.yStart)/2
            }

            $scope.styleEditLine = {
                top: centerY+'px',
                left: centerX+'px'
            };
        }
    });
});