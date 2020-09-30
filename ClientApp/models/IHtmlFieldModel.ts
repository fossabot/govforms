import IFieldModel from "./IFieldModel";

export default interface IHtmlFieldModel extends IFieldModel {
    props : {
        label: string,
        dataName: string,
        content, string
    }
}