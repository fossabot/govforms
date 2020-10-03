import FieldModel from "@Models/FieldModel";
import UnsupportedFieldModel from "@Models/UnsupportedFieldModel";
import { observer } from "mobx-react";
import React from "react";
import { Component } from "react";
import { render } from "react-dom";
import FormField from "./FormField";

@observer
export default class UnsupportedFormField extends FormField<UnsupportedFieldModel> {
  focus(): void {
    this.elementRef.current.focus();
    this.elementRef.current.scrollIntoView();
  }

  private elementRef = React.createRef() as React.RefObject<HTMLDivElement>;

  render() {
    return <div ref={this.elementRef} className={`govuk-form-group ${this.props.field.validationError ? "govuk-form-group--error" : ""}`}>
      {this.props.field.showLabel && (
        <h1 className="govuk-label-wrapper"><label className="govuk-label govuk-label--2" htmlFor={this.props.field.name}>
          {this.props.field.displayName}
        </label>
        </h1>
      )}

      {this.props.field.validationError ? (
        <span id={this.props.field.name + "-error"} className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span> {this.props.field.validationError}
        </span>
      ) : <div>{this.props.field.details}</div>}


    </div>
  }
}
