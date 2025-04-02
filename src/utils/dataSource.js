/* 
dataSource.js
Description: 
Return: 
*/

// update this with data set; must be full path, starting from the root directory 
const geoJsonUrl = "./src/data/tests/dummy_data.json";

const base = './src/data/';

const kosraeData = {
    gages: base + '/kosrae/KOSRAE GAGES WGS84 UTM.json',
    rivers: base + '/kosrae/KOSRAE RIVERS WGS84 UTM 2.json',
};

const pohnpeiData = {
    roads: base + '/pohnpei/POHNPEI_RDS_UTM.json',
    streams: base + '/pohnpei/STREAMS.json',
    gages: base + '/pohnpei/USGS_GAGES.json',
}

export { geoJsonUrl, kosraeData, pohnpeiData }