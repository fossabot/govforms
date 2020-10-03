import FormModel from "@Models/FormModel";
import { observable } from "mobx";
import { Expression } from "./Expression";

export enum ComparisonExpressionType {
    GreaterThan = ">",
    GreaterThanEquals = ">=",
    LessThan = "<",
    LessThanEquals = "<="
}

export class ComparisonExpression extends Expression<boolean> {
    getValue(data: FormModel): boolean {
        var leftValue = this.left.getValue(data);
        var rightValue = this.right.getValue(data);

        switch (this.type) {
            case ComparisonExpressionType.GreaterThan:
                return leftValue > rightValue;
            case ComparisonExpressionType.GreaterThanEquals:
                return leftValue >= rightValue;
            case ComparisonExpressionType.LessThan:
                return leftValue < rightValue;
            case ComparisonExpressionType.LessThanEquals:
                return leftValue <= rightValue;
        }
    }


    constructor(left: Expression<any>, type: ComparisonExpressionType, right: Expression<any>) {
        super();
        this.left = left;
        this.type = type;
        this.right = right;
    }

    @observable left: Expression<any>;
    @observable right: Expression<any>;
    @observable type: ComparisonExpressionType;
}