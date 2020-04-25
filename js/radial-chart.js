function drawRadialChart() {
    var margin = {top: 20, right: 20, bottom: 70, left: 40},
        width =  712,
        radius = width/2

    d3.json("data/occupation.json", function(error, dataset) {
        data = d3.hierarchy(dataset)
            .sort((a, b) => d3.ascending(a.data.name, b.data.name));


        tree = d3.tree()
            .size([2 * Math.PI, radius])
            .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth)

        const root = tree(data);
    });
}