import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function createAndAuthenticate(
  app: FastifyInstance,
  isAdmin = false,
) {
  await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'test',
      password_hash: await hash('12345678', 6),
      role: isAdmin ? 'ADMIN' : 'MEMBER',
    },
  })

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
