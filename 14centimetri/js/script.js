var crs = new L.Proj.CRS('EPSG:25833',
	'+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ',
	{
		resolutions: [
			8192, 4096, 2048, 1024, 512, 256, 128,
			64, 32, 16, 8, 4, 2, 1, 0.5,0.25
		],
		origin: [0, 0]
	}),
	map = new L.Map('map', {
		crs: crs,
	});

L.tileLayer.wms('http://map.sitr.regione.sicilia.it/ArcGIS/services/AREE_URBANE/Ortofoto14cm_Palermo_ata20122013/MapServer/WMSServer', {
	layers: '0',
	format: 'image/png',
	maxZoom: 21,
	minZoom: 0,
	transparent: 'true',
	attribution: 'sitr_sicilia'
}).addTo(map);

L.tileLayer.wms('http://map.sitr.regione.sicilia.it/ArcGIS/services/AREE_URBANE/Ortofoto14cm_Trapani_ata20122013/MapServer/WMSServer', {
	layers: '0',
	format: 'image/png',
	maxZoom: 21,
	minZoom: 0,
	transparent: 'true',
	attribution: 'sitr_sicilia'
}).addTo(map);

L.tileLayer.wms('http://map.sitr.regione.sicilia.it/ArcGIS/services/AREE_URBANE/Ortofoto14cm_Messina_ata20122013/MapServer/WMSServer', {
	layers: '0',
	format: 'image/png',
	maxZoom: 21,
	minZoom: 0,
	transparent: 'true',
	attribution: 'sitr_sicilia'
}).addTo(map);

L.tileLayer.wms('http://map.sitr.regione.sicilia.it/ArcGIS/services/AREE_URBANE/Ortofoto14cm_Ragusa_ata20122013/MapServer/WMSServer', {
	layers: '0',
	format: 'image/png',
	maxZoom: 21,
	minZoom: 0,
	transparent: 'true',
	attribution: 'sitr_sicilia'
}).addTo(map);

L.tileLayer.wms('http://map.sitr.regione.sicilia.it/ArcGIS/services/AREE_URBANE/Ortofoto14cm_Enna_ata20122013/MapServer/WMSServer', {
	layers: '0',
	format: 'image/png',
	maxZoom: 21,
	minZoom: 0,
	transparent: 'true',
	attribution: 'sitr_sicilia'
}).addTo(map);

map.setView([37.5141,14.0405], 4);

var hash = new L.Hash(map);