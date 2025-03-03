import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const Linkitems = [
    { to: '/component', label: 'Component' },
    { to: '/form', label: 'Form' },
    { to: '/parent', label: 'Parent' },
    { to: '/signUp', label: 'SignUp' },
    { to: './useEffect', label: 'UseEffect' },
    { to: './classComponent', label: 'Component class' },
    { to: './switch', label: 'List' },
    { to: './stateUp', label: 'Lift' },
    { to: './post', label: 'Task' },
    { to: './login', label: 'Login' },
    { to: './LazyLoading', label: 'LazyComp' },
    { to: '/Dashboard', label: 'Dashboard' }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {Linkitems.map((element, index) => (
          <li className="navbar-item" key={index}>
            <Link to={element.to} className="navbar-link">{element.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
