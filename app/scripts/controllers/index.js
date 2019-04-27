import * as angular from 'angular';
import home from './controller_home';
import detail from './controller_detail';
import barr from './controller_barr';

// Se cargan todos TOOOOODOS los controladores de la app
angular.module('controllers', [])
    .controller('controller_home', home)
    .controller('controller_detail', detail)
    .controller('controller_barr', barr)