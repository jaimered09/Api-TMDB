let miGrafico = document.getElementById("MiGrafico").getContext("2d");

var chart = new Chart(miGrafico, {
  type: 'doughnut',
  data: {
    labels: ["Guardianes de la Galaxia 3", "FastX", "Los Caballeros del Zodiaco", "San Andreas", "Transformer"],
    datasets: [
      {
        label: "PRESUPUESTO 💰 (Millones de Dolares) 💰",
        backgroundColor: ['#AF98DA', '#64CCDA', '#EFC385', '#E87BAF', '#B1ADE1'],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        data: [250, 340, 60, 110, 200],
        borderWidth: 2
      }
    ]
  }
});

chart.resize(chart.width * 0.6, chart.height * 0.6);






































