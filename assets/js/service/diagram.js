app.service('Diagram', function(Board, $injector) {

    this.setResize = function(resize, stage){
        stage.canvas.width = window.innerWidth-217;
        stage.canvas.height = window.innerHeight;
        if(resize){
            window.addEventListener('resize', function(){
                stage.canvas.width = window.innerWidth-217;
                stage.canvas.height = window.innerHeight;
            }, false);
        }
    };

    this.saveDiagram = function () {
        var elements = Board.getBoardElements();
        console.log(elements);
        var data = [];
        angular.forEach(elements, function(value, key) {
            if(value.elementType === 'Line') {
                this.push({
                    alpha: value.alpha,
                    visible: value.visible ? 'yes' : 'no',
                    type: value.elementType,
                    xStart: value.xStart,
                    yStart: value.yStart,
                    xEnd: value.xEnd,
                    yEnd: value.yEnd,
                    dashed: value.dashed,
                    color: value.color,
                    arrowStart: value.arrowStart,
                    arrowEnd: value.arrowEnd
                });
            }
            else if(value.elementType === 'Text') {
                this.push({
                    alpha: value.alpha,
                    visible: value.visible ? 'yes' : 'no',
                    type: value.elementType,
                    x: value.getX(),
                    y: value.getY(),
                    color: value.getColor(),
                    text: value.text,
                    font: value.font
                });
            }
            else {
                this.push({
                    alpha: value.alpha,
                    visible: value.visible ? 'yes' : 'no',
                    type: value.elementType,
                    x: value.getX(),
                    y: value.getY(),
                    w: value.getWidth(),
                    h: value.getHeight(),
                    color: value.getColor()
                });
            }

            if(elements.length === key+1) {
                var filename = window.prompt("Filename:","download.json");

                if (typeof data === 'object') {
                    console.log(data);
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
            }
        }, data);
    };

    this.addElement = function (type, params) {
        try {
            if(params) {
                if(params.type === 'Line') {
                    Board.addElement($injector.get(type)(
                        params.xStart,
                        params.yStart,
                        params.xEnd,
                        params.yEnd,
                        params.dashed,
                        params.color,
                        params.alpha,
                        params.visible,
                        params.arrowStart,
                        params.arrowEnd
                    ));
                }
                else {
                    Board.addElement($injector.get(type)(
                        params.x,
                        params.y,
                        params.w,
                        params.h,
                        params.color,
                        params.alpha,
                        params.visible,
                        params.text ? params.text : null,
                        params.font ? params.font : null
                    ));
                }
            }
            else {
                Board.addElement($injector.get(type)());
            }
        }
        catch(err) {
            alert(err);
        }
    };
});