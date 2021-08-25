import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import ITZONE from "../../assets/img/experience/itzone.jpg";
import TIKTOK from "../../assets/img/experience/tiktok.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1
        style={{ color: "white" }}
        className="pt-3 text-center font-details-b pb-3"
      >
        Experience
      </h1>
      <Jumbotron className="jumbo-style">
        <Container id="xpContainer">
          <Tilt options={{ max: 10 }}>
            <Card>
              <Card.Header
                style={{ background: "#007dc5" }}
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={ITZONE}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body
                style={{
                  background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
                }}
                className="d-flex justify-content-center flex-column"
              >
                <div>
                  <Card.Title className="text-center">ITZONE LLC</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-left style">
                    <strong className="body-title-style">
                      Software Engeering Intern
                    </strong>
                    <br />
                    <br />
                    Developed & enhanced multiple features with
                    full customizability option across{" "}
                    <strong>HRM web platform</strong> used by{" "} multiple{" "}
                    <strong>top 10 companies</strong> in Mongolia. Designed and
                    built a <strong>Front-End interface</strong> with key features and
                    integrated it with back-end servers. Made major contributions
                    in deploying a full-scale product.
                    <br />
                    <br />
                    <strong>Technology:</strong> Python, C++, React.js, Node.js
                    <br />
                    <strong>Duration:</strong> Jul 2018 - Oct 2018 (ITZONE)
                    <br />
                    Jul 2019 - Oct 2019 (DigitalWorks)
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
          <Tilt options={{ max: 10 }}>
            <Card>
              <Card.Header
                style={{ background: "#000000" }}
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={TIKTOK}
                  alt="tiktok logo"
                />
              </Card.Header>
              <Card.Body
                style={{
                  background: "linear-gradient(to right, #EBE8FC, #C0AFE2)",
                }}
                className="d-flex justify-content-center flex-column"
              >
                <div>
                  <Card.Title className="text-center">
                    TIKTOK INC
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-left style">
                    <strong className="text-center body-title-style ">
                      Software Engineering Intern
                    </strong>
                    <br />
                    <br />
                    With focus on <strong>Backend Infrastructure</strong>, brought key improvements to enhance 
                    DevOps architecture through new tools, automated continuous testing, and 
                    disaster recovery. Designed and built a <strong>fully automated</strong> integration test coverage 
                    tool that is <strong>used daily by TikTok</strong> to monitor reliability across all its services.
                    <br />
                    <br />
                    <br />
                    <strong>Technology:</strong> Go, CDaaS, Git, Grafana
                    <br />
                    <strong>Duration:</strong> Jun 2021 - Sep 2021
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
          
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
