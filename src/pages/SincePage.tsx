import { useState } from "react";
import { Header } from "../components/Header/Header"
import { InfoCard } from "../components/InfoCard/InfoCard"
import { NavBar } from "../components/Nav/NavBar"
import { useFetch } from "../hooks/useFetch/useFetch";
import style from './ByDatePage.module.scss'
import { TimelineV2 } from "../components/TimelineV2/TimelineV2";

export function SincePage() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [date, setDate] = useState(today.getDate());
  const [year, setYear] = useState(1900);
  const url = `https://history.muffinlabs.com/date/${month}/${date}`;
  const { data } = useFetch(url);

  const links = [
    { name: 'by date', path: '/by-date' },
    { name: 'today', path: '/' },
    { name: 'since', path: '/since' },
  ];

  // Filter events since the entered year
  const filteredEvents = data?.data?.Events?.filter(event => Number(event.year) >= year) || [];

  return (
    <>
      <Header
        title={
          <>
            Since:
            <input
              type="number"
              min="1"
              value={year}
              onChange={e => setYear(Number(e.target.value))}
              placeholder="Year (since)"
              className={style.inputYearStyle}
            />
          </>
        }
      />
      <NavBar linksNav={links} />

        <TimelineV2>
          {filteredEvents.length === 0
            ? <p>No events found since {year}.</p>
            : filteredEvents.slice(0, 10).map((event, idx) => (
            <InfoCard key={idx} year={event.year} text={event.text} date={date} month={month} link={event.links[0]?.link || "#"}/>
          ))
          }
        </TimelineV2>
    </>
  );
}