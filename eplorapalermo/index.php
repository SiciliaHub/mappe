<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Cartografia storica Palermo</title>
  <link href="leaflet.css" rel="stylesheet" type="text/css">
  <script src="https://unpkg.com/leaflet@1.0.1/dist/leaflet.js"></script>
  <script src="https://unpkg.com/leaflet-hash@0.2.1/leaflet-hash.js"></script>
  <script src="leaflet-tileoverlay-mask.js"></script>
  <style>
    body {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #map {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
	#ods {
position:fixed;
bottom:20px;
right:20px;
z-index: 999;}
  </style>

</head>

<body>
  <div id="map"></div>
  <script>
    var map = L.map("map", L.extend({
      zoom: 15,
      center: [38.11127,13.3534422]
    }, L.Hash.parseHash(location.hash)));

    L.hash(map);

    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
       attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      minZoom: 2,
      maxZoom: 20,
      maxNativeZoom: 18
    }).addTo(map);

    var mask = L.svg.mask();
    L.tileOverlay("http://mapwarper.net/maps/tile/19706/{z}/{x}/{y}.png", {
      attribution: '<a href="https://github.com/frogcat/leaflet-tileoverlay-mask" title="Leaflet-tileoverlay-mask">Leaflet-tileoverlay-mask</a> - Cartografia storica Palermo - Rielaborazione di <a href="https://twitter.com/aborruso" title="Andrea Borruso">@aborruso</a>, <a href="https://twitter.com/cirospat" title="Ciro Spataro">@cirospat</a> e <a href="https://twitter.com/gbvitrano" title="Giovan Battista Vitrano">@gbvitrano</a>	 ',
      minZoom: 2,
      maxZoom: 20,
      maxNativeZoom: 18,
      renderer: mask
    }).addTo(map);

    map.on("mousemove", function(event) {
      mask.setCenter(event.containerPoint);
    });
  </script>
           <div id="ods"><a href="http://opendatasicilia.it/" title="opendatasicilia.it" target="_blank"> 
<img src="images/opendatasicilia.png" width="48px" title="opendatasicilia.it" alt="opendatasicilia"></a></div>
</body>

</html>
