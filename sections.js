
function clean(chartType){
    if (chartType === "bar-chart") {
        console.log("inside bar chart clean");
        d3.select("#bar-chart").style('opacity', 0);
    }

    if (chartType === "bubble-chart") {
        console.log("inside bubble chart clean");
        d3.select("#bubble-chart").style('opacity', 0)
    }

    if (chartType === "pie-chart") {
        console.log("inside bubble chart clean");
        d3.select("#pie-chart").style('opacity', 0)
    }
}

//First draw function

function draw1(){
    console.log("draw1");
    d3.select("#bubble-chart").style('opacity', 1);
    clean('bar-chart');
    clean('pie-chart');
}


function draw2(){
    console.log("draw2");
    d3.select("#bar-chart").style('opacity', 1)
    clean('bubble-chart');
    clean('pie-chart');
}

function draw3(){
    d3.select("#pie-chart").style('opacity', 1);
    console.log("draw3");
    clean('bubble-chart');
    clean('bar-chart');

}

function draw4(){
    d3.select("#bubble-chart").style('opacity', 1);
    searchEvent("Management, professional, and related occupations");
    console.log("draw4");
    clean('pie-chart');
    clean('bar-chart');
}

function draw5(){
    searchEvent( "Natural resources, construction, and maintenance occupations");
    console.log("draw5");
    clean('pie-chart');
    clean('bar-chart');

}

function draw6(){
    searchEvent("Production, transportation, and material moving occupations");
    console.log("draw6");
    clean('pie-chart');
    clean('bar-chart');
}

function draw7(){
    searchEvent("Sales and office occupations");
    console.log("draw7");
    clean('pie-chart');
    clean('bar-chart');
}

function draw8(){
    searchEvent("Service occupations");
    console.log("draw8");
    clean('pie-chart');
    clean('bar-chart');
}

function draw9(){
    zoomTo(root);
    console.log("draw9");
    clean('pie-chart');
    clean('bar-chart');
}

function draw10(){
    zoomTo(root);
    console.log("draw10");
    clean('pie-chart');
    clean('bar-chart');
}

function draw11(){
    zoomTo(root);
    console.log("draw11");
    clean('pie-chart');
    clean('bar-chart');
}

let activationFunctions = [
    draw1,
    draw2,
    draw3,
    draw4,
    draw5,
    draw6,
    draw7,
    draw8,
    draw9,
    draw10,
    draw11
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