export default interface IFieldModel {
    type: string,
    props: { 
        label: string,
        dataName: string,
        hidden?: boolean,
        labelPosition?: string;
    }
}