const INITIAL_STATE = {
  tasks: [],
  currTask: null,
};

export function taskReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_TASKS":
      return {
        ...state,
        tasks: action.tasks,
      };
    case "SET_TASK":
      return {
        ...state,
        currTask: action.task,
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.taskId),
      };
    case "UPDATE_TASK":
      const { updatedTask } = action;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === updatedTask._id ? updatedTask : task
        ),
      };
    case "PERFORM_TASK":
      return {
        ...state,
        // tasks: [...state.tasks, action.task],
      };

    default:
      return state;
  }
}
