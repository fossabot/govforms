import IFFFieldModel, { IFFFieldModelProps } from "./IFFFieldModel";

export interface IFFTextAreaFieldModelProps extends IFFFieldModelProps {

}

export default interface IFFTextAreaFieldModel extends IFFFieldModel {
    props : IFFTextAreaFieldModelProps
}