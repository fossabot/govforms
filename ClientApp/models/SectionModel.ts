import {computed, observable } from 'mobx';
import FieldModel from './FieldModel';
import IFFSectionModel from './Firmstep/IFFSectionModel';
import IFFTextFieldModel from './firmstep/IFFTextFieldModel';
import TextFieldModel from './TextFieldModel';
import UnsupportedFieldModel from './UnsupportedFieldModel';

export default class SectionModel {
    
    constructor(source: IFFSectionModel) {
        this.name = source.id;
        this.displayName = source.name
        this.fields = [];

        for(let field of source.fields) {
            if (field.type == "text") {
                this.fields.push(new TextFieldModel(field as IFFTextFieldModel));
            } else {
                this.fields.push(new UnsupportedFieldModel(field));
            }
            
        }

        
    }

    @observable
    name: string;

    @observable
    displayName: string;

    @observable
    fields: FieldModel<any>[]
   
    @observable
    hideTitle: boolean = false;

    @computed get invalidFields() : FieldModel<any>[] {
        return this.fields.filter(f => f.validationError);
    }

}