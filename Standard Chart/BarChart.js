class BarChart {
    constructor(_height, _width, _posX, _posY, _numTick, _data){
        this.height = _height;
        this.width = _width;
        this.posX = _posX;
        this.posY = _posY;
        this.numTick = _numTick;
        this.data = _data;

        this.margin = 20;
        this.gap = 5;
        this.maxData = Math.max(...this.data.map(o => o.Sales));
        

        this.tickLength = 5;
        this.numGap = this.maxData/(this.numTick)
        this.tickGap = this.height/(this.numTick)
    }

    render(){
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

    drawHLine(){
        noFill();
        stroke(155);
        line(0, 0, 0, -this.height);
    }

    drawWLine(){
        noFill();
        stroke(155);
        line(0, 0, this.width * this.data.length - this.margin, 0);
    }

    scaler(_value){
        return map(_value, 0, this.maxData, 0, this.height);
    }

    drawBarChart(){
        let blockWidth = (this.width - this.margin) - ((this.data.length - 1) * this.gap) / this.data.length;
        let masterGap = blockWidth + this.gap;

        for(let x = 0; x < this.data.length; x++){
            push();
            translate(this.margin + (x * masterGap), 0);
            fill(145, 145, 255);
            noStroke();
            rect(0, 0, blockWidth, this.scaler(-this.data[x].Sales));
            rotate(150);
            textAlign(CENTER, CENTER);
            fill(75);
            textSize(16);
            text(this.data[x].Name, -25, 45)
            pop();
        }
    }

    drawTicksAndLabels(){
        for(let x = 0; x < this.numTick + 1; x++){
            // Ticks
            line(0, x * -this.tickGap, -this.tickLength, -x * this.tickGap);
            // Labels
            fill(0);
            push();
            noStroke();
            textSize(16);
            textAlign(RIGHT, CENTER);
            text((x * this.numGap).toFixed(0), -10, -x * this.tickGap);
            pop()
            };
        };


}