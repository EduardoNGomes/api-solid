import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { SearchGymsUseCase } from './search-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new SearchGymsUseCase(gymsRepository)
  })

  it('should be able to fetach search for gyms', async () => {
    await gymsRepository.create({
      title: 'JavaScript gym',
      description: '',
      phone: '',
      latitude: -22.9567627,
      longitude: -43.3391126,
    })
    await gymsRepository.create({
      title: 'Python gym',
      description: '',
      phone: '',
      latitude: -22.9567627,
      longitude: -43.3391126,
    })
    const { gym } = await sut.execute({
      query: 'JavaScript',
      page: 1,
    })

    expect(gym).toHaveLength(1)
    expect(gym).toEqual([expect.objectContaining({ title: 'JavaScript gym' })])
  })
  it('should be able to fetch pagineted gym search', async () => {
    for (let i = 1; i <= 22; i++) {
      await gymsRepository.create({
        title: `JavaScript gym ${i}`,
        description: '',
        phone: '',
        latitude: -22.9567627,
        longitude: -43.3391126,
      })
    }

    const { gym } = await sut.execute({
      query: 'Javascript',
      page: 2,
    })

    expect(gym).toHaveLength(2)
    expect(gym).toEqual([
      expect.objectContaining({ title: 'JavaScript gym 21' }),
      expect.objectContaining({ title: 'JavaScript gym 22' }),
    ])
  })
})
