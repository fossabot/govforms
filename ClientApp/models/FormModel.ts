import { computed } from "mobx";
import FieldModel from "./FieldModel";
import IFFFormModel from "./firmstep/IFFFormModel";
import SectionModel from "./SectionModel";

export default class FormModel {
    
    getField(fieldName: string) : FieldModel<any> {
        return this.sections.flatMap(s => s.fields).find(f => f.name === fieldName)
    }

    constructor(source: IFFFormModel) {
        this.id = source.props.id;
        this.title = source.formName;
        this.sections = source.sections.map(s => new SectionModel(this, s));
    }

    id: string;
    title: string;
    sections: SectionModel[];

    @computed get invalidSections() : SectionModel[] {
        return this.sections.filter(f => f.invalidFields.length > 0);
    }

}