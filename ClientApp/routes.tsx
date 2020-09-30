import * as React from 'react';
import Layout from "@Layouts/Layout";
import AppRoute from "@Components/shared/AppRoute";
import HomePage from '@Pages/HomePage';
import { Switch } from 'react-router-dom';
import NotFoundPage from '@Pages/NotFoundPage';

export const routes = <Switch>
    <AppRoute layout={Layout} exact path="/" component={HomePage} />
    <AppRoute layout={Layout} path="*" component={NotFoundPage} statusCode={404} />
</Switch>;