# Ponti e viadotti siciliani - Agosto 2018 (più di 8.700 tratte stradali su ponti o viadotti)

I file contenuti in questa cartella sono stati estratti da [OSM](https://www.openstreetmap.org) utilizzando [overpass-turbo.eu](http://overpass-turbo.eu), da [gbvitrano](https://twitter.com/gbvitrano). <br>
Il contenuto dei file è rilasciato con la licenza [ODbL](https://www.openstreetmap.org/copyright). <br><br>
[**Esempio di query overpass-turbo**](http://overpass-turbo.eu/s/Bfs) per estrarre ponti e viadotti della Sicilia.<br><br><br>
[**Mappa interattiva e grafica dinamica Tableau Public - (tratte Stradali)**](https://public.tableau.com/profile/gbvitrano#!/vizhome/Ponti_Sicilia/Mappamultimediale)<br><br>
[**Mappa interattiva e grafica dinamica Tableau Public - ( centroidi tratte stradali)**](https://public.tableau.com/profile/gbvitrano#!/vizhome/Ponti_Sicilia_centroidi/Mappamultimediale)<br><br>
<a href="http://palermohub.opendatasicilia.it/ponti_sicilia_centroidi.html"><img width="1000" src="http://palermohub.opendatasicilia.it/legend/clip_index/ponti_tableau.jpg" Title=" Ponti e viadotti siciliani - Agosto 2018 (più di 8.700 tratte stradali su ponti o viadotti)" /></a>
[**consulta la mappa su PalermoHub**](http://palermohub.opendatasicilia.it/ponti_sicilia_centroidi.html)<br><br>
Per estrarre i centroidi anche dalle linee curve è stato utilizzato QGIS e la **query** scritta da [@totofiandaca](https://twitter.com/totofiandaca) - [pigrecoinfinito](https://pigrecoinfinito.wordpress.com/)

<img width="1000" src="http://siciliahub.github.io/mappe/pontieviadotti/sicilia_tableau/qgis_centroidi.jpg" Title="Ponti e viadotti italiani – 2018" /></a>

```html
select id,Line_Interpolate_Point(geometry, st_length(geometry)/2) as geometry
from linee_ponti_sicilia
```
Grazie [Totò](https://twitter.com/totofiandaca)

[]()
[]()
