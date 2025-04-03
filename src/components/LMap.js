/* 
LMap.js 
Parameters: "element" - HTML element with ID containing Leaflet map
Return: none
*/

// components 
import { BaseLayers } from "./Baselayers.js";
import { Plot } from "./Plot_v2.js";

// utils 
import { kosraeData, pohnpeiData } from "../utils/dataSource.js";
import { Toast } from "./Toast_v2.js";

export function LMap(element) {

    const center = [6.17332365401505, 160.19439697265625]; // 6.85, 158.25
    const defaultZoom = 8;
    const maxZoom = 19; 

    // creates Leaflet map 
    const map = L.map(element, {
        center: center,
        zoom: defaultZoom,
        zoomControl: false,
    });

    const FSM = {
        Kosrae: { coords: [5.311475417249048, 162.97453880310061], zoom: 13 },
        Pohnpei: { coords: [6.903591547547428, 158.21943283081058], zoom: 12 },
    };

    const baseLayers = BaseLayers(map, maxZoom);

    const layerControl = L.control.layers(baseLayers, null, { position: "bottomright" });
    layerControl.addTo(map);

    const mapTitle = L.control({ position: 'topleft' });

    mapTitle.onAdd = function(map) {
        this._div = L.DomUtil.create('div', 'mapTitle'); 
        this._div.innerHTML = '<img src="./src/assets/WERI MAppFx_Title Card_FSM FDC_v1.png" height="120">';
        return this._div;
    };

    mapTitle.addTo(map);

    const zoomControl = L.control.zoom({
        // options: topleft, topright, bottomleft, bottomright
        position: 'bottomright'
    });
    zoomControl.addTo(map);

    // const kosrae = L.marker(FSM.Kosrae.coords).addTo(map).bindPopup('<b>Kosrae, FSM</b>');
    // const pohnpei = L.marker(FSM.Pohnpei.coords).addTo(map).bindPopup('<b>Pohnpei, FSM</b>');

    const kosrae = L.marker(FSM.Kosrae.coords);
    kosrae.addTo(map)
    .bindTooltip('Kosrae, FSM', { permanent: true, direction: 'bottom', offset: [-20, 40], className: 'fsm-island-tooltip' })
    .on('click', () => { kosraeView(map, FSM, kosrae, layerControl) });

    const pohnpei = L.marker(FSM.Pohnpei.coords);
    pohnpei.addTo(map)
    .bindTooltip('Pohnpei, FSM', { permanent: true, direction: 'bottom', offset: [-15, 50], className: 'fsm-island-tooltip' })
    .on('click', () => { pohnpeiView(map, FSM, pohnpei, layerControl) });

    const resetZoomBtn = L.easyButton('<img src="./src/assets/geo-fill.svg">', function() {
        map.setView(center, defaultZoom);
        // map.flyTo(center, defaultZoom);

        kosrae.addTo(map).bindTooltip('Kosrae, FSM', { permanent: true, direction: 'bottom', offset: [-20, 40], className: 'fsm-island-tooltip' });

        pohnpei.addTo(map).bindTooltip('Pohnpei, FSM', { permanent: true, direction: 'bottom', offset: [-15, 50], className: 'fsm-island-tooltip' });
        pohnpei.openTooltip();

    }, "Reset map view");

    const kosraeViewBtn = L.easyButton('<span class="easy-button-text">K</span>', 
        function() {
            // map.flyTo(FSM.Kosrae.coords, FSM.Kosrae.zoom);
            // // map.setView(FSM.Kosrae.coords, FSM.Kosrae.zoom);
            // if (map.hasLayer(kosrae)) { 
            //     map.removeLayer(kosrae);
            // } 
            // Toast('Kosrae');
            // kosraeMap(map, layerControl);
            kosraeView(map, FSM, kosrae, layerControl);
        }, "Fly to Kosrae");

    const pohnpeiViewBtn = L.easyButton('<span class="easy-button-text">P</span>', 
        function() {
            // map.setView(FSM.Pohnpei.coords, FSM.Pohnpei.zoom);
            // map.panTo(FSM.Pohnpei.coords, FSM.Pohnpei.zoom)
            // map.flyTo(FSM.Pohnpei.coords, FSM.Pohnpei.zoom);
            // if (map.hasLayer(pohnpei)) { 
            //     map.removeLayer(pohnpei);
            // } 
            // Toast('Pohnpei');
            // pohnpeiMap(map, layerControl);
            pohnpeiView(map, FSM, pohnpei, layerControl);
        }, "Fly to Pohnpei");

    const controlBar = L.easyBar([
        resetZoomBtn,
        kosraeViewBtn,
        pohnpeiViewBtn,
    ], { position: "bottomright" });

    controlBar.addTo(map);

    map.on('moveend', () => {
        let view = map.getCenter();
        let currentZoom = map.getZoom();
        console.log(`Center = [${view.lat}, ${view.lng}]    |    Zoom Level = ${currentZoom}`);
    });

    map.on('zoomend', () => {
        let view = map.getCenter();
        let currentZoom = map.getZoom();
        console.log(`Center = [${view.lat}, ${view.lng}]    |    Zoom Level = ${currentZoom}`);
    })

    // draw control bar
    var drawnFeatures = new L.FeatureGroup();
    map.addLayer(drawnFeatures);

    var drawControl = new L.Control.Draw({
        position: "bottomright",
        draw: {
            polyline: {
                allowIntersection: true,
                shapeOptions: {
                    color: "orange"
                }
            },
            polygon: {
                allowIntersection: false,
                showArea: true,
                showLength: true,
                shapeOptions: {
                    color: "purple",
                    clickable: true
                }
            },
            circle: {
                shapeOptions: {
                    shapeOptions: {
                        color: "blue",
                        clickable: true
                    }
                }
            },
            circlemarker: false,
            rectangle: {
                showArea: true,
                showLength: true,
                shapeOptions: {
                    color: "green",
                    clickable: true
                }
            },
            marker: false
        },
        edit: {
            featureGroup: drawnFeatures,
            remove: true,
        }
    });

    map.addControl(drawControl);

    map.on(L.Draw.Event.CREATED, function(event) {
        var layer = event.layer;
        drawnFeatures.addLayer(layer);
    });

    if (map.hasLayer(drawnFeatures)) {
        layerControl.addOverlay(drawnFeatures, "Drawings");
    } 

    // hides tooltip based on zoom level 
    map.on('zoomend', function(z) {
        var zoomLevel = map.getZoom();
        if (zoomLevel >= 15 ){
            [].forEach.call(document.querySelectorAll('.leaflet-tooltip'), function (t) {
                t.style.visibility = 'visible';
            });
        } else {
            [].forEach.call(document.querySelectorAll('.leaflet-tooltip'), function (t) {
                t.style.visibility = 'hidden';
            });
        }
    });
}

