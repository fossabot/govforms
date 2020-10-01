import IFFFieldModel, { IFFFieldModelProps } from "./IFFFieldModel";

export interface IFFTextFieldModelProps extends IFFFieldModelProps {

}

export default interface IFFTextFieldModel extends IFFFieldModel {
    props : IFFTextFieldModelProps
}