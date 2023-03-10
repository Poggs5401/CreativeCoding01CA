
// Global Variables

// let data = [
//     {fruit:"Apples", sales:27},
//     {fruit:"Oranges", sales:17},
//     {fruit:"Strawberries", sales:37}
// ];
let table;
let data = [];
let charts = [];


function preload(){
    table = loadTable("data/console_sales.csv", "csv", "header")
}

function tidyData(){
    for(let x = 0; x < table.getRowCount(); x++){
        data.push(table.rows[x].obj);
    }
}

function setup(){
    tidyData();
    createCanvas(1000,1000);
    colorMode(HSB,360,100,100)
    background(255);
    console.log(data)
    let newBall = new BarChart(450,100,300,600,5,data);
    charts.push(newBall);
}

function draw(){
 charts[0].render();
}



// Modulus
// Math.random()
// AngleMode
// ShapeMode

// Drawing Shapes
// Translations

// Loops
// Draw Grid
// Conditions

// Functions

// Shapes Advanced