function kosraeView(map, FSM, kosrae, layerControl) {
    map.flyTo(FSM.Kosrae.coords, FSM.Kosrae.zoom);
    // map.setView(FSM.Kosrae.coords, FSM.Kosrae.zoom);
    if (map.hasLayer(kosrae)) { 
        map.removeLayer(kosrae);
    } 
    Toast('Kosrae');
    kosraeMap(map, layerControl);
}

function pohnpeiView(map, FSM, pohnpei, layerControl) {
    map.flyTo(FSM.Pohnpei.coords, FSM.Pohnpei.zoom);
    if (map.hasLayer(pohnpei)) { 
        map.removeLayer(pohnpei);
    } 
    Toast('Pohnpei');
    pohnpeiMap(map, layerControl);
}

function pohnpeiMap(map, layerControl) { 
    // TODO - hide json layers based on zoom level, add all streams, gages, roads to one layer group (resolve duplicates in layer control box), hide tooltips for usgs stream gage on map default view, fix plot, create toast component to show user which island they're on 
    getGages(map, layerControl, pohnpeiData.gages);
    getRoads(map, layerControl, pohnpeiData.roads);
    getStreams(map, layerControl, pohnpeiData.streams);
}

function kosraeMap(map, layerControl) {
    // TODO - hide json layers based on zoom level, change properties name so that they are the same (gage names/ids, etc.), fix plot 
    getGages(map, layerControl, kosraeData.gages);
    getStreams(map, layerControl, kosraeData.rivers);
}

