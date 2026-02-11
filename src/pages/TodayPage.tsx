import { Header } from "../components/Header/Header"
import { InfoCard } from "../components/InfoCard/InfoCard"
import { NavBar } from "../components/Nav/NavBar"
import { useFetch } from "../hooks/useFetch/useFetch"

export function TodayPage() {

  const today = new Date()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const url = `https://history.muffinlabs.com/date/${month}/${date}`
  useFetch(url)
  const data = useFetch(url).data
  console.log(data);

  const links = [
    {name: 'by date', path: '/by-date'},
    {name: 'today', path: '/'},
    {name: 'since', path: '/since'},
  ]
  

  return (
    <>
      <Header title='On This Day' text="What happened on this day - historical events, deaths and births thoughout time" />
      <NavBar linksNav={links}/>

    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', width: '100%'}}>
    {data?.data?.Events?.slice(0, 10).map((event, idx) => (
      <InfoCard key={idx} year={event.year} text={event.text} date={date} month={month} link={event.links[0]?.link} />
    ))}
    </div>
    </>
  )
}