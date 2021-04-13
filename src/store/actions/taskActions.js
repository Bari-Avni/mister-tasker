import { taskService } from '../../services/taskService'

// Thunk - Action Dispatcher
export function loadTasks(filterBy) {
  return async dispatch => {
    const tasks = await taskService.getTasks(filterBy)
    console.log('tasks', tasks);
    const action = {
      type: 'SET_TASKS',
      tasks
    }
    dispatch(action)
  }
}

export function getTaskById(taskId) {
  return async dispatch => {
    const task = await taskService.getTaskById(taskId)
    dispatch({ type: 'SET_TASK', task })
  }
}

export function saveTask(task) {
  return async dispatch => {
    const isAdd = !task._id
    const updatedTask = await taskService.save(task)

    if (isAdd) dispatch({ type: 'ADD_TASK', task: updatedTask })
    else dispatch({ type: 'UPDATE_TASK', updatedTask })
  }
}

export function removeTask(taskId) {
  return async dispatch => {
    await taskService.removeTask(taskId)
    dispatch({ type: 'REMOVE_TASK', taskId })
  }
}

export function performTask(task) {
  return async dispatch => {
    await taskService.performTask(task)
    dispatch({ type: 'PERFORM_TASK', task })
  }
}
