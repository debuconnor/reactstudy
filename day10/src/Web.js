import React from 'react'
import { NavLink, Route, Switch, useParams } from 'react-router-dom'

const contents = [
    { id: 1, title: 'Javascript', desc: 'Javascript is ...' },
    { id: 2, title: 'jQuery', desc: 'jQuery is ...' },
    { id: 3, title: 'React', desc: 'React is ...' },
];
const Subject = () => {
    const params = useParams();
    contents.filter((item) => {
        if (Number(params.subject) === item.id) {
            return (<Route path={'/web/:subject'}>{item.desc}</Route>)
        }
    });

    return (<Route>Nothing Selected</Route>)
}

function Web() {
    return (
        <div>
            <h2>Web Work</h2>
            <ul>
                {contents.map((link, i) => (<li key={link.id}><NavLink to={'/web/' + i}>{link.title}</NavLink></li>))}
            </ul>
            <hr />
            <Subject />
        </div>
    )
}

export default Web
