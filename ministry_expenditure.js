const ctx = document.getElementById('graph_canvas').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['', '', '', '', '', '', '','','','',''],
        datasets: [{
            fill: 'origin',
            fillColor:"",
            pointBackgroundColor: "white",
            pointBorderColor: "#00945E",
            pointHoverBackgroundColor: "#00945E",
            pointHoverBorderColor: "#00945E",
            lineTension:0,
            data: [30, 10, 5, 2, 20, 30, 47,23,9,10],
            backgroundColor: 'white',
            borderColor: '#00945E',
            borderWidth: 1,
            label: ''
        }]
    },

    // Configuration options go here
    options: {
      scales: {
        xAxes: [{
            gridLines: {
                color: "#ddd",
                display:false
            },
            ticks: {
                fontSize: 15,
                fontColor: "black",
                maxTicksLimit: 30
            },
        }],
        yAxes: [{
            gridLines: {
              color: "#ddd"
            },
            ticks: {
                fontSize: 15,
                fontColor: "black",
                beginAtZero: false,     
            }
        }]
    },
    title: {
      display: false
    },
      legend: {
       labels: {
         boxWidth: 0,
       }
      }
  }
});