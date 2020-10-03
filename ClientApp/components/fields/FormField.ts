import FieldModel from "@Models/FieldModel";
import { observable } from "mobx";
import { Component } from "react";

interface IFormFieldProps<TField extends FieldModel<any>> {
    field: TField
}

export default abstract class FormField<TField extends FieldModel<any>, TState={}> extends Component<IFormFieldProps<TField>, TState, {}> {

    @observable
    conversionError: string;

    constructor(props: IFormFieldProps<TField>) {
        super(props);
        props.field.controls.push(this);
    }

    componentWillUnmount() {
        this.props.field.controls.splice(this.props.field.controls.indexOf(this), 1);
    }

    abstract focus() : void;

}