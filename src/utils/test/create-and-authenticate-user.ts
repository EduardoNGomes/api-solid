import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function createAndAuthenticate(app: FastifyInstance) {
  await request(app.server).post('/users').send({
    email: 'test@example.com',
    name: 'test',
    password: '12345678',
  })

  const authResponse = await request(app.server).post('/sessions').send({
    email: 'test@example.com',
    password: '12345678',
  })

  const { token } = authResponse.body

  return {
    token,
  }
}
