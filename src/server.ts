import fastify from 'fastify'
import { knex } from './database'
import { randomUUID } from 'node:crypto'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

app.get('/hello', async () => {
  // const transaction = await knex('transactions')
  //   .insert({
  //     id: randomUUID(),
  //     title: 'Transação teste',
  //     amount: 423,
  //   })
  //   .returning('*')

  // return transaction

  const transactions = await knex('transactions')
    .where('amount', 423)
    .select('*')

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Http running on port 3333 💜')
  })
