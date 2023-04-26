import style from './Clock.module.scss'

export default function Clock() {
    return(
        <div>
            <span className={style.clockNumbers}>0</span>
            <span className={style.clockNumbers}>0</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumbers}>0</span>
            <span className={style.clockNumbers}>0</span>
        </div>
    )
}