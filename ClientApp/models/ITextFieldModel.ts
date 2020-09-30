import IFieldModel from "./IFieldModel";

export default interface ITextFieldModel extends IFieldModel {
    props : {
        label: string,
        dataName: string
    }
}