
function clean(chartType){
    if (chartType === "bar-chart") {
        d3.select("#bar-chart").style('opacity', 0);
    }

    if (chartType === "bubble-chart") {
        d3.select("#bubble-chart").style('opacity', 0)
    }

    if (chartType === "pie-chart") {
        d3.select("#pie-chart").style('opacity', 0)
    }

    if (chartType === "radial-chart") {
        d3.select("#radial-chart").style('opacity', 0)
    }
}

//First draw function

function draw1(){
    d3.select("#bubble-chart").style('opacity', 1);
    clean('bar-chart');
    clean('pie-chart');
    clean('radial-chart');
}


function draw2(){
    d3.select("#bar-chart").style('opacity', 1)
    clean('bubble-chart');
    clean('pie-chart');
    clean('radial-chart');
}

function draw3(){
    d3.select("#pie-chart").style('opacity', 1);
    clean('bubble-chart');
    clean('bar-chart');
    clean('radial-chart');

}

function draw4() {
    d3.select("#radial-chart").style('opacity', 1);
    clean('bubble-chart');
    clean('bar-chart');
    clean('pie-chart');
}

function draw5(){
    d3.select("#bubble-chart").style('opacity', 1);
    searchEvent("Management, professional, and related occupations");
    clean('pie-chart');
    clean('bar-chart');
    clean('radial-chart');
}

function draw6(){
    searchEvent( "Natural resources, construction, and maintenance occupations");
    clean('pie-chart');
    clean('bar-chart');
    clean('radial-chart');

}

function draw7(){
    searchEvent("Production, transportation, and material moving occupations");
    clean('pie-chart');
    clean('bar-chart');
    clean('radial-chart');
}

function draw8(){
    searchEvent("Sales and office occupations");
    clean('pie-chart');
    clean('bar-chart');
    clean('radial-chart');
}

function draw9(){
    searchEvent("Service occupations");
    clean('pie-chart');
    clean('bar-chart');
    clean('radial-chart');
}

function draw10(){
    zoomTo(root);
    clean('pie-chart');
    clean('bar-chart');
    clean('radial-chart');
}

function draw11(){
    zoomTo(root);
    clean('pie-chart');
    clean('bar-chart');
    clean('radial-chart');
}

function draw12(){
    zoomTo(root);
    clean('pie-chart');
    clean('bar-chart');
    clean('radial-chart');
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
    draw11,
    draw12
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