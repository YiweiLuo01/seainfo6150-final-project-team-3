import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import EnrollConfirmation from "../EnrollConfirmation/EnrollConfirmation";
import EnrollForm from "../EnrollForm/EnrollForm";

import style from "./EnrollPage.module.css";

class EnrollPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null,
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      form: e.target
    });
  };

  render() {
    return (
      <div className={style.enrollPage}>
        <p className={style.title}>{this.props.degree.title}</p>
        {this.state.form ? (
          <EnrollConfirmation form={this.state.form} />
        ) : (
          <EnrollForm onSubmit={this.onSubmit} degrees={this.props.degrees} crtDegree={this.props.degree.title}/>
        )}
      </div>
    );
  }
}

EnrollPage.propTypes = {
  degree: PropTypes.object.isRequired
}
export default withRouter(EnrollPage);
