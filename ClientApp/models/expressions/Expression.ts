import FormModel from "@Models/FormModel";

export abstract class Expression<T> {

    abstract getValue(data: FormModel): T;
}