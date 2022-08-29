import { InMemoryUserRepository } from './in-memory-user-repository'
import { UserData } from '../user-data'

describe('In memory user repository', () => {
  it('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail('any@gmail.com')
    expect(user).toBeNull()
  })

  it('should return user if it is not found in the repository', async () => {
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@gmail.com'
    const userRepo = new InMemoryUserRepository(users)
    await userRepo.add({ name, email })
    const user = await userRepo.findUserByEmail(email)
    expect(user).toStrictEqual({ name, email })
  })

  it(' should return all users i nthe repository', async () => {
    const name = 'any_name'
    const email = 'any@gmail.com'
    const users: UserData[] = [{ name, email }, { name, email }]
    const userRepo = new InMemoryUserRepository(users)
    const usersList = await userRepo.findAllUsers()
    expect(usersList.length).toBe(2)
  })
})
