import * as React from "react";
import TextFormField from "./fields/TextFormField";
import SectionModel from "@Models/SectionModel";
import FieldModel from "@Models/FieldModel";
import TextFieldModel from "@Models/TextFieldModel";
import UnsupportedFormField from "./fields/UnsupportedFormField";
import UnsupportedFieldModel from "@Models/UnsupportedFieldModel";


export interface IProps {
    data: SectionModel;
}

export default class FormSection extends React.Component<IProps, {}> {

    constructor(props) {
        super(props);
    }

    renderField(f: FieldModel<object>) {
        if (f instanceof TextFieldModel) {
            return <TextFormField field={f} />
       /*
        } else if (f.type == "textarea") {
            return <TextAreaFormField field={f as IFFTextAreaFieldModel} />
        } else if (f.type == "radio") {
            return <RadioFormField field={f as IFFRadioFieldModel} />
        } else if (f.type == "checkbox") {
            return <CheckboxFormField field={f as IFFCheckboxFieldModel} />
        } else if (f.type == "select") {
            return <SelectFormField field={f as ISelectFieldModel} />
        } else if (f.type == "subform") {
            return <SubFormField data={this.props.data} field={f as IFFSubFormFieldModel} />
        } else if (f.type == "html" || f.type == "staticText") {
            return <HtmlFormField field={f as IHtmlFieldModel}/>
            */
        } else if (f instanceof UnsupportedFieldModel) {
            return <UnsupportedFormField field={f} />
        } else {
            throw "Error"!;
        }
    }

    render() {
        return (

            <div>
                {!this.props.data.hideTitle && (
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