import React from "react";
import "./Section.css";

// reactstrap components
import { Container, Col, Row } from "reactstrap";


function SectionWorkExperience() {
  return (
    <>
      <div className="">
        <div className="section-work">
          <Container>
            <div className="title">
                <h1>{"<WorkExperience />"}</h1>
            </div>
            <div className="work-section">
                <div class="row">
                  <div class="company-name col">
                    ZHY Interactive
                  </div>
                  <div class="job-position col">
                    Full Stack Developer
                  </div>
                  <div class="position-date col">
                    Jun to Aug 2019
                  </div>
                </div>
                <div class="row">
                  <p>
                  <b>Created the Royaltymine platform, a musical start-up, from the ground up </b> <br/>
                  React, Redux, Bootstrap, Ant Design, MongoDB, NoSQL
                    <li>
                    Implemented new product features from design inception to code deployment,
                    leveraging the React/Redux framework using JavaScript/HTML/CSS
                    </li>
                    <li>
                    Created a flexible, and scalable service using MongoDB and replica sets
                    </li>
                    <li>
                    Designed and executed a RESTful API to send data, such as videos, pictures,
                    and user information between the front and backend interfaces
                    </li>
                    <li>
                    Wrote modular React and Bootstrap styled components to make code mobile
                    responsive, resulting in an increase in user mobile session duration by 86%
                    </li>
                  </p>
                </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionWorkExperience;
