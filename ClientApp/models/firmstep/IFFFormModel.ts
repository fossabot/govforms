import IFFSectionModel from "./IFFSectionModel";

export default interface IFFFormModel {
    formName: string;
    sections: IFFSectionModel[];
    props: {id: string};
}