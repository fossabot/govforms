import IFieldModel from "./IFieldModel";

export default interface ITextAreaFieldModel extends IFieldModel {
    props : {
        label: string,
        dataName: string
    }
}