import IFieldModel from "@Models/IFieldModel";
import * as React from "react";
import Form from "@Components/Form";
import ITextFieldModel from "@Models/ITextFieldModel";


export interface IProps {
    field: ITextFieldModel;
}

export default class TextFormField extends React.Component<IProps, {}> {

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

        <input className="govuk-input" id={this.props.field.props.dataName} name={this.props.field.props.dataName} type="text"/>
      </div>
                  
    
    }
}