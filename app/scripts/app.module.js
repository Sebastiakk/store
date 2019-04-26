import * as angular from 'angular';

import './configs/modulos.module';
import './configs';
import './services';
import './directives';

angular.bootstrap(document, ['modules', 'configs', 'services', 'directives']);