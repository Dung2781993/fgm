﻿// Creating map options



//Geelong
$("#Geelong").click(function () {

    $('#search').click(function () {
        var select = $('#mylist :selected').text();
        var container = L.DomUtil.get('map');
        if (container !== null) { container._leaflet_id = null; }

        console.log("Geelong");

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

        if (select === "Health Services") {
            
            var catalogo = MCH;
            for (var i = 0; i < 5; i++) {
                var name = catalogo.name[i];
                var lat = catalogo.lat[i];
                var long = catalogo.long[i];
                var marker = L.marker([lat, long]).addTo(map);
                marker.bindPopup(name).openPopup();
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

            //Remove the map

            $('#filter').find('#map').remove();

            var checkChart = $('#filter').find('#businessChart');
            if (!checkChart.length) {
                $('#filter').append('<div id="businessChart"></div>');
            }

            var body = d3.select("#businessChart")
            {
                body.append("h3")
                    .attr("class", "top-label")
                    .append("p")
                    .text("Total number of businesses: " + business["Total number of businesses"][4]);

                var svg = body.append("svg")
                    .attr("height", 500)
                    .attr("width", "100%")
                var barGroup = svg.append("g")
                    .attr("transform", "translate(220, 30) scale(43, 1)")
                    .attr("class", "bar");

                var barLabelGroup = svg.append("g")
                    .attr("class", "bar-label");

                var temp = 0;
                for (x in business) {
                    if (x !== "Total number of businesses") {
                        barGroup.append("rect")
                            .attr("x", 0)
                            .attr("y", temp * 20)
                            .attr("height", 15)
                            .attr("width", business[x][4] / 1000)
                            .attr("fill", "green");
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
                    }
                    temp++;
                };
            }
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

            //Remove the map

            $('#filter').find('#map').remove();

            var checkChart = $('#filter').find('#businessChart');
            if (!checkChart.length) {
                $('#filter').append('<div id="businessChart"></div>');
            }

            var body = d3.select("#businessChart")
            body.append("h3")
                .attr("class", "top-label")
                .append("p")
                .text("Total number of businesses: " + BendigoBusiness["Total number of businesses"][4]);

            var svg = body.append("svg")
                .attr("height", 500)
                .attr("width", "100%")
            var barGroup = svg.append("g")
                .attr("transform", "translate(220, 30) scale(43, 1)")
                .attr("class", "bar");

            var barLabelGroup = svg.append("g")
                .attr("class", "bar-label");

            var temp = 0;
            for (x in BendigoBusiness) {
                if (x !== "Total number of businesses" && x !== "Total") {
                    barGroup.append("rect")
                        .attr("x", 0)
                        .attr("y", temp * 20)
                        .attr("height", 15)
                        .attr("width", BendigoBusiness[x][4] / 1000)
                        .attr("fill", "green");
                    barLabelGroup.append("text")
                        .attr("x", 000)
                        .attr("y", temp * 20 + 40)
                        .text(x)
                        .style("font-size", "10px");
                    barLabelGroup.append("text")
                        .attr("x", 500)
                        .attr("y", temp * 20 + 40)
                        .text(BendigoBusiness[x][4])
                        .style("font-size", "11px");
                };
                temp++;
            };
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
            var catalogo = EME_HOSPT;
            for (var i = 0; i < 4; i++) {
                var name = catalogo.Centre[i];
                var lat = catalogo.Lat[i];
                var long = catalogo.Long[i];
                var marker = L.marker([lat, long]).addTo(map);
                marker.bindPopup(name).openPopup();
            }
        }
        if (select === "Education") {
            for (var j = 0; j < 5; j++) {
                var educationName = school_Ballarat.Name[j]
                var educationLat = school_Ballarat.Lat[j];
                var educationLong = school_Ballarat.Long[j];
                var educationMarker = L.marker([educationLat, educationLong]).addTo(map);
                educationMarker.bindPopup(educationName).openPopup();
            }

        }
        if (select === "Job Opportunities") {

            //Remove the map
            $('#filter').find('#map').remove();

            var checkChart = $('#filter').find('#businessChart');
            if (!checkChart.length) {
                $('#filter').append('<div id="businessChart"></div>');
            }

            var body = d3.select("#businessChart")
            body.append("h3")
                .attr("class", "top-label")
                .append("p")
                .text("Total number of businesses: " + BallaratBusiness["Total number of businesses"][4]);

            var svg = body.append("svg")
                .attr("height", 500)
                .attr("width", "100%")
            var barGroup = svg.append("g")
                .attr("transform", "translate(220, 30) scale(43, 1)")
                .attr("class", "bar");

            var barLabelGroup = svg.append("g")
                .attr("class", "bar-label");

            var temp = 0;
            for (x in BallaratBusiness) {
                if (x !== "Total number of businesses" && x !== "Total") {
                    barGroup.append("rect")
                        .attr("x", 0)
                        .attr("y", temp * 20)
                        .attr("height", 15)
                        .attr("width", BallaratBusiness[x][4] / 1000)
                        .attr("fill", "green");
                    barLabelGroup.append("text")
                        .attr("x", 000)
                        .attr("y", temp * 20 + 40)
                        .text(x)
                        .style("font-size", "10px");
                    barLabelGroup.append("text")
                        .attr("x", 500)
                        .attr("y", temp * 20 + 40)
                        .text(BallaratBusiness[x][4])
                        .style("font-size", "11px");
                };
                temp++;
            };
        }
    });
    
    
});


//Latrobe
$("#Latrobe").click(function () {
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

        var mapOptions = {
            center: [-38.2556, 146.4720],
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
            var marker = L.marker([-38.2333324, 146.3999984]).addTo(map);
            marker.bindPopup("<b>No data available</b>").openPopup();
        }
        if (select === "Education") {
            var marker = L.marker([-38.2333324, 146.3999984]).addTo(map);
            marker.bindPopup("<b>No data available</b>").openPopup();
        }
        if (select === "Job Opportunities") {

            //Remove the map
            $('#filter').find('#map').remove();

            var checkChart = $('#filter').find('#businessChart');
            if (!checkChart.length) {
                $('#filter').append('<div id="businessChart"></div>');
            }

            var body = d3.select("#businessChart")
            body.append("h3")
                .attr("class", "top-label")
                .append("p")
                .text("Total number of businesses: " + LatrobeBusiness["Total number of businesses"][4]);

            var svg = body.append("svg")
                .attr("height", 500)
                .attr("width", 600);
            var barGroup = svg.append("g")
                .attr("transform", "translate(220, 30) scale(43, 1)")
                .attr("class", "bar");

            var barLabelGroup = svg.append("g")
                .attr("class", "bar-label");

            var temp = 0;
            for (x in LatrobeBusiness) {
                if (x !== "Total number of businesses" && x !== "Total") {
                    barGroup.append("rect")
                        .attr("x", 0)
                        .attr("y", temp * 20)
                        .attr("height", 15)
                        .attr("width", LatrobeBusiness[x][4] / 1000)
                        .attr("fill", "green");
                    barLabelGroup.append("text")
                        .attr("x", 000)
                        .attr("y", temp * 20 + 40)
                        .text(x)
                        .style("font-size", "10px");
                    barLabelGroup.append("text")
                        .attr("x", 500)
                        .attr("y", temp * 20 + 40)
                        .text(LatrobeBusiness[x][4])
                        .style("font-size", "11px");
                };
                temp++;
            };
        }
    });
});

//Warrnambol
$("#Warrnambol").click(function () {
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

        var mapOptions = {
            center: [-38.3687, 142.4982],
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
            var marker = L.marker([-38.38176, 142.48799]).addTo(map);
            marker.bindPopup("<b>No data available</b>").openPopup();
        }

    });  
});


//Shepparton
$("#Shepparton").click(function () {
    var container = L.DomUtil.get('map');
    if (container !== null) { container._leaflet_id = null; }

    var mapOptions = {
        center: [-36.38047, 145.39867],
        zoom: 10
    };

    // Creating a map object
    var map = new L.map('map', mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    // Adding layer to the map
    map.addLayer(layer);
});

//wangaratta

$("#Wangaratta").click(function () {
    var container = L.DomUtil.get('map');
    if (container !== null) { container._leaflet_id = null; }

    var mapOptions = {
        center: [-36.3683, 146.3172],
        zoom: 10
    };

    // Creating a map object
    var map = new L.map('map', mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    // Adding layer to the map
    map.addLayer(layer);
});


