import { useState } from "react";
import { useFetch } from "../hooks/useFetch/useFetch";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { Header } from "../components/Header/Header";
import { NavBar } from "../components/Nav/NavBar";
import style from './ByDatePage.module.scss'
import { TimelineV2 } from "../components/TimelineV2/TimelineV2";

export function ByDatePage() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [date, setDate] = useState(today.getDate());
  const url = `https://history.muffinlabs.com/date/${month}/${date}`;
  const { data } = useFetch(url);
  console.log(data);
  
  const links = [
    {name: 'by date', path: '/by-date'},
    {name: 'today', path: '/'},
    {name: 'since', path: '/since'},
  ]

  return (
    <>
    <Header title={<>On: <input
        type="number"
        min="1"
        max="31"
        value={date}
        onChange={e => setDate(Number(e.target.value))}
        placeholder="Date"
        className={style.inputStyle}  
      />
      /
      <input
        type="number"
        min="1"
        max="12"
        value={month}
        onChange={e => setMonth(Number(e.target.value))}
        placeholder="Month"
        className={style.inputStyle}
      /></>} text="What happened on this day - Here you can enter a specific date to get only events that happened on this date" />
    <NavBar linksNav={links}/>
      
      <TimelineV2>
      {data?.data?.Events?.slice(0, 10).map((event, idx) => (
        <InfoCard key={idx} year={event.year} text={event.text} date={date} month={month} link={event.links[0]?.link || "#"} />
      ))}
      </TimelineV2>
    </>
  );
}