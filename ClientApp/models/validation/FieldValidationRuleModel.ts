import FieldModel from "@Models/FieldModel";
import FormModel from "@Models/FormModel";

export abstract class FieldValidationRuleModel<T> {

    abstract validate(field: FieldModel<T>, form: FormModel) : string;

}