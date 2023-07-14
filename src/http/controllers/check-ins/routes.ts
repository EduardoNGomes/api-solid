import { FastifyInstance } from 'fastify'
import { verifyJwt } from '../../middlewares/verify-jwt'
import { create } from './create'
import { validate } from './validate'
import { history } from './history'
import { metrics } from './metrics'

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJwt)

  app.post('gyms/:gymsId/check-ins', create)
  app.patch('check-ins/:checkInId/validate', validate)
  app.get('check-ins/history', history)
  app.get('check-ins/metrics', metrics)
}
