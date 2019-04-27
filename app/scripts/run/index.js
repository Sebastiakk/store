import rootscope from './rootscope';

// Se agrupan todas las configuracion de arranque de la app  en un solo modulo y se exporta para importarlo en el modulo principal
export default angular
    .module('run', [])
    .run(rootscope) // Variables globales