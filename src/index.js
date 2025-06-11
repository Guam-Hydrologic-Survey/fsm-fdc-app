/* 
index.js 
Description: Entry point for project. Appends all components to #app in index.html. 
*/

// components 
import { About } from "./components/About.js";
import { FullscreenModal } from "./components/FullscreenModal.js";
import { NavBar } from "./components/NavBar.js";
import { LMap } from "./components/LMap.js";
import { Modal } from "./components/Modal.js";

document.getElementById("app").innerHTML = /*html*/ 
`
    <div id="nav-bar"></div>
    <div id="map"></div>
    <div id="info"></div>
    <div id="notif"></div>
    <div id="multiple-plots"></div>
    <div id="side-panel"></div>
    <div id="plot-modal"></div>
    <div id="island-zoom-toast"></div>
    <div id="selection-view"></div>
`

NavBar(document.getElementById("nav-bar"));
About(document.getElementById("info"));
FullscreenModal(document.getElementById("multiple-plots"));
Modal(document.getElementById('plot-modal'));
LMap(document.getElementById("map"));