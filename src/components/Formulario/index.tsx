import React from 'react'
import { ITask } from '../../types/ITasks'
import Button from '../Button/button'
import style from "./Form.module.scss"

export default class Formulario extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}>
{
    state = {
        task: "",
        time: "00:00"
    }
    addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        let states = {...this.state}

        this.props.setTasks(oldTasks => [...oldTasks, {...states}])
    }
    render() {
        return (
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">Adicione sua tarefa</label>
                    <input className=''
                    placeholder='Escreva sua tarefa'
                    id='task'
                    value={this.state.task}
                    onChange={event => this.setState({...this.state, task: event.target.value})}
                    name='task'
                    type="text"
                    required
                     />
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input type="time" required
                    step="1"
                    name='time'
                    value={this.state.time}
                    onChange={event => this.setState({...this.state, time: event.target.value})}
                    id="time"
                    min="00:00:00"
                    max="03:00:00" />
                </div>
                
                <Button type="submit">Adicionar</Button>
            </form>
        )
    }
}