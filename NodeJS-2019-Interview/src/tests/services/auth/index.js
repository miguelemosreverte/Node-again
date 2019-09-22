'use strict'

import {login, logout, isLoggedIn}  from '../../../main/services/auth'
import { expect }  from 'chai'

const mockDatabase = {
  "user": "password"
}
const mockRepository = json => ({
  create: key => value => { json[key] = value },
  read:   key => json[key],
  update: key => value => { json[key] = value },
  delete: key => { json[key] = undefined }
})

const tests = {

}
describe('validate mockRepository', () => {
  it(`isLoggedIn should return true for 'user' `, () => {

    const a = isLoggedIn("user")(mockRepository(mockDatabase))
    expect(a).to.be.eql(true)
  })

  it(`isLoggedIn should return false for 'non_existent' `, () => {

    const a = isLoggedIn("non_existent")(mockRepository(mockDatabase))
    expect(a).to.be.eql(false)
  })
})

describe('validate login', () => {
  it(`isLoggedIn should return true after login of  'non_existent' `, () => {
    const newUser = "non_existent"
    const newUserPassword = "password"
    const a = login(newUser)(newUserPassword)(mockRepository(mockDatabase))
    const b = isLoggedIn(newUser)(mockRepository(mockDatabase))
    expect(b).to.be.eql(true)
  })
})

describe('validate logout', () => {
  it(`isLoggedIn should return false after logout of  'non_existent' `, () => {
    const newUser = "non_existent"
    const a = logout(newUser)(mockRepository(mockDatabase))
    const b = isLoggedIn(newUser)(mockRepository(mockDatabase))
    expect(b).to.be.eql(false)
  })
})
