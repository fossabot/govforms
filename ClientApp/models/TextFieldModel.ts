import FieldModel from "./FieldModel";
import IFFTextFieldModel from "./firmstep/IFFTextFieldModel";

export default class TextFieldModel extends FieldModel<string> {

    constructor(source: IFFTextFieldModel) {
        super(FieldModel.getOptions(source))
    }

}