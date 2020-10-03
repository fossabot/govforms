import FormField from '@Components/fields/FormField';
import { computed, observable } from 'mobx';
import { Expression } from './expressions/Expression';
import FFConditionParse from './firmstep/conditions/FFConditionParser';
import { Parser } from './firmstep/conditions/FFConditions';
import IFFFieldModel from './Firmstep/IFFFieldModel';
import SectionModel from './SectionModel';
import ExpressionFieldValidationRuleModel from './validation/ExpressionFieldValidationRuleModel';
import { FieldValidationRuleModel } from './validation/FieldValidationRuleModel';
import RegexFieldValidationRuleModel from './validation/RegexFieldValidationRuleModel';

interface IFieldModelOptions<T> {

    defaultValue: T;
    name: string,
    displayName: string,
    showLabel: boolean,
    hide: boolean,
    required: boolean,
    requiredErrorMessage: string;
    hintText: string;
    displayCondition: Expression<any>;
    validationRules: FieldValidationRuleModel<any>[];
}

const REGEX_SPLIT = /^\/(.*)\/([^/]*)$/;
    

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

        this.displayCondition = options.displayCondition;
        this.validationRules = options.validationRules;
    }
    
    
    static getOptions<T>(source: IFFFieldModel, defaultValue: T): IFieldModelOptions<T> {

        let validationRules = [];

        if (source.props.validationMask) {
            let regexAndFlags = source.props.validationMask === "_custom_regex_" ? source.props._custom_regex_ : source.props.validationMask;
            let regex = regexAndFlags.replace(REGEX_SPLIT, "$1");
            let flags = regexAndFlags.replace(REGEX_SPLIT, "$2");
            validationRules.push(new RegexFieldValidationRuleModel(new RegExp(regex, flags), source.props.validationMaskMessage.replace("_validation_mask_", source.props.validationMaskMessageValue)))
        }

        if (source.props.validationCondition) {
            let expression = FFConditionParse.parse(source.props.validationCondition);
            validationRules.push(new ExpressionFieldValidationRuleModel(expression, source.props.validationConditionMessage ?? "Invalid value"));
        }

        return {
            name: source.props.dataName,
            displayName: source.props.label,
            showLabel: source.props.labelPosition !== "hideLabel",
            hide: source.props.hidden,
            required: !!source.props.mandatory,
            requiredErrorMessage: source.props.mandatoryMessage != "This field is required" ? source.props.mandatoryMessage : undefined,
            defaultValue: defaultValue,
            hintText: source.props.helpText,
            displayCondition: source.props.displayCondition ? FFConditionParse.parse(source.props.displayCondition) : null,
            validationRules: validationRules
        };
    }

    readonly section: SectionModel;

    @observable
    name: string;

    @observable
    displayName: string;

    @observable
    showLabel: boolean = true;

    @observable
    hide: boolean = false;

    @observable
    displayCondition: Expression<any>

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

    protected get validate() : string {
        return null;
    }

    protected get validateImmediate() : string {
        return null;
    }

    @computed get validationError(): string {

        let conversionError = this.controls.map(c => c.conversionError).filter(e => e)[0];
        if (conversionError) {
            return conversionError;
        }

        let validationError = this.validateImmediate;
        if (validationError) {
            return validationError;
        }

        if (!this.section.enableValidation) {
            return null;
        }

        if (this.required && this.value === null || this.value === undefined || (typeof (this.value) == "string" && this.value === "")) {
            return this.requiredErrorMessage;
        }

        validationError = this.validate;
        if (validationError) {
            return validationError;
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