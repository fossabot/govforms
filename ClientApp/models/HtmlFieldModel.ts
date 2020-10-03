import { observable } from "mobx";
import FieldModel from "./FieldModel";
import IFFHtmlFieldModel from "./firmstep/IFFHtmlFieldModel";
import SectionModel from "./SectionModel";

export default class HtmlFieldModel extends FieldModel<string> {

    constructor(section: SectionModel, source: IFFHtmlFieldModel) {
        super(section, FieldModel.getOptions(source, source.props.content?.replace("font-size: 12pt;", "") ?? ""))
    }
}