import IFFFormModel from "@Models/firmstep/IFFFormModel";
import * as React from "react";
import FormSection from "./FormSection";
import FormModel from "@Models/FormModel";
import { observer } from "mobx-react";
import FieldModel from "@Models/FieldModel";
import { observable } from "mobx";
import SectionModel from "@Models/SectionModel";
import { FormEvent } from "react";


export interface IProps {
    data: FormModel;
    hideTitle?: boolean;
    hideSectionTitles?: boolean;
}

class FormState {

    @observable
    currentSection: SectionModel
}

@observer
export default class Form extends React.Component<IProps, FormState> {

    private handleSectionTabClick = (event: FormEvent<HTMLAnchorElement>) => {
        let sectionName = (event.target as HTMLAnchorElement).dataset.section;
        let newSection = this.props.data.getSection(sectionName);

        if (newSection !== this.state.currentSection) {

            this.setState({ currentSection: newSection });

        }
    };
    handleNextSectionClick = (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        let newIndex = this.props.data.visibleSections.indexOf(this.state.currentSection) + 1;

        if (this.props.data.visibleSections.length > newIndex) {
            this.setState({ currentSection: this.props.data.visibleSections[newIndex] });
        }
    };

    handlePrevSectionClick = (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        let newIndex = this.props.data.visibleSections.indexOf(this.state.currentSection) - 1;

        if (newIndex >= 0) {
            this.setState({ currentSection: this.props.data.visibleSections[newIndex] });
        }
    };


    constructor(props) {
        super(props);

        let initialState = new FormState();
        initialState.currentSection = props.data.visibleSections[0];
        this.state = initialState;
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
                                {this.props.data.invalidSections.map(s =>
                                    s.invalidFields.map((f, i) =>
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
                    this.props.data.visibleSections.map(s => {
                        return (
                            <div key={s.name} id={s.name}>
                                <FormSection data={s} />
                            </div>
                        );
                    })
                )}

                { !this.props.hideSectionTitles && (
                    <div className="govuk-tabs" data-module="govuk-tabs">

                        <h2 className="govuk-tabs__title">
                            Sections
    </h2>
                        <ul className="govuk-tabs__list">

                            {this.props.data.visibleSections.map((s, i) => {
                                return <li key={s.name} className={`govuk-tabs__list-item ${s === this.state.currentSection ? "govuk-tabs__list-item--selected" : ""}`}>
                                    <a className="govuk-tabs__tab" href={"#" + s.name} onClick={this.handleSectionTabClick} data-section={s.name}>
                                        {s.displayName}
                                    </a>
                                </li>
                            })}


                        </ul>

                        {this.props.data.visibleSections.map((s, i) => {
                            return (
                                <div key={s.name} className={`govuk-tabs__panel ${s !== this.state.currentSection ? "govuk-tabs__panel--hidden" : ""} `} id={s.name}>
                                    { s === this.state.currentSection &&
                                        <FormSection data={s} />
                                    }
                                </div>
                            )

                        })}

                    </div>
                )}


                {this.props.data.visibleSections.indexOf(this.state.currentSection) > 0 &&
                    <a href="#" role="button" draggable="false" className="govuk-button govuk-button--secondary" data-module="govuk-button" onClick={this.handlePrevSectionClick}>
                        Back
                </a>
                }
&nbsp;&nbsp;
                {this.props.data.visibleSections.length > this.props.data.visibleSections.indexOf(this.state.currentSection) + 1 &&
                    <a href="#" role="button" draggable="false" className="govuk-button" data-module="govuk-button" onClick={this.handleNextSectionClick}>
                        Next
                </a>
                }
            </div>

        )
    }
    private focusControl = (f: FieldModel<any>) => {
        f.controls[0].focus();
    }
}