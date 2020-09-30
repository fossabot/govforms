import IFieldModel from "@Models/IFieldModel";
import * as React from "react";
import Form from "@Components/Form";
import ITextFieldModel from "@Models/ITextFieldModel";
import ICheckboxFieldModel from "@Models/ICheckboxFieldModel";


export interface IProps {
    field: ICheckboxFieldModel;
}

export default class CheckboxFormField extends React.Component<IProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {

        return <div className="govuk-form-group">
        <fieldset className="govuk-fieldset" aria-describedby={this.props.field.props.dataName + "-hint"}>
          {this.props.field.props.labelPosition != "hideLabel" && (
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
              <h1 className="govuk-fieldset__heading">
                {this.props.field.props.label}
              </h1>
            </legend>
          )}
          <div className="govuk-checkboxes">
            {this.props.field.props.listOfValues.map((v,i)=> {
              return <div key={v.value} className="govuk-checkboxes__item">
              <input className="govuk-checkboxes__input" id={this.props.field.props.dataName + "-" + i} name={this.props.field.props.dataName} type="checkbox" value={v.value}/>
              <label className="govuk-label govuk-checkboxes__label" htmlFor={this.props.field.props.dataName + "-" + i}>
                {v.label}
              </label>
            </div>
            })}
            
          </div>
      
        </fieldset>
      </div>;
                  
    
    }
}