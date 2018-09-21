import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Subpage extends React.Component {
  render() {
    return (
      <Wrapper>
        <span>{this.props.match.params.uid}</span>
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

export default Subpage;
