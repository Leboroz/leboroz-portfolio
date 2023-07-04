import React from 'react'
import { Tooltip } from 'react-tooltip'
import { v4 } from 'uuid'

type badgeProps = {
  text: string
}

export const Badge = ({ text }: badgeProps) => {
  const r = v4();
  return (
    <>
      <span id={r} className='badge'>{text}</span>
      <Tooltip
        anchorId={r}
        place="bottom"
        content={text}
        className="z-9000"
        delayShow={500}
      />
    </>
  )
}
