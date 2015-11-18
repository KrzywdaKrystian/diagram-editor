var stage = new createjs.Stage("board");
//config
stage.mouseMoveOutside = true;

//variables
var diagramStructure = [];
var editPanel = new EditPanel();
var interaction = new Interaction();
var drawLine = false;
//var DrawArrow = new Arrow();

angular.module('app', [
    'mm.foundation',
    'ngSanitize'
]);
