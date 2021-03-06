import IFFFieldModel, { IFFFieldModelProps } from "./IFFFieldModel";

export interface IFFTextFieldModelProps extends IFFFieldModelProps {
    width?: number;
}

export default interface IFFTextFieldModel extends IFFFieldModel {
    props : IFFTextFieldModelProps
}