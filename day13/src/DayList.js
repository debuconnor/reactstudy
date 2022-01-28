import React from 'react';
import data from './data.json'
import { Link } from 'react-router-dom'
function DayList() {
    return <div>
        <ul>
            {data.days.map((day) => (<li key={day.id}><Link to={`/day/${day.day}`}>Day {day.day}</Link></li>))}
        </ul>
    </div>;
}

export default DayList;
