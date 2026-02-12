import { NavLink } from 'react-router'
import style from './InfoCard.module.scss'

interface InfoCardProps {
  year?: string
  text: string
  date?: number
  month?: number
  link?: string
}

export function InfoCard({year, text, date, month, link}: InfoCardProps) {
  return (
    <div className={style.infoCard}>
      <h2>Year: {year}</h2>
      <div>
      <p>Date: {date}/{month}</p>
      <p>{text}</p>
      <NavLink to={link} target='_blank'>Read more:</NavLink>
      </div>
    </div>
  )
}