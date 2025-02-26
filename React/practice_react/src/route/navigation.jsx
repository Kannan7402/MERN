import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const Linkitems = [
    { to: '/component', label: 'Component' },
    { to: '/form', label: 'Form' },
    { to: '/parent',label:'Parent'},
    { to: '/signUp',label:'SignUp'},
    {to :'./useEffect',label:'UseEffect'},
    {to :'./classComponent',label:'Component class'},
    {to :'./switch',label:'List'},
    {to :'./stateUp',label:'Lift'}
  ];

  return (
    <>
      <ul style={{display:'flex',flexDirection:'column'}}>
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
