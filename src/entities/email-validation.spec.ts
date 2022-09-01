import { Email } from './email'

describe('Email validation', () => {
  it('should not accept null strings', () => {
    const email = null
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept emtpy strings', () => {
    const email = ''
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should accept valid email', () => {
    const email = 'any@gmail.com'
    expect(Email.validate(email)).toBeTruthy()
  })

  it('should not accept local part larger than 64 chars', () => {
    const email = 'l'.repeat(65) + 'gmail.com'
    expect(Email.validate(email)).toBeFalsy()
  })
})
