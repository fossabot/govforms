import * as React from "react";
import IHtmlFieldModel from "@Models/HtmlFieldModel";
import FormField from "./FormField";
import HtmlFieldModel from "@Models/HtmlFieldModel";
import { observer } from "mobx-react";

@observer
export default class HtmlFormField extends FormField<HtmlFieldModel> {

    constructor(props) {
        super(props);
    }

    private divRef = React.createRef<HTMLDivElement>();

    focus() {
        this.divRef.current.focus();
        this.divRef.current.scrollIntoView();
    }

    render() {

        if (this.props.field.value.indexOf("$") == -1) {
            return <div ref={this.divRef} dangerouslySetInnerHTML={{__html:this.props.field.value}}></div>
        }

        return "";
                  
    
    }
}