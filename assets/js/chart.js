import { movieRankings, getDataColors } from './chartData.js';

// Obtener el contexto del lienzo
const miCanvas = document.getElementById("MiGrafica").getContext("2d");

// Grafico con datos y funciones importados de chartData.js
const chart = new Chart(miCanvas, {
  type: "bar",
  data: {
    labels: Object.keys(movieRankings),
    datasets: [{
      label: "RANKING ACTUALMENTE || TOP 5 🎥 🎬 🍿 ⭐️⭐️⭐️⭐️⭐️",
      data: Object.values(movieRankings),
      borderColor: getDataColors(),
      backgroundColor: getDataColors(90)
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    }
  }
});

chart.resize(chart.width * 0.9, chart.height * 0.9);











































// const getDataColors = opacity => {
//     const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffffff', '#ff0000', '#d6ff00', '#0038ff'];
//     return colors.map(color => opacity ? `${color + opacity}` : color);
// };

// let miCanvas = document.getElementById("MiGrafica").getContext("2d");

// var chart = new Chart(miCanvas, {
//     type: "bar",
//     data: {
//         labels: ["Guardianes de la Galaxia 3", "FastX", "Los Caballeros del Zodiaco", "San Andreas", "Transformer"],
//         datasets: [{
//             label: "RANKING ACTUALMENTE || TOP 5 🎥 🎬 🍿 ⭐️⭐️⭐️⭐️⭐️",
//             data: {
//                 "Guardianes de la Galaxia 3": 82,
//                 "FastX": 74,
//                 "Los Caballeros del Zodiaco": 65,
//                 "San Andreas": 62,
//                 "Transformer": 73,
//             },
//             borderColor: getDataColors(),
//             backgroundColor: getDataColors(90)
//         }]
//     },
//     options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//             legend: {
//             position: 'bottom'
//             }
//         },
//         layout: {
//             padding: {
//                 left: 10,
//                 right: 10,
//                 top: 10,
//                 bottom: 10
//             }
//         }
//     }
// });

// chart.resize(chart.width * 0.9, chart.height * 0.9);
































