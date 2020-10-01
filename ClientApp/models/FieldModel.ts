import { computed, observable } from 'mobx';
import IFFFieldModel from './Firmstep/IFFFieldModel';

interface IFieldModelOptions {
    name: string, 
    displayName: string,
    showLabel: boolean,
    visible: boolean,
    required: boolean,
    requiredErrorMessage: string;
}

export default class FieldModel<T> {

    constructor(options: IFieldModelOptions) {
        this.name = options.name;
        this.displayName = options.displayName;
        this.showLabel = options.showLabel;
        this.visible = options.visible;
        this.required = options.required;
        this.requiredErrorMessage =  options.requiredErrorMessage ?? `${options.displayName ?? "This field"} is required`
    }

    static getOptions(source: IFFFieldModel): IFieldModelOptions {
        return { 
            name: source.props.dataName, 
            displayName: source.props.label, 
            showLabel: source.props.labelPosition !== "hideLabel", 
            visible: !source.props.hidden,
            required: !!source.props.mandatory,
            requiredErrorMessage: source.props.mandatoryMessage
        };
    }

    @observable
    name: string;

    @observable
    displayName: string;

    @observable
    showLabel: boolean = true;

    @observable
    visible: boolean = true;

    @observable
    required: boolean = false;

    @observable
    requiredErrorMessage: string;

    @observable
    value: T;


    @computed get validationError(): string {
        if (this.required && (this.value === null || this.value === undefined)) {
            return this.requiredErrorMessage;
        } else {
            return null;
        }
    }

}