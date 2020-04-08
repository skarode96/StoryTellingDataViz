
function createScales(){

}

function drawInitial(){

}

//Cleaning Function
//Will hide all the elements which are not necessary for a given chart type 

function clean(chartType){
    let svg = d3.select('#vis').select('svg')
    if (chartType !== "isScatter") {
        svg.select('.scatter-x').transition().attr('opacity', 0)
        svg.select('.scatter-y').transition().attr('opacity', 0)
        svg.select('.best-fit').transition().duration(200).attr('opacity', 0)
    }
}

//First draw function

function draw1(){
    console.log("draw1");
    //Stop simulation
    // simulation.stop()
    //
    // let svg = d3.select("#vis")
    //                 .select('svg')
    //                 .attr('width', 1000)
    //                 .attr('height', 950)
    //
    // clean('isFirst')

    // draw svg
}


function draw2(){
    console.log("draw2");
    // let svg = d3.select("#vis").select('svg')
    //
    // clean('none')

}

function draw3(){
    console.log("draw3");
    // let svg = d3.select("#vis").select('svg')
    // clean('isMultiples')
}

function draw4(){
    console.log("draw4");
    // let svg = d3.select('#vis').select('svg')
    //
    // clean('isHist')
    //
    // simulation.stop()
    //
}

let activationFunctions = [
    draw1,
    draw2,
    draw3,
    draw4,
]

//All the scrolling function
//Will draw a new graph based on the index provided by the scroll


let scroll = scroller()
    .container(d3.select('#graphic'))
scroll()

let lastIndex, activeIndex = 0

scroll.on('active', function(index){
    d3.selectAll('.step')
        .transition().duration(500)
        .style('opacity', function (d, i) {return i === index ? 1 : 0.1;});
    
    activeIndex = index
    let sign = (activeIndex - lastIndex) < 0 ? -1 : 1; 
    let scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(i => {
        activationFunctions[i]();
    })
    lastIndex = activeIndex;

})

scroll.on('progress', function(index, progress){
    if (index == 2 & progress > 0.7){

    }
})