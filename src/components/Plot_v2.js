/*
Plot_v2.js 
*/

export function Plot(data) {
    console.log(data);

    const eps = [0, 10, 30, 50, 80, 95];

    const trace = {
        x: eps,
        y:eps.map(ep => data[`Q${ep}`]),
        type: 'scatter',
        name: 'Streamflow Duration Curve',
    };

    const layout = {
        title: {
            text: `Stream ID: ${data.ARCID}`,
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