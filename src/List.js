import React from 'react'
import Toget from './Toget'

const List = ({ items, name, togetClick }) => (
  <div>
    <h2>{name}</h2>
    <ul>
    { items.map( item => <Toget key={item.id} {...item} togetClick={togetClick} /> )}
    </ul>
  </div>
 )

export default List 