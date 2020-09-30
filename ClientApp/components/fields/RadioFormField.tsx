import IFieldModel from "@Models/IFieldModel";
import * as React from "react";
import Form from "@Components/Form";
import ITextFieldModel from "@Models/ITextFieldModel";
import IRadioFieldModel from "@Models/IRadioFieldModel";


export interface IProps {
    field: IRadioFieldModel;
}

export default class RadioFormField extends React.Component<IProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {

        return (
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset" aria-describedby={this.props.field.props.dataName + "-hint"}>

            {this.props.field.props.labelPosition != "hideLabel" && (
              <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                <h1 className="govuk-fieldset__heading">
                  {this.props.field.props.label}
                </h1>
              </legend>
            )}
            <div className="govuk-radios govuk-radios--inline">


              
                  {this.props.field.props.listOfValues.map((v, i) => (
                      <div key={v.value} className="govuk-radios__item">
                      <input className="govuk-radios__input" id={this.props.field.props.dataName + "_" + i} name={this.props.field.props.dataName} type="radio" value={v.value}/>
                      <label className="govuk-label govuk-radios__label" htmlFor={this.props.field.props.dataName + "_" + i}>
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