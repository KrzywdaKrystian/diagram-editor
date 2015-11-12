angular.module('app').controller('MainController', function($scope) {

    $scope.list = [];

    $scope.addElement = function(type) {

        var element = new DE_Activation();
        element.init();

    };

    $scope.saveToPc = function (filename) {

        data = diagramStructure;

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
        a.dispatchEvent(e);
    };

});
