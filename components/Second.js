import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Second extends React.Component {
  render() {
    return (
      <Wrapper>
        <span>Second</span>
        <section>
          <ul>
            <li>
              <Link to="/second/subpage-one">Subpage One</Link>
            </li>
            <li>
              <Link to="/second/subpage-two">Subpage Two</Link>
            </li>
            <li>
              <Link to="/second/subpage-three">Subpage Three</Link>
            </li>
          </ul>
        </section>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #00bfff;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default Second;
