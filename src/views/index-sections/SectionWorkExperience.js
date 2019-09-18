import React from "react";
import "./Section.css";

// reactstrap components
import { Container, Col, Row } from "reactstrap";

// core components
import SectionCarousel from "./SectionCarousel"

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
                <Row>
                    <Col md="7" sm="12">
                        <SectionCarousel/>
                    </Col>
                    <Col md="5" sm="12">
                    <p>job explanation here</p>
                    </Col>
                </Row>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionWorkExperience;
