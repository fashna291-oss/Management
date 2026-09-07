const chartCanvas = document.getElementById('myChart')
 
if(chartCanvas){
const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
   
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};


const config = {
  type: 'doughnut',
  data: data,
};

new Chart(chartCanvas, config)
}


const lineLabels = ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul'];
const lineData = {
  labels: lineLabels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const lineConfig = {
  type: 'line',
  data: lineData,
};

new Chart (
    document.getElementById('lineChart'),
    lineConfig
)

const barLabels = ['Jan', 'Feb','Mar','Apr', 'May', 'Jun', 'Jul']
const barData = {
  labels: barLabels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],

    borderWidth: 1
  }]
};



const barConfig = {
  type: 'bar',
  data: barData,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};

new Chart (
    document.getElementById('barChart'),
    barConfig
)

