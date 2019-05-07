$('#CompareSubmit').click(function () {
    var criteria = $('input[name=optradio]:checked').val(); 
    var cities = [];
    var populationBendigo;
    var populationBallarat;
    var populationGeelong;
    var languageGeelong;
    var languageBendigo;
    var languageBallarat;
    var jobGeelong;
    var jobBendigo;
    var jobBallarat;



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
        if (criteria === 'job') {
            $('#languageFilter').find('#GeelongContainer').append('<div id="Geelonglanguage"></div>');
            $('#languageFilter').find('#BendigoContainer').append('<div id="Bendigolanguage"></div>');
            $('#languageFilter').find('#BallaratContainer').append('<div id="Ballaratlanguage"></div>');
            if (jQuery.inArray('Geelong', cities) !== -1) {
                jobGeelong = [
                    { x: 'Professionals', value: 26367 },
                    { x: 'Technicians and Trades Workers', value: 18883 },
                    { x: 'Community and Personal Service Workers', value: 15714 },
                    { x: 'Clerical and Administrative Workers', value: 15082 },
                    { x: 'Managers', value: 14520 },
                    { x: 'Sales Workers', value: 12707 },
                    { x: 'Labourers', value: 12505 },
                    { x: 'Machinery Operators and Drivers', value: 7191 },
                ];
                var jobGeelongChart = anychart.pie();
                // set chart title
                jobGeelongChart.title('Top 8 Occupation in Geelong');
                jobGeelongChart.data(jobGeelong);
                // set container id for the chart
                jobGeelongChart.container('Geelonglanguage');
                // initiate chart drawing
                jobGeelongChart.draw();
            }
            if (jQuery.inArray('Bendigo', cities) !== -1) {
                jobBendigo = [
                    { x: 'Professionals', value: 13622 },
                    { x: 'Technicians and Trades Workers', value: 9454 },
                    { x: 'Community and Personal Service Workers', value: 8518 },
                    { x: 'Clerical and Administrative Workers', value: 7933 },
                    { x: 'Managers', value: 7873 },
                    { x: 'Sales Workers', value: 7809 },
                    { x: 'Labourers', value: 6400 },
                    { x: 'Machinery Operators and Drivers', value: 3814 },
                ];
                var jobBendigoChart = anychart.pie();
                // set chart title
                jobBendigoChart.title('Top 8 Occupation in Geelong');
                jobBendigoChart.data(jobBendigo);
                // set container id for the chart
                jobBendigoChart.container('Bendigolanguage');
                // initiate chart drawing
                jobBendigoChart.draw();
            }
            if (jQuery.inArray('Ballarat', cities) !== -1) {
                jobBallarat = [
                    { x: 'Professionals', value: 13213 },
                    { x: 'Technicians and Trades Workers', value: 10130 },
                    { x: 'Community and Personal Service Workers', value: 8415 },
                    { x: 'Clerical and Administrative Workers', value: 8197 },
                    { x: 'Managers', value: 8162 },
                    { x: 'Sales Workers', value: 7550 },
                    { x: 'Labourers', value: 6666 },
                    { x: 'Machinery Operators and Drivers', value: 3955 },
                ];
                var jobBallaratChart = anychart.pie();
                // set chart title
                jobBallaratChart.title('Top 8 Occupation in Ballarat ');
                jobBallaratChart.data(jobBallarat);
                // set container id for the chart
                jobBallaratChart.container('Ballaratlanguage');
                // initiate chart drawing
                jobBallaratChart.draw();
            }
        }
    }
});