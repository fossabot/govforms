import * as React from "react";
import Form from "@Components/Form";
import IFFCheckboxFieldModel from "@Models/firmstep/IFFCheckboxFieldModel";
import CheckboxFieldModel from "@Models/CheckboxFieldModel";
import FormField from "./FormField";
import { observer } from "mobx-react";
import MultiCheckboxFieldModel from "@Models/MultiCheckboxFieldModel";


@observer
export default class MultiCheckboxFormField extends FormField<MultiCheckboxFieldModel> {
  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && !this.props.field.value.includes(event.target.value)) {
      this.props.field.value.push(event.target.value);
    } else if (!event.target.checked && this.props.field.value.includes(event.target.value)) {
      this.props.field.value.splice(this.props.field.value.indexOf(event.target.value));
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

    return <div className={`govuk-form-group ${this.props.field.validationError ? "govuk-form-group--error" : ""}`}>
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

        <div className="govuk-checkboxes">
          {this.props.field.choices.map((v, i) => {
            return <div ref={this.divRef} key={v.value} className="govuk-checkboxes__item">
              <input className="govuk-checkboxes__input" id={this.props.field.name + "-" + i} name={this.props.field.name} type="checkbox" value={v.value} checked={this.props.field.value.includes(v.value)} onChange={this.handleChange} />
              <label className="govuk-label govuk-checkboxes__label" htmlFor={this.props.field.name + "-" + i}>
                {v.label}
              </label>
            </div>
          })}

        </div>

      </fieldset>
    </div>;


  }
}