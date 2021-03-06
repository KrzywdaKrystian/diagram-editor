//pozmieniac
angular.module('app').directive('validfile', function validFile($http, Board, Diagram) {

    var validFormats = ['json'];
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            ctrl.$validators.validFile = function() {
                elem.on('change', function (changeEvent) {

                    var value = elem.val();
                    var ext = value.substring(value.lastIndexOf('.') + 1).toLowerCase();

                    if(!validFormats.indexOf(ext)){
                        //api html5
                        var reader = new FileReader();
                        reader.onload = function (loadEvent) {

                            $http.get(loadEvent.target.result).success(function(response) {
                                return response.data;
                            }).success(function (data) {
                                Board.removeAllElements();
                                angular.forEach(data, function(value, key) {
                                    console.log(value);
                                    Diagram.addElement(value.type, value);
                                });
                                console.log(Board.getBoardElements());

                            }).error(function () {
                                alert('Wystąpił błąd')
                            });
                        };
                        reader.readAsDataURL(changeEvent.target.files[0]);


                    }
                    else{
                        alert('Plik musi być w formacie JSON');
                        elem.val(null);
                    }
                });
            };
        }
    };
});