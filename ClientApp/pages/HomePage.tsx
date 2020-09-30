import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import Form from "@Components/Form";
import { default as json } from "@Components/form.json"
import IFormModel from "@Models/IFormModel";

type Props = RouteComponentProps<{}>;

const HomePage: React.FC<Props> = () => {
  let formModel : IFormModel = json;

    return <div>
        <Helmet>
            <title>{json.formName}</title>
        </Helmet>

        

<Form form={formModel} hideTitle/>
    </div>;
}

export default HomePage;