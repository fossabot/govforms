import * as React from "react";
import FormField from "./FormField";
import SubFormFieldModel from "@Models/SubFormField";
import FormSection from "@Components/FormSection";
import { observer } from "mobx-react";

@observer
export default class SubFormField extends FormField<SubFormFieldModel> {

    constructor(props) {
        super(props);
    }

    private divRef = React.createRef<FormSection>();

    focus() {

    }

    render() {
        return this.props.field.value.visible &&
            <FormSection ref={this.divRef} data={this.props.field.value} />
    }
}