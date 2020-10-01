import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import Form from "@Components/Form";
import { default as json } from "@Components/form.json"
import FormModel from "@Models/FormModel";
import IFFFormModel from "@Models/firmstep/IFFFormModel";

type Props = RouteComponentProps<{}>;

const HomePage: React.FC<Props> = () => {
  let formModel : IFFFormModel = json;

    return <div>
        <Helmet>
            <title>{json.formName}</title>
        </Helmet>

        <div className="govuk-phase-banner">
  <p className="govuk-phase-banner__content">
    <strong className="govuk-tag govuk-phase-banner__content__tag">
      alpha
    </strong>
    <span className="govuk-phase-banner__text">
      This is a new service – your <a className="govuk-link" href="#">feedback</a> will help us to improve it.
    </span>
  </p>
</div>   

<Form data={new FormModel(formModel)} hideTitle/>
    </div>;
}

export default HomePage;