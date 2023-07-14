import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeSearchGymsUseCase } from '@/use-cases/factories/make-search-gym-use-case'

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const searchGymQuerySchema = z.object({
    q: z.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { page, q } = searchGymQuerySchema.parse(request.query)
  const createGymUseCase = makeSearchGymsUseCase()
  const { gym } = await createGymUseCase.execute({
    query: q,
    page,
  })

  return reply.status(201).send({ gym })
}
