import { computed, observable } from "mobx";
import FieldModel from "./FieldModel";
import IFFFormModel from "./firmstep/IFFFormModel";
import SectionModel from "./SectionModel";
import SubFormFieldModel from "./SubFormField";

export default class FormModel {
    
    getSection(sectionName: string) {
        return this.sections.find(s => s.name.toLowerCase() === sectionName.toLowerCase());
    }
    
    
    getField(fieldName: string) : FieldModel<any> {

        if (fieldName.includes("/")) {
            let [subFormName, rest] = fieldName.split('/', 2);
            let subForm = this.getField(subFormName);

            if (subForm instanceof SubFormFieldModel) {
                return subForm.value.getField(rest);
            } else {
                return null;
            }

        }  else {
            return this.sections.flatMap(s => s.fields).find(f => f.name.toLowerCase() === fieldName.toLowerCase())
        }
    }

    constructor(source: IFFFormModel, parent: SubFormFieldModel =null) {
        this.id = source.props.id;
        this.title = source.formName;
        this.sections = source.sections.map(s => new SectionModel(this, s));
        this.parent = parent;
    }

    @observable
    id: string;

    @observable
    title: string;

    @observable
    sections: SectionModel[];

    readonly parent: SubFormFieldModel;

    @computed get invalidSections() : SectionModel[] {
        return this.sections.filter(f => f.invalidFields.length > 0);
    }

    @computed get visibleSections() : SectionModel[] {
        return this.sections.filter(f => f.visible);
    }

}