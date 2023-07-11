import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near gym',
      description: '',
      phone: '',
      latitude: -22.9567627,
      longitude: -43.3391126,
    })
    await gymsRepository.create({
      title: 'Far gym',
      description: '',
      phone: '',
      latitude: -27.0610928,
      longitude: -49.5229501,
    })
    const { gym } = await sut.execute({
      userLatitude: -22.9567627,
      userLongitude: -43.3391126,
    })

    expect(gym).toHaveLength(1)
    expect(gym).toEqual([expect.objectContaining({ title: 'Near gym' })])
  })
})
