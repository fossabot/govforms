import IFormModel from "@Models/IFormModel";
import * as React from "react";
import Form from "@Components/Form";
import ISubFormFieldModel from "@Models/ISubFormFieldModel";


export interface IProps {
    field: ISubFormFieldModel;
}

export default class SubFormField extends React.Component<IProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {

        return <Form form={this.props.field.props.subformDefinition as IFormModel} hideSectionTitles hideTitle={this.props.field.props.displayStyle === "summary"}/>
                  
    
    }
}