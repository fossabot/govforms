import IFFFieldModel, { IFFFieldModelProps } from "./IFFFieldModel";

export interface IFFNumberFieldModelProps extends IFFFieldModelProps {
    prefix?: string,
    suffix?: string
    decimalPlaces?: number,
    width?: number
}

export default interface IFFNumberFieldModel extends IFFFieldModel {
    props : IFFNumberFieldModelProps
}