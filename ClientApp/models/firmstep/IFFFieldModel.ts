export interface IFFFieldModelProps {
    label: string,
    dataName: string,
    hidden?: boolean,
    labelPosition?: string;
    mandatory?: boolean;
    mandatoryMessage?: string;
    helpText?: string;
    displayCondition?: string;
}

export default interface IFFFieldModel {
    type: string,
    props: IFFFieldModelProps
}