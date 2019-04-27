btnCart.$inject = ['$localStorage'];

export default function btnCart($localStorage) {
  return {
    restrict: 'AE',
    template: require('./template.html'),
    link: link,
    scope: {
      idProdct: '='
    }
  };


  function link(scope) {
    if (!$localStorage.cart) {
      $localStorage.cart = [];
    }

    scope.carrito = validar_item_existe();

    scope.icono_carrito = function () {
      return scope.carrito ? 'remove_shopping_cart' : 'add_shopping_cart';
    };
    scope.text_carrito = function () {
      return !scope.carrito ? 'Agregar al carrito' : 'Remover del carrito';
    };

    scope.dar_like = function () {
      scope.carrito = !scope.carrito;
      agregar_carrito();
    };

    function validar_item_existe() {
      var existe = false;
      for (let i = 0; i < $localStorage.cart.length; i++) {
        if ($localStorage.cart[i].prodct === scope.idProdct) {
          existe = true;
        }
      }
      return existe;
    }

    function agregar_carrito() {
      if (scope.carrito) {
        $localStorage.cart.push({
          prodct: scope.idProdct
        });
      } else {
        var pos;
        for (let i = 0; i < $localStorage.cart.length; i++) {
          if ($localStorage.cart[i].prodct === scope.idProdct) {
            pos = i;
          }
        }
        $localStorage.cart.splice(pos, 1);
      }
    }
  }
}