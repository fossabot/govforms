import IFFFieldModel, { IFFFieldModelProps } from "./IFFFieldModel";

export interface IFFRadioFieldModelProps extends IFFFieldModelProps {
    listOfValues: [{label: string, value: string}]
}

export default interface IFFRadioFieldModel extends IFFFieldModel {
    props : IFFRadioFieldModelProps
}