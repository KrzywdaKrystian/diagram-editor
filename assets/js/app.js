/**
 * TODO
 * 1. diagram.js - generyczne Tworzenie elementów w addElement
 * 2. EditPanel - obsługa
 * 3. EditPanel - jako dyrektywa
 * 4. ResizeMode - jako dyrektywa
 */
var app = angular.module('app', [
    'mm.foundation',
    'ngSanitize'
]).run(function(Board) {
    Board.create();
});
