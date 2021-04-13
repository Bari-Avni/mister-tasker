import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { TaskFilter } from "../../cmps/TaskFilter/TaskFilter";
import { TaskList } from "../../cmps/TaskList/TaskList";
import { eventBusService } from "../../services/eventBusService";
// import { taskService } from "../../services/taskService";
import { loadTasks, removeTask, performTask } from "../../store/actions/taskActions";
// import { taskDetails } from "./taskDetails/taskDetails";
// import { HomePage } from "./HomePage/HomePage";
// import { StatisticPage } from "./StatisticPage/StatisticPage";
import addTaskLogo from "../../assets/img/plus.png";
import "./TaskApp.scss";

class _TaskApp extends Component {
  state = {
    tasks: null,
    filterBy: null,
  };

  componentDidMount() {
    this.props.loadTasks(this.state.filterBy);
    eventBusService.on("Start Action", (data) => {
      this.props.performTask(data);
      this.props.loadTasks(this.state.filterBy);
    });
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy });
    this.props.loadTasks(filterBy);
  };

  // onSelecttask = (taskId) => {
  // this.setState({ selectedtaskId: taskId });
  // };
  // onDeletetask = async (taskId) => {
  //   await taskService.deletetask(taskId);
  // this.setState({ selectedtaskId: null });
  //   this.loadtasks();
  // };

  render() {
    const { tasks } = this.props;
    return (
      <section className="task-app">
        <h2>Task List</h2>
        <TaskFilter
          match={this.props.match}
          onChangeFilter={this.onChangeFilter}
        />
        <Link to="/task/edit">
          <img className="add-task" src={addTaskLogo} alt="" />
        </Link>
        <TaskList tasks={tasks} />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.taskReducer.tasks,
  };
};

const mapDispatchToProps = {
  loadTasks,
  removeTask,
  performTask,
};

export const TaskApp = connect(mapStateToProps, mapDispatchToProps)(_TaskApp);
