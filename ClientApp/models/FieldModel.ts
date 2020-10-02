import FormField from '@Components/fields/FormField';
import { computed, observable } from 'mobx';
import { Expression } from './expressions/Expression';
import FFConditionParse from './firmstep/conditions/FFConditionParser';
import { Parser } from './firmstep/conditions/FFConditions';
import IFFFieldModel from './Firmstep/IFFFieldModel';
import SectionModel from './SectionModel';
import { FieldValidationRuleModel } from './validation/FieldValidationRuleModel';

interface IFieldModelOptions<T> {

    defaultValue: T;
    name: string,
    displayName: string,
    showLabel: boolean,
    hide: boolean,
    required: boolean,
    requiredErrorMessage: string;
    hintText: string;
    displayCondition?: Expression<any>;
}

export default class FieldModel<T> {

    constructor(section: SectionModel, options: IFieldModelOptions<T>) {
        this.section = section;
        this.name = options.name;
        this.displayName = options.displayName;
        this.showLabel = options.showLabel;
        this.hide = options.hide;
        this.required = options.required;
        this.requiredErrorMessage = options.requiredErrorMessage ?? `'${options.displayName ?? options.name}' is required`
        this.value = options.defaultValue;
        this.hintText = options.hintText;

        this.displayCondition = options.displayCondition
    }

    static getOptions<T>(source: IFFFieldModel, defaultValue: T): IFieldModelOptions<T> {
        return {
            name: source.props.dataName,
            displayName: source.props.label,
            showLabel: source.props.labelPosition !== "hideLabel",
            hide: source.props.hidden,
            required: !!source.props.mandatory,
            requiredErrorMessage: source.props.mandatoryMessage != "This field is required" ? source.props.mandatoryMessage : undefined,
            defaultValue: defaultValue,
            hintText: source.props.helpText,
            displayCondition: source.props.displayCondition ? FFConditionParse.parse(source.props.displayCondition) : null
        };
    }

    readonly section: SectionModel;

    @observable
    displayCondition: Expression<any>

    @observable
    name: string;

    @observable
    displayName: string;

    @observable
    showLabel: boolean = true;

    @observable
    hide: boolean = false;

    @computed get visible() : boolean {
        if (this.hide) {
            return false;
        }

        if (this.displayCondition) {
            return !!this.displayCondition.getValue(this.section.form);
        }

        return true;
    }

    @observable
    required: boolean = false;

    @observable
    requiredErrorMessage: string;

    @observable
    value: T;

    @observable
    controls: FormField<FieldModel<T>>[] = [];

    @observable
    validationRules: FieldValidationRuleModel<T>[] = [];

    @observable
    hintText: string


    @computed get validationError(): string {
        if (this.required && this.value === null || this.value === undefined || (typeof (this.value) == "string" && this.value === "")) {
            return this.requiredErrorMessage;
        }

        for (let v of this.validationRules) {
            let errorMessage = v.validate(this, this.section.form);
            if (errorMessage) {
                return errorMessage;
            }
        }

        return null;
    }

}