import { Outlet } from 'react-router'
import style from './MainLayout.module.scss'

export function MainLayout() {

  

  return (
    <section className={style.mainLayout}>
      
      <Outlet />

    </section>
  )
}