'use strict'

import {
  addTask,
  removeTask,
  updateTask,
  getTask,
  getAllTasks}  from '../../../main/services/tasks'
import { expect }  from 'chai'

const mockDatabase = {
  "user": {
    1: {
      name: "Beautiful task",
      tag: "Hard work",
      description: "Mown the lawn"
    }
  }
}
const mockTaskRepository = json => ({
  create: user => id => data => { json[user][id] = data; return true },
  get:    user => id => json[user][id],
  getAll: user => json[user],
  update: user => id => data => { json[user][id] = data; return true },
  remove: user => id =>{ json[user][id] = undefined }
})

describe('validate addTask', () => {
  it(`addTask should return true when created successfully `, () => {

    const a = addTask({
      id: 2,
      data: {
        name: "Another beautiful task",
        tag: "Hard work",
        description: "Mown the lawn again!"
      }
    })("user")(mockTaskRepository(mockDatabase))
    expect(a).to.be.eql(true)
  })

})
describe('validate updateTask', () => {
  it(`updateTask should update value successfully `, () => {

    const a = updateTask({
      id: 2,
      data: {
        name: "Another beautiful task! :D",
        tag: "Hard work",
        description: "Mown the lawn again!"
      }
    })("user")(mockTaskRepository(mockDatabase))
    expect(a).to.be.eql(true)
    const b = getTask({
      id: 2
    })("user")(mockTaskRepository(mockDatabase))
    expect(b.name).to.be.eql("Another beautiful task! :D")
  })

})

describe('validate getTask', () => {
  it(`getTask should return expected value `, () => {

    const a = getTask({
      id: 2
    })("user")(mockTaskRepository(mockDatabase))
    expect(a.name).to.be.eql("Another beautiful task! :D")
  })

})

describe('validate removeTask', () => {
  it(`getTask should return undefined after running removeTask `, () => {

    const a = removeTask({
      id: 2
    })("user")(mockTaskRepository(mockDatabase))
    const b = getTask({
      id: 2
    })("user")(mockTaskRepository(mockDatabase))
    expect(a).to.be.eql(undefined)
  })

})
