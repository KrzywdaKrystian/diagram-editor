app.controller('TextModalController', function ($scope, $modalInstance) {

    $scope.ok = function (text) {
        $modalInstance.close(text);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

}).factory('Text', function($modal, Board, Interaction){

    var text = null;

    return function() {

        var modalInstance = $modal.open({
            template: '<p>Text:</p>' +
            '<input type="text" ng-model="text" id="text"/>' +
            '<button class="button success" ng-click="ok(text)">Dodaj</button>' +
            '<button class="button secondary" ng-click="cancel()">Anuluj</button>',
            controller: 'TextModalController'
        });

        modalInstance.result.then(function (result) {
            var container = new createjs.Container();

            var text = new createjs.Text(result, "20px Arial", "#000000");
            text.textBaseline = "alphabetic";

            container.addChild(text);
            container.x = 50;
            container.y = 50;

            container.getX = function(){
                return circle.x;
            };

            container.getY = function(){
                return circle.y;
            };

            container.getCenterX = function(){
                return 1;
            };

            container.getCenterY = function(){
                return 1;
            };

            Interaction.drag(container);

            Board.addElement(container);

            createjs.Ticker.on("tick", handleTick);
            function handleTick(event) {
                event.remove();
            }

        });

    };

});