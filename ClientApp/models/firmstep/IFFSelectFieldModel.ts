import IFFFieldModel, { IFFFieldModelProps } from "./IFFFieldModel";

export interface IFFSelectFieldModelProps extends IFFFieldModelProps {
    listOfValues: [{label: string, value: string}]
}


export default interface IFFSelectFieldModel extends IFFFieldModel {
    props : IFFSelectFieldModelProps
}