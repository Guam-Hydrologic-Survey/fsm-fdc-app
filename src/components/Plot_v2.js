/*
Plot_v2.js 
*/

export function Plot(island, data) {
    console.log(data);

    const eps = [0, 10, 30, 50, 80, 95];

    const trace = {
        x: eps,
        y:eps.map(ep => data[`Q${ep}`]),
        type: 'scatter',
        name: `${island} Streamflow Duration Curve`,
    };

    // handle different property names for IDs
    let streamId = "";

    if (data.ARCID != null) {
        streamId = data.ARCID; // use this for Pohnpei
    } else { streamId = data.ID; } // use this for Kosrae 

    const layout = {
        title: {
            text: `${island} Stream ID: ${streamId}`,
            font: {
                size: 20,
            }
        },
        xaxis: {
            title: 'Exceedance Probability (%)',
            nticks: 50,
            range: [0, 100],
        },
        yaxis: {
            title: 'Discharge (cfs)',
            type: 'log',
        }
    };

    Plotly.newPlot('plot', [trace], layout);
}