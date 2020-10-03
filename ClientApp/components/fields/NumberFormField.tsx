import * as React from "react";
import NumberFieldModel from "@Models/NumberFieldModel";
import { observer } from 'mobx-react';
import FormField from "./FormField";



@observer
export default class NumberFormField extends FormField<NumberFieldModel> {

  constructor(props) {
    super(props);

  }

  focus(): void {
    this.inputRef.current.focus();
    this.inputRef.current.scrollIntoView();
  }

  private inputRef = React.createRef() as React.RefObject<HTMLInputElement>;

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.field.value = parseFloat(event.target.value);
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

        { this.props.field.hintText && (
          <div id="event-name-hint" className="govuk-hint">
            {this.props.field.hintText}
          </div>
        )}


        {this.props.field.validationError && (
          <span id={this.props.field.name + "-error"} className="govuk-error-message">
            <span className="govuk-visually-hidden">Error:</span> {this.props.field.validationError}
          </span>
        )}

        <div className="govuk-input__wrapper">
          {this.props.field.prefix &&
            <div className="govuk-input__prefix" aria-hidden="true">{this.props.field.prefix}</div>
          }
          <input
            className={`govuk-input ${this.props.field.width ? ("govuk-input--width-" + this.props.field.width) : ""}`}
            ref={this.inputRef}
            id={this.props.field.name}
            name={this.props.field.name}
            type="text"
            value={this.props.field.value ?? ""}
            onChange={this.handleChange}
            aria-describedby={`${this.props.field.hintText ? (this.props.field.name + "-hint") : ""} ${this.props.field.validationError ? (this.props.field.name + "-error") : ""}`}
            spellCheck={false}
            pattern={this.props.field.decimalPlaces === 0 ? "[0-9]*}" : undefined} inputMode={this.props.field.decimalPlaces === 0 ? "numeric" : undefined}
          />
          {this.props.field.suffix &&
            <div className="govuk-input__suffix" aria-hidden="true">{this.props.field.suffix}</div>
          }
        </div>

      </div>
    );


  }
}