"use strict";
exports.__esModule = true;
exports.renderer = void 0;
var renderer = /** @class */ (function () {
    function renderer() {
        var canvas = document.getElementById('canvas');
        var context = this.canvas.getContext("2d");
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        this.canvas = canvas;
        this.context = context;
    }
    renderer.prototype.DrawCircle = function (x, y) {
        var radius = 5;
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
    };
    return renderer;
}());
exports.renderer = renderer;
