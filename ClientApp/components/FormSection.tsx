import * as React from "react";
import TextFormField from "./fields/TextFormField";
import SectionModel from "@Models/SectionModel";
import FieldModel from "@Models/FieldModel";
import TextFieldModel from "@Models/TextFieldModel";
import UnsupportedFormField from "./fields/UnsupportedFormField";
import UnsupportedFieldModel from "@Models/UnsupportedFieldModel";
import TextAreaFieldModel from "@Models/TextAreaFieldModel";
import HtmlFieldModel from "@Models/HtmlFieldModel";
import HtmlFormField from "./fields/HtmlFormField";
import SubFormField from "./fields/SubFormField";
import SelectFormField from "./fields/SelectFormField";
import CheckboxFormField from "./fields/CheckboxFormField";
import RadioFormField from "./fields/RadioFormField";
import TextAreaFormField from "./fields/TextAreaFormField";
import SubFormFieldModel from "@Models/SubFormField";
import SelectFieldModel from "@Models/SelectFieldModel";
import CheckboxFieldModel from "@Models/CheckboxFieldModel";
import RadioFieldModel from "@Models/RadioFieldModel";
import FormField from "./fields/FormField";
import { observer } from "mobx-react";
import DateFieldModel from "@Models/DateFieldModel";
import DateFormField from "./fields/DateFormField";
import NumberFieldModel from "@Models/NumberFieldModel";
import NumberFormField from "./fields/NumberFormField";
import MultiCheckboxFieldModel from "@Models/MultiCheckboxFieldModel";
import MultiCheckboxFormField from "./fields/MultiCheckboxFormField";


export interface IProps {
    data: SectionModel;
    hideTitle?: boolean
}

@observer
export default class FormSection extends React.Component<IProps, {}> {

    constructor(props) {
        super(props);
    }

    renderField(f: FieldModel<object>) {
        if (f instanceof TextFieldModel) {
            return <TextFormField field={f} />
        } else if (f instanceof TextAreaFieldModel) {
            return <TextAreaFormField field={f} />
        } else if (f instanceof RadioFieldModel) {
            return <RadioFormField field={f} />
        } else if (f instanceof CheckboxFieldModel) {
            return <CheckboxFormField field={f} />
        } else if (f instanceof MultiCheckboxFieldModel) {
            return <MultiCheckboxFormField field={f} />
        } else if (f instanceof SelectFieldModel) {
            return <SelectFormField field={f} />
        } else if (f instanceof SubFormFieldModel) {
            return <SubFormField field={f} />
        } else if (f instanceof HtmlFieldModel) {
            return <HtmlFormField field={f}/>
        } else if (f instanceof UnsupportedFieldModel) {
            return <UnsupportedFormField field={f} />
        } else if (f instanceof DateFieldModel){
            return <DateFormField field={f}/>
        } else if (f instanceof NumberFieldModel){
            return <NumberFormField field={f}/>
        } else {
            throw "Error"!;
        }
    }

    render() {
        return (

            <div>
                {!this.props.hideTitle && (
                    <h2 className="govuk-heading-l">{this.props.data.displayName}</h2>
                )}



                {this.props.data.fields.map(f => {

                    return (<React.Fragment key={f.name}>
                        {f.visible ? this.renderField(f) : ""}
                    </React.Fragment>)
                })}
            </div>
        );
    }

}