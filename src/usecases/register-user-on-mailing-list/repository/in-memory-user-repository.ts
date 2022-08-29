import { UserRepository } from '../ports/user-repository'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  #repository: UserData[]

  constructor (repository: UserData[]) {
    this.#repository = repository
  }

  async add (user: UserData): Promise<void> {

  }

  async findUserByEmail (email: string): Promise<UserData> {
    return null
  }

  async findAllUsers (): Promise<UserData[]> {
    return null
  }

  async exists (user: UserData): Promise<boolean> {
    return true
  }
}
