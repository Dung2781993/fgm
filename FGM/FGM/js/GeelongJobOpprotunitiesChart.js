var body = d3.select("#businessChart");
var svg = body.append("svg")
    .attr("height", 405)
    .attr("width", 600);
var barGroup = svg.append("g")
    .attr("transform", "translate(220, 30) scale(43, 1)")
    .attr("class", "bar");

var barLabelGroup = svg.append("g")
    .attr("class", "bar-label");

var temp = 0;

function getColor(d) {
    return d > 5000 ? '#263238' :
        d > 4000 ? '#37474f' :
            d > 3000 ? '#455a64' :
                d > 2000 ? '#546e7a' :
                    d > 1000 ? '#607d8b' :
                        d > 500 ? '#78909c' :
                            '#90a4ae';
};

for (x in business) {
    if (x !== "Total number of businesses" && x !== "Total" && x !== "Year" && x !== "Currently unknown") {
        barGroup.append("rect")
            .attr("x", 0)
            .attr("y", temp * 20)
            .attr("height", 15)
            .attr("width", business[x][4] / 1000)
            .attr("fill", getColor(business[x][4]));
        barLabelGroup.append("text")
            .attr("x", 000)
            .attr("y", temp * 20 + 40)
            .text(x)
            .style("font-size", "11px");
        barLabelGroup.append("text")
            .attr("x", 500)
            .attr("y", temp * 20 + 40)
            .text(business[x][4])
            .style("font-size", "11px");
        temp++;
    };
};
body.append("h6")
    .attr("class", "label")
    .append("p")
    .text("Total number of businesses: " + business["Total number of businesses"][4]);