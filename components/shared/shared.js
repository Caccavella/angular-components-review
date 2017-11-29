import {api} from './api';
import {messagelists} from './messagelists';
import angular from 'angular';

export const shared = angular.module('shared', []).constant('API', api).factory('Messages', messages);