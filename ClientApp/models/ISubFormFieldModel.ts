import IFieldModel from "./IFieldModel";
import IFormModel from "./IFormModel";

export default interface ISubFormFieldModel extends IFieldModel {
    props : {
        label: string,
        dataName: string,
        subformDefinition: IFormModel,
        displayStyle: "summary"
    }
}