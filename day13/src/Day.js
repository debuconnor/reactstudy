import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Word from './Word';
import UseFetch from './UseFetch';

function Day() {
    const { day } = useParams();
    const words = UseFetch(`http://localhost:3000/words?day=${day}`);
    const wordlist = words.filter((word) => word.day === Number(day));

    return <div>
        <h2>Day {day}</h2>
        <table border="1">
            <tbody>
                {wordlist.map((word) => (
                    <Word key={word.id} word={word}/>
                ))}
            </tbody>
        </table>
    </div>;
}

export default Day;
