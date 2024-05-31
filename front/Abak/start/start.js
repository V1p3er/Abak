const neshanMap = new nmp_mapboxgl.Map({
    mapType: nmp_mapboxgl.Map.mapTypes.neshanVector,
    container: "map",
    zoom: 11,
    pitch: 0,
    center: [51.389, 35.6892],
    minZoom: 2,
    maxZoom: 21,
    trackResize: true,
    mapKey: "web.d34f7dfd2b35494e9d2cd5ac15c786e7", // Get your own API Key on https://platform.neshan.org/panel
    poi: true,
    traffic: true,
    mapTypeControllerOptions: {
      show: true,
      position: "bottom-left",
    },
  });
  // add marker to map
  var marker = new nmp_mapboxgl.Marker()
    .setLngLat([51.391173, 35.700954])
    .addTo(neshanMap);