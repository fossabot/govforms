import FormModel from "@Models/FormModel";
import { observable } from "mobx";
import { Expression } from "./Expression";

export default class StringLiteralExpression extends Expression<string> {

    constructor(value: string) {
        super();
        this.value = value;
    }

    @observable
    value: string;

    getValue(data: FormModel) : string {
        return this.value;
    }
}