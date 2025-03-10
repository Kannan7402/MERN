import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
    const linkItems = [
        { to: '/parent', label: 'Parent'},
        { to: '/Child', label: 'Child' },
        { to: '/hooks', label: 'Hooks' },
        { to: '/switch', label: 'Switch' },
        { to: '/lists', label: 'List' },
        { to: '/forms', label: 'Forms' },
        { to: '/Condition', label: 'Condition' },
        { to: '/useRef', label: 'Useref' },
        { to: '/board', label: 'TicTac' },
        { to: '/useMemo', label: 'Usememo' },
        { to: '/lazy', label: 'Lazy' },
        { to: '/useReducer', label: 'Usereducer' },
        { to: '/customElement', label: 'Custom' },
        { to: './profiler', label: 'ProfilerDemo' },
        { to: '/portal', label: 'Portal' },
        { to: '/useContextDemo', label: 'UseContextDemo' },
        { to: '/filterAxios', label: 'Axios demo' },
        { to: '/axios', label: 'axios' },
        { to: './addUser', label: 'AddUser' },
        { to: './classComponent', label: 'class' },
        { to: './addPosts', label: 'Thunks' },
        { to: './addCounter', label: 'counter' }, 
        {to : '/mocklogin',label:'Mock Login'},
        { to: 'posts', label: 'Posts' },
        { to:'useEffect',label:'useeffect'} , 
        { to :'useCallback' , label :'UseCallback'} , 
        { to :'message' ,label:'Message'},
        { to :'webSocket' ,label:'Socket'}

    ];

    return (
        <>
            <ul>
                {linkItems.map((element, index) => (
                    <li key={index}>
                        <Link to={element.to}>{element.label}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Navigation;