import FFConditionParser from "./FFConditionParser";

describe("FFConditionParser", ()=> {
    test("field = stringliteral", () => {
        FFConditionParser.parse("{a} = '1'")
    });
    test("stringliteral = stringliteral", () => {
        FFConditionParser.parse("'1' = '1'")
    });
    test("field=stringliteral", () => {
        FFConditionParser.parse("{a}='1'")
    });
    test("field=field", () => {
        FFConditionParser.parse("{a}={b}")
    });
    test("field<>field", () => {
        FFConditionParser.parse("{a}<>{b}")
    });
    test("field!=field", () => {
        FFConditionParser.parse("{a}!={b}")
    });
    test("a=stringliteral||b=stringliteral", () => {
        FFConditionParser.parse("{a}='1'||{a}='2'");
    });
    test("a=stringliteral && b=stringliteral", () => {
        FFConditionParser.parse("{a}='1'&& {a}='2'");
    });
    test("c=stringliteral&&(a=stringliteral||b=stringliteral)", () => {
        FFConditionParser.parse("{c}='3'&&({a}='1'||{a}='2')");
    });
    test("c = stringliteral && (a = stringliteral || b = stringliteral)", () => {
        FFConditionParser.parse("{c} = '3' && ({a} = '1' || {a} = '2')");
    });

    test("({earnings1}='Earnings' && {yourPayslip}!='a') || {yourBS}!=''", () => {
        FFConditionParser.parse("({earnings1}='Earnings' && {yourPayslip}!='a') || {yourBS}!=''");
    });

    
});
