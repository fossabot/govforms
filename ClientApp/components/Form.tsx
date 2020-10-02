import IFFFormModel from "@Models/firmstep/IFFFormModel";
import * as React from "react";
import FormSection from "./FormSection";
import FormModel from "@Models/FormModel";
import { observer } from "mobx-react";
import FieldModel from "@Models/FieldModel";


export interface IProps {
    data: FormModel;
    hideTitle?: boolean;
    hideSectionTitles?: boolean;
}

@observer
export default class Form extends React.Component<IProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { (!this.props.hideTitle && <h1 className="govuk-heading-xl">{this.props.data.title}</h1>)}

                { this.props.data.invalidSections.length > 0 &&
                    <div className="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabIndex={-1} data-module="govuk-error-summary">
                        <h2 className="govuk-error-summary__title" id="error-summary-title">
                            There is a problem
                        </h2>
                        <div className="govuk-error-summary__body">
                            <ul className="govuk-list govuk-error-summary__list">
                                { this.props.data.invalidSections.map( s=> 
                                    s.invalidFields.map( (f, i) => 
                                        <li key={i}>
                                            <a href="javascript:;" onClick={e => this.focusControl(f)}>{f.validationError}</a>
                                        </li>
                                    )
                                )}
   
                            </ul>
                        </div>
                    </div>
                }

                { this.props.hideSectionTitles && (
                    this.props.data.sections.map(s => {
                        return (
                            <div key={s.name} id={s.name}>
                                <FormSection data={s} />
                            </div>
                        );
                    })
                )}

                { !this.props.hideSectionTitles && (
                    <div className="govuk-tabs" data-module={this.props.data.id}>

                        <h2 className="govuk-tabs__title">
                            Sections
    </h2>
                        <ul className="govuk-tabs__list">

                            {this.props.data.sections.map((s, i) => {
                                return <li key={s.name} className={`govuk-tabs__list-item ${i === 0 ? "govuk-tabs__list-item--selected" : ""}`}>
                                    <a className="govuk-tabs__tab" href={"#" + s.name}>
                                        {s.displayName}
                                    </a>
                                </li>
                            })}


                        </ul>

                        {this.props.data.sections.map((s, i) => {
                            return (
                                <div key={s.name} className={`govuk-tabs__panel ${i != 0 ? "govuk-tabs__panel--hidden" : ""} `} id={s.name}>
                                    <FormSection data={s} />
                                </div>
                            )

                        })}

                    </div>
                )}


            </div>

        )
    }
    private focusControl = (f: FieldModel<any>) => {
        f.controls[0].focus();
    }
}