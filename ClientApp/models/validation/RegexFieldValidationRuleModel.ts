import FieldModel from "@Models/FieldModel";
import { observable } from "mobx";
import { FieldValidationRuleModel } from "./FieldValidationRuleModel";

export default class RegexFieldValidationRuleModel extends FieldValidationRuleModel<string> {

    constructor(regex: RegExp, errorMessage: string) {
        super();
        this.regex = regex;
        this.errorMessage = errorMessage;
    }

    @observable
    regex: RegExp;

    @observable
    errorMessage: string;

    validate(field: FieldModel<string>): string {

        if (field.value && !this.regex.test(field.value)) {
            return this.errorMessage;
        }
        return null;
    }

}