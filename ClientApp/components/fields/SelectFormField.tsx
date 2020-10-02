import * as React from "react";
import FormField from "./FormField";
import SelectFieldModel from "@Models/SelectFieldModel";
import { ChangeEvent } from "react";
import { observer } from "mobx-react";
import { supportsGoWithoutReloadUsingHash } from "history/DOMUtils";


@observer
export default class SelectFormField extends FormField<SelectFieldModel> {
  private handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.props.field.value = event.target.value;
  };

  constructor(props) {
    super(props);
  }

  private selectRef = React.createRef<HTMLSelectElement>();

  focus() {
    this.selectRef.current.focus();
    this.selectRef.current.scrollIntoView();
  }

  render() {

    return (
      <div className="govuk-form-group">

        {this.props.field.showLabel && (
          <label className="govuk-label" htmlFor={this.props.field.name}>
            {this.props.field.displayName}
          </label>
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

        <select ref={this.selectRef} className="govuk-select" id={this.props.field.name} name={this.props.field.name}  value={this.props.field.value} onChange={this.handleChange} aria-describedby={`${this.props.field.hintText ? (this.props.field.name + "-hint") : ""}`}>

          {this.props.field.choices?.map(v => {
            return <option key={v.value} value={v.value}>{v.label}</option>
          })}
        </select>
      </div>);


  }
}