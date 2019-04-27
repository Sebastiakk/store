import * as angular from 'angular';
// Se importan todos los sub modulos de la app para importarlo en el modulo principal
import './configs/modulos.module';
import './configs';
import './services';
import './directives';
import './controllers';
import './factories';
import './run';

angular.bootstrap(document, [ // Se inyectan todos los modulos
    'modules',
    'configs',
    'run',
    'services',
    'directives',
    'controllers',
    'factories',
]);