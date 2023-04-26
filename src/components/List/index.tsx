import Item from "./item"
import style from "./List.module.scss"
import { ITask } from "../../types/ITasks"

export default function List({tasks}: {tasks: ITask[]}) {
    return (
        <aside className={style.taskList}>
            <h2>Tarefas do dia</h2>
            <ul >
                {tasks.map((item, index) => (
                    <Item key={index}
                    {...item}/>
                ))}
            </ul>
        </aside>
    )
}