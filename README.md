# VirtualShop [FRONTEND] => TEST CondorLabs

[Ver app funcionando](http://www.virtual-shop.tk)
, [Backend de la app](https://github.com/Sebastiakk/store-backend)

Esta app utiliza AngularJs, Angular Material y Webpack

## Primero clona del repositorio

```python
git clone https://github.com/Sebastiakk/store.git
```
 
## Instalación 

Antes de ejecutar el proyecto es necesario tener instalado [Webpack](https://www.npmjs.com/package/webpack) y [Webpack Dev Server](https://www.npmjs.com/package/webpack-dev-server), una vez instalado las dependencias globales procedemos a las dependencias del proyecto

```bash
Nos movemos dentro de la carpeta del proyecto y ejecutamos
$ npm i
```

## Como usar

```python
Ejecutamos  =>                $ npm start
Que es igual a poner =>       $ webpack-dev-server
```

Asegúrate que en el archivo "store/app/scripts/configs/api.js" este apuntando a la api, la url debería ser http://localhost:1234,
descarga el [aqui](https://github.com/Sebastiakk/store-backend)


Listo, la app se abre por si sola en el navegador, si no lo hace ingresa a 

http://localhost:1103/
