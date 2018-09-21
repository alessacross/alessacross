import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const isActive = onActive => (match, location) => {
  if (match) {
    onActive(location);
  }
  return match;
};

class Navigation extends React.Component {
  constructor(props) {
    super();

    this.state = {
      subpage: false,
      currentPage: null
    };
  }

  isSubpage(path) {
    const param = /(\/second\/)(.+)/g;
    let find = path.match(param);
    if (find !== null) {
      this.setState({
        subpage: true
      });
    } else {
      this.setState({
        subpage: false
      });
    }
  }

  render() {
    const onActive = location => {
      if (this.state.currentPage !== location.pathname) {
        this.setState({ currentPage: location.pathname });
        this.isSubpage(location.pathname);
      }
    };
    return (
      <Wrapper>
        {this.state.subpage ? (
          <li>
            <NavLink to="/second" isActive={isActive(onActive)}>
              Back to Second
            </NavLink>
          </li>
        ) : (
          <ul>
            <li>
              <NavLink to="/" isActive={isActive(onActive)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/first" isActive={isActive(onActive)}>
                First
              </NavLink>
            </li>
            <li>
              <NavLink to="/second" isActive={isActive(onActive)}>
                Second
              </NavLink>
            </li>
            <li>
              <NavLink to="/third" isActive={isActive(onActive)}>
                Third
              </NavLink>
            </li>
          </ul>
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-left: 20px;

    a {
      text-decoration: none;
      font-size: 20px;
      color: #333;
    }
  }
`;

export default Navigation;
