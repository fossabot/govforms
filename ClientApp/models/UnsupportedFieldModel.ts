import { computed, observable } from "mobx";
import FieldModel from "./FieldModel"
import IFFFieldModel from "./Firmstep/IFFFieldModel"
import SectionModel from "./SectionModel";

export default class UnsupportedFieldModel extends FieldModel<void> {

    constructor(section: SectionModel, source: IFFFieldModel, details: string) {
        super(section, FieldModel.getOptions(source, null))
        this.details = details;
    }
    
    @observable
    details: string;
    

    @computed get validationError() : string {
        if (!this.section.enableValidation) {
            return null;
        }
        return this.details;
    }
}