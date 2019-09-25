import React from "react";
import "./Section.css";

// reactstrap components
import { Container, Col, Row } from "reactstrap";

// core components
import SectionCarousel from "./SectionCarousel"

const swiftMemImages = [
  {
    src: require("assets/img/NoMatches.png"),
    caption: "No Matches"
  },
  {
    src: require("assets/img/SomeMatches.png"),
    caption: "Some Matches"
  },
  {
    src: require("assets/img/UserWins.png"),
    caption: "Winner"
  }
];

const monTrackImages = [
  {
    src: require("assets/img/MonLogin.png"),
    caption: "Login"
  },
  {
    src: require("assets/img/MonDashboard.png"),
    caption: "Databoard"
  },
  {
    src: require("assets/img/MonDatabase.png"),
    caption: "Database"
  }
];

const htnImages = [
  {
    src: require("assets/img/MoveOutLogin.jpg"),
    caption: "Login"
  },
  {
    src: require("assets/img/MoveOutUserDisplay.jpg"),
    caption: "User Display"
  },
  {
    src: require("assets/img/MoveOutGraph.jpg"),
    caption: "Graphical Insight"
  },
  {
    src: require("assets/img/MoveOutChart.jpg"),
    caption: "Spending Breakdown"
  }
];

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
                    <Col md="7" sm="12">
                        <SectionCarousel
                          items = {htnImages}
                        />
                    </Col>
                    <Col md="5" sm="12">
                      <p>
                        PyTorch, Flask, React, Material-UI, Recharts.js, Bootstrap
                        <li>
                        Based on the data of 1,000 simulated users, determined if an individual is
                        financially capable to live on their own
                        </li>
                        <li>
                        Leveraged the TD Da Vinci API, PyTorch, scikit-learn and pandas for data
                        parsing and model training
                        </li>
                        <li>
                        Designed the web app interface using React, Material-UI and Bootstrap
                        frameworks
                        </li>
                      </p>
                    </Col>
                </Row>
            </div>
            <div className="project-section">
                <Row>
                    <Col md="7" sm="12">
                        <SectionCarousel
                          items = {monTrackImages}
                        />
                    </Col>
                    <Col md="5" sm="12">
                      <p>
                        MySQL, express.js, Axios, React
                        <li>
                        Developed an interface that allows users to track their purchases, displaying
                        purchased item, price, quantity and purchased date
                        </li>
                        <li>
                        Used MySQL for the backend database along with express.js and Node.js to
                        create a RESTful API
                        </li>
                      </p>
                    </Col>
                </Row>
            </div>
            <div className="project-section">
                <Row>
                    <Col md="7" sm="12">
                        <SectionCarousel
                          items = {swiftMemImages}
                        />
                    </Col>
                    <Col md="5" sm="12">
                      <p>
                          Swift
                          <li>
                          Memory matching IOS application, challenged users to recall card 
                          placement and match by design
                          </li>
                          <li>
                          Used Shopify API to obtain product images used for cards
                          </li>
                          <li>
                          Implemented game logic with object-oriented programming to create 
                          game animation, card matches, and game win conditions
                          </li>
                        </p>
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
