'use strict'
import * as R from 'ramda'



const addTask =  ({id, data}) => user => taskRepository =>
  taskRepository.create(user)(id)(data)


const removeTask =  ({id}) => user => taskRepository =>
  taskRepository.remove(user)(id)


const updateTask =  ({id, data}) => user => taskRepository =>
  taskRepository.update(user)(id)(data)


const getTask =  ({id}) => user => taskRepository =>
  taskRepository.get(user)(id)

const getAllTasks =  user => taskRepository =>
  taskRepository.getAll(user)


export {
  addTask,
  removeTask,
  updateTask,
  getTask,
  getAllTasks,
}
