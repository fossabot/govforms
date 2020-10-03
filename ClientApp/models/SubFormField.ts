import { observable } from "mobx";
import FieldModel from "./FieldModel";
import IFFSubFormFieldModel from "./firmstep/IFFSubFormFieldModel";
import FormModel from "./FormModel";
import SectionModel from "./SectionModel";

export default class SubFormFieldModel extends FieldModel<FormModel> {

    constructor(section: SectionModel, source: IFFSubFormFieldModel) {
        super(section, FieldModel.getOptions(source, null))

        this.value = new FormModel(source.props.subformDefinition, this);
    }
}