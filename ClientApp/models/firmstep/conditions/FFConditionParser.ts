import FieldValueExpression from "@Models/expressions/FieldValueExpression";
import { LogicalExpression } from "@Models/expressions/LogicalExpression";
import { EqualsExpression } from "@Models/expressions/EqualsExpression";
import LiteralExpression from "@Models/expressions/LiteralExpression";
import { ASTKinds, booleanExpressionTail, expression, Parser, term } from "./FFConditions";
import { Expression } from "@Models/expressions/Expression";
import { ContainsExpression } from "@Models/expressions/ContainsExpression";
import { ComparisonExpression, ComparisonExpressionType } from "@Models/expressions/ComparisonExpression";
import ExpressionFieldValidationRuleModel from "@Models/validation/ExpressionFieldValidationRuleModel";

export default class FFConditionParser {

    static parse(expression: string): Expression<boolean> {

        try {
            var parseResult = new Parser(expression).parse()

            if (parseResult.err) {
                throw "Parse error " + parseResult.err.toString();
            }
        } catch (e) {
            throw `Error parsing FF expression ${expression}\n${e}`
        }

        return this.visitExpression(parseResult.ast);
    }

    static visitExpression(e: expression) : Expression<any> {
        switch (e.kind) {
            case ASTKinds.expression: {
                let left = FFConditionParser.visitTerm(e.head)
                
                return e.tail.reduce((p,c) => {

                    return this.visitTail(p,c);

                }, left);

            }
                
            default:
                throw "Unhandled expression type"
        }
    }
    static visitTail(left: Expression<any>, t: booleanExpressionTail): any {
        let c=t.tail;
        switch (c.kind) {
            case ASTKinds.isExpression:
            case ASTKinds.equalsExpression: {
                let right = FFConditionParser.visitTerm(c.right)
                return new EqualsExpression(left, false, right);
            }
            case ASTKinds.isntExpression:
            case ASTKinds.notEqualsExpression: {
                let right = FFConditionParser.visitTerm(c.right)
                return new EqualsExpression(left, true, right);
            }
            case ASTKinds.andExpression: {
                let right = FFConditionParser.visitTerm(c.right)
                return new LogicalExpression(left, true, right);
            }
            case ASTKinds.orExpression: {
                let right = FFConditionParser.visitTerm(c.right)
                return new LogicalExpression(left, false, right);
            }
            case ASTKinds.containsExpression: {
                let right = FFConditionParser.visitTerm(c.right)
                return new ContainsExpression(left, right, false);
            }
            case ASTKinds.icontainsExpression: {
                let right = FFConditionParser.visitTerm(c.right)
                return new ContainsExpression(left, right, true);
            }
            case ASTKinds.lessThanExpression: {
                let right = FFConditionParser.visitTerm(c.right)
                return new ComparisonExpression(left, ComparisonExpressionType.LessThan, right);
            }
            case ASTKinds.lessThanEqualExpression: {
                let right = FFConditionParser.visitTerm(c.right)
                return new ComparisonExpression(left, ComparisonExpressionType.LessThanEquals, right);
            }
            case ASTKinds.greaterThanExpression: {
                let right = FFConditionParser.visitTerm(c.right)
                return new ComparisonExpression(left, ComparisonExpressionType.GreaterThan, right);
            }
            case ASTKinds.greaterThanEqualExpression: {
                let right = FFConditionParser.visitTerm(c.right)
                return new ComparisonExpression(left, ComparisonExpressionType.GreaterThanEquals, right);
            }

            default:
                throw `Unhandled tail type `;
        }
    }


    static visitTerm(f: term): Expression<any> {
        switch (f.kind) {
            case ASTKinds.term_$0:
                return this.visitExpression(f.expression);
            case ASTKinds.fieldName:
                return new FieldValueExpression(f.fieldName);
            case ASTKinds.stringLiteral:
                return new LiteralExpression(f.value);
            case ASTKinds.numberLiteral:
                return new LiteralExpression(parseFloat(f.value));
            default:
                throw "Unhandled term type"
        }
    }



}