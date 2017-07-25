// Qgis2threejs Project
project = new Q3D.Project({crs:"EPSG:3857",wgs84Center:{lat:37.5497960731,lon:14.0871520462},proj:"+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs",title:"20170722211105",baseExtent:[1325426.14106,4379525.40311,1810923.04397,4652516.33319],rotation:0,zShift:0.0,width:100.0,zExaggeration:3.0});

// Layer 0
lyr = project.addLayer(new Q3D.DEMLayer({q:1,shading:true,type:"dem",name:"Sicilia_EL.DTM.75M"}));
