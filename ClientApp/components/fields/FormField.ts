import FieldModel from "@Models/FieldModel";
import { Component } from "react";

interface IFormFieldProps<TField extends FieldModel<any>> {
    field: TField
}

export default abstract class FormField<TField extends FieldModel<any>> extends Component<IFormFieldProps<TField>, {}, {}> {

    constructor(props: IFormFieldProps<TField>) {
        super(props);
        props.field.controls.push(this);
    }

    componentWillUnmount() {
        this.props.field.controls.splice(this.props.field.controls.indexOf(this), 1);
    }

    abstract focus() : void;

}