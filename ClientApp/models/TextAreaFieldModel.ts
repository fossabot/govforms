import FieldModel from "./FieldModel";
import IFFTextAreaFieldModel from "./firmstep/IFFTextAreaFieldModel";
import SectionModel from "./SectionModel";

export default class TextAreaFieldModel extends FieldModel<string> {

    constructor(section: SectionModel, source: IFFTextAreaFieldModel) {
        super(section, FieldModel.getOptions(source, ""))
    }

}