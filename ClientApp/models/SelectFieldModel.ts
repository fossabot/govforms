import { observable } from "mobx";
import FieldModel from "./FieldModel";
import IFFRadioFieldModel from "./firmstep/IFFRadioFieldModel";
import IFFSelectFieldModel from "./firmstep/IFFSelectFieldModel";
import IFFTextAreaFieldModel from "./firmstep/IFFTextAreaFieldModel";
import SectionModel from "./SectionModel";

export default class SelectFieldModel extends FieldModel<string> {

    constructor(section: SectionModel, source: IFFSelectFieldModel) {
        super(section, FieldModel.getOptions(source, null))
        this.choices = source.props.listOfValues;
    }

    @observable
    choices: {label: string, value: string}[]
    
}