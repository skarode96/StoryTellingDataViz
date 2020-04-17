
function clean(chartType){
    if (chartType === "bar-chart") {
        console.log("inside bar chart clean");
        d3.select("#bar-chart").style('opacity', 0);
    }

    if (chartType === "bubble-chart") {
        console.log("inside bubble chart clean");
        d3.select("#bubble-chart").style('opacity', 0)
    }
}

//First draw function

function draw1(){
    d3.select("#bubble-chart").style('opacity', 1);
    clean('bar-chart');
    zoomTo(root);
}


function draw2(){
    console.log("draw2");
    d3.select("#bar-chart").style('opacity', 1)
    clean('bubble-chart');

}

function draw3(){
    d3.select("#bubble-chart").style('opacity', 1);
    console.log("draw3");
    clean('bar-chart');
    searchEvent("Business and financial operations occupations")
}

function draw4(){
    console.log("draw4");
    zoomTo(root);
}

let activationFunctions = [
    draw1,
    draw2,
    draw3,
    draw4,
]

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