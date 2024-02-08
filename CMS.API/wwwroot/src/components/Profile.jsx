import React from 'react';

const Profile = ({ userData }) => {
    return (
        <div className="user-profile">
            <p>User Profile:</p>
            <p>Name:  {userData.firstName} {userData.lastName}</p>
            <p>Email: {userData.email}</p>
            <p>Role: {userData.role}</p>
        </div>
    );
};

export default Profile;