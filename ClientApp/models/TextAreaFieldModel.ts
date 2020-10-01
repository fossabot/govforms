import FieldModel from "./FieldModel";
import IFFTextAreaFieldModel from "./firmstep/IFFTextAreaFieldModel";

export default class TextAreaFieldModel extends FieldModel<string> {

    constructor(source: IFFTextAreaFieldModel) {
        super(FieldModel.getOptions(source))
    }

}