import { observable } from "mobx";
import FieldModel from "./FieldModel";
import IFFSubFormFieldModel from "./firmstep/IFFSubFormFieldModel";
import SectionModel from "./SectionModel";

export default class SubFormFieldModel extends FieldModel<SectionModel> {

    constructor(section: SectionModel, source: IFFSubFormFieldModel) {
        super(section, FieldModel.getOptions(source, null))
        this.value = new SectionModel(section.form, source.props.subformDefinition.sections[0]);
        this.value.hideTitle = true;
    }
}