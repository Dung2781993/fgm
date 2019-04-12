// Creating map optionsc

//Geelong
$("#Geelong").click(function () {

    $('#search').click(function () {
        var select = $('#mylist :selected').text();
        var container = L.DomUtil.get('map');
        if (container !== null) { container._leaflet_id = null; }
        //Check map exist or not
       
        var checkMap = $('#filter').find('#map');
        if (!checkMap.length) {
            $('#filter').find('#businessChart').remove();
            $('#filter').append('<div id="map" style="height: 400px; width:100%"></div>');   
        }
        //Initial Map
        var mapOptions = {
            center: [-38.14711, 144.36069],
            zoom: 10
        };


        var map = new L.map('map', mapOptions);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
        }).addTo(map);

        if (select === "Population") {
           
        }
        if (select === "Health Services") {
            
            var catalogo = GEELONG_EME_HOSPT;
            for (var i = 0; i < 5; i++) {
                var name = catalogo.Centre[i];
                var lat = catalogo.Lat[i];
                var long = catalogo.Long[i];
                var marker = L.marker([lat, long]).addTo(map);
                marker.bindPopup("<b>" + name + "</b>" + "<br>Address: " + catalogo.Location[i]
                    + "<br> Contact:  " + catalogo.Contact[i]).openPopup();
            }
        }
        if (select === "Education"){
            for (var j = 0; j < 5; j++) {
                var educationName = school.name[j];
                var educationLat = school.lat[j];
                var educationLong = school.long[j];
                var educationMarker = L.marker([educationLat, educationLong]).addTo(map);
                educationMarker.bindPopup(educationName).openPopup();
            }

        }
        if (select === "Job Opportunities") {
            BusinessChart(business);
        }
    });
});

//Bendigo

$("#Bendigo").click(function () {
    $('#search').click(function () {
        var select = $('#mylist :selected').text();
        var container = L.DomUtil.get('map');
        if (container !== null) { container._leaflet_id = null; }

        //Check map exist or not

        var checkMap = $('#filter').find('#map');
        if (!checkMap.length) {
            $('#filter').find('#businessChart').remove();
            $('#filter').append('<div id="map" style="height: 400px; width:100%"></div>');
        }

        //Intitial map
        var mapOptions = {
            center: [-36.757786, 144.278702],
            zoom: 10
        };

        var map = new L.map('map', mapOptions);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
        }).addTo(map);

        if (select === "Health Services") {
            var marker = L.marker([-36.757786, 144.278702]).addTo(map);
            marker.bindPopup("<b>No data available</b>").openPopup();
        }
        if (select === "Education") {
            var EducationMarker = L.marker([-36.757786, 144.278702]).addTo(map);
            EducationMarker.bindPopup("<b>No data available</b>").openPopup();
        }
        if (select === "Job Opportunities") {
            BusinessChart(BendigoBusiness);
        }
    });

    
});

//Ballarat
$("#Ballarat").click(function () {
    $('#search').click(function () {
        var select = $('#mylist :selected').text();


        var container = L.DomUtil.get('map');
        if (container !== null) { container._leaflet_id = null; }

        //Check map exist or not

        var checkMap = $('#filter').find('#map');
        if (!checkMap.length) {
            $('#filter').find('#businessChart').remove();
            $('#filter').append('<div id="map" style="height: 400px; width:100%"></div>');
        }
        
        //Initial Map
        var mapOptions = {
            center: [-37.56622, 143.84957],
            zoom: 10
        };
        
        var map = new L.map('map', mapOptions);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZmdtbW9uYXNoIiwiYSI6ImNqdTBybzEwcTF1ZG40NHJ6a3g4ZGZzZW8ifQ.jwIjG6Q5cJyzy87lU8BmvQ'
        }).addTo(map);

        if (select === "Health Services") {
            var catalogo = BALLARAT_EME_HOSPT;
            for (var i = 0; i < 4; i++) {
                var name = catalogo.Centre[i];
                var lat = catalogo.Lat[i];
                var long = catalogo.Long[i];
                var marker = L.marker([lat, long]).addTo(map);
                marker.bindPopup("<b>" + name + "</b>" + "<br>Address: " + catalogo.Location[i]
                    + "<br> Contact:  " + catalogo.Contact[i]).openPopup();
            }
        }
        if (select === "Education") {
            for (var j = 0; j < 5; j++) {
                var educationName = school_Ballarat.Name[j]
                var educationLat = school_Ballarat.Lat[j];
                var educationLong = school_Ballarat.Long[j];
                var educationMarker = L.marker([educationLat, educationLong]).addTo(map);
                educationMarker.bindPopup("<b>" + educationName + "</b>" + "<br>Address: " + school_Ballarat.Location[j]).openPopup()
            }

        }
        if (select === "Job Opportunities") {
            BusinessChart(BallaratBusiness);
      
        }
    });
    
    
});


function BusinessChart(business) {

    //Remove the map

    $('#filter').find('#map').remove();

    var checkChart = $('#filter').find('#businessChart');
    if (!checkChart.length) {
        $('#filter').append('<div id="businessChart"></div>');
    }

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
                .style("font-size", "10px");
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
}