/**
 * TODO Frame
 * TODO Dashed Line
 * TODO save board
 * TODO load board
 * TODO List elements (settings: show/hide, delete, up/down)
 */
var app = angular.module('app', [
    'mm.foundation',
    'ngSanitize'
]).run(function(Board) {
    Board.create();
});
