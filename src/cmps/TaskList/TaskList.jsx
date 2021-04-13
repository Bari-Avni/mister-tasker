import { TaskPreview } from '../TaskPreview';
import './TaskList.scss'

export function TaskList({ tasks, onSelectTask }) {

  return (
    <section className="task-list">
      <table>
        <thead>
            <tr>
                <th scope="col" className="title">Name</th>
                <th scope="col" className="sort">Importance</th>
                <th scope="col" className="sort">Done at</th>
                <th scope="col" className="sort">Tries count</th>
                <th scope="col" className="sort">Actions</th>
            </tr>
        </thead>
        <tbody className="table-data">
          {
            tasks && tasks.map(task => <TaskPreview onSelectTask={onSelectTask} key={task._id} task={task} />)
          }
        </tbody>
      </table>
    </section>
  )
}
