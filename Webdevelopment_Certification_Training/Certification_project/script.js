let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: 11.0628322, lng: 78.0445737 },
        zoom: 10,
    });
}

initMap();



   google.charts.load('current', {'packages':['corechart']});
      
   
   google.charts.setOnLoadCallback(drawChart);


   function drawChart() {


     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Topping');
     data.addColumn('number', 'Slices');
     data.addRows([
       ['Python', 53],
       ['C++', 20],
       ['Java', 30],
       ['Java Script', 25],
       ['Ruby', 25]
     ]);

     
     var options = {'title':'Popular Programming Languages ',
                    'width':700,
                    'height':800};

     // Instantiate and draw our chart, passing in some options.
     var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
     chart.draw(data, options);
   }
