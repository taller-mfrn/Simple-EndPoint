# EndPoint simple usando Node, Fastify y PostreSQL
(by: Álvaro Fuentes)
Los endpoints son las URLs de un API o un backend que responden a una petición.
Estos no están pensados para interactuar con el usuario final, usualmente sólo devolverán JSON.

## Instrucciones

Correr en terminal el siguiente comando para instalar dependencias desde el archivo `package.json`:
```
npm install
```

Importar la base de datos desde el archivo `db/dvdrental.tar` a PostgresSQL.
Dicho "sample database" contiene información de un sistema de arriendo de DVD. 
dbname:  `dvdrental`
user: `postgres`
password: `postgres`

Para más información visite: http://www.postgresqltutorial.com/postgresql-sample-database/

Para levantar el servidor ejecutar el siguiente comando:
```
node app.js
```

Dirigirse a `localhost:3000/films/id` para ver información de la pelicula para un cierto id. 
Por ejemplo, `localhost:3000/films/1` muestra la película "Academy Dinosaur".

Dirigirse a `localhost:3000/actor/id` para ver información de un actor con cierto id. 
Por ejemplo, `localhost:3000/actor/25` muestra información del actor "Kevin Bloom".
