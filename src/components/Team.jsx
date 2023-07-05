import React from "react";
import team1 from "../assets/images/team-1.jpg";

import team2 from "../assets/images/team-2.jpg";
import team3 from "../assets/images/team-3.jpg";

const Team = () => {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-end mb-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="border-start border-5 ps-4" id="goldborder">
                <h6 class="text-body text-uppercase mb-2">Our Team</h6>
                <h1 class="display-6 mb-0">Our Expert Worker</h1>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <p class="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative">
                <img class="img-fluid" src={team1} alt="" />
                <div class="team-text bg-white p-4">
                  <h5>Full Name</h5>
                  <span>Engineer</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="team-item position-relative">
                <img class="img-fluid" src={team2} alt="" />
                <div class="team-text bg-white p-4">
                  <h5>Full Name</h5>
                  <span>Engineer</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="team-item position-relative">
                <img class="img-fluid" src={team3} alt="" />
                <div class="team-text bg-white p-4">
                  <h5>Full Name</h5>
                  <span>Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
