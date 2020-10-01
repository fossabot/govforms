import IFFFieldModel, { IFFFieldModelProps } from "./IFFFieldModel";

export interface IFFHtmlFieldModelProps extends IFFFieldModelProps {
    content: string
}

export default interface IFFHtmlFieldModel extends IFFFieldModel {
    props : IFFFieldModelProps
}