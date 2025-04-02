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
            <p id="abstract">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae. Sit amet mauris commodo quis imperdiet. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Turpis tincidunt id aliquet risus feugiat in. Nibh sit amet commodo nulla facilisi nullam vehicula. Diam maecenas sed enim ut sem viverra. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Facilisis magna etiam tempor orci eu. Aliquet porttitor lacus luctus accumsan tortor posuere. Risus in hendrerit gravida rutrum quisque. Pretium fusce id velit ut. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Nam libero justo laoreet sit. Nam at lectus urna duis convallis convallis. Eu lobortis elementum nibh tellus molestie nunc non blandit. Tristique senectus et netus et malesuada fames ac turpis. Quam pellentesque nec nam aliquam sem et.</p>
            <p class="people">
              <span>Authors & Developers</span>
              <br>
              <span class="names">NC Habana · LF Heitz · DK Valerio</span>
            </p>
          </div>

          <div class="modal-footer about-btns">
            <a class="btn btn-primary" href="#" title="Coming soon!" target="_blank" rel="noreferrer noopener" role="button">WERI Technical Report</a>
            <!-- Dropdown for links to GHS maps libraries -->
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                WERI Map Series
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="https://guamhydrologicsurvey.uog.edu/index.php/mappfx/" title="MAppFx Library on GHS" target="_blank" rel="noreferrer noopener">
                MAppFx Library</a></li>
                <li><a class="dropdown-item" href="https://guamhydrologicsurvey.uog.edu/index.php/web-mapps/" title="Web MApps Library on GHS"
                target="_blank" rel="noreferrer noopener">Web MApps</a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    `
}