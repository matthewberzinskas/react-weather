import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set } from '../redux/locationSlice'

export function Loc() {
  //console.log("loc\n", state)
  const location = useSelector((state) => state.location.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="SET"
          onClick={() => dispatch(set("test_location"))}
        >
          Set
        </button>
        <span>{location}</span>
      </div>
    </div>
  )
}