import angular from 'angular';
import RES from './respuestas';
import local_storage from './local_storage';

export default angular
    .module('factories', [])
    .factory('toast', RES)
    .factory('local', local_storage)