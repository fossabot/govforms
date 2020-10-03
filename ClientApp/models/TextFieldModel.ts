import Result from "@Core/Result";
import { observable } from "mobx";
import FieldModel from "./FieldModel";
import FFConditionParse from "./firmstep/conditions/FFConditionParser";
import IFFTextFieldModel from "./firmstep/IFFTextFieldModel";
import SectionModel from "./SectionModel";
import ExpressionFieldValidationRuleModel from "./validation/ExpressionFieldValidationRuleModel";
import RegexFieldValidationRuleModel from "./validation/RegexFieldValidationRuleModel";

export default class TextFieldModel extends FieldModel<string> {

    constructor(section: SectionModel, source: IFFTextFieldModel) {
        super(section, FieldModel.getOptions(source, ""))
        this.width = source.props.width ?? null;
    }

    @observable
    width: number | null;

}