import React from 'react';
import ReactDOM from 'react-dom';

import FormTplComponent from './components/FormTplComponent';
import ToolbarTplComponent from "./components/ToolbarTplComponent";

var app = angular.module('app');

app.directive('toolbarTplComponent', RegisterToolBarComponent);
app.directive('formTplComponent', RegisterFormComponent);

RegisterToolBarComponent.$inject = ['reactDirective', 'security'];
function RegisterToolBarComponent(reactDirective, security) {
    return reactDirective(ToolbarTplComponent, undefined, {}, {security: security});
}

RegisterFormComponent.$inject = ['reactDirective', 'security', 'localizedMessages'];
function RegisterFormComponent(reactDirective, security, localizedMessages) {
    return reactDirective(FormTplComponent, undefined, {}, {security: security, localizedMessages: localizedMessages});
}
