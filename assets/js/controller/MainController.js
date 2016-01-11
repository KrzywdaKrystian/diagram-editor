app.controller('MainController', function($scope, $rootScope) {

    $scope.list = [];
    $scope.fileForm = null;
    $scope.showEditPanel = {};
    $scope.styleEditPanel = {};
    $scope.color = '#000000';

    $scope.$watch('showEditPanel.visible', function(newValue, oldValue) {
        console.log(newValue);
        if(newValue) {
            $scope.styleEditPanel = {
                top: $scope.showEditPanel.element.getY()+'px',
                left: $scope.showEditPanel.element.getX()+$scope.showEditPanel.element.getWidth()+'px'
            }
        }
    });

    stage.on("stagemousedown", function(evt) {
        $scope.showEditPanel.visible = false;
        $rootScope.resizeMode = false;
    });

    var diagram = new Diagram();
    diagram.setResize(true);

    $scope.addElement = function(type) {

        try {
            var element = new window[type]();
            element.init();
        }
        catch(err) {
            alert(err);
        }

    };

    $scope.loadDiagram = function () {
        document.getElementById('load-diagram').click();
    };

    $scope.saveDiagram = function (filename) {
        //pozmieniac
        console.log(stage.children);
        /*data = diagramStructure;

        if (!filename) {
            filename = 'download.json';
        }

        if (typeof data === 'object') {
            data = JSON.stringify(data, undefined, 2);
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a');

        a.download = filename;
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window,
            0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);*/
    };


    $scope.ClickOnCanvas = function(){

    };

});
