# Proyecto: 
### Nodejs-Mysql-CRUD.
***
## Índice
1. [Comandos](#comandos)
2. [Estructura](#estructura)
***
### Comandos
crea un package.json para la configuracion de nuestro proyecto
- npm init --yes 

Framework con el que estaremos trabajando en back-end
- npm i express

Como Motor de plantillas se usa handlebars
- npm i express-handlebars

Para administrar las sesiones se usará express-session
- npm i express-session

Para almacenar las sesiones en la bd usaremos 
- npm i express-mysql-session

Para validar los datos enviados por el usuario usaremos 
- npm i express-validator

Para conectarnos a Mysql usaremos 
- npm i mysql

Para ver las peticiones que llegan al servidor usaremos morgan
- npm i morgan

Para cifrar contraseñas usaremos bcryptjs
- npm i bcryptjs 

Para autenticacion y login local usaremos passport
- npm i passport
- npm i passport-local

Para manejar las fechas se usará timeago.js
- npm i timeago.js

Para manejar mensajes de exito/error se usará connect-flash
- npm i connect-flash

Todos estos comandos los podemos ejecutar al tiempo de la siquiente manera
- npm i express express-handlebars express-session express-mysql-session express-validator mysql morgan bcryptjs passport passport-local timeago.js connect-flash

Para desarrollo instalaremos nodemon (-D para indicar que es un modulo de desarrollo)
- npm i nodemon -D
***

### Estructura

#### Crearemos una carpeta src y dentro haremos el sig comando para crear el esqueleto que se usará
- mkdir lib public routes views

#### Los Archivos necesarios si se ejecuta en una consola de linux se puede hacer de la siguiente manera
- touch index.js database.js keys.js
***