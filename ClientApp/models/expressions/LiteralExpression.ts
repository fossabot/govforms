import FormModel from "@Models/FormModel";
import { observable } from "mobx";
import { Expression } from "./Expression";

export default class LiteralExpression<T> extends Expression<T> {

    constructor(value: T) {
        super();
        this.value = value;
    }

    @observable
    value: T;

    getValue(data: FormModel) : T {
        return this.value;
    }
}