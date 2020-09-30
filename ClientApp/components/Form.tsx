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
import FormSection from "./FormSection";


export interface IProps {
    form: IFormModel;
    hideTitle?: boolean;
    hideSectionTitles?: boolean;
}

export default class Form extends React.Component<IProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            { (!this.props.hideTitle && <h1 className="govuk-heading-xl">{this.props.form.formName}</h1>) }

{ this.props.hideSectionTitles && (
    this.props.form.sections.map(s => {
        return (
            <div key={s.id} id={s.name}>
                <FormSection section={s} hideTitle={this.props.hideSectionTitles}/>
            </div>
        );
    })
)}

{ !this.props.hideSectionTitles && (
<div className="govuk-tabs" data-module={this.props.form.props.id}>
  
    <h2 className="govuk-tabs__title">
        Sections
    </h2>
    <ul className="govuk-tabs__list">

        {this.props.form.sections.map((s, i) => {
            return <li key={s.id} className={`govuk-tabs__list-item ${i === 0 ? "govuk-tabs__list-item--selected" : ""}`}>
            <a className="govuk-tabs__tab" href={"#" + s.name}>
            {s.name}
            </a>
        </li>
        })}

        
    </ul>

    {this.props.form.sections.map((s, i) => {
    return (
        <div key={s.id} className={`govuk-tabs__panel ${i != 0 ? "govuk-tabs__panel--hidden" : "" } `} id={s.name}>
            <FormSection section={s} hideTitle={this.props.hideSectionTitles}/>
        </div>
    )

  })}
  
  </div>
)}
  

</div>

        )
    }
}