import IFieldModel from "@Models/IFieldModel";
import * as React from "react";
import Form from "@Components/Form";
import ITextFieldModel from "@Models/ITextFieldModel";
import ICheckboxFieldModel from "@Models/ICheckboxFieldModel";
import ISelectFieldModel from "@Models/ISelectFieldModel";


export interface IProps {
    field: ISelectFieldModel;
}

export default class SelectFormField extends React.Component<IProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {

        return (
          <div className="govuk-form-group">

          {this.props.field.props.labelPosition != "hideLabel" && (
            <label className="govuk-label" htmlFor={this.props.field.props.dataName}>
              {this.props.field.props.label}
            </label>
          )}

          <select className="govuk-select" id={this.props.field.props.dataName} name={this.props.field.props.dataName}>

            {this.props.field.props.listOfValues?.map(v => {
              return <option key={v.value} value={v.value}>{v.label}</option>
            })}
          </select>
      </div>);
                  
    
    }
}