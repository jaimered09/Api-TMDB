    export const movieRankings = {
    "Guardianes de la Galaxia 3": 82,
    "FastX": 74,
    "Transformer": 73,
    "Los Caballeros del Zodiaco": 65,
    "San Andreas": 62,
  };

    export const getDataColors = opacity => {
    const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffffff', '#ff0000', '#d6ff00', '#0038ff'];
    return colors.map(color => opacity ? `${color + opacity}` : color);
  };
