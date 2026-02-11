import HeaderImg from '../../assets/Old Photos.png'
import style from './Header.module.scss'


interface HeaderProps {
  text?: string
  title?: string
}


export function Header({ text, title }: HeaderProps) {
  return (
    <header className={style.headerStyle}>
      <img src={HeaderImg} alt="Old Photos" />
      <div className={style.hgroupContainer}>
        <div className={style.circleContainer}>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>

        <hgroup>
          <h2>{title}</h2>
          <h4>{text}</h4>
        </hgroup>
        </div>
      </div>
    </header>
  )
}