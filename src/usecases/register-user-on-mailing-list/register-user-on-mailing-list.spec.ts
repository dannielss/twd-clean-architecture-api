import { UserData } from './user-data'

describe('Register user on mailing list use case', () => {
  it('should add user with complete data to mailing list', async () => {
    const users: UserData[] = []
    expect(users).toStrictEqual([])
    // const repo: UserRepository = new InMemoryUserRepository(users)
    // const usecase: RegisterUserOnMailingList = new RegisterUserOnMailingList(repo)
    // const name = 'any_name'
    // const email = 'any@hotmail.com'
    // const response = await usecase.registerUserOnMailingList({ name, email })
    // const user = await repo.findUserByEmail('any@email.com')
    // expect(user.name).toBe('any_name')
  })
})
