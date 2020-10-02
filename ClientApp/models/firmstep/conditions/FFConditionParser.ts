import FieldValueExpression from "@Models/expressions/FieldValueExpression";
import { LogicalExpression } from "@Models/expressions/LogicalExpression";
import { EqualsExpression } from "@Models/expressions/EqualsExpression";
import StringLiteralExpression from "@Models/expressions/StringLiteralExpression";
import { ASTKinds, expression, Parser, stringExpression, tail } from "./FFConditions";
import { Expression } from "@Models/expressions/Expression";

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

        return this.visitExpression(parseResult.ast.e);
    }

    static visitExpression(e: expression): Expression<any> {

    
        switch (e.kind) {
            case ASTKinds.expression:
                let left = FFConditionParser.visitTerm(e.v);
                return FFConditionParser.visitTail(left, e.tail)
        }


        throw new Error(`Unhandled expression kind`);
    }
    static visitTail(left: Expression<any>, tail: tail[]) : Expression<any> {
        
        return tail.reduce((left, c)=>{
            switch (c.kind){
                case ASTKinds.equalsExpression:
                case ASTKinds.isExpression: {
                    let right = FFConditionParser.visitTerm(c.right)
                    return new EqualsExpression(left, false, right);
                }
                case ASTKinds.notEqualsExpression:
                case ASTKinds.isntExpression: {
                    let right = FFConditionParser.visitTerm(c.right)
                    return new EqualsExpression(left, true, right);
                }
                case ASTKinds.andExpression: {
                    let right = FFConditionParser.visitExpression(c.rightBool);
                    return new LogicalExpression(left, true, right);
                }
                case ASTKinds.orExpression: {
                    let right = FFConditionParser.visitExpression(c.rightBool);
                    return new LogicalExpression(left, false, right);
                }
                default:
                    throw `Unhandled expression type ${c.kind}`
            }
        }, left);
    }

    static visitTerm(e: stringExpression) : Expression<any> {
        switch (e.kind) {
            case ASTKinds.fieldName:
                return new FieldValueExpression(e.fieldName);
            case ASTKinds.stringLiteral:
                return new StringLiteralExpression(e.value);
        }

        throw new Error(`Unhandled stringExpression kind`);
    }

}