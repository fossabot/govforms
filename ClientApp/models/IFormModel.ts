import ISectionModel from "./ISectionModel";

export default interface IFormModel {
    formName: string;
    sections: ISectionModel[];
    props: {id: string};
}