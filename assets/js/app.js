var stage = new createjs.Stage("board");
//config
stage.mouseMoveOutside = true;
stage.enableMouseOver(10);

//variables
var interaction = new Interaction();

angular.module('app', [
    'mm.foundation',
    'ngSanitize'
]);
