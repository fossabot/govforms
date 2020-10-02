import FormModel from "@Models/FormModel";
import { observable } from "mobx";
import { Expression } from "./Expression";

export class LogicalExpression extends Expression<boolean> {

    constructor(left:Expression<boolean>, and: boolean, right: Expression<boolean>) {
        super();
        this.left = left;
        this.right = right;
        this.and = and;
    }

    @observable
    left: Expression<any>;

    @observable
    right: Expression<any>;

    @observable
    and: boolean;

    getValue(data: FormModel) {
        if (this.and) {
            return this.left.getValue(data) && this.right.getValue(data);
        }

        return this.left.getValue(data) || this.right.getValue(data);
    }

}