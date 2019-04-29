$('#CompareSubmit').click(function () {
    var criteria = $('input[name=optradio]:checked').val(); 
    var cities = [];
    var populationBendigo;
    var populationBallarat;
    var populationGeelong;
    var languageGeelong;
    var languageBendigo;
    var languageBallarat;


    //Remove all chart
    $('#filter').find('#ComparisonGraph').remove();
    $('#languageFilter').find('#Geelonglanguage').remove();
    $('#languageFilter').find('#Bendigolanguage').remove();
    $('#languageFilter').find('#Ballaratlanguage').remove();


    $("#filters a").each(function () {
        if ($(this).hasClass("active")) {
            cities.push($(this).attr('id'));
        }
    });
    if (cities.length < 2) {
        alert('Please select at least two cities only');
    }
    else {
        if (criteria === 'population') {
            $('#filter').append('<div id="ComparisonGraph"></div>');   
            for (var i = 0; i < cities.length; i++) {
                if (cities[i] === 'Geelong') {
                    populationGeelong = ['Population of geelong', 273951];
                }
                if (cities[i] === 'Bendigo') {
                    populationBendigo = ['Population of Bendigo', 149919];
                }
                if (cities[i] === 'Ballarat') {
                    populationBallarat = ['Population of Balarat', 155920];
                }
            }
            var chart = anychart.pie([populationGeelong, populationBendigo, populationBallarat]);
            chart.title('Total Population in each area')
                //set chart radius
                .radius('43%')
                // create empty area in pie chart
                .innerRadius('30%');
            // set container id for the chart
            chart.container('ComparisonGraph');
            // initiate chart drawing
            chart.draw();
        }
        if (criteria === 'language') {
            $('#languageFilter').find('#GeelongContainer').append('<div id="Geelonglanguage"></div>');  
            $('#languageFilter').find('#BendigoContainer').append('<div id="Bendigolanguage"></div>');   
            $('#languageFilter').find('#BallaratContainer').append('<div id="Ballaratlanguage"></div>');   
            if (jQuery.inArray('Geelong', cities) !== -1){
                languageGeelong = [
                    { x: 'Italian', value: 2617 },
                    { x: 'Croatian', value: 2184 },
                    { x: 'Mandarin', value: 1841 },
                    { x: 'Macedonian', value: 1078 },
                    { x: 'Greek', value: 1033 }
                ];
                var languageGeelongChart = anychart.pie();
                // set chart title
                languageGeelongChart.title('Top 5 Languages in Geelong (excluding English)');
                languageGeelongChart.data(languageGeelong);
                // set container id for the chart
                languageGeelongChart.container('Geelonglanguage');
                // initiate chart drawing
                languageGeelongChart.draw();
            }
            if (jQuery.inArray('Bendigo', cities) !== -1) {
                languageBendigo = [
                    { x: 'Mandarin', value: 666 },
                    { x: 'Karen', value: 870 },
                    { x: 'Italian', value: 346 },
                    { x: 'German', value: 303 },
                    { x: 'Punjabi', value: 237 }
                ];
                var languageBendigoChart = anychart.pie();
                // set chart title
                languageBendigoChart.title('Top 5 Languages in Bendigo (excluding English)');
                languageBendigoChart.data(languageBendigo);
                // set container id for the chart
                languageBendigoChart.container('Bendigolanguage');
                // initiate chart drawing
                languageBendigoChart.draw();
            }
            if(jQuery.inArray('Ballarat', cities) !== -1) {
                languageBallarat = [
                    { x: 'Mandarin', value: 950 },
                    { x: 'Italian', value: 358 },
                    { x: 'German', value: 317 },
                    { x: 'Punjabi', value: 281 },
                    { x: 'Dutch', value: 255 }
                ];
                var languageBallaratChart = anychart.pie();
                // set chart title
                languageBallaratChart.title('Top 5 Languages in Ballarat (excluding English)');
                languageBallaratChart.data(languageBallarat);
                // set container id for the chart
                languageBallaratChart.container('Ballaratlanguage');
                // initiate chart drawing
                languageBallaratChart.draw();
            }
        }
    }
});