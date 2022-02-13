import React from 'react'
import{ useSelector, useDispatch } from 'react-redux'
import {buyCake} from '../redux'

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes) // accept function as its parameter function=selector fuction
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of cake - {numOfCakes}</h2>
      <button on onClick={() => dispatch(buyCake())}>Buy cake </button>
    </div>
  )
}

export default HooksCakeContainer