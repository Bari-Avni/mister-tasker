import { Link } from "react-router-dom";
import { eventBusService } from "../../services/eventBusService";
import "./TaskPreview.scss";

export function TaskPreview({ task }) {
  
  function onStart(){
    console.log('onStart');
    eventBusService.emit('Start Action', task)
  }

  function onRestart(){
    console.log('onRestart');
    eventBusService.emit('Start Action', task)
  }

  return (
    <tr>
      <td>
        <Link to={"/task/" + task._id}>
          {task.title}
        </Link>
      </td>
      <td>{task.importance}</td>
      <td>{task.doneAt || 'on going'}</td>
      <td>{task.triesCount}</td>
      <td>
        {!task.doneAt && <button className="btn" onClick={onStart}>Start</button>}
        {task.doneAt && <button className="btn" onClick={onRestart}>Restart</button>}
      </td>
    </tr>
  );
}
