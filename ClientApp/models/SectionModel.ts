import RadioFormField from '@Components/fields/RadioFormField';
import { computed, observable } from 'mobx';
import CheckboxFieldModel from './CheckboxFieldModel';
import FieldModel from './FieldModel';
import IFFCheckboxFieldModel, { IFFCheckboxFieldModelProps } from './firmstep/IFFCheckboxFieldModel';
import IFFHtmlFieldModel from './firmstep/IFFHtmlFieldModel';
import IFFRadioFieldModel, { IFFRadioFieldModelProps } from './firmstep/IFFRadioFieldModel';
import IFFSectionModel from './Firmstep/IFFSectionModel';
import IFFSelectFieldModel from './firmstep/IFFSelectFieldModel';
import IFFSubFormFieldModel from './firmstep/IFFSubFormFieldModel';
import IFFTextAreaFieldModel from './firmstep/IFFTextAreaFieldModel';
import IFFTextFieldModel from './firmstep/IFFTextFieldModel';
import HtmlFieldModel from './HtmlFieldModel';
import RadioFieldModel from './RadioFieldModel';
import SelectFieldModel from './SelectFieldModel';
import TextAreaFieldModel from './TextAreaFieldModel';
import TextFieldModel from './TextFieldModel';
import SubFormFieldModel from './SubFormField';
import UnsupportedFieldModel from './UnsupportedFieldModel';
import FormModel from './FormModel';
import { Expression } from './expressions/Expression';
import FFConditionParser from './firmstep/conditions/FFConditionParser';

export default class SectionModel {

    constructor(form:FormModel, source: IFFSectionModel) {
        this.name = source.id;
        this.displayName = source.name
        this.fields = [];
        this.form = form;
        this.displayCondition = source.props.displayCondition ? FFConditionParser.parse(source.props.displayCondition) : null;

        for (let field of source.fields) {
            if (field.type == "text") {
                this.fields.push(new TextFieldModel(this, field as IFFTextFieldModel));
            } else if (field.type == "textarea") {
                this.fields.push(new TextAreaFieldModel(this, field as IFFTextAreaFieldModel));
            } else if (field.type == "radio") {
                this.fields.push(new RadioFieldModel(this, field as IFFRadioFieldModel));
            } else if (field.type == "checkbox") {
                if ((<IFFCheckboxFieldModel>field).props.listOfValues.length > 1) {
                    this.fields.push(new UnsupportedFieldModel(this, field, `Multi value checkbox not supported`));
                } else {
                    this.fields.push(new CheckboxFieldModel(this, field as IFFCheckboxFieldModel));
                }
            } else if (field.type == "subform") {
                this.fields.push(new SubFormFieldModel(this, field as IFFSubFormFieldModel));
            } else if (field.type == "select") {
                this.fields.push(new SelectFieldModel(this, field as IFFSelectFieldModel));
            } else if (field.type == "html" || field.type == "staticText") {
                this.fields.push(new HtmlFieldModel(this, field as IFFHtmlFieldModel));
            } else if (field.type == "line") {
                //ignored
            } else {
                this.fields.push(new UnsupportedFieldModel(this, field, `Unsupported field type '${field.type}'`));
            }
        }
    }

    readonly form: FormModel;

    @observable
    name: string;

    @observable
    displayName: string;

    @observable
    fields: FieldModel<any>[]

    @observable
    hideTitle: boolean = false;

    @computed get invalidFields(): FieldModel<any>[] {
        return this.fields.filter(f => f.validationError);
    }

    @observable
    enableValidation: boolean = false;

    @observable
    hide: boolean = false;

    @observable
    displayCondition: Expression<any>

    @computed get visible() : boolean {
        if (this.hide) {
            return false;
        }

        if (this.displayCondition) {
            return !!this.displayCondition.getValue(this.form);
        }

        return true;
    }

}