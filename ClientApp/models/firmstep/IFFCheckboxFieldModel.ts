import IFFFieldModel, { IFFFieldModelProps } from "./IFFFieldModel";

export interface IFFCheckboxFieldModelProps extends IFFFieldModelProps {
    listOfValues: [{label: string, value: string}]
}

export default interface IFFCheckboxFieldModel extends IFFFieldModel {
    props : IFFCheckboxFieldModelProps
}