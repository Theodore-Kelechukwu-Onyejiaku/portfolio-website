import React from "react";

const Certification = () => {
  return (
    <div className="pro">
      <div className="project-section">
        <div id="project">
          {/* heading */}
          <div className="project-heading">
            <span>Check out my certifications</span>
            <h3>Notable Certifications</h3>
          </div>
        </div>
        <p>
          IBM Cloud Developer :{" "}
          <a href="https://www.credly.com/badges/1956e34e-d860-44fc-9f44-f6ab935fe1de">
            See Link
          </a>
        </p>
        <p>
          Freecodecamp Backend Development and API:{" "}
          <a href="https://www.freecodecamp.org/certification/javascriptar/back-end-development-and-apis">
            See Link
          </a>
        </p>
      </div>
    </div>
  );
};

export default Certification;
