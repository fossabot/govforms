import { observable } from "mobx";
import FieldModel from "./FieldModel";
import IFFCheckboxFieldModel from "./firmstep/IFFCheckboxFieldModel";
import IFFRadioFieldModel from "./firmstep/IFFRadioFieldModel";
import IFFTextAreaFieldModel from "./firmstep/IFFTextAreaFieldModel";
import SectionModel from "./SectionModel";

export default class CheckboxFieldModel extends FieldModel<string> {

    constructor(section: SectionModel, source: IFFCheckboxFieldModel) {
        super(section, FieldModel.getOptions(source, null))
        this.choices = source.props.listOfValues;
    }

    @observable
    choices: {label: string, value: string}[]
    
}