import React from 'react'

const Toget = ({id, name, complete, togetClick}) => (
  <li style={complete ? {...styles.toget, ...styles.complete} : styles.toget}
  onClick={ () => togetClick(id) }
  >
    {name}
  </li>
)

const styles = {
  toget: {cursor: 'pointer'},
  complete: {color: 'grey', textDecoration: 'line-through'},
}

export default Toget;