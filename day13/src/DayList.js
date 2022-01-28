import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import UseFetch from './UseFetch';

function DayList() {
    const days = UseFetch('http://localhost:3000/days');
    
    return <div>
        <ul>
            {days.map((day) => (
                <li key={day.id}><Link to={`/day/${day.day}`}>Day {day.day}</Link></li>
            ))}
        </ul>
        {/* <button onClick={onClick1}>{count}</button>
        <button onClick={onClick2}>Add Day</button> */}
    </div>;
}

export default DayList;
