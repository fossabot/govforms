import * as React from "react";
import TextFieldModel from "@Models/TextFieldModel";
import { observer } from 'mobx-react';
import FormField from "./FormField";
import { supportsGoWithoutReloadUsingHash } from "history/DOMUtils";
import DateFieldModel from "@Models/DateFieldModel";
import { action, computed, observable, reaction } from "mobx";
import * as moment from 'moment';



@observer
export default class DateFormField extends FormField<DateFieldModel> {

  constructor(props) {
    super(props);

    this.updateFromValue();

    //reaction(() => this.props.field.value, this.updateFromValue);
  }

  @observable
  private day: string|null;
  
  @observable
  private month: string|null;

  @observable
  private year: string|null;
  

  private updateFromValue = () => {
    this.day = this.props.field.value?.day()?.toString() ?? "",
      this.month = this.props.field.value?.month()?.toString() ?? "",
      this.year = this.props.field.value?.year()?.toString() ?? "";
  };

  focus(): void {
    this.inputRef.current.focus();
    this.inputRef.current.scrollIntoView();
  }

  private inputRef = React.createRef() as React.RefObject<HTMLInputElement>;

  private handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.day = event.target.value;
    this.tryUpdateValue();
  };

  private handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.month = event.target.value;
    this.tryUpdateValue();
  };

  private handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.year = event.target.value;
    this.tryUpdateValue();
  };

  private tryUpdateValue() {

    if (this.day && this.month && this.year) {
      let day = Number.parseInt(this.day);
      let month = Number.parseInt(this.month);
      let year = Number.parseInt(this.year);

      let newValue = moment({ day: day, month: month, year: year });
      this.props.field.value = newValue;
    } else {
      this.props.field.value = null;
    }
  }

  render() {

    return (
      <div className={`govuk-form-group ${this.props.field.validationError ? "govuk-form-group--error" : ""}`}>
        <fieldset className="govuk-fieldset" role="group" aria-describedby={`${this.props.field.hintText ? (this.props.field.name + "-hint") : ""} ${this.props.field.validationError ? (this.props.field.name + "-error") : ""}`}>
          <legend className="govuk-fieldset__legend govuk-fieldset__legend--2">
            <h1 className="govuk-fieldset__heading">
              When was your passport issued?
          </h1>
          </legend>
          {this.props.field.hintText && (
            <div id="event-name-hint" className="govuk-hint">
              {this.props.field.hintText}
            </div>
          )}
          {this.props.field.validationError && (
            <span id={this.props.field.name + "-error"} className="govuk-error-message">
              <span className="govuk-visually-hidden">Error:</span> {this.props.field.validationError}
            </span>
          )}
          <div className="govuk-date-input" id={this.props.field.name}>
            <div className="govuk-date-input__item">
              <div className="govuk-form-group">
                <label className="govuk-label govuk-date-input__label" htmlFor={`${this.props.field.name}-day`}>
                  Day
              </label>
                <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-day" value={this.day} name={`${this.props.field.name}-day`} type="text" pattern="[0-9]*" inputMode="numeric" onChange={this.handleDayChange} /></div>
            </div>
            <div className="govuk-date-input__item">
              <div className="govuk-form-group">
                <label className="govuk-label govuk-date-input__label" htmlFor={`${this.props.field.name}-month`}>
                  Month
              </label>
                <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="passport-issued-month" value={this.month} name={`${this.props.field.name}-month`} type="text" pattern="[0-9]*" inputMode="numeric" onChange={this.handleMonthChange} /></div>
            </div>
            <div className="govuk-date-input__item">
              <div className="govuk-form-group">
                <label className="govuk-label govuk-date-input__label" htmlFor={`${this.props.field.name}-year`}>
                  Year
              </label>
                <input className="govuk-input govuk-date-input__input govuk-input--width-4" id="passport-issued-year" value={this.year} name={`${this.props.field.name}-year`} type="text" pattern="[0-9]*" inputMode="numeric" onChange={this.handleYearChange} /></div>
            </div>
          </div>

        </fieldset>
      </div>
    );


  }
}