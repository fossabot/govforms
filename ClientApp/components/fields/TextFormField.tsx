import * as React from "react";
import TextFieldModel from "@Models/TextFieldModel";
import { observer } from 'mobx-react';
import FormField from "./FormField";



@observer
export default class TextFormField extends FormField<TextFieldModel> {

  constructor(props) {
    super(props);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.field.value = event.target.value;
  };

  render() {

    return (
      <div className={`govuk-form-group ${this.props.field.validationError ? "govuk-form-group--error" : ""}`}>
        {this.props.field.showLabel && (
          <h1 className="govuk-label-wrapper"><label className="govuk-label govuk-label--2" htmlFor={this.props.field.name}>
            {this.props.field.displayName}
          </label>
          </h1>
        )}

          
          {this.props.field.validationError && (
            <span id={this.props.field.name + "-error"} className="govuk-error-message">
              <span className="govuk-visually-hidden">Error:</span> {this.props.field.validationError}
            </span>
          )}

        <input className="govuk-input" id={this.props.field.name} name={this.props.field.name} type="text" value={this.props.field.value} onChange={this.handleChange} aria-describedby={`${this.props.field.validationError ? (this.props.field.name + "-error") : ""}`} />
      </div>
    );


  }
}