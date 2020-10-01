import Header from "@Components/shared/Header";
import "@Styles/Layout.scss";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { ToastContainer } from "react-toastify";

interface IProps {
    children: any;
}

type Props = IProps & RouteComponentProps<any> ;

export default class Layout extends React.Component<Props, {}> {
    public render() {
        return <div><Header/>  <div className="govuk-width-container">
          
        <main className="govuk-main-wrapper">
    
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            {this.props.children}
          </div>
        </div>
        <ToastContainer />
      </main>
      </div>
      </div>
    }
}