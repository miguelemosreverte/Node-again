'use strict'
import * as R from 'ramda'



const logout =  user => repository => {
  repository.delete(user)
  return true
}

const login =  user => password => repository => {
  repository.create(user)(password)
  return true
}

const isLoggedIn =  user => repository => {
  return Boolean(repository.read(user))
}

export {
  login,
  logout,
  isLoggedIn
}
