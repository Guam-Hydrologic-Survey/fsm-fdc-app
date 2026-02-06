/* 
About.js
Parameters: "element" - an HTML element with ID for about modal
Return: none
*/

export function About(element) {
  element.innerHTML = /*html*/
  `
  <div class="modal fade" id="about" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">

          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">About</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <!--<span class="weri-tr-title" id="weri-tr-num">WERI Technical Report No. ###</span>
            <br>-->
            <span class="weri-tr-title" id="weri-tr-text">MAppFx: Pohnpei and Kosrae, FSM - Streamflow Duration Curves</span>
            <br><br>
            <p id="abstract">
            Reliable and affordable energy is critical for economic development and quality of life, especially in developing regions like Kosrae and Pohnpei in the Federated States of Micronesia (FSM). Both islands rely almost entirely on imported fossil fuels for electricity—an expensive, non-renewable, and environmentally harmful energy source. As fuel prices rise, there is growing interest in alternative energy solutions. Given the islands’ steep terrain and abundant surface water, run-of-river hydropower presents a promising, low-impact, and cost-effective alternative.
            <br><br>
            Run-of-river hydropower requires accurate information about streamflow variability to assess feasibility. However, FSM’s stream gaging network has been inactive for decades, leaving most potential hydropower sites without direct flow measurements. To address this, the project developed a method to estimate flow duration curves at ungaged sites on both Kosrae and Pohnpei.
            <br><br>
            Major streams were divided into hydrologically similar reaches using detailed Geographic Information System (GIS) mapping data from the Water and Environmental Research Institute (WERI). Statistical and analytical techniques were applied to existing streamflow records and physical stream characteristics to estimate average flows for each reach.
            <br><br>
            The resulting data have been integrated into WERI’s MAppFx platform, a suite of interactive data visualization tools hosted on the Guam Hydrologic Survey website. These tools allow users to explore streamflow characteristics and identify potential hydropower sites using interactive maps and supporting datasets. MAppFx enhances accessibility for local planners and stakeholders, making hydrologic data both user-friendly and actionable for decision-making.
            <br><br>
            This integrated approach provides a practical foundation for advancing sustainable energy planning in Kosrae and Pohnpei by leveraging local water resources and modern geospatial tools to support hydropower development and energy independence.
            </p>
            <p class="people">
              <span>Authors & Developers</span>
              <br>
              <span class="names">NC Habana · LF Heitz · DK Valerio</span>
            </p>
          </div>

          <div class="modal-footer about-btns">
            <div class="btn-group">
              <a class="btn btn-primary" title="Coming soon!" href="https://guamhydrologicsurvey.uog.edu/2025/11/07/mappfx-pohnpei-kosrae-fsm-streamflow-duration-curves/" target="_blank" rel="noreferrer noopener" role="button">WERI Technical Report</a>
              <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" title="View associated technical reports">
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul class="dropdown-menu">
                <li class="dropdown-item">Associated Technical Reports</li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="https://weri-cdn.uog.edu/wp-content/PDFs/TRs/WERI%20TR%20129%20-%20Heitz%20et%20al%202010.pdf" target="_blank" rel="noreferrer noopener" title="Prediction of Flow Duration Curves for Use in Hydropower Analysis at Ungaged Sites in Pohnpei, FSM">WERI TR 129 (Heitz & Khosrowpanah, 2010)</a></li>
                <li><a class="dropdown-item" href="https://weri-cdn.uog.edu/wp-content/PDFs/TRs/WERI%20TR%20137-%20Heitz%20et%20al%202012.pdf" target="_blank" rel="noreferrer noopener" title="Prediction of Flow Duration Curves for Use in Hydropower Analysis at Ungaged Sites in Kosrae, FSM">WERI TR 137 (Heitz & Khosrowpanah, 2012)</a></li>
              </ul>
            </div>
            <!-- Dropdown for links to GHS maps libraries -->
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                WERI Map Series
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="https://guamhydrologicsurvey.uog.edu/mappfx-library/" title="MAppFx Library on GHS" target="_blank" rel="noreferrer noopener">
                MAppFx Library</a></li>
                <li><a class="dropdown-item" href="https://guamhydrologicsurvey.uog.edu/web-mapps-library/" title="Web MApps Library on GHS"
                target="_blank" rel="noreferrer noopener">Web MApps</a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    `
}