function getGages(map, layerControl, path) {
    // const path = './src/data/pohnpei/USGS_GAGES.json';

    fetch(path)
    .then(response => response.json())
    .then(gages => {

        const getInfo = (feature, layer) => {
            layer.bindTooltip('USGS Stream Gage', { permanent: true, direction: 'bottom', offset: [0, 10], className: 'usgs-stream-gage-tooltip' });

            let info = '';

            if (path.toLowerCase().includes('pohnpei')) { // case for Pohnpei
                info = `<span align="center" style="font-weight: bold;">Stream Gage: ${feature.properties.gage_name.charAt(0).toUpperCase()}${feature.properties.gage_name.slice(1).toLowerCase()}<br>Stream Gage #: ${feature.properties.gage_num}</span>`;
            } else { // case for Kosrae
                info = `<span align="center" style="font-weight: bold;">Stream Gage: ${feature.properties.GAGE.charAt(0).toUpperCase()}${feature.properties.GAGE.slice(1).toLowerCase()}<br>Stream Gage #: ${feature.properties.GAGE_NUM}</span>`;
            }

            layer.bindPopup(info);
        }

        const data = L.geoJSON(gages, {
            pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 8,
                    fillColor: '#ccff33',
                    weight: 1,
                    fillOpacity: 1.0,
                    color: '#000',
                    opacity: 1.0,
                })
            },
            onEachFeature: getInfo,
        }).addTo(map);

        layerControl.addOverlay(data, "Gages");
    });
}

function getRoads(map, layerControl, path) {
    // const path = './src/data/pohnpei/POHNPEI_RDS_UTM.json';
    fetch(path)
    .then(response => response.json())
    .then(roads => {
        const data = L.geoJSON(roads, {
            style: function(feature) {
                return {
                    color: "#ff5733", // Line color
                    weight: 3,        // Line thickness
                    opacity: 0.8,     // Line opacity
                    // dashArray: "5, 5" 
                }
            }
        }).addTo(map);

        layerControl.addOverlay(data, "Roads");
    });
}

function getStreams(map, layerControl, path) {
    // const path = './src/data/pohnpei/STREAMS.json';
    fetch(path)
    .then(response => response.json())
    .then(streams => {

        const getInfo = (feature, layer) => {

            let streamName = ""
            if (path.toLowerCase().includes('pohnpei')) { // case for Pohnpei
                streamName = feature.properties.ARCID;
            } else { // case for Kosrae
                streamName = feature.properties.ID;
            }

            layer.bindPopup(`
            <div class="card text-center">
                <div class="card-header">
                    <h5>Stream ID: ${streamName}</h5>
                </div>
                <div class="card-body">
                    <p>${[0, 10, 30, 50, 80, 95, 'AVG'].map(ep => `Q${ep}: ${feature.properties[`Q${ep}`]}<br>`).join('')}</p>
                </div>
                <div class="card-footer text-body-secondary">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Plot FDC</button>
                </div>
            </div>
            `);

            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: a => Plot(a.target.feature.properties)
                // click: a => plotData = a.target.feature.properties, // TODO - add click functionality to view popup on click and set plot 
            });
        }

        streams = L.geoJSON(streams, { onEachFeature: getInfo }).addTo(map);
        layerControl.addOverlay(streams, "Streams");
    });
}

function highlightFeature(e) {
    let layer = e.target;

    layer.setStyle({
        weight: 5,
        color: 'white',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    };
}

function resetHighlight(e) {
    let layer = e.target;

    layer.setStyle({
        weight: 4,
        color: '#3386FA', // #0D6EFD
        dashArray: '',
        fillOpacity: 0.7
    });
}