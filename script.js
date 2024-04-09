const map = L.map('map').setView([-33.027, -52.811], 7);

  // Define base layers
  let baseMap = L.tileLayer('https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
  });

  let openstreetmapdark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  });

  let openstreetmapOsm = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  });

  // Base layers options
  let baseLayers = {
    "Predeterminado": baseMap,
    "Open Streetmap Dark": openstreetmapdark,
    "Open Streetmap Osm": openstreetmapOsm
  };

  // Add base layers to the map
  L.control.layers(baseLayers).addTo(map);

  // Add default base layer
  openstreetmapOsm.addTo(map);