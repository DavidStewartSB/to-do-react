import Button from '../Button/button'
import style from './Cronometro.module.scss'
import Clock from './Clock'

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.title}>Escolha um carde e inicie o Cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}