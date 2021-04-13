import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTaskById, removeTask } from "../../store/actions/taskActions";
// import { taskService } from "../../services/taskService";
import "./TaskDetails.scss";
// import { TransferFund } from "../../cmps/TransferFund";
// import { MovesList } from "../../cmps/MovesList/MovesList";
// import { userReducer } from "../../store/reducers/userReducer";

class _TaskDetails extends Component {
  state = {
    amount: 0,
  };

  componentDidMount() {
    this.props.getTaskById(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.getTaskById(this.props.match.params.id);
    }
  }

  onRemoveTask = async () => {
    await this.props.removeTask(this.props.task._id);
    this.onBack();
  };

  onBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { task } = this.props;
    if (!task) return <div>Loading Task.....</div>;
    return (
      <section className="task-details">
        {/* <img src={`https://i.pravatar.cc/150?u=${task._id}`} alt="" /> */}
        <p>Title: {task.title}</p>
        <p>Description: {task.description}</p>
        <p>Importance: {task.importance}</p>
        <div className="actions">
          <button onClick={this.onRemoveTask}>Delete</button>
          <Link to={"/task/edit/" + task._id}>Edit</Link>
          <button onClick={this.onBack}>Back</button>
        </div>
        {/* <TransferFund task={task} props={this.props} /> */}
        {/* <MovesList task={task} /> */}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  task: state.taskReducer.currTask,
  user: state.userReducer.user,
});

const mapDispatchToProps = {
  getTaskById,
  removeTask,
};

export const TaskDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TaskDetails);
