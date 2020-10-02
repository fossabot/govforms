import * as React from "react";
import TextAreaFieldModel from "@Models/TextAreaFieldModel";
import FormField from "./FormField";
import { observer } from "mobx-react";


@observer
export default class TextAreaFormField extends FormField<TextAreaFieldModel> {

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.field.value = event.target.value;
  };

  constructor(props) {
    super(props);
  }

  private textAreaRef = React.createRef<HTMLTextAreaElement>();

  focus() {
    this.textAreaRef.current.focus();
    this.textAreaRef.current.scrollIntoView();
  }

  render() {

    return <div className={`govuk-form-group ${this.props.field.validationError ? "govuk-form-group--error" : ""}`}>

      {this.props.field.showLabel && (
        <h1 className="govuk-label-wrapper"><label className="govuk-label govuk-label--2" htmlFor={this.props.field.name}>
          {this.props.field.displayName}
        </label>
        </h1>
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

      <textarea ref={this.textAreaRef} className="govuk-textarea" id={this.props.field.name} name={this.props.field.name} rows={5} value={this.props.field.value} onChange={this.handleChange} aria-describedby={`${this.props.field.hintText ? (this.props.field.name + "-hint") : ""}`}></textarea>
    </div>;

  }
}