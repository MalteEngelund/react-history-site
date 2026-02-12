import React from 'react';
import style from './TimelineV2.module.scss'


interface TimelineV2Props {
  children?: React.ReactNode
}


export function TimelineV2({ children }: TimelineV2Props) {
  return (
    <div className={style.timeline}>
      {React.Children.map(children, (child, idx) => (
        <div className={style.container}>
          <div className={style.content}>
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}