import { InMemoryUserRepository } from './in-memory-user-repository'
import { UserData } from '../user-data'

describe('In memory user repository', () => {
  it('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail('any@gmail.com')
    expect(user).toBeNull()
  })
})
