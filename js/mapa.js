      lugar = new nDialogo({
        background: true,
        backgroundCloseable: false,
        btnClose: true,
        width: "300px",
        height: "200px",
      });
      var container = document.getElementById("popup");//esto hace ver e mapa
      var overlay = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
          duration: 250,
        },
      });
      
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
        zoom: 14,
        //minZoom:11
      });
      var map = new ol.Map({
        interactions: ol.interaction.defaults
          .defaults()
          ,
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
      

      const dibujaTraza = (servicio)=>{
        fetch('./js/traza.json?servicio='+servicio)
        .then(a=>a.json())
        .then(res=>{
          if(res.ok){
            coordenadas = res.data.traza.map(a=>[a[0],a[1]]);

            //centra el mapa a la primera parada
            // setTimeout(() => {
              //centra el mapa a la primer parada
          //     const a = map.getSize();
          //     map.getView().centerOn(
          //         [
          //             parseFloat(res.data.traza.map(e=>[e[0]['lon'],e[1]['lat']])),
                     
          //             console.log(res.data.traza)
          //         ],
          //         a,
          //         [a[0]/2, a[1]/2]
          //     );
          //     map.getView().setZoom(14);
          // }, 1000);
//aqui termina el centrar parada setime



            
            traza = new ol.Feature({
                geometry: new ol.geom.LineString(coordenadas)
            });
            var vista = new ol.View({
              projection: "EPSG:4326",
              center: [coordenadas],
              zoom: 14,
              //minZoom:11
            });

            Traza.clear();
            Traza.addFeature(traza);

            dibujaParadas(res.data.paradas);

            //dibuja bandera
            nueva_bandera = new ol.Feature({
              geometry: new ol.geom.Point([res.data.paradas[0].lon, res.data.paradas[0].lat]),
            });
            
            Banderas.addFeature(nueva_bandera);
            //esto para centrar las coordenadas
            lon_min = coordenadas.reduce((acc,val)=>{
              if (acc > val[0]){
                return val[0];
              }
              return acc;
            },coordenadas[0][0]);
            lon_max = coordenadas.reduce((acc,val)=>{
              if (acc < val[0]){
                return val[0];
              }
              return acc;
            },coordenadas[0][0]);
            lat_min = coordenadas.reduce((acc,val)=>{
              if (acc > val[1]){
                return val[1];
              }
              return acc;
            },coordenadas[0][1]);
            lat_max = coordenadas.reduce((acc,val)=>{
              if (acc < val[1]){
                return val[1];
              }
              return acc;
            },coordenadas[0][1]);
            
            extent = {
              min_lon:lon_min,
              min_lat:lat_min,
              max_lon:lon_max,
              max_lat:lat_max
            }
            set_extend(extent);
          }
        });
        

        // document.getElementById('map').style="display:none"
        let map= document.getElementById('map')
            map.classList.toggle('mapaTel')
            
            let cerrar=document.getElementById('closeMapa')
            cerrar.classList.toggle('cerrarX')
                }
              const verMapaTraza=(servicio)=>{
                dibujaTraza(servicio);
              }
              const dibujaParadas = (coord)=>{

                coord.forEach(parada=>{
                  lon = parada.lon;
                  lat = parada.lat;
                  dibujar_parada(lon,lat);
                });
      }
      
      // Esta funcion agrega los puntos de parada
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
                color: "#0080fe",
                width: 4,
              }),
            }),
          })
        );
        Puntos.addFeature(nuevo_punto);
      };

      map.on("click", function (evt) {
        var feature = map.forEachFeatureAtPixel(
          evt.pixel,
          (feature) => feature
        );
        container.innerHTML = "";
      });
    
      const set_extend = (contexto)=>{
        
        vista.fit(new ol.geom.LineString([
            [contexto.max_lon, contexto.max_lat],
            [contexto.min_lon, contexto.min_lat]
        ]), {
            padding: [80, 80, 80, 80]
        });
    }