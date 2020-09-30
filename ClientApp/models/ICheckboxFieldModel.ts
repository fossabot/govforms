import IFieldModel from "./IFieldModel";

export default interface ICheckboxFieldModel extends IFieldModel {
    props : {
        label: string,
        dataName: string
        listOfValues: [{label: string, value: string}]
    }
}