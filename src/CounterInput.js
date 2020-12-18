import React from 'react'
import { useDispatch } from 'react-redux'
import { incAction } from './store/Action'
import { decAction } from './store/Action'
import { useSelector } from 'react-redux'
export default function CounterInput() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    return (
        <div>
            <div>DIRECT DISPATCH</div>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <br></br>
            <div>DISPATCH THROUGH FUNCTION</div>
            countervalue :{counter}
            <button onClick={() => dispatch(incAction())}>+</button>
            <button onClick={() => dispatch(decAction())}>-</button>

        </div>
    )
}