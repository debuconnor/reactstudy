import React from 'react'
import Styles from '../../css/list.module.css'
import ListItem from './ListItem';

function ListBox({value: lists}) {
  return (
    <div className='container'>
      <ul className={Styles.listbox}>
        {lists.map((list) => {
          return (
            <ListItem key={list.id}
                      className={Styles.list}
                      list={list} />
          )
        })}
      </ul>
    </div>
  )
}

export default ListBox