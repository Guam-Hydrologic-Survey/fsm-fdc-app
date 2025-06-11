/*
Table.js
*/

export function Table(data) {

    // [0, 10, 30, 50, 80, 95, 'AVG'].map(ep => `Q${ep}: ${feature.properties[`Q${ep}`]
    const container = document.getElementById('data');
    container.innerHTML = /*html*/ `
    <h5>Data Table</h5>
    <table class="table table-striped table-bordered table-hover">
        <tbody>
            <tr>
                <th scope="row">Q0</th>
                <td>${data.Q0}</td>
            </tr>
            <tr>
                <th scope="row">Q10</th>
                <td>${data.Q10}</td>
            </tr>
            <tr>
                <th scope="row">Q30</th>
                <td>${data.Q30}</td>
            </tr>
            <tr>
                <th scope="row">Q50</th>
                <td>${data.Q50}</td>
            </tr>
            <tr>
                <th scope="row">Q80</th>
                <td>${data.Q80}</td>
            </tr>
            <tr>
                <th scope="row">Q95</th>
                <td>${data.Q95}</td>
            </tr>
            <tr>
                <th scope="row">Q Avg</th>
                <td>${data.QAVG}</td>
            </tr>
        </tbody>
    </table>
    `;
}
