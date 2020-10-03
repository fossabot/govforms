import { observable } from "mobx";
import FieldModel from "./FieldModel";
import IFFCheckboxFieldModel from "./firmstep/IFFCheckboxFieldModel";
import IFFRadioFieldModel from "./firmstep/IFFRadioFieldModel";
import IFFTextAreaFieldModel from "./firmstep/IFFTextAreaFieldModel";
import SectionModel from "./SectionModel";

export default class MultiCheckboxFieldModel extends FieldModel<string[]> {

    constructor(section: SectionModel, source: IFFCheckboxFieldModel) {
        super(section, FieldModel.getOptions(source, []))
        this.choices = source.props.listOfValues;
    }

    @observable
    choices: {label: string, value: string}[]
    
}