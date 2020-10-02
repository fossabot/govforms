import FormModel from "@Models/FormModel";
import { observable } from "mobx";
import { Expression } from "./Expression";

export class EqualsExpression extends Expression<boolean> {

    constructor(left: Expression<any>, notEquals: boolean, right: Expression<any>) {
        super();
        this.left = left;
        this.notEquals = notEquals;
        this.right = right;
    }

    @observable left : Expression<any>;
    @observable right: Expression<any>;
    @observable notEquals: boolean;

    getValue(form: FormModel) : boolean {

        if (!this.notEquals) {
            return this.left.getValue(form) != this.right.getValue(form);
        } else {
            return this.left.getValue(form) == this.right.getValue(form);
        }
    }

}