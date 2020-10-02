
import { Expression } from "@Models/expressions/Expression";
import FieldModel from "@Models/FieldModel";
import FormModel from "@Models/FormModel";
import { observable } from "mobx";
import { FieldValidationRuleModel } from "./FieldValidationRuleModel";

export default class ExpressionFieldValidationRuleModel extends FieldValidationRuleModel<string> {

    constructor(expression: Expression<any>, errorMessage: string) {
        super();
        this.expression = expression;
        this.errorMessage = errorMessage;
    }

    @observable
    expression: Expression<any>;

    @observable
    errorMessage: string;

    validate(field: FieldModel<string>, form: FormModel): string {

        return !!this.expression.getValue(form) ? null : this.errorMessage;
    }

}