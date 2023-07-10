import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { UsersRepository } from '../users-repository'
import { GetResult } from '@prisma/client/runtime'

export class PrismaUserRepository implements UsersRepository {
  findById(id: string): Promise<
    | (GetResult<
        {
          id: string
          name: string
          email: string
          password_hash: string
          created_at: Date
        },
        unknown
      > & {})
    | null
  > {
    throw new Error('Method not implemented.')
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })
    return user
  }
}
