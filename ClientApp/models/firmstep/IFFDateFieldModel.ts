import IFFFieldModel, { IFFFieldModelProps } from "./IFFFieldModel";

export interface IFFTextFieldModelProps extends IFFFieldModelProps {

}

export default interface IFFDateFieldModel extends IFFFieldModel {
    props : IFFTextFieldModelProps
}