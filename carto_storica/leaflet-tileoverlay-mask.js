(function() {

  var defaultMaskUrl = [
    'data:image/png;base64,',
    'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAC7lBMVEUAAAABAQECAgIDAwMEBAQF',
    'BQUGBgYHBwcICAgJCQkKCgoLCwsMDAwNDQ0ODg4PDw8QEBARERESEhITExMUFBQVFRUWFhYXFxcY',
    'GBgZGRkaGhobGxscHBwdHR0eHh4fHx8gICAhISEiIiIjIyMkJCQlJSUmJiYnJycoKCgpKSkqKior',
    'KyssLCwtLS0uLi4vLy8wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+',
    'Pj4/Pz9AQEBBQUFCQkJDQ0NERERGRkZHR0dISEhJSUlKSkpLS0tMTExNTU1OTk5PT09QUFBRUVFS',
    'UlJTU1NUVFRVVVVWVlZXV1dYWFhZWVlaWlpbW1tcXFxdXV1eXl5fX19gYGBhYWFiYmJjY2NkZGRl',
    'ZWVmZmZnZ2doaGhpaWlqampra2tsbGxtbW1ubm5vb29xcXFycnJzc3N0dHR1dXV2dnZ3d3d4eHh5',
    'eXl6enp7e3t8fHx9fX1+fn5/f3+AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiKioqLi4uMjIyN',
    'jY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+g',
    'oKChoaGioqKkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0',
    'tLS1tbW2tra3t7e4uLi5ubm6urq7u7u9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fI',
    'yMjJycnKysrLy8vMzMzNzc3Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc',
    '3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v',
    '7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7///9A5nLSAAAA',
    'AWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB98FHBEuKjDLarAAAAAdaVRY',
    'dENvbW1lbnQAAAAAAENyZWF0ZWQgd2l0aCBHSU1QZC5lBwAAAjNJREFUOMtjYEACjExMLCzMTIwM',
    '2AETK7eQhIyslAgvOzM2aU4xTbvAhMyspFAXPWkedCWM7GJGYVUz1+0+fGTfpvnNCdYynEwo8twq',
    'fo1rTt978fbDh3evHl7c1hOty49kCCOPTtK8U08+fPvx4+fPnz++fXpxaXWhhRAzQr9O5uob7779',
    'hIPvHx/sqLISgNnCrpK8+s6nHz+RwI8vT3aVGnJDPMwk5jfvBqo8SMWjDUkKrGAFnEYNJ9+hyQNV',
    'fLo+zUUAZASTeNjaJ99+YoDvr/flKLEAFbBpVp368BML+HJzohU3UAG33Yy7X7Ep+P58XZAwEwOT',
    'UOC65z+wKfj5/lCmLDMDk0T87rfYFXw6W6HGysAik3kYqxOAjrjcpM3GwCKbdQSXgivNOuwMTFLJ',
    '+95ht+Lz+Wp1VgYmkdBNL7Er+HA0V56FgZHXef7Db9jkf7zaEikGjC92vaYLn7Ap+HpvliMPMKyZ',
    'peO3vfiOxYB3x8s02ECRxWPdc+kjpiu+3FvoKwJOESwy0asefEGX//Zid74GOyTBcOoW7njyFdWM',
    'b6+Ot9rwQ3MIE79F9a5Hn74jJ5cXx3vcxeCJklnIqnTD9TdfoEp+fH13b3ebuxQrIlkzCxgmTdt3',
    '4/n7T1++fP7w6u6xhfk24qwo+YpbwSVn4rqDZy9fOX90y6wyXw1+tLzFyMqvZBWcUdHUXJ0b6agh',
    'zI6ZgxlZuIRlVbW11eXFeFhxZHAmZlY2dlYWlPwPAD6nKPWk11d/AAAAAElFTkSuQmCC'
  ].join("");


  // Leaflet.SVG.Mask
  // SVG renderer with mask effect

  L.SVG.Mask = L.SVG.extend({
    options: {
      maskUrl: defaultMaskUrl,
      maskWidth: 512,
      maskHeight: 512
    },
    onAdd: function() {
      L.SVG.prototype.onAdd.call(this);
      this.setCenter(this._map.getSize().divideBy(2));
    },
    _initContainer: function() {
      L.SVG.prototype._initContainer.call(this);
      var defs = L.SVG.create("defs");
      var mask = defs.appendChild(L.SVG.create("mask"));
      var image = mask.appendChild(L.SVG.create("image"));
      mask.setAttribute("id", "leaflet-svg-mask-" + L.stamp(this));
      image.setAttribute("width", this.options.maskWidth);
      image.setAttribute("height", this.options.maskHeight);
      image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.options.maskUrl);
      this._rootGroup.setAttribute("mask", "url(#" + mask.getAttribute("id") + ")");
      this._image = image;
      this._container.insertBefore(defs, this._rootGroup);
    },
    setCenter: function(containerPoint) {
      if (this._map) {
        var layerPoint = this._map.containerPointToLayerPoint(containerPoint);
        this._image.setAttribute("x", layerPoint.x - this.options.maskWidth / 2);
        this._image.setAttribute("y", layerPoint.y - this.options.maskHeight / 2);
      }
    }
  });

  L.svg.mask = function(options) {
    return new L.SVG.Mask(options);
  };

  // Leaflet.TileOverlay
  // SVG based implementation of Leaflet.TileLayer

  L.TileOverlay = L.TileLayer.extend({
    options: {
      pane: "overlayPane"
    },
    _initContainer: function() {
      if (!this._container)
        this._container = this._map.getRenderer(this)._rootGroup.appendChild(L.SVG.create("g"));
    },
    _updateLevels: function() {

      var zoom = this._tileZoom;
      if (zoom === undefined)
        return undefined;

      for (var z in this._levels) {
        if (!this._levels[z].el.firstChild && z !== zoom) {
          L.DomUtil.remove(this._levels[z].el);
          this._removeTilesAtZoom(z);
          delete this._levels[z];
        }
      }

      var level = this._levels[zoom];
      if (!level) {
        var map = this._map;
        level = {
          el: this._container.appendChild(L.SVG.create("g")),
          origin: map.project(map.unproject(map.getPixelOrigin()), zoom).round(),
          zoom: zoom
        };
        this._setZoomTransform(level, map.getCenter(), map.getZoom());
        this._levels[zoom] = level;
      }
      this._level = level;
      return level;
    },
    _addTile: function(coords, container) {
      var tilePos = this._getTilePos(coords);
      var tileSize = this.getTileSize();
      var key = this._tileCoordsToKey(coords);
      var url = this.getTileUrl(this._wrapCoords(coords));

      var tile = container.appendChild(L.SVG.create("image"));
      tile.setAttribute("width", tileSize.x);
      tile.setAttribute("height", tileSize.y);
      tile.setAttribute("x", tilePos.x);
      tile.setAttribute("y", tilePos.y);
      tile.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url);

      this._tiles[key] = {
        el: tile,
        coords: coords,
        current: true
      };
    }
  });

  L.tileOverlay = function(url, options) {
    return new L.TileOverlay(url, options);
  };

})();
