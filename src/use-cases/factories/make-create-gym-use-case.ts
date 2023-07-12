import { CreateGymUseCase } from '../create-gym'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'

export function makeCreateGymsUseCase() {
  const checkInsRepository = new PrismaGymsRepository()
  const useCase = new CreateGymUseCase(checkInsRepository)
  return useCase
}
