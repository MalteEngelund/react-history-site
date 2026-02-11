import { Header } from "../components/Header/Header"
import { NavBar } from "../components/Nav/NavBar"

export function SincePage() {

  const links = [
    {name: 'by date', path: '/by-date'},
    {name: 'today', path: '/'},
    {name: 'since', path: '/since'},
  ]

  return (
    <>
    <Header title='' />
    <NavBar linksNav={links}/>
    </>
  )
}