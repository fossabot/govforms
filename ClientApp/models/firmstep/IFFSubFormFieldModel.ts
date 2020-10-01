import IFFFieldModel, { IFFFieldModelProps } from "./IFFFieldModel";
import IFFFormModel from "./IFFFormModel";

export interface IFFSubFormFieldModelProps extends IFFFieldModelProps {
    subformDefinition: IFFFormModel,
    displayStyle: "summary"
}

export default interface IFFSubFormFieldModel extends IFFFieldModel {
    props : IFFSubFormFieldModelProps
}