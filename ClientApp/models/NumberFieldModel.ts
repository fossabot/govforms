import Result from "@Core/Result";
import { observable } from "mobx";
import FieldModel from "./FieldModel";
import FFConditionParse from "./firmstep/conditions/FFConditionParser";
import IFFNumberFieldModel from "./firmstep/IFFNumberFieldModel";
import IFFTextFieldModel from "./firmstep/IFFTextFieldModel";
import SectionModel from "./SectionModel";
import ExpressionFieldValidationRuleModel from "./validation/ExpressionFieldValidationRuleModel";
import RegexFieldValidationRuleModel from "./validation/RegexFieldValidationRuleModel";

export default class NumberFieldModel extends FieldModel<number> {
    
    @observable
    width: number;

    constructor(section: SectionModel, source: IFFNumberFieldModel) {
        super(section, FieldModel.getOptions(source, null))

        this.prefix = source.props.prefix;
        this.suffix = source.props.suffix;
        this.decimalPlaces = source.props.decimalPlaces;
        this.width = source.props.width;
    }

    @observable
    prefix: string = null;

    @observable
    suffix: string = null;

    @observable decimalPlaces: number = 0;

}