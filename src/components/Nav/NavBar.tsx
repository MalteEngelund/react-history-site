import { NavLink } from "react-router";
import style from './NavBar.module.scss'



interface NavBarLink {
  name: string
  path: string
}

interface NavBarProps {
  logoNav?: string
  linksNav: Array<NavBarLink>
}

export function NavBar(props: NavBarProps) {

  const {logoNav, linksNav} = props

  return(
    <div className={style.navBarContainer}>
      <h1>{logoNav}</h1>
      <nav className={style.navBar}>
        <ul>
          {linksNav.map((item) => {
            return (
              <li key={item.path}>
              <NavLink to={item.path}>{item.name.toUpperCase()}</NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}