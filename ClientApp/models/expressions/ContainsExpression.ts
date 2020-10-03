import FormModel from "@Models/FormModel";
import { observable } from "mobx";
import { Expression } from "./Expression";

export class ContainsExpression extends Expression<boolean> {

    constructor(left: Expression<any>, right: Expression<any>, caseInsensitive: boolean) {
        super();
        this.left = left;
        this.caseInsensitive = caseInsensitive;
        this.right = right;
    }

    @observable left : Expression<any>;
    @observable right: Expression<any>;
    @observable caseInsensitive: boolean;

    getValue(form: FormModel) : boolean {

        let left = this.left.getValue(form);
        let right = this.right.getValue(form);

        let list: any[];
        if (!Array.isArray(left)) {
            list = [left];
        }else {
            list = left;
        }

        return ( !this.caseInsensitive && list.includes(right)) || (this.caseInsensitive && list.some(i => i?.toString().localeCompare(right?.toString(), undefined, { sensitivity: 'accent' }) ) )
    }

}