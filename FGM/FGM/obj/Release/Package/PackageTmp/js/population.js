var map = L.map('mapid', { maxBounds: [[-33.815018, 142.946014], [-38.815018, 147.946014]], }).setView([-36.815018, 144.946014], 7);//not melbourne central

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 6,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
}).addTo(map);


//getJSON('https://data.gov.au/geoserver/vic-local-government-areas-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_bdf92691_c6fe_42b9_a0e2_a4cd716fa811&outputFormat=json');
L.geoJson(statesData).addTo(map);
function getColor(d) {
    return d > 300000 ? '#800026' :
        //d > 200000  ? '#BD0026' :
        d > 200000 ? '#E31A1C' :
            //d > 10000  ? '#FC4E2A' :
            d > 150000 ? '#FD8D3C' :
                d > 148000 ? '#FEB24C' :
                    d > 145000 ? '#FED976' :
                        d > 100000 ? '#f9ecb3' :

                            '#fff6d1'; //backgound color
}
function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(statesData, { style: style }).addTo(map);

// selection function
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });
    info.update(layer.feature.properties);

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}
var geojson;
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
    //alert('hhh') perhaps return value from here sorry.
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
    //alert('hhh');
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,//maybe here, when user click the mouse function can return value
        click: zoomToFeature
    });
}

geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

// information
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h5>Victoria Population Numbers</h5>' + '<br/>'+(props ?
        '<b>' + props.name + '</b><br />' + props.name1 + '</b><br />' + props.density + ' people in total Area'
        : 'Hover over a Region');
};

var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [100000, 145000, 148000, 150000, 200000, 300000],
        labels = [],
        from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColor(from + 1) + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }

    div.innerHTML = labels.join('<br>');
    return div;
};

legend.addTo(map);


info.addTo(map);