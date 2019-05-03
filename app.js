
/************* Usando Fastify  *****************************/

// https://github.com/fastify/fastify-postgres
// https://github.com/fastify/fastify/blob/master/docs/Getting-Started.md

const fastify = require('fastify')()

fastify.register(require('fastify-postgres'), {
  connectionString: 'postgres://postgres:postgres@localhost/dvdrental'
})

// informacion peliculas

fastify.get('/films/:id', (req, reply) => {
  fastify.pg.connect(onConnect)

  function onConnect (err, client, release) {
    if (err) return reply.send(err)

    client.query(
      'SELECT film_id, title, description, release_year FROM film WHERE film_id=$1', [req.params.id],
      function onResult (err, result) {
        release()
        reply.send(err || result)
      }
    )
  }
})


// informacion actores

fastify.get('/actor/:id', (req, reply) => {
  fastify.pg.connect(onConnect)

  function onConnect (err, client, release) {
    if (err) return reply.send(err)

    client.query(
      'SELECT actor_id, first_name, last_name FROM actor WHERE actor_id=$1', [req.params.id],
      function onResult (err, result) {
        release()
        reply.send(err || result)
      }
    )
  }
})

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ Importante: 'Entrar a localhost:3000/films/id para ver información de la pelicula (id es numero)' })
})



fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})




