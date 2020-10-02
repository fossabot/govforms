import IFFFieldModel, { IFFFieldModelProps } from "./IFFFieldModel";

export interface IFFTextFieldModelProps extends IFFFieldModelProps {
    width?: number;
    validationMask?: string;
    _custom_regex_?: string;
    validationMaskMessageValue?: string;
    validationMaskMessage?: string;
    validationCondition?: string;
    validationConditionMessage?: string;
}

export default interface IFFTextFieldModel extends IFFFieldModel {
    props : IFFTextFieldModelProps
}