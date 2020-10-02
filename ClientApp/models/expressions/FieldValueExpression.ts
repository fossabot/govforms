import value from "*.json";
import FormModel from "@Models/FormModel";
import { observable } from "mobx";
import { Expression } from "./Expression";

export default class FieldValueExpression extends Expression<any> {

    constructor(fieldName: string) {
        super();
        this.fieldName = fieldName;
    }

    @observable
    fieldName: string;

    getValue(data: FormModel) : any {
        return data.getField(this.fieldName)?.value;
    }
}