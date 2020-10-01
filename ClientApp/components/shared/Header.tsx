import React, { useState } from "react";
import { withRouter } from "react-router";
import { Redirect, NavLink } from "react-router-dom";
import SessionManager from "@Core/session";
import {Helmet} from "react-helmet"

export default class Header extends React.Component<{}, {title: string}, {}>  {

    constructor(props) {
      super(props)
      this.state = {title: ""};
    }

    render() {
    return <header className="govuk-header " role="banner" data-module="govuk-header">
    <div className="govuk-header__container govuk-width-container">
      <div className="govuk-header__logo">
        <a href="#" className="govuk-header__link govuk-header__link--homepage">
          <span className="govuk-header__logotype">
            <span className="govuk-header__logotype-text">
              GOVFORMS
            </span>
          </span>
        </a>
      </div>
      <div className="govuk-header__content">
    
    <div className="govuk-header__link govuk-header__link--service-name">
      <Helmet onChangeClientState={(newState) => this.setState({ title: newState.title })} />
      {this.state.title}
    </div>
    
    
    </div>
    </div>
  </header>;
    }
}

