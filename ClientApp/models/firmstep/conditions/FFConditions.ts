/* AutoGenerated Code, changes may be overwritten
* INPUT GRAMMAR:
* expression 
* 	:= head=term tail=booleanExpressionTail*
* booleanExpressionTail
* 	:= tail={ orExpression | andExpression | equalsExpression | notEqualsExpression | isExpression | isntExpression | containsExpression | icontainsExpression | lessThanExpression | lessThanEqualExpression | greaterThanExpression | greaterThanEqualExpression }
* orExpression
* 	:= _ {'\|\|' | 'or'} _ right=term
*     
* andExpression 
* 	:= _ {'&&' | 'and'} _ right=term
*     
* equalsExpression
* 	:= _ '=' _ right=term
*     
* notEqualsExpression 
* 	:= _ { '\<\>' | '\!=' } _ right=term
*     
* isExpression 
* 	:= _ 'is' _ right=term
*     
* isntExpression 
* 	:= _ 'isnt' _ right=term
* containsExpression 
* 	:= _ 'contains' _ right=term
* icontainsExpression 
* 	:= _ 'icontains' _ right=term
* lessThanExpression
* 	:= _ '\<' _ right=term
* lessThanEqualExpression
* 	:= _ '\<=' _ right=term
* greaterThanExpression
* 	:= _ '\>' _ right=term
* greaterThanEqualExpression
* 	:= _ '\>=' _ right=term		
*     
* _ 
* 	:= '\s*'
* term 
* 	:= fieldName | stringLiteral | numberLiteral | {'\(' expression=expression '\)'}
* fieldName 
* 	:= '{' fieldName='[^}]+' '}'
*     
* stringLiteral :=
* 	'\'' value='[^\']*' '\''
* numberLiteral :=
* 	value='[0-9]+(\.[0-9]+)?'
*/
type Nullable<T> = T | null;
type $$RuleType<T> = (log?: (msg: string) => void) => Nullable<T>;
export interface ContextRecorder {
    record(pos: PosInfo, depth: number, result: any, negating: boolean, extraInfo: string[]): void;
}
interface ASTNodeIntf {
    kind: ASTKinds;
}
export enum ASTKinds {
    expression = "expression",
    booleanExpressionTail = "booleanExpressionTail",
    booleanExpressionTail_$0_1 = "booleanExpressionTail_$0_1",
    booleanExpressionTail_$0_2 = "booleanExpressionTail_$0_2",
    booleanExpressionTail_$0_3 = "booleanExpressionTail_$0_3",
    booleanExpressionTail_$0_4 = "booleanExpressionTail_$0_4",
    booleanExpressionTail_$0_5 = "booleanExpressionTail_$0_5",
    booleanExpressionTail_$0_6 = "booleanExpressionTail_$0_6",
    booleanExpressionTail_$0_7 = "booleanExpressionTail_$0_7",
    booleanExpressionTail_$0_8 = "booleanExpressionTail_$0_8",
    booleanExpressionTail_$0_9 = "booleanExpressionTail_$0_9",
    booleanExpressionTail_$0_10 = "booleanExpressionTail_$0_10",
    booleanExpressionTail_$0_11 = "booleanExpressionTail_$0_11",
    booleanExpressionTail_$0_12 = "booleanExpressionTail_$0_12",
    orExpression = "orExpression",
    orExpression_$0_1 = "orExpression_$0_1",
    orExpression_$0_2 = "orExpression_$0_2",
    andExpression = "andExpression",
    andExpression_$0_1 = "andExpression_$0_1",
    andExpression_$0_2 = "andExpression_$0_2",
    equalsExpression = "equalsExpression",
    notEqualsExpression = "notEqualsExpression",
    notEqualsExpression_$0_1 = "notEqualsExpression_$0_1",
    notEqualsExpression_$0_2 = "notEqualsExpression_$0_2",
    isExpression = "isExpression",
    isntExpression = "isntExpression",
    containsExpression = "containsExpression",
    icontainsExpression = "icontainsExpression",
    lessThanExpression = "lessThanExpression",
    lessThanEqualExpression = "lessThanEqualExpression",
    greaterThanExpression = "greaterThanExpression",
    greaterThanEqualExpression = "greaterThanEqualExpression",
    _ = "_",
    term_1 = "term_1",
    term_2 = "term_2",
    term_3 = "term_3",
    term_4 = "term_4",
    term_$0 = "term_$0",
    fieldName = "fieldName",
    stringLiteral = "stringLiteral",
    numberLiteral = "numberLiteral",
}
export interface expression {
    kind: ASTKinds.expression;
    head: term;
    tail: booleanExpressionTail[];
}
export interface booleanExpressionTail {
    kind: ASTKinds.booleanExpressionTail;
    tail: booleanExpressionTail_$0;
}
export type booleanExpressionTail_$0 = booleanExpressionTail_$0_1 | booleanExpressionTail_$0_2 | booleanExpressionTail_$0_3 | booleanExpressionTail_$0_4 | booleanExpressionTail_$0_5 | booleanExpressionTail_$0_6 | booleanExpressionTail_$0_7 | booleanExpressionTail_$0_8 | booleanExpressionTail_$0_9 | booleanExpressionTail_$0_10 | booleanExpressionTail_$0_11 | booleanExpressionTail_$0_12;
export type booleanExpressionTail_$0_1 = orExpression;
export type booleanExpressionTail_$0_2 = andExpression;
export type booleanExpressionTail_$0_3 = equalsExpression;
export type booleanExpressionTail_$0_4 = notEqualsExpression;
export type booleanExpressionTail_$0_5 = isExpression;
export type booleanExpressionTail_$0_6 = isntExpression;
export type booleanExpressionTail_$0_7 = containsExpression;
export type booleanExpressionTail_$0_8 = icontainsExpression;
export type booleanExpressionTail_$0_9 = lessThanExpression;
export type booleanExpressionTail_$0_10 = lessThanEqualExpression;
export type booleanExpressionTail_$0_11 = greaterThanExpression;
export type booleanExpressionTail_$0_12 = greaterThanEqualExpression;
export interface orExpression {
    kind: ASTKinds.orExpression;
    right: term;
}
export type orExpression_$0 = orExpression_$0_1 | orExpression_$0_2;
export type orExpression_$0_1 = string;
export type orExpression_$0_2 = string;
export interface andExpression {
    kind: ASTKinds.andExpression;
    right: term;
}
export type andExpression_$0 = andExpression_$0_1 | andExpression_$0_2;
export type andExpression_$0_1 = string;
export type andExpression_$0_2 = string;
export interface equalsExpression {
    kind: ASTKinds.equalsExpression;
    right: term;
}
export interface notEqualsExpression {
    kind: ASTKinds.notEqualsExpression;
    right: term;
}
export type notEqualsExpression_$0 = notEqualsExpression_$0_1 | notEqualsExpression_$0_2;
export type notEqualsExpression_$0_1 = string;
export type notEqualsExpression_$0_2 = string;
export interface isExpression {
    kind: ASTKinds.isExpression;
    right: term;
}
export interface isntExpression {
    kind: ASTKinds.isntExpression;
    right: term;
}
export interface containsExpression {
    kind: ASTKinds.containsExpression;
    right: term;
}
export interface icontainsExpression {
    kind: ASTKinds.icontainsExpression;
    right: term;
}
export interface lessThanExpression {
    kind: ASTKinds.lessThanExpression;
    right: term;
}
export interface lessThanEqualExpression {
    kind: ASTKinds.lessThanEqualExpression;
    right: term;
}
export interface greaterThanExpression {
    kind: ASTKinds.greaterThanExpression;
    right: term;
}
export interface greaterThanEqualExpression {
    kind: ASTKinds.greaterThanEqualExpression;
    right: term;
}
export type _ = string;
export type term = term_1 | term_2 | term_3 | term_4;
export type term_1 = fieldName;
export type term_2 = stringLiteral;
export type term_3 = numberLiteral;
export type term_4 = term_$0;
export interface term_$0 {
    kind: ASTKinds.term_$0;
    expression: expression;
}
export interface fieldName {
    kind: ASTKinds.fieldName;
    fieldName: string;
}
export interface stringLiteral {
    kind: ASTKinds.stringLiteral;
    value: string;
}
export interface numberLiteral {
    kind: ASTKinds.numberLiteral;
    value: string;
}
export class Parser {
    private readonly input: string;
    private pos: PosInfo;
    private negating: boolean = false;
    constructor(input: string) {
        this.pos = {overallPos: 0, line: 1, offset: 0};
        this.input = input;
    }
    public reset(pos: PosInfo) {
        this.pos = pos;
    }
    public finished(): boolean {
        return this.pos.overallPos === this.input.length;
    }
    public matchexpression($$dpth: number, $$cr?: ContextRecorder): Nullable<expression> {
        return this.runner<expression>($$dpth,
            (log) => {
                if (log) {
                    log("expression");
                }
                let $scope$head: Nullable<term>;
                let $scope$tail: Nullable<booleanExpressionTail[]>;
                let $$res: Nullable<expression> = null;
                if (true
                    && ($scope$head = this.matchterm($$dpth + 1, $$cr)) !== null
                    && ($scope$tail = this.loop<booleanExpressionTail>(() => this.matchbooleanExpressionTail($$dpth + 1, $$cr), true)) !== null
                ) {
                    $$res = {kind: ASTKinds.expression, head: $scope$head, tail: $scope$tail};
                }
                return $$res;
            }, $$cr)();
    }
    public matchbooleanExpressionTail($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail> {
        return this.runner<booleanExpressionTail>($$dpth,
            (log) => {
                if (log) {
                    log("booleanExpressionTail");
                }
                let $scope$tail: Nullable<booleanExpressionTail_$0>;
                let $$res: Nullable<booleanExpressionTail> = null;
                if (true
                    && ($scope$tail = this.matchbooleanExpressionTail_$0($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.booleanExpressionTail, tail: $scope$tail};
                }
                return $$res;
            }, $$cr)();
    }
    public matchbooleanExpressionTail_$0($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0> {
        return this.choice<booleanExpressionTail_$0>([
            () => this.matchbooleanExpressionTail_$0_1($$dpth + 1, $$cr),
            () => this.matchbooleanExpressionTail_$0_2($$dpth + 1, $$cr),
            () => this.matchbooleanExpressionTail_$0_3($$dpth + 1, $$cr),
            () => this.matchbooleanExpressionTail_$0_4($$dpth + 1, $$cr),
            () => this.matchbooleanExpressionTail_$0_5($$dpth + 1, $$cr),
            () => this.matchbooleanExpressionTail_$0_6($$dpth + 1, $$cr),
            () => this.matchbooleanExpressionTail_$0_7($$dpth + 1, $$cr),
            () => this.matchbooleanExpressionTail_$0_8($$dpth + 1, $$cr),
            () => this.matchbooleanExpressionTail_$0_9($$dpth + 1, $$cr),
            () => this.matchbooleanExpressionTail_$0_10($$dpth + 1, $$cr),
            () => this.matchbooleanExpressionTail_$0_11($$dpth + 1, $$cr),
            () => this.matchbooleanExpressionTail_$0_12($$dpth + 1, $$cr),
        ]);
    }
    public matchbooleanExpressionTail_$0_1($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0_1> {
        return this.matchorExpression($$dpth + 1, $$cr);
    }
    public matchbooleanExpressionTail_$0_2($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0_2> {
        return this.matchandExpression($$dpth + 1, $$cr);
    }
    public matchbooleanExpressionTail_$0_3($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0_3> {
        return this.matchequalsExpression($$dpth + 1, $$cr);
    }
    public matchbooleanExpressionTail_$0_4($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0_4> {
        return this.matchnotEqualsExpression($$dpth + 1, $$cr);
    }
    public matchbooleanExpressionTail_$0_5($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0_5> {
        return this.matchisExpression($$dpth + 1, $$cr);
    }
    public matchbooleanExpressionTail_$0_6($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0_6> {
        return this.matchisntExpression($$dpth + 1, $$cr);
    }
    public matchbooleanExpressionTail_$0_7($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0_7> {
        return this.matchcontainsExpression($$dpth + 1, $$cr);
    }
    public matchbooleanExpressionTail_$0_8($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0_8> {
        return this.matchicontainsExpression($$dpth + 1, $$cr);
    }
    public matchbooleanExpressionTail_$0_9($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0_9> {
        return this.matchlessThanExpression($$dpth + 1, $$cr);
    }
    public matchbooleanExpressionTail_$0_10($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0_10> {
        return this.matchlessThanEqualExpression($$dpth + 1, $$cr);
    }
    public matchbooleanExpressionTail_$0_11($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0_11> {
        return this.matchgreaterThanExpression($$dpth + 1, $$cr);
    }
    public matchbooleanExpressionTail_$0_12($$dpth: number, $$cr?: ContextRecorder): Nullable<booleanExpressionTail_$0_12> {
        return this.matchgreaterThanEqualExpression($$dpth + 1, $$cr);
    }
    public matchorExpression($$dpth: number, $$cr?: ContextRecorder): Nullable<orExpression> {
        return this.runner<orExpression>($$dpth,
            (log) => {
                if (log) {
                    log("orExpression");
                }
                let $scope$right: Nullable<term>;
                let $$res: Nullable<orExpression> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.matchorExpression_$0($$dpth + 1, $$cr) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$right = this.matchterm($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.orExpression, right: $scope$right};
                }
                return $$res;
            }, $$cr)();
    }
    public matchorExpression_$0($$dpth: number, $$cr?: ContextRecorder): Nullable<orExpression_$0> {
        return this.choice<orExpression_$0>([
            () => this.matchorExpression_$0_1($$dpth + 1, $$cr),
            () => this.matchorExpression_$0_2($$dpth + 1, $$cr),
        ]);
    }
    public matchorExpression_$0_1($$dpth: number, $$cr?: ContextRecorder): Nullable<orExpression_$0_1> {
        return this.regexAccept(String.raw`(?:\|\|)`, $$dpth + 1, $$cr);
    }
    public matchorExpression_$0_2($$dpth: number, $$cr?: ContextRecorder): Nullable<orExpression_$0_2> {
        return this.regexAccept(String.raw`(?:or)`, $$dpth + 1, $$cr);
    }
    public matchandExpression($$dpth: number, $$cr?: ContextRecorder): Nullable<andExpression> {
        return this.runner<andExpression>($$dpth,
            (log) => {
                if (log) {
                    log("andExpression");
                }
                let $scope$right: Nullable<term>;
                let $$res: Nullable<andExpression> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.matchandExpression_$0($$dpth + 1, $$cr) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$right = this.matchterm($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.andExpression, right: $scope$right};
                }
                return $$res;
            }, $$cr)();
    }
    public matchandExpression_$0($$dpth: number, $$cr?: ContextRecorder): Nullable<andExpression_$0> {
        return this.choice<andExpression_$0>([
            () => this.matchandExpression_$0_1($$dpth + 1, $$cr),
            () => this.matchandExpression_$0_2($$dpth + 1, $$cr),
        ]);
    }
    public matchandExpression_$0_1($$dpth: number, $$cr?: ContextRecorder): Nullable<andExpression_$0_1> {
        return this.regexAccept(String.raw`(?:&&)`, $$dpth + 1, $$cr);
    }
    public matchandExpression_$0_2($$dpth: number, $$cr?: ContextRecorder): Nullable<andExpression_$0_2> {
        return this.regexAccept(String.raw`(?:and)`, $$dpth + 1, $$cr);
    }
    public matchequalsExpression($$dpth: number, $$cr?: ContextRecorder): Nullable<equalsExpression> {
        return this.runner<equalsExpression>($$dpth,
            (log) => {
                if (log) {
                    log("equalsExpression");
                }
                let $scope$right: Nullable<term>;
                let $$res: Nullable<equalsExpression> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.regexAccept(String.raw`(?:=)`, $$dpth + 1, $$cr) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$right = this.matchterm($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.equalsExpression, right: $scope$right};
                }
                return $$res;
            }, $$cr)();
    }
    public matchnotEqualsExpression($$dpth: number, $$cr?: ContextRecorder): Nullable<notEqualsExpression> {
        return this.runner<notEqualsExpression>($$dpth,
            (log) => {
                if (log) {
                    log("notEqualsExpression");
                }
                let $scope$right: Nullable<term>;
                let $$res: Nullable<notEqualsExpression> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.matchnotEqualsExpression_$0($$dpth + 1, $$cr) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$right = this.matchterm($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.notEqualsExpression, right: $scope$right};
                }
                return $$res;
            }, $$cr)();
    }
    public matchnotEqualsExpression_$0($$dpth: number, $$cr?: ContextRecorder): Nullable<notEqualsExpression_$0> {
        return this.choice<notEqualsExpression_$0>([
            () => this.matchnotEqualsExpression_$0_1($$dpth + 1, $$cr),
            () => this.matchnotEqualsExpression_$0_2($$dpth + 1, $$cr),
        ]);
    }
    public matchnotEqualsExpression_$0_1($$dpth: number, $$cr?: ContextRecorder): Nullable<notEqualsExpression_$0_1> {
        return this.regexAccept(String.raw`(?:\<\>)`, $$dpth + 1, $$cr);
    }
    public matchnotEqualsExpression_$0_2($$dpth: number, $$cr?: ContextRecorder): Nullable<notEqualsExpression_$0_2> {
        return this.regexAccept(String.raw`(?:\!=)`, $$dpth + 1, $$cr);
    }
    public matchisExpression($$dpth: number, $$cr?: ContextRecorder): Nullable<isExpression> {
        return this.runner<isExpression>($$dpth,
            (log) => {
                if (log) {
                    log("isExpression");
                }
                let $scope$right: Nullable<term>;
                let $$res: Nullable<isExpression> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.regexAccept(String.raw`(?:is)`, $$dpth + 1, $$cr) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$right = this.matchterm($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.isExpression, right: $scope$right};
                }
                return $$res;
            }, $$cr)();
    }
    public matchisntExpression($$dpth: number, $$cr?: ContextRecorder): Nullable<isntExpression> {
        return this.runner<isntExpression>($$dpth,
            (log) => {
                if (log) {
                    log("isntExpression");
                }
                let $scope$right: Nullable<term>;
                let $$res: Nullable<isntExpression> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.regexAccept(String.raw`(?:isnt)`, $$dpth + 1, $$cr) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$right = this.matchterm($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.isntExpression, right: $scope$right};
                }
                return $$res;
            }, $$cr)();
    }
    public matchcontainsExpression($$dpth: number, $$cr?: ContextRecorder): Nullable<containsExpression> {
        return this.runner<containsExpression>($$dpth,
            (log) => {
                if (log) {
                    log("containsExpression");
                }
                let $scope$right: Nullable<term>;
                let $$res: Nullable<containsExpression> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.regexAccept(String.raw`(?:contains)`, $$dpth + 1, $$cr) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$right = this.matchterm($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.containsExpression, right: $scope$right};
                }
                return $$res;
            }, $$cr)();
    }
    public matchicontainsExpression($$dpth: number, $$cr?: ContextRecorder): Nullable<icontainsExpression> {
        return this.runner<icontainsExpression>($$dpth,
            (log) => {
                if (log) {
                    log("icontainsExpression");
                }
                let $scope$right: Nullable<term>;
                let $$res: Nullable<icontainsExpression> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.regexAccept(String.raw`(?:icontains)`, $$dpth + 1, $$cr) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$right = this.matchterm($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.icontainsExpression, right: $scope$right};
                }
                return $$res;
            }, $$cr)();
    }
    public matchlessThanExpression($$dpth: number, $$cr?: ContextRecorder): Nullable<lessThanExpression> {
        return this.runner<lessThanExpression>($$dpth,
            (log) => {
                if (log) {
                    log("lessThanExpression");
                }
                let $scope$right: Nullable<term>;
                let $$res: Nullable<lessThanExpression> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.regexAccept(String.raw`(?:\<)`, $$dpth + 1, $$cr) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$right = this.matchterm($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.lessThanExpression, right: $scope$right};
                }
                return $$res;
            }, $$cr)();
    }
    public matchlessThanEqualExpression($$dpth: number, $$cr?: ContextRecorder): Nullable<lessThanEqualExpression> {
        return this.runner<lessThanEqualExpression>($$dpth,
            (log) => {
                if (log) {
                    log("lessThanEqualExpression");
                }
                let $scope$right: Nullable<term>;
                let $$res: Nullable<lessThanEqualExpression> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.regexAccept(String.raw`(?:\<=)`, $$dpth + 1, $$cr) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$right = this.matchterm($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.lessThanEqualExpression, right: $scope$right};
                }
                return $$res;
            }, $$cr)();
    }
    public matchgreaterThanExpression($$dpth: number, $$cr?: ContextRecorder): Nullable<greaterThanExpression> {
        return this.runner<greaterThanExpression>($$dpth,
            (log) => {
                if (log) {
                    log("greaterThanExpression");
                }
                let $scope$right: Nullable<term>;
                let $$res: Nullable<greaterThanExpression> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.regexAccept(String.raw`(?:\>)`, $$dpth + 1, $$cr) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$right = this.matchterm($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.greaterThanExpression, right: $scope$right};
                }
                return $$res;
            }, $$cr)();
    }
    public matchgreaterThanEqualExpression($$dpth: number, $$cr?: ContextRecorder): Nullable<greaterThanEqualExpression> {
        return this.runner<greaterThanEqualExpression>($$dpth,
            (log) => {
                if (log) {
                    log("greaterThanEqualExpression");
                }
                let $scope$right: Nullable<term>;
                let $$res: Nullable<greaterThanEqualExpression> = null;
                if (true
                    && this.match_($$dpth + 1, $$cr) !== null
                    && this.regexAccept(String.raw`(?:\>=)`, $$dpth + 1, $$cr) !== null
                    && this.match_($$dpth + 1, $$cr) !== null
                    && ($scope$right = this.matchterm($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.greaterThanEqualExpression, right: $scope$right};
                }
                return $$res;
            }, $$cr)();
    }
    public match_($$dpth: number, $$cr?: ContextRecorder): Nullable<_> {
        return this.regexAccept(String.raw`(?:\s*)`, $$dpth + 1, $$cr);
    }
    public matchterm($$dpth: number, $$cr?: ContextRecorder): Nullable<term> {
        return this.choice<term>([
            () => this.matchterm_1($$dpth + 1, $$cr),
            () => this.matchterm_2($$dpth + 1, $$cr),
            () => this.matchterm_3($$dpth + 1, $$cr),
            () => this.matchterm_4($$dpth + 1, $$cr),
        ]);
    }
    public matchterm_1($$dpth: number, $$cr?: ContextRecorder): Nullable<term_1> {
        return this.matchfieldName($$dpth + 1, $$cr);
    }
    public matchterm_2($$dpth: number, $$cr?: ContextRecorder): Nullable<term_2> {
        return this.matchstringLiteral($$dpth + 1, $$cr);
    }
    public matchterm_3($$dpth: number, $$cr?: ContextRecorder): Nullable<term_3> {
        return this.matchnumberLiteral($$dpth + 1, $$cr);
    }
    public matchterm_4($$dpth: number, $$cr?: ContextRecorder): Nullable<term_4> {
        return this.matchterm_$0($$dpth + 1, $$cr);
    }
    public matchterm_$0($$dpth: number, $$cr?: ContextRecorder): Nullable<term_$0> {
        return this.runner<term_$0>($$dpth,
            (log) => {
                if (log) {
                    log("term_$0");
                }
                let $scope$expression: Nullable<expression>;
                let $$res: Nullable<term_$0> = null;
                if (true
                    && this.regexAccept(String.raw`(?:\()`, $$dpth + 1, $$cr) !== null
                    && ($scope$expression = this.matchexpression($$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\))`, $$dpth + 1, $$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.term_$0, expression: $scope$expression};
                }
                return $$res;
            }, $$cr)();
    }
    public matchfieldName($$dpth: number, $$cr?: ContextRecorder): Nullable<fieldName> {
        return this.runner<fieldName>($$dpth,
            (log) => {
                if (log) {
                    log("fieldName");
                }
                let $scope$fieldName: Nullable<string>;
                let $$res: Nullable<fieldName> = null;
                if (true
                    && this.regexAccept(String.raw`(?:{)`, $$dpth + 1, $$cr) !== null
                    && ($scope$fieldName = this.regexAccept(String.raw`(?:[^}]+)`, $$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:})`, $$dpth + 1, $$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.fieldName, fieldName: $scope$fieldName};
                }
                return $$res;
            }, $$cr)();
    }
    public matchstringLiteral($$dpth: number, $$cr?: ContextRecorder): Nullable<stringLiteral> {
        return this.runner<stringLiteral>($$dpth,
            (log) => {
                if (log) {
                    log("stringLiteral");
                }
                let $scope$value: Nullable<string>;
                let $$res: Nullable<stringLiteral> = null;
                if (true
                    && this.regexAccept(String.raw`(?:\')`, $$dpth + 1, $$cr) !== null
                    && ($scope$value = this.regexAccept(String.raw`(?:[^\']*)`, $$dpth + 1, $$cr)) !== null
                    && this.regexAccept(String.raw`(?:\')`, $$dpth + 1, $$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.stringLiteral, value: $scope$value};
                }
                return $$res;
            }, $$cr)();
    }
    public matchnumberLiteral($$dpth: number, $$cr?: ContextRecorder): Nullable<numberLiteral> {
        return this.runner<numberLiteral>($$dpth,
            (log) => {
                if (log) {
                    log("numberLiteral");
                }
                let $scope$value: Nullable<string>;
                let $$res: Nullable<numberLiteral> = null;
                if (true
                    && ($scope$value = this.regexAccept(String.raw`(?:[0-9]+(\.[0-9]+)?)`, $$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.numberLiteral, value: $scope$value};
                }
                return $$res;
            }, $$cr)();
    }
    public test(): boolean {
        const mrk = this.mark();
        const res = this.matchexpression(0);
        const ans = res !== null && this.finished();
        this.reset(mrk);
        return ans;
    }
    public parse(): ParseResult {
        const mrk = this.mark();
        const res = this.matchexpression(0);
        if (res && this.finished()) {
            return new ParseResult(res, null);
        }
        this.reset(mrk);
        const rec = new ErrorTracker();
        this.matchexpression(0, rec);
        return new ParseResult(res,
            rec.getErr() ?? new SyntaxErr(this.mark(), new Set(["$EOF"]), new Set([])));
    }
    public mark(): PosInfo {
        return this.pos;
    }
    private loop<T>(func: $$RuleType<T>, star: boolean = false): Nullable<T[]> {
        const mrk = this.mark();
        const res: T[] = [];
        for (;;) {
            const t = func();
            if (t === null) {
                break;
            }
            res.push(t);
        }
        if (star || res.length > 0) {
            return res;
        }
        this.reset(mrk);
        return null;
    }
    private runner<T>($$dpth: number, fn: $$RuleType<T>, cr?: ContextRecorder): $$RuleType<T> {
        return () => {
            const mrk = this.mark();
            const res = cr ? (() => {
                const extraInfo: string[] = [];
                const result = fn((msg: string) => extraInfo.push(msg));
                cr.record(mrk, $$dpth, result, this.negating, extraInfo);
                return result;
            })() : fn();
            if (res !== null) {
                return res;
            }
            this.reset(mrk);
            return null;
        };
    }
    private choice<T>(fns: Array<$$RuleType<T>>): Nullable<T> {
        for (const f of fns) {
            const res = f();
            if (res !== null) {
                return res;
            }
        }
        return null;
    }
    private regexAccept(match: string, dpth: number, cr?: ContextRecorder): Nullable<string> {
        return this.runner<string>(dpth,
            (log) => {
                if (log) {
                    if (this.negating) {
                        log("$$!StrMatch");
                    } else {
                        log("$$StrMatch");
                    }
                    // We substring from 3 to len - 1 to strip off the
                    // non-capture group syntax added as a WebKit workaround
                    log(match.substring(3, match.length - 1));
                }
                const reg = new RegExp(match, "y");
                reg.lastIndex = this.mark().overallPos;
                const res = reg.exec(this.input);
                if (res) {
                    let lineJmp = 0;
                    let lind = -1;
                    for (let i = 0; i < res[0].length; ++i) {
                        if (res[0][i] === "\n") {
                            ++lineJmp;
                            lind = i;
                        }
                    }
                    this.pos = {
                        overallPos: reg.lastIndex,
                        line: this.pos.line + lineJmp,
                        offset: lind === -1 ? this.pos.offset + res[0].length : (res[0].length - lind - 1)
                    };
                    return res[0];
                }
                return null;
            }, cr)();
    }
    private noConsume<T>(fn: $$RuleType<T>): Nullable<T> {
        const mrk = this.mark();
        const res = fn();
        this.reset(mrk);
        return res;
    }
    private negate<T>(fn: $$RuleType<T>): Nullable<boolean> {
        const mrk = this.mark();
        const oneg = this.negating;
        this.negating = !oneg;
        const res = fn();
        this.negating = oneg;
        this.reset(mrk);
        return res === null ? true : null;
    }
}
export function parse(s: string): ParseResult {
    const p = new Parser(s);
    return p.parse();
}
export class ParseResult {
    public ast: Nullable<expression>;
    public err: Nullable<SyntaxErr>;
    constructor(ast: Nullable<expression>, err: Nullable<SyntaxErr>) {
        this.ast = ast;
        this.err = err;
    }
}
export interface PosInfo {
    readonly overallPos: number;
    readonly line: number;
    readonly offset: number;
}
export class SyntaxErr {
    public pos: PosInfo;
    public exprules: string[];
    public expmatches: string[];
    constructor(pos: PosInfo, exprules: Set<string>, expmatches: Set<string>) {
        this.pos = pos;
        this.exprules = [...exprules];
        this.expmatches = [...expmatches];
    }
    public toString(): string {
        return `Syntax Error at line ${this.pos.line}:${this.pos.offset}. Tried to match rules ${this.exprules.join(", ")}. Expected one of ${this.expmatches.map((x) => ` '${x}'`)}`;
    }
}
class ErrorTracker implements ContextRecorder {
    private mxpos: PosInfo = {overallPos: -1, line: -1, offset: -1};
    private mnd: number = -1;
    private prules: Set<string> = new Set();
    private pmatches: Set<string> = new Set();
    public record(pos: PosInfo, depth: number, result: any, negating: boolean, extraInfo: string[]) {
        if ((result === null) === negating) {
            return;
        }
        if (pos.overallPos > this.mxpos.overallPos) {
            this.mxpos = pos;
            this.mnd = depth;
            this.pmatches.clear();
            this.prules.clear();
        } else if (pos.overallPos === this.mxpos.overallPos && depth < this.mnd) {
            this.mnd = depth;
            this.prules.clear();
        }
        if (this.mxpos.overallPos === pos.overallPos && extraInfo.length >= 2) {
            if (extraInfo[0] === "$$StrMatch") {
                this.pmatches.add(extraInfo[1]);
            }
            if (extraInfo[0] === "$$!StrMatch") {
                this.pmatches.add(`not ${extraInfo[1]}`);
            }
        }
        if (this.mxpos.overallPos === pos.overallPos && this.mnd === depth) {
            extraInfo.forEach((x) => { if (x !== "$$StrMatch" && x !== "$$!StrMatch") { this.prules.add(x); } });
        }
    }
    public getErr(): SyntaxErr | null {
        if (this.mxpos.overallPos !== -1) {
            return new SyntaxErr(this.mxpos, this.prules, this.pmatches);
        }
        return null;
    }
}