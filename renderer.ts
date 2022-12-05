class renderer {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor() {
    let canvas = document.getElementById('canvas') as
                 HTMLCanvasElement;
    let context = this.canvas.getContext("2d");
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 1;

    this.canvas = canvas;
    this.context = context;
  }

  DrawCircle(x: number, y: number) {
    const radius = 5;
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, 2*Math.PI);
    this.context.stroke();
  } 
}

export { renderer };