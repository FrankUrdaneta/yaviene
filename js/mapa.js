
      lugar = new nDialogo({
        background: true,
        backgroundCloseable: false,
        btnClose: true,
        width: "300px",
        height: "200px",
      });
      var container = document.getElementById("popup");
      var overlay = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
          duration: 250,
        },
      });
      overlay.setVisible(false);
      class Drag extends ol.interaction.Pointer {
        constructor() {
          super({
            handleDownEvent: handleDownEvent,
            handleDragEvent: handleDragEvent,
            handleMoveEvent: handleMoveEvent,
            handleUpEvent: handleUpEvent,
          });

          this.coordinate_ = null;
          this.cursor_ = "pointer";
          this.feature_ = null;
          this.previousCursor_ = undefined;
        }
      }
      var Traza = new ol.source.Vector({
        features: []
      });
      var capaDeTraza = new ol.layer.Vector({
          source: Traza,
          style: new ol.style.Style({
              stroke: new ol.style.Stroke({
                  width: 7,
                  color: '#ff0000',
              }),
          })
      });
      var Puntos = new ol.source.Vector({
        features: [],
      });

      var capaDePuntos = new ol.layer.Vector({
        source: Puntos,
        style: new ol.style.Style({
          image: new ol.style.Icon({
            color: '#009EE2',
            imgSize: [40, 40],
            displacement: [-4, -2],
            src: "http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png",
          }),
        }),
      });
      var Banderas = new ol.source.Vector({
        features: []
    });
      var capaDeBanderas = new ol.layer.Vector({
        source: Banderas,
        style: new ol.style.Style({
            image: new ol.style.Icon({
                color: 'white',
                imgSize: [40, 40],
                // displacement: [-4, -2],
                src: 'http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png',
            })
        })
    });
      var vista = new ol.View({
        projection: "EPSG:4326",
        center: [-64.18624728349602, -31.41453407563109],
        zoom: 12,
        //minZoom:11
      });
      var map = new ol.Map({
        interactions: ol.interaction.defaults
          .defaults({ altShiftDragRotate: false, pinchRotate: false })
          .extend([new Drag()]),
        target: "map",
        pixelRatio: 1,
        layers: [
          // new ol.layer.Tile({
          //     source: new ol.source.XYZ({
          //         url: 'http://mt{0-3}.google.com/vt/lyrs=r&hl=es_AR&x={x}&y={y}&z={z}&v=3'
          //     })
          // }),

          new ol.layer.Tile({
            source: new ol.source.OSM({ maxZoom: 17 }),
          }),
          capaDeTraza,
          capaDePuntos,
          capaDeBanderas,
        ],
        view: vista,
        overlays: [overlay],
      });
      function handleDownEvent(evt) {
        var map = evt.map;
        var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
          return feature;
        });
        if (
          feature &&
          (feature.values_.tipo == "parada" ||
            feature.values_.tipo == "coche" ||
            feature.values_.tipo == "bandera" ||
            feature.values_.tipo == "peaton" ||
            feature.values_.tipo == "milocal")
        ) {
          return false;
        }

        if (feature && feature.getGeometry().flatCoordinates.length == 2) {
          this.coordinate_ = evt.coordinate;
          this.feature_ = feature;
        } else {
          return false;
        }

        return !!feature;
      }

      const dibujaTraza = (servicio)=>{
        fetch('./js/traza.json?servicio='+servicio)
        .then(a=>a.json())
        .then(res=>{
          if(res.ok){
            coordenadas = res.data.traza.map(a=>[a[0],a[1]]);
            traza = new ol.Feature({
                geometry: new ol.geom.LineString(coordenadas)
            });
            Traza.clear();
            Traza.addFeature(traza);

            dibujaParadas(res.data.paradas);
          }
        });
      }

      const dibujaParadas = (coord)=>{

        coord.forEach(parada=>{
          lon = parada.lon;
          lat = parada.lat;
          dibujar_parada(lon,lat);
        });

        
      }

      function handleDragEvent(evt) {
        //esta funcion me permite arrastrar
        var map = evt.map;
        var deltaX = evt.coordinate[0] - this.coordinate_[0];
        var deltaY = evt.coordinate[1] - this.coordinate_[1];
        console.log(deltaX, deltaY, evt.coordinate[0]);
        var geometry = this.feature_.getGeometry();
        //geometry.translate(deltaX, deltaY);
        geometry.setCoordinates([
          this.coordinate_[0] + deltaX,
          this.coordinate_[1] + deltaY,
        ]); //Permite arrastar el icono del lugar
        // var geometry_entorno = this.feature_.values_.entorno.getGeometry();
        // geometry_entorno.translate(deltaX, deltaY);

        this.coordinate_[0] = evt.coordinate[0];
        this.coordinate_[1] = evt.coordinate[1];
        var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
          return feature;
        });
      }

      function handleMoveEvent(evt) {}

      function handleUpEvent(evt) {
        var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
          return feature;
        });
      }
      map.getViewport().addEventListener("contextmenu", function (evt) {
        evt.preventDefault();
        var feature = map.forEachFeatureAtPixel(
          map.getEventPixel(evt),
          function (feature, layer) {
            return feature;
          }
        );

        var coordinate = map.getEventCoordinate(evt);
        console.log(coordinate[0]);
        console.log(coordinate[1]);

        contenido = `<div class="w3-card-4 w3-card-4 w3-white w3-small w3-col" style="border:1px solid black">`;
        contenido += `<div class="w3-block w3-button w3-padding-small w3-left-align"
                        onclick="agregar_nuevo_lugar(${coordinate[0]},${coordinate[1]})">Agregar nuevo lugar</div>`;
        contenido += `</div>`;
        container.innerHTML = contenido;
        overlay.setPosition(coordinate);
      });

      const agregar_nuevo_lugar = (lon, lat) => {
        //hace aparecer la ventana para agregar un nuevo lugar

        console.log(lon);
        console.log(lat);
        lugar.setTitle("Nuevo Lugar");
        lugar.setBody(`
            Nombre
            <input id="nombrelugar" type="text" style="whide:200px">
            <br>
            <button onclick="agregarlugar(document.getElementById('nombrelugar').value, ${lon},${lat});">Agregar</button>
            <button onclick="lugar.cerrar();">Cancelar</button>`);
        lugar.open();
      };
      const agregarlugar = (nombre, lon, lat) => {
        //Manda formulario despues de dar boton aceptar
        console.log(nombre, lon, lat);
        param = {
          nombre: nombre,
          lon: lon,
          lat: lat,
        };
        fetch("nomenclador_lugar.php?cmd=agregarlugar", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(param),
        })
          .then((a) => a.json())
          .then((res) => {
            console.log(res);
            if (res.ok) {
              dibujar_parada(lon, lat, nombre);
              lugar.close();
              container.innerHTML = "";
            }
          });
      };
      const dibujar_parada = (lon, lat, nombre) => {
        //dibuja el lugar al agregar
        nuevo_punto = new ol.Feature({
          geometry: new ol.geom.Point([lon, lat]),
        });
        nuevo_punto.setStyle(
          new ol.style.Style({
            image: new ol.style.Circle({
              radius: 9,
              fill: new ol.style.Fill({
                color: "white",
              }),
              stroke: new ol.style.Stroke({
                color: "green",
                width: 4,
              }),
            }),
          })
        );
        Puntos.addFeature(nuevo_punto);
      };
      // window.onload = () => {
      //   //hace referencia a toda la ventana del navegador
      //   fetch("nomenclador_lugar.php?cmd=getinicio")
      //     .then((a) => a.json())
      //     .then((res) => {
      //       console.log(res);
      //       if (res.ok) {
      //         res.data.lugares.forEach((lugar) => {
      //           dibujar_parada(lugar.lon, lugar.lat, lugar.nombre);
      //         });
      //       }
      //     });
      //   a = Array.from(document.getElementsByClassName("ol-zoom-out"));
      //   a.forEach((elemento) => {
      //     elemento.innerHTML = "-";
      //   });
      // };

      map.on("click", function (evt) {
        var feature = map.forEachFeatureAtPixel(
          evt.pixel,
          (feature) => feature
        );
        container.innerHTML = "";
      });
    