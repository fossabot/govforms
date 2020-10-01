import { computed } from "mobx";
import IFFFormModel from "./firmstep/IFFFormModel";
import SectionModel from "./SectionModel";

export default class FormModel {

    constructor(source: IFFFormModel) {
        this.id = source.props.id;
        this.title = source.formName;
        this.sections = source.sections.map(s => new SectionModel(s));
    }

    id: string;
    title: string;
    sections: SectionModel[];

    @computed get invalidSections() : SectionModel[] {
        return this.sections.filter(f => f.invalidFields.length > 0);
    }

}