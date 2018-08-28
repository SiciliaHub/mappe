# Ponti e viadotti italiani - Agosto 2018 (126.881 tratte stradali su ponti o viadotti)

I file contenuti in questa cartella sono stati estratti da [OSM](https://www.openstreetmap.org) utilizzando [overpass-turbo.eu](http://overpass-turbo.eu), da [gbvitrano](https://twitter.com/gbvitrano). <br>
Il contenuto dei file è rilasciato con la licenza [ODbL](https://www.openstreetmap.org/copyright). <br><br>
[**Esempio di query overpass-turbo**](http://overpass-turbo.eu/s/Bfs) per estrarre ponti e viadotti della Sicilia.<br>
[**Esempio di query overpass-turbo**](http://overpass-turbo.eu/s/Bfu) per estrarre ponti e viadotti lungo le autostrade siciliane.<br><br>
In alternativa si possono scaricare i dati [OSM](https://www.openstreetmap.org) delle singole Regioni o Comuni da [**Estratti OpenStreetMap**](http://osm-estratti.wmflabs.org/estratti/)<br><br>
Sono state utilizzate anche le basi territoriali Istat [Confini delle unità amministrative a fini statistici al 1 gennaio 2018](https://www.istat.it/it/archivio/210584) per inserire la Regione, Provincia e Comune.<br><br>
I file sono stati usati per realizzare la mappa [Ponti e viadotti italiani – 2018](http://bit.ly/pontieviadotti) su [**Umap**](http://umap.openstreetmap.fr/it/) <br>

<a href="http://bit.ly/pontieviadotti"><img width="1000" src="http://siciliahub.github.io/mappe/pontieviadotti/mappa_pontieviadotti_02.jpg" Title="Ponti e viadotti italiani – 2018" /></a>

[**Mappa realizzata con QGIS Cloud**](https://qgiscloud.com/coseerobe/pontieviadotti_qgiscloud/)<br>
[**Server WMS QGIS Cloud**](https://qgiscloud.com/coseerobe/pontieviadotti_qgiscloud/wms?SERVICE=WMS&REQUEST=GetCapabilities)

**Mappa vector-tiles in progress...**



## Mappa interattiva e grafica dinamica elaborata con Tableau Public

[**Mappa interattiva - (tratte Stradali)**](https://public.tableau.com/profile/gbvitrano#!/vizhome/Ponti_Sicilia/Mappamultimediale) elaborata con Tableau Public<br><br>
[**Mappa interattiva - (centroidi tratte stradali)**](https://public.tableau.com/profile/gbvitrano#!/vizhome/Ponti_Sicilia_centroidi/Mappamultimediale) elaborata con Tableau Public<br><br>
<a href="http://palermohub.opendatasicilia.it/ponti_sicilia_centroidi.html"><img width="1000" src="http://palermohub.opendatasicilia.it/legend/clip_index/ponti_tableau.jpg" Title=" Ponti e viadotti siciliani - Agosto 2018 (più di 8.700 tratte stradali su ponti o viadotti)" /></a>
[**consulta la mappa su PalermoHub**](http://palermohub.opendatasicilia.it/ponti_sicilia_centroidi.html)<br><br>
Per estrarre i centroidi anche sulle **linee curve** è stato utilizzato QGIS e la **query** scritta da [@totofiandaca](https://twitter.com/totofiandaca) - [pigrecoinfinito](https://pigrecoinfinito.wordpress.com/)

<img width="1000" src="http://siciliahub.github.io/mappe/pontieviadotti/sicilia_tableau/qgis_centroidi.jpg" Title="Ponti e viadotti italiani – 2018" /></a>

**la query**
```html
select id,Line_Interpolate_Point(geometry, st_length(geometry)/2) as geometry
from linee_ponti_sicilia
```
Grazie [Totò](https://twitter.com/totofiandaca) :-)

[**qui i file geojson**](https://github.com/SiciliaHub/mappe/tree/gh-pages/pontieviadotti/sicilia_tableau)

[]()
[]()

