import * as React from "react";
import FormField from "./FormField";
import SubFormFieldModel from "@Models/SubFormField";
import FormSection from "@Components/FormSection";
import { observer } from "mobx-react";
import Form from "@Components/Form";

@observer
export default class SubFormField extends FormField<SubFormFieldModel> {

    constructor(props) {
        super(props);
    }

    focus() {

    }

    render() {
        return <Form hideSectionTitles hideTitle data={this.props.field.value} />
    }
}