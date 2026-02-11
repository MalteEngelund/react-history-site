import { useState } from "react";
import { useFetch } from "../hooks/useFetch/useFetch";
import { InfoCard } from "../components/InfoCard/InfoCard";
import { Header } from "../components/Header/Header";
import { NavBar } from "../components/Nav/NavBar";

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
    <Header title={`On: ${date}/${month}`} text="What happened on this day - Here you can enter a specific date to get only events that happened on this date" />
    <NavBar linksNav={links}/>
      <input
        type="number"
        min="1"
        max="31"
        value={date}
        onChange={e => setDate(Number(e.target.value))}
        placeholder="Date"
      />
      <input
        type="number"
        min="1"
        max="12"
        value={month}
        onChange={e => setMonth(Number(e.target.value))}
        placeholder="Month"
      />
      {data?.data?.Events?.slice(0, 10).map((event, idx) => (
        <InfoCard key={idx} year={event.year} text={event.text} date={date} month={month} />
      ))}
    </>
  );
}