btnCart.$inject = ['local'];

export default function btnCart(local) {
  return {
    restrict: 'AE',
    template: require('./template.html'),
    link: link,
    scope: {
      idProdct: '='
    }
  };


  function link(scope) {
    if (!local.get('cart')) {
      local.set('cart', [])
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
      for (let i = 0; i < local.get('cart').length; i++) {
        if (local.get('cart')[i].prodct === scope.idProdct) {
          existe = true;
        }
      }
      return existe;
    }

    function agregar_carrito() {
      if (scope.carrito) {
        let temp = local.get('cart');
        temp.push({
          prodct: scope.idProdct,
          amount: 1
        });
        local.set('cart', temp)
      } else {
        var pos;
        for (let i = 0; i < local.get('cart').length; i++) {
          if (local.get('cart')[i].prodct === scope.idProdct) {
            pos = i;
          }
        }
        let temp = local.get('cart');
        temp.splice(pos, 1);
        local.set('cart', temp)
      }
    }
  }
}