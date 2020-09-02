import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

import "./title-message.styles.css";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 50vh;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 75%;
  }
  div {
    color: white;
    font-family: "Arial", serif;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    letter-spacing: 7px;

    .main {
      font-size: 1.25em;
    }

    .sub {
      font-size: 27px;
      font-family: "TimesNewRoman", serif;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          <br />
          <span>
            <strong>John Altankhuyag</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: [
                "Stanford '22",
                "Computer Science",
                "Software Engineer",
              ],
              autoStart: true,
              loop: true,
              delay: 110,
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
