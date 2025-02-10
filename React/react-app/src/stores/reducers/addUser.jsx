import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser } from '../actions/userSlice';

const UserComponent = () => {
    const [userName, setUserName] = useState('');
    const users = useSelector((state) => state.userInfo.users);
    const dispatch = useDispatch();
    const handleAddUser = () => {
        if (userName.trim()) {
            dispatch(addUser(userName));
            setUserName('');
        }
    };
    const handleDeleteUser = (index) => {
        dispatch(deleteUser(index));
    };

    return (
        <div>
            <h2>User List</h2>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter user name"
            />
            <button onClick={handleAddUser}>Add User</button>

            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user} <button onClick={() => handleDeleteUser(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserComponent;
