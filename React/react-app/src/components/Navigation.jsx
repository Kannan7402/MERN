import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
            const linkItems = [
            { to: '/parent', label: 'Parent' },
            { to: '/hooks', label: 'Counter' },
            { to: '/switch', label: 'Switch' },
            { to: '/lists', label: 'List' },
            { to: '/forms', label: 'Forms' },
            { to: '/Condition', label: 'Condition' },
            { to: '/UseRef', label: 'Useref' },
            { to: '/board', label: 'TicTac' },
            { to: '/useMemo', label: 'Usememo' },
            { to: '/lazy', label: 'Lazy' },
        ];
        return(
            <>
                <ul>
                {linkItems.map((element,index)=>(
                    <li key={index}>
                        <Link to={element.to}>{element.label}</Link>
                    </li>
                ))}
                </ul>
            </>
    );
}
export default Navigation;