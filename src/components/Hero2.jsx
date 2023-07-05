import React from "react";
import "./Hero2.scss";

const Hero2 = () => {
  const backgroundImageUrl = 'url("../assets/images/carousel-1.jpg")';

  return (
    <div class="page-header clear-filter" filter-color="orange">
      <div
        class="page-header-image"
        data-parallax="true"
        style={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          /* Additional styling properties */
        }}
      ></div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div class="row justify-content-center">
            <div class="col-12 col-lg-10">
              <h5 class="text-light text-uppercase mb-3 animated slideInDown">
                Welcome to Apex
              </h5>
              <h1 class="display-2 text-light mb-3 animated slideInDown">
                A Construction & Renovation Company
              </h1>
              <ol class="breadcrumb mb-4 pb-2 items-center justify-content-center">
                <li class="breadcrumb-item fs-5 text-light">Commercial</li>
                <li class="breadcrumb-item fs-5 text-light">Residential</li>
                <li class="breadcrumb-item fs-5 text-light">Industrial</li>
              </ol>
              <a href="" class="btn  py-3 px-5" id="gold">
                More Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
