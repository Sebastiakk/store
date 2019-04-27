import * as angular from 'angular';

import './configs/modulos.module';
import './configs';
import './services';
import './directives';
import './controllers';
import './factories';
import './run';

angular.bootstrap(document, [
    'modules',
    'configs',
    'run',
    'services',
    'directives',
    'controllers',
    'factories',
]);