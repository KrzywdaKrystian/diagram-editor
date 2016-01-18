/**
 * TODO EditPanel - obsługa
 * TODO EditPanel - jako dyrektywa
 * TODO ResizeMode - jako dyrektywa
 */
var app = angular.module('app', [
    'mm.foundation',
    'ngSanitize'
]).run(function(Board) {
    Board.create();
});
