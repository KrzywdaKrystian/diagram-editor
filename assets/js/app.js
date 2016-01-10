var stage = new createjs.Stage("board");
//config
stage.mouseMoveOutside = true;
stage.enableMouseOver(10);
var editpanel = false;

//variables
var interaction = new Interaction();

angular.module('app', [
    'mm.foundation',
    'ngSanitize'
]);
