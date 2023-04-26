import Cronometro from '../components/Cronometrro';
import Formulario from '../components/Formulario';
import List from '../components/List';
import style from "./style.module.scss"
import {useState} from 'react'
import { ITask } from '../types/ITasks';


function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  return (
    <div className={style.AppStyle}>
      <Formulario setTasks={setTasks}/>
      <List tasks = {tasks}/>
      <Cronometro />
    </div>
  );
}

export default App;
