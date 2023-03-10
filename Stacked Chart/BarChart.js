class BarChart {
  constructor(_height, _width, _posX, _posY, _numTick, _data) {
    this.height = _height;
    this.width = _width;
    this.posX = _posX;
    this.posY = _posY;
    this.numTick = _numTick;
    this.data = _data;

    this.margin = 20;
    this.gap = 5;
    this.maxData = Math.max(...this.data.map((o) => o.Total));

    this.bars = this.makeBars(this.data);

    this.tickLength = 5;
    this.numGap = this.maxData / this.numTick;
    this.tickGap = this.height / this.numTick;

    console.log(this.bars);
  }

  render() {
    push();
    // Graph Lines
    translate(this.posX, this.posY);
    this.drawHLine();
    this.drawWLine();
    // Bar Charts
    this.drawBarChart();
    // Ticks and Labels
    this.drawTicksAndLabels();

    pop();
  }

  makeBars() {
    let bars = [];

    let length = Object.values(this.data).length;

    for (let x = 0; x < length; x++) {
      let bar = [];
      bar.push(Object.values(this.data)[x].XboxSeriesX);
      bar.push(Object.values(this.data)[x].Playstation_5);
      bar.push(Object.values(this.data)[x].Nintendo_Switch);

      bars.push(bar);
    }

    return bars;
  }

  drawHLine() {
    noFill();
    stroke(0);
    line(0, 0, 0, -this.height);
  }

  drawWLine() {
    noFill();
    stroke(0);
    line(0, 0, this.width * this.data.length - this.margin, 0);
  }

  scaler(_value) {
    return map(_value, 0, this.maxData, 0, this.height);
  }

  drawBarChart() {
    let blockWidth =
      this.width -
      this.margin -
      ((this.data.length - 1) * this.gap) / this.data.length;
    let masterGap = blockWidth + this.gap;
    let colourAngle = 100 / 3;

    for (let x = 0; x < this.data.length; x++) {
      push();
      translate(this.margin + x * masterGap, 0);
      let yMod = 0;
      noStroke();
      // stroke(0)
      for (let y = 0; y < this.bars[x].length; y++) {
        fill(240, 43, colourAngle * y + 50);
        rect(0, -yMod, blockWidth, this.scaler(-this.bars[x][y]));
        yMod += this.scaler(this.bars[x][y]);
      }
    // rect(0, 0, blockWidth, this.scaler(-this.data[x].Playstation_5));
    // console.log(this.data[x].Total);
    rotate(150);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(16);
    text(this.data[x].Store, -25, 45);
    pop();
    }
  }

  drawTicksAndLabels() {
    for (let x = 0; x < this.numTick + 1; x++) {
      // Ticks
      line(0, x * -this.tickGap, -this.tickLength, -x * this.tickGap);
      // Labels
      fill(0);
      push();
      noStroke();
      textSize(16);
      textAlign(RIGHT, CENTER);
      text((x * this.numGap).toFixed(0), -10, -x * this.tickGap);
      pop();
    }
  }
}
