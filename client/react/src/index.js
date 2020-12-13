import React from 'react';
import ReactDOM from 'react-dom';

import CrudButtonsComponent from './components/CrudButtonsComponent';

var app = angular.module('app');

app.directive('crudButtonsComponent', ReactDirectiveFunction);

ReactDirectiveFunction.$inject = ['reactDirective'];
function ReactDirectiveFunction(reactDirective) {
    return reactDirective(CrudButtonsComponent);
}
