ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([143.623816, -45.150714, 150.294393, -38.962457]);
var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_Tasmania_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ec2-51-20-32-38.eu-north-1.compute.amazonaws.com:8080/geoserver/ows?version%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "tasmania",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Tasmania",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Tasmania_1, 0]);

lyr_EsriWorldImagery_0.setVisible(true);lyr_Tasmania_1.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_Tasmania_1];
