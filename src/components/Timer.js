import React, { useState } from 'react'
import Length from './Length'
import { formatTime } from '../shared/Utilities'
import * as Icon from 'react-bootstrap-icons';


function Timer(props) {


    return (
        <div>
            <h1>{formatTime(props.displayTime)}</h1>
            <button className="btn " onClick={props.controllTime}>
                {props.timerOn ? (<Icon.Pause />) : (<Icon.Play />)}
            </button>
            <button className="btn" onClick={props.resetTime}>
                <Icon.ReplyAll />
            </button>
        </div>
    )

}


export default Timer