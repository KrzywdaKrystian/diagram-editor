/**
 * TODO Edit - obsługa paska Alpha
 * TODO Edit - obsługa koloru elementu
 * TODO Edit - obsługa wszystkich elementów
 * TODO EditPanel - obsługa kreski
 * TODO Linie pomocnicze
 */
var app = angular.module('app', [
    'mm.foundation',
    'ngSanitize'
]).run(function(Board) {
    Board.create();
});
