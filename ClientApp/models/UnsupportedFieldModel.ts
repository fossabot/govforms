import { computed } from "mobx";
import FieldModel from "./FieldModel"
import IFFFieldModel from "./Firmstep/IFFFieldModel"

export default class UnsupportedFieldModel extends FieldModel<void> {

    constructor(source: IFFFieldModel) {
        super(FieldModel.getOptions(source))
    }

    @computed get validationError() : string {
        return `Unsupported field type`;
    }
}