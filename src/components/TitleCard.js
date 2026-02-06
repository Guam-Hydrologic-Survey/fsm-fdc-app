/*
TitleCard.js
*/

export function TitleCard(map) {

    // update path to title card img 
    const img_path = "./src/assets/WERI MAppFx_Title Card_FSM FDC_v1.png";

    const mapTitle = L.control({position: 'topleft'});

    mapTitle.onAdd =  function(map) {
        this._div = L.DomUtil.create('div', 'mapTitle'); 
        this._div.innerHTML = `<img src="${img_path}" height="150">`;
        return this._div;
    };

    mapTitle.addTo(map);
}