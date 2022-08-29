import { UserRepository } from '../ports/user-repository'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  #repository: UserData[]

  constructor (repository: UserData[]) {
    this.#repository = repository
  }

  async add (user: UserData): Promise<void> {
    const exists = await this.exists(user)
    if (!exists) {
      this.#repository.push(user)
    }
  }

  async findUserByEmail (email: string): Promise<UserData> {
    const users = this.#repository.filter(user => user.email === email)

    if (users.length > 0) {
      return users[0]
    }

    return null
  }

  async findAllUsers (): Promise<UserData[]> {
    return null
  }

  async exists (user: UserData): Promise<boolean> {
    const userExists = await this.findUserByEmail(user.email)

    if (!userExists) {
      return false
    }

    return true
  }
}
