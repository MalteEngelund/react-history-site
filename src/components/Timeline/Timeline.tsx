import React from 'react';
import style from './Timeline.module.scss'


interface TimelineProps {
  children: React.ReactNode
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className={style.timelineContainer}>
      <div className={style.timeline}>
        {/* <div className={style.line}></div> */}
        {React.Children.map(children, (child, idx) =>
          idx % 2 === 0 ? (
            <>
              <div className={style.content}>{child}</div>
              <div className={style.empty}></div>
            </>
          ) : (
            <>
              <div className={style.empty}></div>
              <div className={style.content}>{child}</div>
            </>
          )
        )}
      </div>
    </div>
  );
}