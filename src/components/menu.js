import React from 'react';
import Link from 'gatsby-link'

const Menu = () => (
    <div style={{background: '#ccc', padding: '15px'}}>
      <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-evenly', marginBottom:'0'}}>
        <li><Link to='/ingredients'>Ingredients</Link></li>
      </ul>
    </div>
  )

export default Menu;
