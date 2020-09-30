import IFieldModel from "@Models/IFieldModel";
import IFormModel from "@Models/IFormModel";
import * as React from "react";
import Form from "@Components/Form";
import IHtmlFieldModel from "@Models/IHtmlFieldModel";


export interface IProps {
    field: IHtmlFieldModel;
}

export default class HtmlFormField extends React.Component<IProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.field.props.content.indexOf("$") == -1) {
            return <div dangerouslySetInnerHTML={{__html:this.props.field.props.content}}></div>
        }

        return "";
                  
    
    }
}