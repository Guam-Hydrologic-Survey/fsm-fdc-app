/*
Toast_v2.js
*/

export function Toast(island) {

    const element = document.getElementById('island-zoom-toast');

    element.innerHTML = /*html*/ `
    <div class="toast-container position-fixed bottom-0 start-0 p-3">
        <div id="liveToast" class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    <span style="font-size: 16px; font-family: 'Roboto Slab', serif; letter-spacing: 1px">Zoomed into ${island}</span>
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    </div>
    `;

    const toast = document.getElementById('liveToast');
    const toastNotif = bootstrap.Toast.getOrCreateInstance(toast);
    toastNotif.show();
}

