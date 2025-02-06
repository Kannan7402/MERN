import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser } from '../actions/slice'; // Import actions

const UserComponent = () => {
    const [userName, setUserName] = useState('');
    const users = useSelector((state) => state.userInfo.users); // Accessing users from the store
    const dispatch = useDispatch(); // To dispatch actions

    const handleAddUser = () => {
        if (userName.trim()) {
            dispatch(addUser(userName)); // Dispatch addUser action with userName as payload
            setUserName(''); // Reset input after adding
        }
    };
    const handleDeleteUser = (index) => {
        dispatch(deleteUser(index)); // Dispatch deleteUser action with index as payload
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
