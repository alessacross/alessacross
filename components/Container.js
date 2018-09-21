import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./Home";
import First from "./First";
import Second from "./Second";
import Subpage from "./Subpage";
import Third from "./Third";

function Container({ location }) {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 450, exit: 250 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/first" component={First} />
              <Route exact path="/second" component={Second} />
              <Route
                path="/second/:uid"
                render={routeProps => <Subpage {...routeProps} />}
              />
              <Route path="/third" component={Third} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
    transform: translateY(15%);
    z-index: 10;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: all 450ms ease;
  }

  .fade-exit {
    opacity: 1;
    z-index: 5;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: all 250ms ease;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(Container);
