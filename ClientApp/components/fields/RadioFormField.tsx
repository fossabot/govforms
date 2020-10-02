import * as React from "react";
import FormField from "./FormField";
import RadioFieldModel from "@Models/RadioFieldModel";
import { ChangeEvent } from "react";
import { observer } from "mobx-react";


@observer
export default class RadioFormField extends FormField<RadioFieldModel> {
  private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      this.props.field.value = event.target.value;
    }
  };

  constructor(props) {
    super(props);
  }

  private divRef = React.createRef<HTMLDivElement>();

  focus() {
    this.divRef.current.focus();
    this.divRef.current.scrollIntoView();
  }

  render() {

    return (
      <div className={`govuk-form-group ${this.props.field.validationError ? "govuk-form-group--error" : ""}`}>
        <fieldset className="govuk-fieldset" aria-describedby={`${this.props.field.hintText ? (this.props.field.name + "-hint") : ""}`}>

          {this.props.field.showLabel && (
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--2">
              <h1 className="govuk-fieldset__heading">
                {this.props.field.displayName}
              </h1>
            </legend>
          )}

          {this.props.field.hintText && (
            <div id="event-name-hint" className="govuk-hint">
              {this.props.field.hintText}
            </div>
          )}

          {this.props.field.validationError && (
            <span id={this.props.field.name + "-error"} className="govuk-error-message">
              <span className="govuk-visually-hidden">Error:</span> {this.props.field.validationError}
            </span>
          )}

          <div ref={this.divRef} className="govuk-radios govuk-radios--inline">

            {this.props.field.choices.map((v, i) => (
              <div key={v.value} className="govuk-radios__item">
                <input className="govuk-radios__input" id={this.props.field.name + "_" + i} name={this.props.field.name} type="radio" value={v.value} checked={this.props.field.value === v.value} onChange={this.handleChange} />
                <label className="govuk-label govuk-radios__label" htmlFor={this.props.field.name + "_" + i}>
                  {v.label}
                </label>
              </div>
            )
            )}


          </div>

        </fieldset>
      </div>);


  }
}