/**
 * TODO Frame
 * TODO EditPanel - obsługa kreski
 * TODO Linie pomocnicze
 * TODO Warstwy
 */
var app = angular.module('app', [
    'mm.foundation',
    'ngSanitize'
]).run(function(Board) {
    Board.create();
});
