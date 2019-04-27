import * as angular from 'angular';

import './configs/modulos.module';
import './configs';
import './services';
import './directives';
import './controllers';

angular.bootstrap(document, ['modules', 'configs', 'services', 'directives', 'controllers']);