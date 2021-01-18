import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import { formatTime } from '../shared/Utilities'



function Length({ title, changeTime, type, time }) {


    return (
        <div>
            <h3>{title}</h3>
            <div className="timeSets">
                <button className="btn-small deep-purple lighten-2"
                    onClick={() => changeTime(-60, type)}
                ><Icon.ArrowDown /></button>
                <h3>{formatTime(time)}</h3>
                <button className="btn-small deep-purple lighten-2"
                    onClick={() => changeTime(+60, type)}
                ><Icon.ArrowUp /></button>
            </div>
        </div>
    )
}








export default Length