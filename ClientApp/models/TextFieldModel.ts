import Result from "@Core/Result";
import { observable } from "mobx";
import FieldModel from "./FieldModel";
import FFConditionParse from "./firmstep/conditions/FFConditionParser";
import IFFTextFieldModel from "./firmstep/IFFTextFieldModel";
import SectionModel from "./SectionModel";
import ExpressionFieldValidationRuleModel from "./validation/ExpressionFieldValidationRuleModel";
import RegexFieldValidationRuleModel from "./validation/RegexFieldValidationRuleModel";

export default class TextFieldModel extends FieldModel<string> {

    private readonly REGEX_SPLIT = /^\/(.*)\/([^/]*)$/;

    constructor(section: SectionModel, source: IFFTextFieldModel) {
        super(section, FieldModel.getOptions(source, ""))
        this.width = source.props.width ?? null;

        if (source.props.validationMask) {
            let regexAndFlags = source.props.validationMask === "_custom_regex_" ? source.props._custom_regex_ : source.props.validationMask;
            let regex = regexAndFlags.replace(this.REGEX_SPLIT, "$1");
            let flags = regexAndFlags.replace(this.REGEX_SPLIT, "$2");
            this.validationRules.push(new RegexFieldValidationRuleModel(new RegExp(regex, flags), source.props.validationMaskMessage.replace("_validation_mask_", source.props.validationMaskMessageValue)))
        }

        if (source.props.validationCondition) {
            let expression = FFConditionParse.parse(source.props.validationCondition);
            this.validationRules.push(new ExpressionFieldValidationRuleModel(expression, source.props.validationConditionMessage ?? "Invalid value"));
        }
    }

    @observable
    width: number | null;

}