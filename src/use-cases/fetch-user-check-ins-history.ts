import { CheckIn } from '@prisma/client'
import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface FetchUseCheckInsHistoryRequest {
  userId: string
  page: number
}

interface FetchUseCheckInsHistoryResponse {
  checkIns: CheckIn[]
}

export class FetchUseCheckInsHistoryUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchUseCheckInsHistoryRequest): Promise<FetchUseCheckInsHistoryResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserID(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}
