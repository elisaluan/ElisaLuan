import React from "react";
import "./Section.css";

// reactstrap components
import { Container, Col, Row } from "reactstrap";

// core components
import SectionCarousel from "./SectionCarousel"

function SectionProjects() {
  return (
    <>
      <div className="">
        <div className="section-projects">
          <Container>
            <div className="title">
                <h1>{"<Projects />"}</h1>
            </div>
            <div className="project-section">
                <Row>
                    <Col md="8" sm="12">
                        <SectionCarousel/>
                    </Col>
                    <Col md="4" sm="12">
                    <p>job explanation here</p>
                    </Col>
                </Row>
            </div>
            <div className="project-section">
                <Row>
                    <Col md="8" sm="12">
                        <SectionCarousel/>
                    </Col>
                    <Col md="4" sm="12">
                    <p>job explanation here</p>
                    </Col>
                </Row>
            </div>
            <div className="project-section">
                <Row>
                    <Col md="8" sm="12">
                        <SectionCarousel/>
                    </Col>
                    <Col md="4" sm="12">
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

export default SectionProjects;
