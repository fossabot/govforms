import IFFFieldModel from "./IFFFieldModel";

export default interface IFFSectionModel {
    name: string;
    id: string;
    fields: IFFFieldModel[];
}