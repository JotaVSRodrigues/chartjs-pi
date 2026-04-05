
const ctxLine = document.getElementById('line-chart');
const ctxBar = document.getElementById('bar-chart');

const labelsLine = [
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00'
];

new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: labelsLine,
    datasets: [{
      label: 'Temperatura',
      backgroundColor: 'rgb(255, 0, 0)',
      borderColor: 'rgb(255, 0, 0)',
      data: [30, 29, 28, 25, 22, 23],
      borderWidth: 2,
    },
    {
      label: 'Umidade',
      backgroundColor: 'rgb(0, 238, 255)',
      borderColor: 'rgb(0, 238, 255)',
      data: [80, 82, 80, 85, 80, 83],
      borderWidth: 2
  }]
  },

  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


const labelsBar = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',  
]

new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: labelsBar,
    datasets: [{
      label: 'Temperatura Média',
      backgroundColor: 'rgb(255, 0, 0)',
      borderColor: 'rgb(255, 0, 0)',
      data: [22, 24, 27, 23, 20, 18],
      borderWidth: 2,
    },
    {
      label: 'Umidade Média',
      backgroundColor: 'rgb(0, 238, 255)',
      borderColor: 'rgb(0, 238, 255)',
      data: [90, 89, 93, 87, 88, 83],
      borderWidth: 2
  }]
  },

  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

