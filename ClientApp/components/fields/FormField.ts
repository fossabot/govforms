import { Component } from "react";

interface IFormFieldProps<TField> {
    field: TField
}

export default abstract class FormField<TField> extends Component<IFormFieldProps<TField>, {}, {}> {



}