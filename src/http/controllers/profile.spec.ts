import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'

import { app } from '@/app'

describe('Profile (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to get user Profile', async () => {
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

    const profileResponse = await request(app.server)
      .get('/me')
      .set('Authorization', `Bearer ${token}`)

    expect(profileResponse.statusCode).toEqual(200)
    expect(profileResponse.body.user).toEqual(
      expect.objectContaining({
        email: 'test@example.com',
      }),
    )
  })
})
