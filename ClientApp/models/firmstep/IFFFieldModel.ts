export interface IFFFieldModelProps {
    label: string,
    dataName: string,
    hidden?: boolean,
    labelPosition?: string;
    mandatory?: boolean;
    mandatoryMessage?: string;
    helpText?: string;
    displayCondition?: string;
    validationMask?: string;
    _custom_regex_?: string;
    validationMaskMessageValue?: string;
    validationMaskMessage?: string;
    validationCondition?: string;
    validationConditionMessage?: string;
}

export default interface IFFFieldModel {
    type: string,
    props: IFFFieldModelProps
}