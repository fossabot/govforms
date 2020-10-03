import Result from "@Core/Result";
import { computed, observable } from "mobx";
import FieldModel from "./FieldModel";
import IFFDateFieldModel from "./firmstep/IFFDateFieldModel";
import SectionModel from "./SectionModel";
import * as moment from 'moment';
import { prototype } from "react-markdown";

export default class DateFieldModel extends FieldModel<moment.Moment> {

    constructor(section: SectionModel, source: IFFDateFieldModel) {
        super(section, FieldModel.getOptions(source, null));
        
    }

    @computed
    protected get validate() : string {
        return this.value === null || this.value.isValid() ? null : this.displayName + " must be a valid date";
    }


}