/* 
Modal.js
*/

export function Modal(container) {
    container.innerHTML = /*html*/ `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Streamflow Duration Curve</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body plot-modal-body">
                <div id="data">
                    <h5>Data Table</h5>
                    <table class="table table-striped table-hover">
                    <!-- 
                    <table class="table table-bordered">-->
                    <!--
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                        </tr>
                        </thead> -->
                        <tbody>
                        <tr>
                            <th scope="row">Q0</th>
                            <td>Number</td>
                        </tr>
                        <tr>
                            <th scope="row">Q10</th>
                            <td>Number</td>
                        </tr>
                        <tr>
                            <th scope="row">Q30</th>
                            <td>Number</td>
                        </tr>
                        <tr>
                            <th scope="row">Q50</th>
                            <td>Number</td>
                        </tr>
                        <tr>
                            <th scope="row">Q80</th>
                            <td>Number</td>
                        </tr>
                        <tr>
                            <th scope="row">Q95</th>
                            <td>Number</td>
                        </tr>
                        <tr>
                            <th scope="row">Q Avg</th>
                            <td>Number</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div id="plot"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    `;
}