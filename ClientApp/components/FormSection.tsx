import IFormModel from "@Models/IFormModel";
import * as React from "react";
import SubFormField from "./fields/SubFormField";
import HtmlFormField from "./fields/HtmlFormField";
import IHtmlFieldModel from "@Models/IHtmlFieldModel";
import ISubFormFieldModel from "@Models/ISubFormFieldModel";
import ITextFieldModel from "@Models/ITextFieldModel";
import TextFormField from "./fields/TextFormField";
import TextAreaFormField from "./fields/TextAreaFormField";
import ITextAreaFieldModel from "@Models/ITextAreaFieldModel";
import IRadioFieldModel from "@Models/IRadioFieldModel";
import RadioFormField from "./fields/RadioFormField";
import CheckboxFormField from "./fields/CheckboxFormField";
import ICheckboxFieldModel from "@Models/ICheckboxFieldModel";
import ISelectFieldModel from "@Models/ISelectFieldModel";
import SelectFormField from "./fields/SelectFormField";
import ISectionModel from "@Models/ISectionModel";
import IFieldModel from "@Models/IFieldModel";


export interface IProps {
    section: ISectionModel;
    hideTitle?: boolean;
}

export default class FormSection extends React.Component<IProps, {}> {

    constructor(props) {
        super(props);
    }

    renderField(f: IFieldModel) {
        if (f.type == "text") {
            return <TextFormField field={f as ITextFieldModel} />
        } else if (f.type == "textarea") {
            return <TextAreaFormField field={f as ITextAreaFieldModel} />
        } else if (f.type == "radio") {
            return <RadioFormField field={f as IRadioFieldModel} />
        } else if (f.type == "checkbox") {
            return <CheckboxFormField field={f as ICheckboxFieldModel} />
        } else if (f.type == "select") {
            return <SelectFormField field={f as ISelectFieldModel} />
        } else if (f.type == "subform") {
            return <SubFormField field={f as ISubFormFieldModel} />
        } else if (f.type == "html" || f.type == "staticText") {
            return <HtmlFormField field={f as IHtmlFieldModel}/>
        } else {
            return (
                <div className="govuk-warning-text">
                    <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
                    <strong className="govuk-warning-text__text">
                        <span className="govuk-warning-text__assistive">Warning</span>
                Unsupported field type '{f.type}' for field '{f.props.label}'
                </strong>
                </div>
            )
        }
    }

    render() {
        return (

            <div>
                {!this.props.hideTitle && (
                    <h2 className="govuk-heading-l">{this.props.section.name}</h2>
                )}



                {this.props.section.fields.map(f => {

                    return (<React.Fragment key={f.props.dataName}>
                        {!f.props.hidden ? this.renderField(f) : ""}
                    </React.Fragment>)
                })}
            </div>
        );
    }

}