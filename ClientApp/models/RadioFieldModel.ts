import { observable } from "mobx";
import FieldModel from "./FieldModel";
import IFFRadioFieldModel from "./firmstep/IFFRadioFieldModel";
import IFFTextAreaFieldModel from "./firmstep/IFFTextAreaFieldModel";
import SectionModel from "./SectionModel";

export default class RadioFieldModel extends FieldModel<string> {

    constructor(section: SectionModel, source: IFFRadioFieldModel) {
        super(section, FieldModel.getOptions(source, null))
        this.choices = source.props.listOfValues;
    }

    @observable
    choices: {label: string, value: string}[]
    
}