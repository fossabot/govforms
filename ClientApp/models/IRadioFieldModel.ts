import IFieldModel from "./IFieldModel";

export default interface IRadioFieldModel extends IFieldModel {
    props : {
        label: string,
        dataName: string
        listOfValues: [{label: string, value: string}]
    }
}