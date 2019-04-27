import angular from 'angular';
import RES from './respuestas';
import local_storage from './local_storage';
// Se agrupan todas las factories en un solo modulo y se exporta para importarlo en el modulo principal
export default angular
    .module('factories', [])
    .factory('toast', RES) // Toast de respuesta 
    .factory('local', local_storage) // Guarda en el localstorague pero encriptado