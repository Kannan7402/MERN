import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const Linkitems = [
    { to: '/component', label: 'Component' },
    { to: '/form', label: 'Form' },
    { to: '/parent',label:'Parent'},
    { to: '/signUp',label:'SignUp'}
    
  ];

  return (
    <>
      <ul style={{display:'flex', flexDirection:'row', rowGap:10}}>
        {Linkitems.map((element, index) => (
          <li key={index} >
            <Link to={element.to}>{element.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navigation;
