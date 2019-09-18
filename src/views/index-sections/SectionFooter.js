/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionFooter() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Get In Touch!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <h4>You can find me here ...</h4>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="linkedin-sharrre btn-round"
                color="linkedin-bg"
                href="https://www.linkedin.com/in/elisaluan/"
                id="tooltip3373767"
                onClick={e => e.preventDefault()}
              >
                <i className="fa fa-linkedin" /> LinkedIn
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip3373767">
                Link Me!
              </UncontrolledTooltip>
              <Button
                className="sharrre btn-round ml-2"
                color="github-bg"
                href="https://github.com/elisaluan"
                target="_blank"
                id="tooltip864353654"
              >
                <i className="fa fa-github" /> GitHub
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip864353654">
                Star on Github
              </UncontrolledTooltip>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <br/>
              <p>Or by email at <a href="mailto:elisaluan00@gmail.com">elisaluan00@gmail.com</a></p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionFooter;
