# VirtualShop-Express
API Restful de una tienda virtual con Node JS, Express y Mongo DB.

## Live API
```sh
https://api-rest-virtualshop.herokuapp.com/api/
```

### Autenticación

`Pública` **POST** `/signin`: Auntenticación de usuarios. Responde con un token JWT que es necesario para las demás peticiones.

`{
	"email" : String
	"password": String
}`

`Pública` **POST** `/singup`: Registro de usuarios. Responde con un token JWT que es necesario para las demás peticiones.

`{
	"name": String
	"email" : String
	"password": String
}`

### Usuarios

`Privada` **GET** `/user`: Obtiene la lista de todos los usuarios registrados

`Privada` **GET** `/user/{:userId}`: Obtiene el detalle del usuario solicitado

`Privada` **PUT** `/user/{:userId}`: Modifica los datos del usuario

`Privada` **DELETE** `/user/{:userId}`: Elimina el usuario especificado

### Producto

`Privada` **POST** `/product`: Agrega un artículo o producto

`{
	"nombre": String
	"imagen" : String
	"precio": String
  "descripcion": String
}`

`Privada` **GET** `/product`: Obtiene la lista de todos los productos

`Privada` **GET** `/product/{:productId}`: Obtiene el detalle del producto solicitado

`Privada` **PUT** `/product/{:productId}`: Modifica los datos del producto

`Privada` **DELETE** `/product/{:productId}`: Elimina el producto especificado

### Pedido

`Privada` **POST** `/order`: Agrega un pedido

`{
	"direccion": String
	"lat_long": String
	"id_usuario": "String
	"id_articulo": String
}`

`Privada` **GET** `/order`: Obtiene la lista de todos los pedidos

`Privada` **GET** `/order/{:orderId}`: Obtiene el detalle del pedido solicitado

`Privada` **PUT** `/order/{:orderId}`: Modifica los datos del pedido

`Privada` **DELETE** `/order/{:orderId}`: Elimina el pedido especificado

### Ejecución Local

En el archivo config.js se debe cambiar la ruta de la base de datos por tu base de datos local

```sh
$ db: process.env.MONGODB_URI || mongodb://localhost:27017/shop
```

Instalar dependencias e iniciar el server
```sh
$ npm install 
$ npm start
```

> **Nota:** Es mi primer proyecto con Express y Node. Don't be so rude.
