import IFieldModel from "./IFieldModel";

export default interface ISectionModel {
    name: string;
    id: string;
    fields: IFieldModel[];
}