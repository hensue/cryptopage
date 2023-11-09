'use client'

import React, { ReactElement, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { DateTime } from 'luxon'

import CountdownCard from './CountdownCard'
import useIsMounted from './useIsMounted'

interface CurrentPrevious {
  current: Countdown
  previous: Countdown|null
}

interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const getTimeLeft = (endDate: DateTime): Countdown => {
  const now = DateTime.local()
  const { days, hours, minutes, seconds } = endDate.diff(now, ['days', 'hours', 'minutes', 'seconds'])
  return {
    days: Math.max(0, Math.trunc(days)),
    hours: Math.max(0, Math.trunc(hours)),
    minutes: Math.max(0, Math.trunc(minutes)),
    seconds: Math.max(0, Math.trunc(seconds))
  }
}

const useCountdown = (endDate: DateTime): CurrentPrevious => {
  const initial = getTimeLeft(endDate)
  const [{ current, previous }, setCountdown] = useState<CurrentPrevious>({ current: initial, previous: null })

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(({ current }) => {
        return {
          previous: current,
          current: getTimeLeft(endDate)
        }
      })
    }, 1000)
    return () => clearInterval(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { previous, current }
}

const Countdown = (): ReactElement => {
  const isMounted = useIsMounted()
  const router = useRouter()
  const now = new Date();
  const targetDateTime = new Date("2023-12-25T18:30:00");
  const difference = targetDateTime.getTime() - now.getTime();

  if (difference <= 0) {
    console.log("Target date has already passed.");
  }

  const seconds = Math.floor(difference / 1000) % 60;
  const minutes = Math.floor(difference / (1000 * 60)) % 60;
  const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const defaultTime = useMemo(() => DateTime.local().plus({ days: days, hours: hours, minutes: minutes, seconds: seconds }), [])
  const initialDate = router.query?.date ? DateTime.fromISO(Array.isArray(router.query.date) ? router.query.date[0] : router.query.date) : null
  const { current, previous } = useCountdown(
    initialDate?.isValid
      ? initialDate
      : defaultTime
  )

  if (!isMounted) return <></>

  return (
    <div className="flex space-x-1 lg:space-x-10">
      <CountdownCard id={`days${current.days}-${previous?.days}`} label="DAYS" key={`days${current.days}-${previous?.days}`} current={current.days} previous={previous?.days} />
      <CountdownCard id={`hours${current.hours}-${previous?.hours}`} label="HOURS" key={`hours${current.hours}-${previous?.hours}`} current={current.hours} previous={previous?.hours} />
      <CountdownCard id={`minutes${current.minutes}-${previous?.minutes}`} label="MINUTES" key={`minutes${current.minutes}-${previous?.minutes}`} current={current.minutes} previous={previous?.minutes} />
      <CountdownCard id={`seconds${current.seconds}-${previous?.seconds}`} label="SECONDS" key={`seconds${current.seconds}-${previous?.seconds}`} current={current.seconds} previous={previous?.seconds} />
    </div>
  )
}

export default Countdown
