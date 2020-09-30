import IFieldModel from "@Models/IFieldModel";
import * as React from "react";
import Form from "@Components/Form";
import ITextAreaFieldModel from "@Models/ITextAreaFieldModel";


export interface IProps {
  field: ITextAreaFieldModel;
}

export default class TextAreaFormField extends React.Component<IProps, {}> {

  constructor(props) {
    super(props);
  }

  render() {

    return <div className="govuk-form-group">

      {this.props.field.props.labelPosition != "hideLabel" && (
        <h1 className="govuk-label-wrapper"><label className="govuk-label govuk-label--l" htmlFor={this.props.field.props.dataName}>
          {this.props.field.props.label}
        </label>
        </h1>
      )}

      <textarea className="govuk-textarea" id={this.props.field.props.dataName} name={this.props.field.props.dataName} rows={5}></textarea>
    </div>;

  }
}